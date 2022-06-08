---
title: Kind
description: "Setup Paralus on Kind with this quick start guide."
slug: /quickstart/kind
---

Welcome to this quickstart guide to install Paralus.

Paralus can be installed on your local cluster using `Kind` to experience the product before taking it to production.

The quickstart guide can be followed to setup Paralus on a Kind cluster.

**Table Of Content:**

- [Kind](#kind)
  - [Installing and Configuring Kind](#installing-and-configuring-kind)
  - [Installing Paralus](#installing-paralus)
  - [Configuring etc/hosts](#configuring-etchosts)
  - [Resetting Default Password](#resetting-default-password)
  - [Accessing Paralus Web UI](#accessing-paralus-web-ui)
  - [Importing Existing Cluster](#importing-existing-cluster)
    - [Configuring Network](#configuring-network)
      - [Getting Cluster ID and Hostname](#getting-cluster-id-and-hostname)
      - [Updating /etc/hosts](#updating-etchosts)
  - [Accessing Existing Cluster](#accessing-existing-cluster)

## Kind

The following section talks about installing Paralus in a Kind cluster. Kind is a tool used to run local Kubernetes clusters using Docker containers nodes. Learn more about [Kind](https://kind.sigs.k8s.io/).

### Installing and Configuring Kind

If you don't already have Kind installed on your local system, you can do so by following the [Kind Quickstart Documentation](https://kind.sigs.k8s.io/docs/user/quick-start/). The default settings are good enough to get you started.

The next step is to **create a Kind cluster**. To do that you can create the following yaml file:

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    kubeadmConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
```

```bash
kind create cluster --config cluster.yaml
```

Note down the IP address on the control plane by running the following command

```bash
docker container inspect kind-control-plane --format '{{ .NetworkSettings.Networks.kind.IPAddress }}'
172.20.0.2
```

### Installing Paralus

Clone the [Helm-Chart](https://github.com/paralus/helm-charts) repository.

Navigate to the downloaded folder and update the following entries in `values.yaml` present under `/charts/ztka/`

- Switch kratos to development mode by setting `kratos.kratos.development` to `true`
- Enable postgresql and elasticsearch by setting `deploy.postgres.enable` and `deploy.elasticsearch.enable` to `true`
- Disable ingress by setting `ingress.enabled` to `false`
- Enable contour by setting `contour.enabled` to `true`
- [OPTIONAL] Change the host under ingress.host to use a different hostname
- [OPTIONAL] Change the images under images to a custom image if you want to try with your custom images

Being in the `ztka` directory, run the following command to install Paralus

`helm upgrade --install myrelease .`

> Note: In case you get an error, run `helm dependency build` to build the dependencies.

You'll see the following output if the installation succeeds

```bash
NAME: myrelease
LAST DEPLOYED: Thu Apr 28 11:19:28 2022
NAMESPACE: default
STATUS: deployed
REVISION: 1
NOTES:
1. Access the application URL by running these commands:
  Open http://console.paralus.local in browser.

You can view the recovery link for admin user by running the following command once all the pods are running:

kubectl logs -f --namespace default $(kubectl get pods --namespace default -l app.kubernetes.io/name='core' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'
```

> Note: It can take upto a few minutes before all the pods are running and you can access the Web UI. You can check the status using `watch kubectl get pods`

### Configuring etc/hosts

Since we are deploying Paralus on local cluster, we need to update the `/etc/hosts` file with the IP Address/Ingress Host name to access the Web UI.
In order to do that, edit the `/etc/hosts` file using your favourite editor and add the following line at the end of it and save it

```bash
172.20.0.2 console.paralus.local
```

*When running locally use paralus.local as your host. This is what will be set by default for the value of ingress.host in your [values.yaml](https://github.com/paralus/helm-charts/blob/main/charts/ztka/values.yaml) file*

Open your favorite web browser and navigate to `http://console.paralus.local`, you will be see the web UI with the login screen

### Resetting Default Password

Paralus comes configured with default credentials that allow you to access the web UI.

In order to get the `Password Reset URL`, copy the command displayed after helm install and execute it

```bash
kubectl logs -f --namespace default $(kubectl get pods --namespace default -l app.kubernetes.io/name='core' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://console.paralus.local/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j

```

Access the URL in a browser, and provide a new password.

<img src="/img/docs/oss-password-reset.png" alt="Paralus password reset" height="75%" width="75%"/>

### Accessing Paralus Web UI

In a new browser window/tab navigate to `http://console.paralus.local` and log in with the following credentials:

- username: `foo@example.com`
- password: `<The one you entered in the earlier section>`

You'll be taken to the projects page where you'll see a default project.

<img src="/img/docs/oss-default.png" alt="Paralus default project screen" height="75%" width="75%"/>

### Importing Existing Cluster

Everything in Paralus is grouped into `Projects`. Each project will have [clusters](../usage/clusters), [users](../usage/users) and [groups](../usage/groups) associted with it. Hence the first step it to create a new Project.

Click on `New Project` to create a new project

<img src="/img/docs/cluster-setup1.png" alt="New Project Creation" height="75%" width="75%"/>

Click on `clusters` to import a new cluster

<img src="/img/docs/import-cluster.png" alt="Create New Cluster" height="75%" width="75%"/>

> Note: If Clicking cluster immediately after creating a project doesn't work, please refresh the page.

Click on `New Cluster`, select `Import Existing Kubernetes Cluster` & click Continue.

<img src="/img/docs/import-cluster-1.png" alt="Import Existing Kubernetes Cluster" height="75%" width="75%"/>

Click `Continue` and download the bootstrap yaml file by clicking `Import Bootstrap YAML`. This will download the YAML file required to connect your cluster with Paralus.

<img src="/img/docs/importcluster-3.png" alt="Download Bootstrap YAML file" height="75%" width="75%"/>

#### Configuring Network

##### Getting Cluster ID and Hostname

Open the download yaml file in a text editor and look for `clusterID`

```yaml
data:
  clusterID: 5dceca49-c6cd-4a2b-b65a-f193c4fa001f
  relays: '[{"token":"c9l5g6c2ntuqhae3pt5g","addr":"console.paralus.local:80","endpoint":"*.core-connector.paralus.local:443","name":"paralus-core-relay-agent","templateToken":"c9l2omc2ntuqhae3pt0g"}]'
```

With the `clusterID` identified, your new hosts would be as follows

```bash
5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
```

##### Updating /etc/hosts

Add two new lines in `/etc/hosts` file

```bash
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
```

Your final `/etc/hosts` file should be something like the following

```bash

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.20.0.2 console.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.user.paralus.local
172.20.0.2 5dceca49-c6cd-4a2b-b65a-f193c4fa001f.core-connector.paralus.local
```

### Accessing Existing Cluster

With all the changes in place, it's time to apply the bootstarp yaml file that we download while [importing an existing cluster](#importing-an-existing-cluster)

```bash
kubectl apply -f mylocalcluster.yaml
```

Wait for the changes to take place. On the portal you will see that the cluster is imported successfully. It usually takes 3-5 minutes for the status to update.

<img src="/img/docs/localcluster-setup.png" alt="Import Cluster Success" height="75%" width="75%"/>

Select your newly imported cluster and click on `kubectl` to access the prompt and interact with your cluster from the UI.

A `kubectl` console will open in the bottom half of the screen, enter your kubectl commands to interact with your cluster.

<img src="/img/docs/importcluster-kubectl.png" alt="Accessing imported cluster via kubectl" height="75%" width="75%"/>

> Note: If you get Connection Error repeatedly, delete the `prompt` pod in your cluster.

Congratulations! You've successfully deployed Paralus and imported a local cluster.

Refer to our documentation to learn about various [features of Paralus](../usage/).
