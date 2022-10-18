---
slug: launching-paralus-1-click-app-digitalocean-marketplace
title: "Launching Paralus 1-Click App on DigitalOcean Marketplace"
authors: [atul]
tags: [digital ocean, tutorial]
image: /img/docs/Launch-blogpost-image-v1.png
---


It’s a great day for all of us in the Paralus community as Paralus is now listed as a [1-click app on the DigitalOcean marketplace](https://marketplace.digitalocean.com/apps/paralus). You’ve seen in the past how easy it is to install Paralus on various environments, right from public cloud platforms like Amazon [EKS](https://www.paralus.io/blog/eks-quickstart), Microsoft [AKS](https://www.paralus.io/blog/paralus-quickstart-aks), [GKE](https://www.paralus.io/blog/paralus-quickstart-gke) to your own laptop using [Micro K8s](https://www.paralus.io/blog/paralus-quickstart-microk8s) and [Kind](https://www.paralus.io/blog/kind-quickstart).

However, with the launch of Paralus 1-click app on DigitalOcean marketplace, it’s even easier for you to try Paralus. In fact, **we recommend using this 1-click offering to try Paralus** quickly. So how does it work? Read on to learn more.

<!--truncate-->

<img src="/img/docs/Launch-blogpost-image-v1.png" alt="Launching Paralus 1-Click App on DigitalOcean Marketplace" height="75%" width="75%"/>

## Paralus 1-Click App on DigitalOcean marketplace

Navigate to the [DigitalOcean marketplace listing for Paralus](https://marketplace.digitalocean.com/apps/paralus). Click on the install button to install Paralus on a Kubernetes cluster.

<img src="/img/docs/paralus-do-1-click-listing.png" alt="Paralus 1-Click App Listing" height="75%" width="75%"/>

On the next screen, you’ll be asked to configure a Kubernetes cluster. Choose a location, provide a name for the cluster and create a cluster. Paralus will be installed into this cluster.

<img src="/img/docs/paralus-do-1-click-cluster.png" alt="Paralus 1-Click App Cluster Setup" height="75%" width="75%"/>

Once the installation is complete, Paralus will be listed under the Marketplace tab along with the version number. At this point, **Paralus is installed as a 1-click app on a DigitalOcean Kubernetes cluster.**

<img src="/img/docs/paralus-do-1-click-install-success.png" alt="Paralus 1-Click App Installation Success" height="75%" width="75%"/>

However, there are a few minor configurations that need to be done before accessing the dashboard.

## Configuring Paralus For First Run

The first step is to configure connection to the DigitalOcean cluster where Paralus is installed. The easiest way to do this is using their `doctl` utility. You can follow the steps mentioned in our DigitalOcean deployment blog post.

After you have established a connection with the cluster, follow the steps mentioned below:

Run `kubectl get pods -n paralus` and ensure that all the pods are in running state.

### 1. Add A Domain Name

Since Paralus runs on domain based routing, it requires a domain name to be configured to use it. Run the following command and provide a domain name to be configured to work with Paralus. _Note: Paralus will not work without a domain name._

```sh
helm upgrade paralus paralus/ztka -n paralus --values https://raw.githubusercontent.com/paralus/helm-charts/main/examples/values.dev-generic.yaml --set fqdn.domain="yourdomain.com"
```

### 2. Configuring DNS Records

After you’ve configured a domain name, you need to add/update DNS records to be able to access the Paralus dashboard. Use the following command to get the `External-IP` to access Paralus.

```sh
kubectl get svc paralus-contour-envoy -n paralus

NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
paralus-contour-envoy   LoadBalancer   10.245.58.69   138.68.122.180   80:32722/TCP,443:32656/TCP   2m32s

```

Navigate to your domain name's DNS configuration page and create three CNAME records with the IP address of the load balancer you get in the above step.

| Type | Address | Resolves To | TTL |
|---|---|---|---|
| A | console.yourdomain.com | 138.68.122.180 | 1 Hour |
| A | *.core-connector.yourdomain.com | 138.68.122.180 | 1 Hour |
| A | *.user.yourdomain.com | 138.68.122.180 | 1 Hour |

### 3. Reset Default Password

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user.

To do so, execute the following command:

```sh
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  [http://console.yourdomain.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j](http://console.yourdomain.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j)
```

> Note: The password reset URL is valid only for 10 minutes. In case you are unable to get the link, refer to our [troubleshooting guide](https://www.paralus.io/docs/references/troubleshooting#password-reset-link-expired) to regenerate the password reset URL.

Access the URL in a browser, and provide a new password.

### 4. Access Paralus Dashboard

In a new browser window/tab navigate to [http://console.yourdomain.com](http://console.yourdomain.com) and log in with the following credentials:

* username: admin@paralus.local - _or the one you specified in values.yml_
* Password: _the password you provided in the earlier step_

You'll be taken to the default project page.

<img src="/img/docs/paralus-dashboard.png" alt="Paralus Dashboard" height="75%" width="75%"/>

With this, you’ve successfully installed Paralus. Refer to [Paralus documentation](https://www.paralus.io/docs/) and the [blog](https://www.paralus.io/blog) to know more about what you can do with Paralus.

## Try Paralus 1-Click App on DigitalOcean Marketplace

With the addition of Paralus to the DigitalOcean marketplace as a 1-click app offering, it becomes super simple for anyone to quickly spin up a cluster with Paralus configured on it. If you’re new to Paralus and are looking for a place to get started and try Paralus, head to the DigitalOcean marketplace and get started.

_PS: Trying out Paralus was never so easy!_
