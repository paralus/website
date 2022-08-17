---
slug: jit-service-account
title: "Understanding Just-in-time (JIT) access with service accounts in Paralus"
authors: [atul]
tags: [paralus]
---

Organizations today are focusing a lot on scalability and flexibility of their applications. Most of the age-old monolith applications are now being converted to more modern and agile microservices which reside in containers.

As more and more applications are containerized, orchestration tools like Kubernetes are at the helm. However, with every new resource addition, there's an overhead. And the one that we are going to focus on today is **access management for Kubernetes**.

<!--truncate-->

With hundreds of containers on different clusters spread across multiple on-prem and cloud platforms, managing access for every user to every resource is tough. Especially when many resources like pods are ephemeral, access management is a challenge. Further, the team dynamics keep changing and you have new members coming in and moving out. If access is not revoked for an outgoing user, it poses a security threat.

While Kubernetes does provide support for namespaces and role based access control (RBAC), it's not enough especially for large, enterprise grade production environments. That's when the need for a Just-In-Time access solution was required.

## What is Just-in-time access?

For the unaware, the just-in-time philosophy was created by folks at [Toyota](https://global.toyota/en/company/vision-and-philosophy/production-system/) & was implemented in their supply chains. Today, this philosophy is used across industries and verticals to make the processes more streamlined and agile. Just-in-time access too follows the same philosophy but for managing access.

Just in time access refers to provisioning of access for a user to a particular resource which is valid only for a specific duration. A typical JIT access workflow starts with the user requesting access for a resource, the system validates that against an access policy and in turn provides access to the requested resource for a specific duration.

For a team with multiple users and resources, implementing JIT access is a critical security control.

## How Just In Time access works in Paralus

Paralus allows you to import and manage Kubernetes clusters hosted on different platforms from a single dashboard. It provides you to configure Zero Trust access for your users to your Kubernetes resources. Paralus also comes with Just in time service accounts creation on the target cluster which is valid only for a certain duration. To understand how just in time access works in Paralus with Service accounts, refer to the image below.

Below are the steps and modules of Paralus that are involved in provisioning of just in time service accounts

1. Users log in to Paralus and request to execute a kubectl command on a target cluster to create a name server.
2. The request passes on to **Relay Server** which in turn communicates with the **Paralus core** to validate the user's roles and permission.
3. If the user has valid access permissions, Paralus core responds with a **yaml configuration file** with the credentials and provides it to the Relay server.
4. The relay server passes on that configuration to the **relay agent** that is running on the target Kubernetes cluster.
5. On the target cluster, the configuration is validated and a **service account is created** by Kubernetes.
6. Once that is confirmed by the relay agent, the relay server then pushes the user's request to the relay agent.
7. At the target cluster, the user request is once again validated with their permissions for the service account.
8. If the user has the relevant permissions, the request is processed and a namespace is created.

Things to remember about Just in time Service accounts on Paralus:

- The default TTL for a service account is 5 minutes.
- These accounts are deleted after 8 hours of inactivity from the target cluster.

## Benefits of Just In Time Service Accounts

### Short-lived Scoped Access

The whole concept of Just in time access revolves around being **short-lived and with limited scope**. Paralus provides service accounts on target clusters for a specific duration (5 minutes) and with permissions that are assigned by the organization admin has been assigned to limit the scope.

This significantly brings down the attack surface as users have access only to a specific scope. Further, since these just in time service accounts are short-lived, they prevent privileg theft too.

### No Blanket Roles

By default Kubernetes creates a default service account if you don't specify/configure one. All the commands are executed using this default service account. If every user in your organization uses the default service account, you are inviting trouble.

You don't want any user to access any resource they want. Hence, Paralus provides a **just in time service account** creation for every user and avoids blanket roles.

### Custom Role Creation

When users in your organization grow, it becomes tedious to manage individual user roles. You might end up having to manage more roles than resources! To avoid that, Paralus allows you to **[create custom roles](../docs/usage/roles#creating-roles/)**.

An organization admin can choose a role and tag permissions to it and can then assign users this role. So instead of managing permissions for every user, it's easier to create and manage roles.

## Secure your Kubernetes Infrastructure with Paralus

Paralus comes with Zero Trust out of the box. As a user you don't need to install any additional modules to enable this. It provides admins with granular control over user access. With custom roles, it becomes much easier for administrators to manage access for their teams. Similarly, just in time service account creation too is baked into Paralus. It adds an additional security measure for your infrastructure.

To experience Paralus in action, install Paralus on a local Kubernetes cluster like [Kind](https://www.paralus.io/blog/kind-quickstart) or [MicroK8s](https://www.paralus.io/blog/paralus-quickstart-microk8s) and see it for yourself.

If you face any issues or want further information on this, feel free to reach out to the [Paralus Slack community](https://join.slack.com/t/paralus/shared_invite/zt-1a9x6y729-ySmAq~I3tjclEG7nDoXB0A).
