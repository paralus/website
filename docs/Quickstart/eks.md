---
title: Elastic Kubernetes Service (EKS) on AWS  
description: "Install Paralus on Amazon Elastic Kubernetes Service EKS quickstart guide."
sidebar_position: 3
sidebar_label: "EKS"
slug: /quickstart/eks
---

Welcome to this quickstart guide to install Paralus on Amazon Elastic Kubernetes Service (EKS)

With the help of this guide you'll be able to setup an Amazon Elastic Kubernetes Service (EKS) cluster on a custom domain and deploy Paralus on it.

**Table Of Content:**

- [Pre Requisites](#pre-requisites)
- [Configuring A User on IAM](#configuring-a-user-on-iam)
- [Creating EKS Cluster](#creating-eks-cluster)
- [Installing Paralus](#installing-paralus)
- [Configuring DNS Settings](#configuring-dns-settings)
  - [Accessing The Dashboard](#accessing-the-dashboard)
  - [Importing Existing Cluster](#importing-existing-cluster)

## Pre Requisites

To setup Paralus on Amazon Elastic Kubernetes Service (EKS) there are a few prerequisites:

- An AWS Account - _you can [register for AWS account](https://aws.amazon.com/resources/create-account/) if you don't have one_
- A Domain Name - _with permission to manage DNS settings._
- Latest version of AWS CLI - _[Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)_
- Helm

## Configuring A User on IAM

Amazon recommends using a different user with a designated role instead of using the root user. Hence before creating an EKS cluster, you need to configure a user in AWS. **This is an important step as without this, you might not be able to connect to your cluster and perform tasks**.

Refer to the guide to [create an IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html).

Once you have created the user, keep the `Access Key Id` and `Secret Access Key`

In the console, you need to configure your account with aws cli, execute `aws configure` command and provide the details

```bash
aws configure
AWS Access Key ID [none]: <Your Access Key Id>
AWS Secret Access Key [none]: <Your Secret Access Key>
Default region name [None]: <AWS region>
Default output format [None]:

```

Validate the configuration by executing the following command, you should see the output with the account and the Arn.

```bash
aws sts get-caller-identity

{
    "UserId": "ABCDEFG6HIJKLMNOPQ",
    "Account": "1234566788900",
    "Arn": "arn:aws:iam::1234566788900:user/user.lastname@email.io"
}
```

## Creating EKS Cluster

There are two ways to create an EKS cluster:

- From AWS Management Console - _refer to this document on [Creating an Amazon EKS Cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)._
- Using eksctl utility - _refer to this document on [Getting Started With Amazon EKS - eksctl](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)_ - **this document uses eksctl**

After the cluster is created, you need to update the kubeconfig file. You can do so by using the following command by providing the cluster name and the location.

```bash
aws eks update-kubeconfig --name ferocious-gopher-1653447065
Added new context arn:aws:eks:us-west-2:645114859692:cluster/ferocious-gopher-1653447065 to /home/user/.kube/config
```

## Installing Paralus

Clone the [paralus helm repository](https://github.com/paralus/helm-charts)

1. Add helm repo

    `helm repo add paralus https://paralus.github.io/helm-charts`

2. Create `values.eks.yaml`

    ```yaml
    ingress:
      enabled: false

    deploy:
      elasticsearch:
        enable: true
      postgresql:
        enable: true
      contour:
        enable: true

    kratos:
      kratos:
        development: true

    contour:
      envoy:
        service:
          annotations:
            service.beta.kubernetes.io/aws-load-balancer-type: nlb
    ```

    > Note: When deploying this in production, set `kratos.development: false`

3. Create `values.domain.yaml`

    ```yaml
    ingress:
        host: "chartexample.com"
        consoleSubdomain: "console-eks-oss"
        coreConnectorSubdomain: "*.core-connector.eks-oss"
        userSubdomain: "*.user.eks-oss"
    ```

4. Install Paralus

    ```bash
    helm install myrelease paralus/paralus --devel --version=0.0.1-alpha.1 -f values.domain.yaml -f values.eks.yaml -n paralus --create-namespace

    NAME: myrelease
    LAST DEPLOYED: Wed May 25 10:13:48 2022
    NAMESPACE: paralus
    STATUS: deployed
    REVISION: 1
    NOTES:
    1. Access the application URL by running these commands:
      Get load balancer address via:
      kubectl get service envoy --namespace paralus -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'

      Add DNS records of following domains such that it resolves to above address:
      - console-eks-oss.chartexample.com
      - *.core-connector.eks-oss.chartexample.com
      - *.user.eks-oss.chartexample.com
      Open http://console-eks-oss.chartexample.com in browser.

    You can view the recovery link for admin user by running the following command once all the pods are running:

    kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize-paralus | grep 'Org Admin signup URL:'
    ```

    > Note: It can take upto a few minutes before all the pods are running and you can access the Web UI. You can check the status using `watch kubectl get pods`

## Configuring DNS Settings

Once the installation is complete, you need to first get the external IP address provided by AWS. You can do so by executing the following command:

```bash
kubectl get service -n paralus

NAME                            TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                         AGE
elasticsearch-master            ClusterIP      10.100.67.190    <none>                                                                          9200/TCP,9300/TCP               10m
elasticsearch-master-headless   ClusterIP      None             <none>                                                                          9200/TCP,9300/TCP               10m
myrelease-contour               ClusterIP      10.100.219.236   <none>                                                                          8001/TCP                        10m
myrelease-contour-envoy         LoadBalancer   10.100.101.216   a814da526d40d4661bf9f04d66ca53b5-65bfb655b5662d24.elb.us-west-2.amazonaws.com   80:31810/TCP,443:30292/TCP      10m
myrelease-kratos-admin          ClusterIP      10.100.196.205   <none>                                                                          80/TCP                          10m
myrelease-kratos-courier        ClusterIP      None             <none>                                                                          80/TCP                          10m
myrelease-kratos-public         ClusterIP      10.100.54.172    <none>                                                                          80/TCP                          10m
myrelease-postgresql            ClusterIP      10.100.56.9      <none>                                                                          5432/TCP                        10m
myrelease-postgresql-hl         ClusterIP      None             <none>                                                                          5432/TCP                        10m
prompt                          ClusterIP      10.100.207.42    <none>                                                                          7009/TCP                        10m
paralus                     ClusterIP      10.100.174.106   <none>                                                                          11000/TCP,10000/TCP,10001/TCP   10m
dashboard              ClusterIP      10.100.58.152    <none>                                                                          80/TCP                          10m
relay-server                    ClusterIP      10.100.114.237   <none>                                                                          443/TCP                         10m
```

Navigate to your domain's DNS setting page. _The steps for changing DNS settings will vary based on your domain name provider._

While you are on your DNS Setting page, for the selected domain name, you need to add three CNAME records. These will be based on the subdomains provided in the notes section post installation.

<img src="/img/docs/customdomain-dnssettings.png" alt="Custom Domain DNS Settings" height="70%" width="70%"/>

### Accessing The Dashboard

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user. To do so, execute the command that you get after installing Paralus.

```bash
 kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize-paralus | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.chartexample.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j

```

Access the URL in a browser, and provide a new password. In a new browser window/tab navigate to `http://console.chartexample.com` and log in with the following credentials:

- username: `foo@example.com`
- password: `<The one you entered above>`

You'll be taken to the projects page where you'll see a default project.

<img src="/img/docs/paralus-dashboard.png" alt="Paralus default project screen" height="70%" width="70%"/>

### Importing Existing Cluster

Everything in Paralus is grouped into [Projects](../usage/projects). Each project will have [clusters](../usage/clusters), [users](../usage/users) and [groups](../usage/groups) associated with it. Hence the first step it to create a new project.

Click on **New Project** to create a new project and then import a cluster in that project.

<img src="/img/docs/paralus-import-cluster-1.png" alt="Create New Cluster" height="70%" width="70%"/>

Click **Continue** and download the bootstrap yaml file by clicking **Import Bootstrap YAML**. This will download the YAML file that is required to connect your cluster with Paralus.

<img src="/img/docs/paralus-import-cluster-2.png" alt="Download Bootstrap YAML file" height="70%" width="70%"/>

Apply the bootstrap configuration yaml file

```bash
kubectl apply -f mylocalcluster.yaml
```

Wait for the changes to take place. On the dashboard you will see that the cluster is imported successfully. It usually takes 3-5 minutes for the status to update.

<img src="/img/docs/paralus-import-cluster-3.png" alt="Import Cluster Success" height="70%" width="70%"/>

Select your newly imported cluster and click on `kubectl` to access the prompt and interact with your cluster from the dashboard.

A `kubectl` console will open in the bottom half of the screen, enter your kubectl commands to interact with your cluster.

<img src="/img/docs/paralus-import-cluster-4.png" alt="Accessing imported cluster via kubectl" height="70%" width="70%"/>

Congratulations! You've successfully deployed Paralus on EKS and imported a local cluster.

Refer to our documentation to learn about various [feautres of Paralus](../usage/).
