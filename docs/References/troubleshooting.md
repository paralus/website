---
title: Troubleshooting
description: "Troubleshooting guide for Paralus"
slug: /references/troubleshooting
---

Facing issues deploying or running Pralus? Our troubleshooting guide can help you over come some of the common issues that you might face.

For anything else, feel free to reach out to us :)

## Password Rest Link Expired

The password recovery link generated while deploying Paralus is valid for `10 minutes`. For any reason if the link is expired, you can use the following code snippet to generate the recovery link for any user.

> **Note:** Provide the email id of the user whose password you wish to retrieve. Further, if you've set a username and password for the postgresql database, please replace `admindbpassword` and `admindbuser` with your values.

```bash
export RELEASE_NAME=<HELM_RELEASE_NAME>
export RUSER=<USER_ADMIN_EMAIL>
export RNAMESPCE=<NAMESPCE>

kubectl exec -it "$RELEASE_NAME-postgresql-0" -n "$RNAMESPACE" -- bash \
  -c "PGPASSWORD=admindbpassword psql -h localhost -U admindbuser admindb \
-c \"select id from identities where traits->>'email' = '$RUSER' limit 1;\" -tA \
| xargs -I{} curl -X POST http://$RELEASE_NAME-kratos-admin/recovery/link \
-H 'Content-Type: application/json' -d '{\"expires_in\":\"10m\",\"identity_id\":\"{}\"}'"
```

If you have deployed a postgreSQL instance that was **NOT** bundled with Paralus, you can use the following snippet to extract the recovery link **after you have extracted the user id**.

```bash
curl -X POST http://$RELEASE_NAME-kratos-admin/recovery/link \
-H 'Content-Type: application/json' -d '{"expires_in":"10m","identity_id":"<ADMIN_USER_ID>"}'
```

## Cluster Import

If you get errors while importing a cluster into Paralus, it may well be one of the following reasons:

- Incompatible, older version of Kubernetes -> *Ensure you have the latest version of Kubernetes installed*
- Insufficient cluster resources for Kubernetes Management Operator to run -> *Check resources on your node, free up memory or configure your cluster with higher resource limits*
- Conflictig Ingress Controllers -> *Check the ingress controllers, if you already have a managed controller, disable the default ingress controller*
- 3rd party product blocking the creatinon of Kubernetes resources such as namespaces etc. -> *Check permissions, access to the cluster you are trying to work on*
- Imported cluster unable to pull required container images from the specified registry due to configured policies. -> *Check if you have adequate permissions to access the registry and policies*

## Kubectl Access

If you are unable to access your cluster via kubectl from the dashboard, check out the following possible issues and solutions:

- Connection Error while trying to connect from UI:
  - *Try killing & restarting the prompt pod*
  - *Check logs from Relay Agent to see if there is any error*
  - *SSL certificate mismatch/error, Ensure that you use the correct SSL certificates as the ingress tends to reject incorrect ones*
