---
title: Installing using Helm
description: "Quickly setup ZTKA using HELM charts"
sidebar_position: 2
sidebar_label: "Installation"
---

Installing ZTKA using helm charts is the preferred way. This installation guide assumes that you have a fresh environment and want to install all the components that are required to run ZTKA - _PostgreSQL, Elasticsearch & SMTP_.

If you already have any/all of these components installed, refer to the prerequisites section below. If you're installing this on a fresh environment, feel free to [skip to installation](#installation).

## Prerequisites

You need to have Helm CLI installed, Kubernetes cluster and kubeconfig to be configured to access the cluster.

- Kubernetes 1.18+
- Helm 3.0.0+

**PostgreSQL** database that can be accessible from a cluster on which you are deploying rcloud. Ready with following details of postgreSQL database:

- Database address _(eg: my-pgsql-host:5432)_
- Database username _(eg: user)_
- Database password _(eg: pa$$word)_
- Database name _(eg: dbname)_

**Elasticsearch** that can be accessible from a cluster on which you are deploying rcloud. Be ready with an elasticsearch address. For example, `my-es-host:9200`

**SMTP** connection URI to connect to SMTP server. For example, `smtps://foo:bar@my-mailserver:1234/`

The hostname of a domain that can be used to access rcloud applications. For example, my-host.com.
You need to add 3 DNS records like following,

- console.my-host.com resolve to ingress-ip
- \*.user.ztka.my-host.com resolve to ingress-ip
- \*.core-connector.ztka.my-host.com resolve to ingres-ip

## Installation

1. Installing the chart

   Add repository or Update helm repo if already added:

   ```bash
   helm repo add rafaylabs https://rafaylabs.github.io/rcloud-helm
   helm repo update
   ```

2. Create a separate namespace.

   ```bash
   kubectl create ns rcloud-systems
   ```

3. Create a file `myvalue.yaml` with your values as mentioned in the prerequisites.

   > You can skip this step if you're doing a fresh install

   ```yaml
   rcloudBase:
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
   ingress:
   host: my-host.com
   ```

4. Install the chart with release name my-release:

   ```bash
   helm install my-release -f myvalues.yaml -n rcloud-systems rafaylabs/rcloud
   ```
