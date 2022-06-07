---
title: "Clusters"
description: "Learn how to use ZTKA and configure clusters."
slug: /usage/clusters
---

A Kubernetes cluster consists of nodes (*worker machines*) that run containerized applications. ZTKA allows you to add, manage acces to your Kubernetes clusters. In this document, you'll all the actions that you can perform on your clusters.

- [Adding Clusters](#adding-clusters)
  - [Provisioned Clusters](#provisioned-clusters)
  - [Imported Clusters](#imported-clusters)
- [Deleting Clusters](#deleting-clusters)

## Adding Clusters

ZTKA supports addition and management of two types of Kubernetes clusters:

1. Provisioned
2. Imported

### Provisioned Clusters

These are Kubernetes clusters that are provisioned and managed by the Controller on various types of infrastructure

- Upstream k8s On Bare Metal
- Upstream k8s On Virtual Machines (on vSphere, AWS, GCP, Azure etc)
- Managed Kubernetes Providers (EKS, AKS, etc)

The Controller has the ability to manage full lifecycle management of provisioned clusters.

### Imported Clusters

Kubernetes clusters that have already been provisioned can be imported into the Controller. Once imported, the controller will provide deep visibility and insight into all aspects of the Kubernetes cluster, deploy and manage workloads to the imported cluster.

With imported clusters, the lifecycle management (add/remove worker nodes, k8s upgrades, decommission etc) is the responsibility of the customer.

<img src="/img/docs/import-cluster-1.png" alt="Import Existing Kubernetes Cluster" />
Import Existing Kubernetes Cluster

## Deleting Clusters

To delete a cluster, click on the Settings Icon next to the cluster and select Delete.

<img src="/img/docs/cluster-delete-1.png" alt="Deleting a Cluster" />
Deleting a Cluster

Simply Deleting/Removing an imported cluster in the Web Console (i.e. Controller) does not automatically remove all artifacts associated with the Kubernetes Mgmt Operator on imported clusters. We provide a tool that can be used to force remove/delete all remaining resources provisioned on imported clusters.

> Note: This utility will not delete user deployed resources because these are managed by the customer. This utility uses kubectl, helm cli to remove the operator on the cluster.
> 