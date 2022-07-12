---
title: "Clusters"
description: "Learn how to use Paralus and configure clusters."
slug: /usage/clusters
---

A Kubernetes cluster consists of nodes (*worker machines*) that run containerized applications. Paralus allows you to add, modify and manage access to your Kubernetes clusters. In this document, you'll learn about all the actions that you can perform on your clusters using Paralus.

- [Adding Clusters](#adding-clusters)
  - [Provisioned Clusters](#provisioned-clusters)
  - [Imported Clusters](#imported-clusters)
- [Deleting Clusters](#deleting-clusters)

## Adding Clusters

Paralus supports addition and management of two types of Kubernetes clusters:

1. Provisioned
2. Imported

### Provisioned Clusters

These are Kubernetes clusters that are provisioned and managed by Paralus on various types of infrastructure:

- Upstream k8s On Bare Metal
- Upstream k8s On Virtual Machines (on vSphere, AWS, GCP, Azure etc)
- Managed Kubernetes Providers (EKS, AKS, etc)

Paralus has the ability to manage full lifecycle management of provisioned clusters.

### Imported Clusters

Kubernetes clusters that have already been provisioned can be imported into Paralus. Once imported, Paralus will provide deep visibility and insight into all aspects of the Kubernetes cluster.

<img src="/img/docs/paralus-import-cluster-1.png" alt="Import Existing Kubernetes Cluster" height="75%" width="75%"/>

## Deleting Clusters

To delete a cluster, click on the Settings Icon next to the cluster and select Delete.

<img src="/img/docs/cluster-delete-1.png" alt="Deleting a Cluster" height="75%" width="75%"/>

Simply Deleting/Removing an imported cluster in the Web Console does not automatically remove all artifacts associated with the Kubernetes Managemet Operator on imported clusters. We provide a tool that can be used to force remove/delete all remaining resources provisioned on imported clusters.

> Note: This utility will not delete user deployed resources because these are managed by the customer. This utility uses kubectl, helm cli to remove the operator on the cluster.
