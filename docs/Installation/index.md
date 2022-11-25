---
title: Installing Paralus Using Helm
description: "Quickly install Paralus using HELM charts"
sidebar_position: 2
sidebar_label: "Installation"
---

Installing Paralus via Helm charts is the preferred way. To successfully install and run Paralus in your environment, following components need to be present:

- Kubernetes Cluster
- PostgreSQL
- Domain Name
- Elasticsearch [Optional]
- SMTP Server [Optional]
- HTTPS [Optional]

If you are installing Paralus for the first time and don't have any of these components, you can [skip to installation](#installation) section as Paralus will install and configure all these components for you.

If you already have these set up in your environment, you will have to configure Paralus to work with them. To know more about the configuration changes, proceed to the [prerequisites](#prerequisites) section.

Paralus runs on most of the Kubernetes platforms including MicroK8s, Kind, Minikube, AKS, EKS & GKE. Refer to our [tutorial](/docs/quickstart) section to understand how to setup Paralus of different platforms.

> If you want to test out Paralus first on a local setup first, we suggest you to read our [Kind Quickstart](/blog/kind-quickstart) guide.

## Prerequisites

### Kubernetes & Helm

You need to have Helm CLI installed, a Kubernetes cluster and kubeconfig configured to access the cluster.

- Kubernetes 1.18+
- Helm 3.0.0+

### PostgreSQL

You need a PostgreSQL database instance that is accessible from the cluster on which you are deploying Paralus. Please keep the following details of your PostgreSQL setup handy:

- Database address _(eg: my-pgsql-host:5432)_
- Database username _(eg: user)_
- Database password _(eg: pa$$word)_
- Database name _(eg: dbname)_

### Elasticsearch - _Optional_

An Elasticsearch instance that is accessible from a cluster on which you are deploying Paralus.

Keep the elasticsearch address handy. For example, `my-es-host:9200`

### SMTP - _Optional_

Optionally an SMTP server can also be configured. This will allow Paralus to send out password recovery mails to the users. Without SMTP, the admin will have to manually share it with the users.

An SMTP connection URI to connect to SMTP server. For example, `smtps://foo:bar@my-mailserver:1234/`

### HTTPS - _Optional_

We also advise users to enable HTTPS while using Paralus as it is more secure. In order to use HTTPS, there are three things you need to do:

1. Generate a SSL certificate to be used with the domain name. You can use [OpenSSL](https://github.com/openssl/openssl), [Let's Encrypt](https://github.com/letsencrypt), [cert-manager](https://github.com/cert-manager/cert-manager) or similar tools to generate SSL certificates. You can also use an existing one that you might already have.

2. Create a secret to store the generated SSL. Kubernetes provides a built in secrect type `kubernetes.io/tls` for storing certificates. You can follow [this guide](https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets) to store the certificate as a secret.

> _If you've generated a certificate using cert-manager, the secret will be created for you._

3. Refer to the secret in [values.yaml](https://github.com/paralus/helm-charts/blob/main/charts/ztka/values.yaml#L231-L237) file and provide the name of the secret created as shown below:

```yaml
contour:
  enable: true
  tls:
    secretName: paralus-tls # Name of your secret
```

## Installation

1. Installing the chart

   Add repository or Update helm repo if already added:

   ```bash
   helm repo add paralus https://paralus.github.io/helm-charts
   helm repo update
   ```

2. Create a separate namespace.

   ```bash
   kubectl create ns paralus
   ```

3. Create a file `myvalue.yaml` with your values as mentioned in the prerequisites.

   > You can skip this step if you're doing a fresh install

   ```yaml
    paralus:
        initialize:
            partner: "example"
            partnerDesc: "Partner description"
            partnerHost: "example.com"
            org: "exampleorg"
            orgDesc: "Org description"
            adminEmail: "foo@example.com"
            adminFirstName: "Foo"
            adminLastName: "Bar"
    deploy:
        kratos:
            smtpConnectionURI: "smtps://foo:bar@my-mailserver:1234/"
        elasticsearch:
            address: "my-es-host:9200”
        postgresql:
            address: "my-pgsql-host:5432"
            username: "user"
            password: "pa$$word"
            database: "dbname"
    fqdn:
        domain: my-host.com
   ```

    > Note: Since v0.1.9, elasticsearch is an optional component. By default, Paralus will install with Postgres. If you're doing a fresh install, below are the values.yaml file that you must pass during installation:

    - Postgres (_default_): https://raw.githubusercontent.com/paralus/helm-charts/main/examples/values.dev-generic.yaml
    - Elasticsearch: https://raw.githubusercontent.com/paralus/helm-charts/main/examples/values.elasticsearch.yaml

4. Install the chart with release name my-release:

   ```bash
   helm install my-release -f myvalues.yaml -n paralus paralus/ztka

    NAME: my-release
    LAST DEPLOYED: Thu Jun 16 09:35:03 2022
    NAMESPACE: paralus
    STATUS: deployed
    REVISION: 1
    NOTES:
    1. Access the application URL by running these commands:
    Open http://my-host.com in browser.

    You can view the recovery link for admin user by running the following command once all the pods are running:

    kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

   ```

## Domain Name Setup

Paralus also requires a domain name where the dashboard and other components will be accessed. It is a mandatory requirement to run Paralus. Further, you'll also need to configure DNS records for that domain to point to the ingress-ip for your cluster.

Based on your domain provider, you can login to your domain's control panel and add three `CNAME` DNS records with the details provided as shown below:

| Type  | Address                               | Resolves To | TTL    |
| ----- | ------------------------------------- | ----------- | ------ |
| CNAME | console.my-host.com                   | `<your server IP>` | 1 Hour |
| CNAME | \*.user.my-host.com                   | `<your server IP>` | 1 Hour |
| CNAME | \*.core-connector.my-host.com         | `<your server IP>` | 1 Hour |

## First Run

Paralus is installed with a default organization and an admin user. Hence, after installation, you need to set a password for the user. To do so, execute the command that you get after installting Paralus.

```bash
kubectl logs -f --namespace paralus $(kubectl get pods --namespace paralus -l app.kubernetes.io/name='paralus' -o jsonpath='{ .items[0].metadata.name }') initialize | grep 'Org Admin signup URL:'

Org Admin signup URL:  http://my-host.com/self-service/recovery?flow=de34efa4-934e-4916-8d3f-a1c6ce65ba39&token=IYJFI5vbORhGnz81gCjK7kucDVoiuQ7j
```

Open the above url in a browser and provide a new password. Once changed you can login with the `adminEmail` provided in `myvalues.yaml` along with the password set in the last step.

Congratulations, you have successfully installated Paralus.

We also recommend enabling SSL for Paralus on a production environment. Read our [SSL documentation](../ssl-setup/) for more.

It's now time to learn more about [Paralus features](../usage/)!
