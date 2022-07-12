---
slug: paralus-quickstart-gke
title: "Tutorial: How to set up Paralus on Google Kubernetes Engine (GKE)"
authors: [atul]
tags: [google cloud, gke, tutorial]
---

Setting up Paralus is quite simple irrespective of the infrastructure you're deploying it on. You've seen in the [previous blog post](/blog/paralus-quickstart-aks), where we showed how to deploy Paralus to Azure's Kubernetes Service (AKS)

In this blog post, we'll take you through the steps to setup Paralus on Google Kubernetes Engine (GKE) using a custom domain and import a local cluster into it. Let's get started!

<!--truncate-->

**Table Of Content:**

- [Pre Requisites](#pre-requisites)
- [Creating GKE Cluster](#creating-gke-cluster)
- [Installing Paralus](#installing-paralus)
- [Configuring DNS Settings](#configuring-dns-settings)
  - [Accessing The Dashboard](#accessing-the-dashboard)
  - [Importing Existing Cluster](#importing-existing-cluster)

## Pre Requisites

To setup Paralus on Google Kubernetes Engine (GKE) there are a few prerequisites:

- A Google Cloud account - _you can [register for a Free Google Cloud account](https://console.cloud.google.com/freetrial) if you don't have one_
- A Domain Name - _with permission to manage DNS settings._
- Helm

We'll start with setting up a cluster on GKE, followed by deploying Paralus to it using helm charts. Once the installation is done, we'll configure the DNS settings for the domain for Paralus to work. After that we'll login to the Paralus dashboard and import a Kubernetes cluster that is running on a local laptop.

## Creating GKE Cluster

GKE provides you with options to create various types of clusters ranging from zonal, regional, autopilot, private and alpha cluster. However, we create a simple standard Kubernetes cluster using the cloud portal. For this tutorial you can also follow the [GKE quickstart guide](https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster) to setup a cluster.

> Note: GKE also provides you with multiple VM instances that you can use as your node machine. You can refer to the [full list of GKE machine family](https://cloud.google.com/compute/docs/machine-types) for more details. By default it will create a cluster with 3 node machines with a total of 6 vCPUs and 12 GB RAM.

After the cluster is created, start the cluster and connect to it. You can connect to your cluster using the cloud shell provided.

## Installing Paralus

1. Add helm repo

   `helm repo add paralus https://paralus.github.io/helm-charts`

2. Install Paralus

  ```bash
   helm install myrelease paralus/ztka \
    -f https://raw.githubusercontent.com/paralus/helm-charts/main/examples/values.dev-generic.yaml \
    --set fqdn.domain="chartexample.com" \
    -n paralus \
    --create-namespace
  ```

  >**Note:** If you're installing this in a **production environment**, please use [values.yaml](https://github.com/paralus/helm-charts/blob/main/charts/ztka/values.yaml) and configure the values mentioned [here](https://github.com/paralus/helm-charts/tree/main/charts/ztka#values) as required.

  ```bash
   NAME: myrelease
   LAST DEPLOYED: Fri Jul 01 17:13:48 2022
   NAMESPACE: paralus
   STATUS: deployed
   REVISION: 1
   NOTES:
   1. Access the application URL by running these commands:
     Get load balancer address via:
     kubectl get service envoy --namespace paralus -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'

     Add DNS records of following domains such that it resolves to above address:
     - console.chartexample.com
     - *.core-connector.chartexample.com
     - *.user.chartexample.com
     Open http://console.chartexample.com in browser.

   You can view the recovery link for admin user by running the following command once all the pods are running:

   kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'
  ```

> Note: It can take upto a few minutes before all the pods are running and you can access the dashboard. You can check the status using `watch kubectl get pods`

## Configuring DNS Settings

Once the installation is complete, you need to first get the external IP address provided by GKE loadbalancer. You can do so by executing the following command:

```bash
kubectl get svc myrelease-contour-envoy -n paralus

NAME                            TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                         AGE
myrelease-contour-envoy         LoadBalancer   10.0.33.6      34.121.64.88   80:30193/TCP,443:30873/TCP      3m13s   
```

Note down the `EXTERNAL-IP` address for the `<releasename>-contour-envoy` service.

Navigate to your domain's DNS setting page. _The steps for changing DNS settings will vary based on your domain name provider._

While you are on your DNS Setting page, for the selected domain name, you need to add three A records. These will be based on the subdomains provided in the notes section post installation.

| Type | Address | Resolves To | TTL |
|---|---|---|---|
| A | console.chartexample.com | 34.121.64.88 | 1 Hour |
| A | *.core-connector.chartexample.com | 34.121.64.88 | 1 Hour |
| A | *.user.chartexample.com | 34.121.64.88 | 1 Hour |

### Accessing The Dashboard

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user. To do so, execute the command that you get after installing Paralus.

```bash
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.chartexample.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j

```

> **Note:** The password recovery link generated while deploying Paralus is valid only for `10 minutes`. For any reason if the link is expired, refer to our [troubleshooting guide](../docs/references/troubleshooting) to re-generate the password reset link.

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

Congratulations! You've successfully deployed Paralus on Google Kubernetes Engine (GKE) and imported a local cluster.

Refer to our documentation to learn about various [feautres of Paralus](/docs/usage/).
