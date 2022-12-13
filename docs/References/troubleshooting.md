---
title: Troubleshooting
description: "Troubleshooting guide for Paralus"
slug: /references/troubleshooting
---

Facing issues deploying or running Paralus? Our troubleshooting guide can help you over come some of the common issues that you might face.

For anything else, feel free to reach out to us :)

## Password Reset Link Expired

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

## Accessing Paralus Dashboard on MacOS

If you are using a Mac based machine, you might have issues accessing the Paralus dashboard. The reason is that Docker-for-Mac does not expose container networks directly on the macOS host & hence you cannot access the Paralus dashboard.

We suggest using [docker-mac-net-connect](https://github.com/chipmk/docker-mac-net-connect) utility to overcome this issue. This utility creates a minimal network tunnel between macOS and the Docker Desktop Linux VM.

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

---

## Frequently Asked Questions

### 1. What is Paralus?

An open source access manager for Kubernetes clusters, Paralus enables teams to provide secure access to Kubernetes clusters. It lets you create and manage access control policies for people, teams and services across multiple Kubernetes clusters without requiring any modifications to your firewall.

Users can simply import K8 clusters into Paralus projects and define rights on a project to project basis. You can also use Paralus to set up any SSO service using GitHub, Azure AD, Okta, etc. so that users can sign-in onto their clusters with the access rights they were given. 

It also records logs for audit and compliance, so you can see who and when did what on your K8s infrastructure. Paralus can be used with a web GUI, CLI, or API.

### 2. Is Paralus a CNCF Project?

Paralus is currently a candidate in the CNCF Sandbox application process.

### 3. How and where can I try it myself?

You can download and install Paralus for free on [GitHub](https://github.com/paralus/paralus). Alternatively, we’ve setup a one-click installer on [Digital Ocean Marketpace](https://marketplace.digitalocean.com/apps/paralus) to make it even easier. We also have several quickstart guides on the the [blog](https://paralus.io/blog/).

### 4. Is there support or an enterprise license available?

Support for Paralus is available via [community Slack](https://join.slack.com/t/paralus/shared_invite/zt-1a9x6y729-ySmAq~I3tjclEG7nDoXB0A). Enterprise licensing and support is offered with Rafay’s Kubernetes Operations Platform.

### 5. How is this different from Teleport?

Teleport while it also has the ability to provide secure access to Kubernetes clusters is a much more clunky solution as it:

- requires setup per cluster
- requires the use of Kubernetes secrets to mount the Teleport user token to the cluster
- requires login first to a bastion Teleport server

Paralus does not require any of these steps. It’s simply import your cluster and get started. User roles and responsibilities are not mixed with infrastructure deployments and management. Teleport does have some advanced functionality today such as session recordings which allow platform admins to capture the actions a user has performed and watch them again. These kinds of functionality are in the roadmap for Paralus in the near future.

### 6. I installed Paralus correctly, however, I'm unable to access the password reset link?

This happens when the password reset link has expired. The password reset link generated at the time of installing Paralus is valid only for 10 minutes. You can regenerate the URL by referring to our [password reset URL documentation](#password-reset-link-expired).

### 7. I am getting x509 certificate error, what should I do?

This is because of an incorrect SSL certificate configuration. If you're trying it your local setup, you can deploy Paralus without configuring SSL. Follow our kind quickstart guide. However, if you're deploying Paralus with a domain name on a cloud Kubernetes platform, follow the SSL guide to setup SSL certificate correctly.

### 8. I am unable to provide a password on the password reset page?

Please ensure that you are not using a simple password like 123, password etc. Paralus uses Ory Kratos for authentication and it doesn't allow to set such simple passwords. You can read more about [password policy here](https://www.ory.sh/docs/concepts/password-policy).

### 9. Does Paralus support LDAP with AD integration?

As of 0.1.9, Paralus doesn't support LDAP with AD integration. Paralus uses Ory Kratos under the hood for user management which currently doesn't support LDAP as well. However, Paralus does allow you to configure third party identity providers and configure it as SSO.
