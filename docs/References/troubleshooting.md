---
title: Troubleshooting
description: "Troubleshooting guide for Paralus"
slug: /references/troubleshooting
---

Facing issues deploying or running Pralus? Our troubleshooting guide can help you over come some of the common issues that you might face.

For anything else, feel free to reach out to us :)

## Cluster Import

If you get errors while importing a cluster into Paralus, it may well be one of the following reasons:

- Incompatible, older version of Kubernetes -> *Ensure you have the latest version of Kubernetes installed*
- Insufficient cluster resources for Kubernetes Management Operator to run -> *Check resources on your node, free up memory or configure your cluster with higher resource limits*
- Conflictig Ingress Controllers -> *Check the ingress controllers, if you already have a managed controller, disable the default ingress controller*
- 3rd party product blocking the create of Kubernetes resources such as namespaces etc. -> *Check permissions, access to the cluster you are trying to work on*
- Imported cluster unable to pull required container images from the specified registry due to configured policies. -> *Check if you have adequate permissions to access the registry and policies*

## Kubectl Access

If you are unable to access your cluster via kubectl from the dashboard, check out the following possible issues and solutions:

- Connection Error while trying to connect from UI:
  - *Try killing & restarting the prompt pod*
  - *Check logs from Relay Agent to see if there is any error*
  - *SSL certificate mismatch/error, Ensure that you use the correct SSL certificates as the ingress tends to reject incorrect ones*
