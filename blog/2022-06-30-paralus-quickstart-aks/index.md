---
slug: paralus-quickstart-aks
title: "Tutorial: How to set up Paralus on Azure Kubernetes Service (AKS)"
authors: [atul]
tags: [azure, aks, tutorial]
---

The [previous blog post](/blog/eks-quickstart), was about deploying Paralus to Amazon's Elastic Kubernetes Service (EKS).

In this blog post, we'll take you through the steps to setup an Azure Kubernetes Services (AKS) cluster on a custom domain and deploy Paralus on it.

<!--truncate-->

**Table Of Content:**

- [Pre Requisites](#pre-requisites)
- [Creating AKS Cluster](#creating-aks-cluster)
- [Installing Paralus](#installing-paralus)
- [Configuring DNS Settings](#configuring-dns-settings)
  - [Accessing The Dashboard](#accessing-the-dashboard)
  - [Importing Existing Cluster](#importing-existing-cluster)

## Pre Requisites

To setup Paralus on Azure Kubernetes Service (AKS) there are a few prerequisites:

- An Azure Account - _you can [register for a Free Azure account](https://azure.microsoft.com/en-in/free/) if you don't have one_
- A Domain Name - _with permission to manage DNS settings._
- Helm

The logical steps would start with setting up a Kubernetes cluster on AKS. Deploying Paralus via helm charts followed by configuring DNS for your domain to work with Paralus. Lastly, logging into Paralus and importing a Kubernetes cluster.

## Creating AKS Cluster

One of the good things when it comes to creating an AKS cluster is the various options it gives you to create a cluster:

- [Using the Azure CLI](https://docs.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli)
- [Using the Azure PowerShell](https://docs.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-powershell)
- [Using the Azure Portal](https://docs.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-powershell)
- [Using the ARM template](https://docs.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-rm-template)

You are free to choose any option that you want, we used the Azure Portal to create one.

> Note: Choose a virtual machine with atleast 4 vCPUs and 16 GB of RAM. Refer to the list of [Azure VMs](https://azure.microsoft.com/en-in/pricing/details/virtual-machines/linux/).

After the cluster is created, start the cluster and connect to it. If you've created a cluster using the Azure portal, you can use the Azure Cloud Shell to connect to the cluster.

## Installing Paralus

1. Add helm repo

   `helm repo add paralus https://paralus.github.io/helm-charts`

2. Create `values.aks.yaml`

   ```yaml
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
   ```

   > Note: When deploying this in production, set `kratos.development: false`

3. Create `values.domain.yaml`

   ```yaml
   fqdn:
     domain: "chartexample.com"
     hostname: "console-aks-oss"
     coreConnectorSubdomain: "*.core-connector.aks-oss"
     userSubdomain: "*.user.aks-oss"
   ```

4. Install Paralus

   ```bash
   helm install myrelease paralus/ztka --devel -f values.domain.yaml -f values.aks.yaml -n paralus --create-namespace

   NAME: myrelease
   LAST DEPLOYED: Wed Jun 29 10:13:48 2022
   NAMESPACE: paralus
   STATUS: deployed
   REVISION: 1
   NOTES:
   1. Access the application URL by running these commands:
     Get load balancer address via:
     kubectl get service envoy --namespace paralus -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'

     Add DNS records of following domains such that it resolves to above address:
     - console-aks-oss.chartexample.com
     - *.core-connector.aks-oss.chartexample.com
     - *.user.aks-oss.chartexample.com
     Open http://console-aks-oss.chartexample.com in browser.

   You can view the recovery link for admin user by running the following command once all the pods are running:

   kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize-paralus | grep 'Org Admin signup URL:'
   ```

   > Note: It can take upto a few minutes before all the pods are running and you can access the dashboard. You can check the status using `watch kubectl get pods`

## Configuring DNS Settings

Once the installation is complete, you need to first get the external IP address provided by Azure loadbalancer. You can do so by executing the following command:

```bash
kubectl get svc myrelease-contour-envoy -n paralus

NAME                            TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                         AGE
myrelease-contour-envoy         LoadBalancer   10.0.33.6      13.71.51.105   80:30193/TCP,443:30873/TCP      3m13s   
```

Note down the `EXTERNAL-IP` address for the `<releasename>-contour-envoy` service.

Navigate to your domain's DNS setting page. _The steps for changing DNS settings will vary based on your domain name provider._

While you are on your DNS Setting page, for the selected domain name, you need to add three A records. These will be based on the subdomains provided in the notes section post installation.

| Type | Address | Resolves To | TTL |
|---|---|---|---|
| A | console-aks-oss.chartexample.com | 13.71.51.105 | 1 Hour |
| A | *.core-connector.aks-oss.chartexample.com | 13.71.51.105 | 1 Hour |
| A | *.user.aks-oss.chartexample.com | 13.71.51.105 | 1 Hour |

### Accessing The Dashboard

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user. To do so, execute the command that you get after installing Paralus.

```bash
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.chartexample.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j

```

Access the URL in a browser, and provide a new password. In a new browser window/tab navigate to `http://console.chartexample.com` and log in with the following credentials:

- username: `admin@paralus.local` - _or the one you specified in `values.yaml`_
- password: `<The one you entered above>`

You'll be taken to the projects page where you'll see a default project.

<img src="/img/docs/paralus-dashboard.png" alt="Paralus default project screen" height="70%" width="70%"/>

### Importing Existing Cluster

Everything in Paralus is grouped into [Projects](/docs/usage/projects). Each project will have [clusters](/docs/usage/clusters), [users](/docs/usage/users) and [groups](/docs/usage/groups) associated with it. Hence the first step it to create a new project.

Click on **New Project** to create a new project and then import a cluster in that project. The cluster we are importing is a minikube cluster hosted on my laptop.

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

Congratulations! You've successfully deployed Paralus on Azure Kubernetes Service (AKS) and imported a local cluster.

Refer to our documentation to learn about various [feautres of Paralus](/docs/usage/).
