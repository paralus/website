---
title: "Namespace"
description: "Working with Namespaces on Paralus"
slug: /usage/namespace
---

Namespaces allow isolation of group of resources in a single cluster. Every user has access only to a namespace and the resources within that namespace. Read more about [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).

In the current version, Paralus also allows you to create and manage namespaces out of the box using **namespace roles**. Using namespace roles you can tag users to the role who will have access to a particular namespace. The feature is available to admins and org admins who can create and manage namespace roles.

Currently, Paralus offers two namespace roles:

- **Namespace Admin** - Read/write access to resources in the defined namespace.
- **Namespace Readonly** - Read only access to resource in the defined namespace.

> Note: Users can also create custom namespace roles. Refer to the [Permissions List](../usage/roles#permissions-list) that you can use to create a custom namespace role.

## Assigning Namespace Role

As an organization admin, you can assign a namespace role to any user or create a group with the namespace role and add a user to that group. [Assign a role](../usage/users#edit-a-user) as you would normally do and choose any of the namespace role. When you select a namespace role, you'll get an option to specify the namespace to which the user will have access to. Provide the name(s) of the namespace to which the user will have access to.

 <img src="/img/docs/namespace-1.png" alt="Assigning Namespace Role" height="75%" width="75%"/>

> Note: Paralus will create the namespace if it doesn't exist in the cluster. If you already have a namespace in your cluster, make sure you enter the exact name while assigning it to this role.

The selected user will see the effect next time they log in. Based on the type of the role, the assigned user will either have read only or create/modify/delete access to resources in the specified namespace. If a read only user tries to create a resource in the namespace, they'll get a forbidden error.

With Namespace roles, you'll be able to easily manage access to namespaces in your clusters. 

Read more about [features of Paralus](../usage/).
