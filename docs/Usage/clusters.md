---
title: "Clusters"
description: "Learn how to use Paralus and configure clusters."
slug: /usage/clusters
---

A Kubernetes cluster consists of nodes (*worker machines*) that run containerized applications. Paralus allows you to add, modify and manage access to your Kubernetes clusters. In this document, you'll learn about all the actions that you can perform on your clusters using Paralus.

- [Adding Clusters](#adding-clusters)
- [Deleting Clusters](#deleting-clusters)

## Adding Clusters

Paralus allows you to add clusters that are running either on your on-prem environment or on a public/private cloud. Once imported, Paralus will provide deep visibility and insight into all aspects of the Kubernetes cluster. It provides you with a centralized management dashboard to control access across all your clusters irrespective of where they are hosted.

To Add a cluster, simply click on **New Cluster**, choose the environment and Kubernetes distribution. Provide a name and a description for the cluster and proceed.

<img src="/img/docs/paralus-import-cluster-1.png" alt="Import Existing Kubernetes Cluster" height="75%" width="75%"/>

On the next screen, click **Continue** and download the bootstrap yaml file by clicking **Import Bootstrap YAML**. This will download the YAML file that is required to connect your cluster with Paralus.

<img src="/img/docs/paralus-import-cluster-2.png" alt="Download YAML configuration file" height="75%" width="75%"/>

Once the file is downloaded, apply this configuration to your cluster using `kubectl apply -f mylocalcluster.yaml`. *Replace mylocalcluster with your filename*

<img src="/img/docs/paralus-import-cluster-3.png" alt="Successful cluster import" height="75%" width="75%"/>

Wait for the changes to take place. On the dashboard you will see that the cluster is imported successfully. It usually takes 3-5 minutes for the status to update.

<img src="/img/docs/cluster-import-list.png" alt="Successful cluster import" height="75%" width="75%"/>

Congratulations, you have successfully added a cluster to Paralus.

## Deleting Clusters

To delete a cluster, click on the Settings Icon next to the cluster and select Delete.

<img src="/img/docs/cluster-delete-1.png" alt="Deleting a Cluster" height="75%" width="75%"/>

Simply Deleting/Removing an imported cluster in the Web Console does not automatically remove all artifacts associated with the Kubernetes Managemet Operator on imported clusters. We provide a tool that can be used to force remove/delete all remaining resources provisioned on imported clusters.

> Note: This utility will not delete user deployed resources because these are managed by the customer. This utility uses kubectl, helm cli to remove the operator on the cluster.
