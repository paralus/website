---
title: Kind
description: "Install Paralus on Kind quickstart guide."
slug: /quickstart/kind
---

Paralus can be installed on your local cluster using `Kind` to experience the product before taking it to production.

The quickstart guide can be followed to setup Paralus on a Kind cluster.

**Table Of Content:**

- [Kind](#kind)
  - [Installing and Configuring Kind](#installing-and-configuring-kind)
  - [Installing Paralus](#installing-paralus)
  - [Configuring etc/hosts](#configuring-etchosts)
  - [Resetting Default Password](#resetting-default-password)
  - [Accessing Paralus Dashboard](#accessing-paralus-dashboard)
  - [Importing Existing Cluster](#importing-existing-cluster)
    - [Configuring Network](#configuring-network)
      - [Getting Cluster ID and Hostname](#getting-cluster-id-and-hostname)
      - [Updating /etc/hosts](#updating-etchosts)
  - [Accessing Existing Cluster](#accessing-existing-cluster)

## Kind

The following section talks about installing Paralus in a Kind cluster. Kind is a tool used to run local Kubernetes clusters using Docker container nodes. Learn more about [Kind](https://kind.sigs.k8s.io/).

### Installing and Configuring Kind

If you don't already have Kind installed on your local system, you can do so by following the [Kind Quickstart Documentation](https://kind.sigs.k8s.io/docs/user/quick-start/). The default settings are good enough to get you started.

The next step is to **create a Kind cluster**. To do that you can create a copy of [this configuration file](https://github.com/paralus/helm-charts/blob/main/docs/kind.config.yaml) and use that to create a cluster.

```bash
kind create cluster --config cluster.yaml
```

Note down the IP address of the control plane by running the following command

```bash
docker container inspect kind-control-plane --format '{{ .NetworkSettings.Networks.kind.IPAddress }}'
```

```bash
172.20.0.2
```

### Installing Paralus

Add the [paralus helm repository](https://github.com/paralus/helm-charts)

```bash
helm repo add paralus https://paralus.github.io/helm-charts
helm repo update
```

Create a new [values.yaml](https://github.com/paralus/helm-charts/blob/main/examples/values.kind.yaml) file with the following changes:

- Switch kratos to development mode by setting `kratos.kratos.development` to `true`
- Enable postgresql and elasticsearch by setting `deploy.postgres.enable` and `deploy.elasticsearch.enable` to `true`
- [OPTIONAL] Change the host under domain.host to use a different hostname
- [OPTIONAL] Change the images under images to a custom image if you want to try with your custom images

Create a namespace

`kubectl create ns paralus`

Install Paralus

`helm install ztkarelease -f myvalues.yaml -n paralus paralus/ztka`

> Note: In case you get an error, run `helm dependency build` to build the dependencies.

You'll see the following output if the installation succeeds:

```bash
NAME: ztkarelease
LAST DEPLOYED: Wed Jun 15 09:05:49 2022
NAMESPACE: paralus
STATUS: deployed
REVISION: 1
NOTES:
1. Access the application URL by running these commands:
  Open http://console.paralus.local in browser.

You can view the recovery link for admin user by running the following command once all the pods are running:

kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'
```

> Note: It can take upto a few minutes before all the pods are running and you can access the dashboard. You can check the status using `watch kubectl get pods`

### Configuring etc/hosts

Since we are deploying Paralus on local cluster, we need to update the `/etc/hosts` file with the IP Address/Ingress Host name to access the dashboard.
In order to do that, edit the `/etc/hosts` file using your favourite editor and add the following line at the end of it along with the IP address obtained and save it.

```bash
172.20.0.2 console.paralus.local
```

*Refer to the value of `fqdn.domain` in your [values.yaml](https://github.com/paralus/helm-charts/blob/main/charts/ztka/values.yaml#L145) file to find the default host.*

Open your favorite web browser and navigate to `http://console.paralus.local`, you will be see the dashboard with the login screen

### Resetting Default Password

Paralus comes configured with default credentials that allow you to access the dashboard.

In order to get the `Password Reset URL`, copy the command displayed after helm install and execute it

```bash
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.paralus.local/self-service/recovery?flow=9ec13c6f-414e-4cb5-bf4c-def35973118f&token=ge6bi6zmyzUlQrHlYTOCDeItV82hT08Y
```

Access the URL in a browser, and provide a new password.

### Accessing Paralus Dashboard

In a new browser window/tab navigate to `http://console.paralus.local` and log in with the following credentials:

- username: `admin@paralus.local`
- password: `<The one you entered in the earlier section>`

You'll be taken to the projects page where you'll see a default project.

<img src="/img/docs/paralus-dashboard.png" alt="Paralus default project screen" height="70%" width="70%"/>

### Importing Existing Cluster

Everything in Paralus is grouped into [Projects](../usage/projects). Each project will have [clusters](../usage/clusters), [users](../usage/users) and [groups](../usage/groups) associated with it. Hence the first step it to create a new project.

Click on **New Project** to create a new project and then import a cluster in that project.

<img src="/img/docs/paralus-import-cluster-1.png" alt="Create New Cluster" height="70%" width="70%"/>

Click **Continue** and download the bootstrap yaml file by clicking **Import Bootstrap YAML**. This will download the YAML file that is required to connect your cluster with Paralus.

<img src="/img/docs/paralus-import-cluster-2.png" alt="Download Bootstrap YAML file" height="70%" width="70%"/>

#### Configuring Network

##### Getting Cluster ID and Hostname

Open the downloaded yaml file in a text editor and look for `clusterID`

```yaml
data:
  clusterID: 5dceca49-c6cd-4a2b-b65a-f193c4fa001f
  relays: '[{"token":"cakmpdvjd030q1q53p9g","addr":"console.paralus.local:80","endpoint":"*.core-connector.paralus.local:443","name":"paralus-core-relay-agent","templateToken":"cakl93fjd030q1q53p5g"}]'
```

With the `clusterID` identified, we need to update the hosts file. This becuase we are using hostname to route traffic.

```bash
5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
```

##### Updating /etc/hosts

Add two new lines in `/etc/hosts` file along with the IP address obtained

```bash
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
```

Your final `/etc/hosts` file should be something like the following

```bash
172.20.0.2 console.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
```

### Accessing Existing Cluster

With all the changes in place, it's time to apply the bootstrap yaml file that we download while [importing an existing cluster](#importing-an-existing-cluster)

```bash
kubectl apply -f mylocalcluster.yaml
```

Wait for the changes to take place. On the dashboard you will see that the cluster is imported successfully. It usually takes 3-5 minutes for the status to update.

> *You can also execute `kubectl get pods` to check the status.*

<img src="/img/docs/paralus-import-cluster-3.png" alt="Import Cluster Success" height="70%" width="70%"/>

Select your newly imported cluster and click on `kubectl` to access the prompt and interact with your cluster from the dashboard.

A `kubectl` console will open in the bottom half of the screen, enter your kubectl commands to interact with your cluster.

<img src="/img/docs/paralus-import-cluster-4.png" alt="Accessing imported cluster via kubectl" height="70%" width="70%"/>

Congratulations! You've successfully deployed Paralus and imported a local cluster.

Refer to our documentation to learn about various [feautres of Paralus](../usage/).
