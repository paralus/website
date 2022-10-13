---
slug: tips-to-secure-access-to-kubernetes-clusters
title: "5 Tips To Secure Access To Kubernetes Clusters"
authors: [atul]
tags: [zero trust]
---

Kubernetes is the most widely used container orchestration tool. To make our applications scalable & flexible, it employs numerous components, layers & services. And with so many interfaces, we have a large attack area and thus security becomes a concern.

Makers and maintainers of Kubernetes realized that and focused on providing some sort of security mechanism to secure Kubernetes clusters. Today, Kubernetes provides essential security features like Role-Based Access Control (RBAC) out of the box. In fact it took almost [3 years for the RBAC feature](https://kubernetes.io/blog/2017/04/rbac-support-in-kubernetes/) to be available after Kubernetes’ release.

<!--truncate-->

However, securing clusters, nodes and applications is out of scope of Kubernetes. Moreover, for most enterprise-grade setups, RBAC only is not enough and is often coupled with other tools & techniques for enhanced security.

In this blog post we’ll share some **tips to secure your kubernetes clusters**. While there are many, these are a few that you must enable to ensure you have the right set of checks in place.

## Secure Your Kubernetes Clusters

### Configure Role-based Access Control

Most of the organizations have multiple applications running on a single Kubernetes cluster. With multiple teams accessing the same cluster, it is difficult to control who has access to what. That’s where Role-based Access Control (RBAC) fits in. RBAC is **designed to grant access to Kubernetes resources based on the roles of individual users** within an organization.

RBAC comes with a [set of default roles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole) that you can configure. You can bind(*assign*) these roles to users, groups or service accounts. It also allows you to configure custom roles that you can assign to users and have fine grained access control over your resources.

If you’re setting up a Kubernetes cluster, the first thing you must do is enable RBAC. To do that, you need to set `–authorization-mode=RBAC` while starting the API server. Post that you need to create a `kind:Role` and apply it to the cluster. For example, the file below creates a role `pod-reader` in the `default` namespace to grant `read-only` access to pods.

```yaml

apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
 namespace: default
 name: pod-reader
rules:
- apiGroups: [""] #indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
```

You can create such roles based on the permissions you need. However, as the  number of clusters you manage increases, it becomes difficult to manage roles and access to all the clusters. That’s where you can leverage tools like Paralus that allows you to create and manage [custom roles](https://www.paralus.io/docs/usage/roles) from a dashboard whilst managing access to multiple clusters.

### Create Namespaces

When you have multiple teams working on different applications in your organizations. One way to limit their access is by creating different clusters for each application/team. But since organizations have multiple applications and teams, this isn’t the right way to isolate access.

Namespaces were made just for such use cases. These in a way **allow you to create multiple sub clusters within a cluster**. That way you’re able to isolate workloads as well as limit access of users to a particular namespace without creating multiple clusters.

You can create a namespace for every team, deploy their workload within the namespace & configure access. Administrators can create any number of namespaces and configure access to each one of them. By using namespace you also enhance RBAC as you have finer access control. Since you have multiple namespaces on a single cluster, you can share resources using resource quotas.

```sh
kubectl get ns

NAME              STATUS   AGE
staging-dev       Active   2d9h
staging-test      Active   2d9h
prod-public       Active   2d9h
```

It’s a good practice to enable namespaces when you want to secure your Kubernetes clusters. Refer to official [Kubernetes namespace documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) to understand how you can use namespaces.

### Enabling Least Privilege Access

Things don’t just stop after enabling RBAC and namespaces. These are just a bare minimum. With large footprints and multiple interfacing points of enterprise applications today, ensuring that each of them is safeguarded is tough. Both these mechanisms allow you to prevent attacks from outside the cluster.

But what if someone portraying a legitimate user manages to enter the cluster? What if there’s an internal threat?

To prevent such attacks, you need to implement least privilege access. The best part is that this is not limited only to users but also applies to applications & accounts.  You enable just enough access to users/accounts/systems that they need.

By enabling least privilege access, you **reduce the attack surface as it limits privileged access exploits**. Malware attacks that require elevated access to move within the system, are also prevented by implementing least privilege access.  

One of the crucial things for implementing least privileged access is to centrally manage access & credentials. Enabling just in time access allows users/systems to have temporary access on need basis only. This further makes implementing and managing least privilege access easier.

### Using 3rd Party Identity Providers

Organizations today use external identity providers to enable access to their enterprise applications for their employees. Identity providers create, maintain and manage identity and provide user authentication as a service. Organisations can configure access to their Kubernetes clusters by using their identity providers like Google, Microsoft, GitHub etc.

Administrators can also create groups with their identity providers and map them to roles and permissions within their Kubernetes clusters. This will enable more robust and end-to-end implementation of RBAC. Further, considering the employee churn, admins only need to modify users at the IdP end as employees move in/out of the organization without modifying roles on their Kubernetes infrastructure.

<img src="/img/docs/paralus-google-login-2.png" alt="Authenticate on Google" height="75%" width="75%"/>

To understand how this would work, you can implement a custom access management solution integrating identity providers with Kubernetes, using open source tools like [Dex and Kubelogin](https://rafay.co/the-kubernetes-current/diy-access-management-using-dex-and-kubelogin/). This is something you can do to understand how things work, but it isn’t something that we recommend as this isn’t a fool proof solution and not recommended for an enterprise setup.

### Enable Audit Logs

Last but not the least, you want to keep an eye on all the activities that take place within your cluster. Even after implementing the best of security tools and practices, you need to ensure that they are working how you want them to work.

You want to keep a track of user activities like who is accessing what, when and how. Enabling audit logs helps **keep a track of all activities across your organization**. It helps provide an audit trail with a sequential record of activities. This is helpful for admin teams to track user activity and security teams to analyze and investigate breaches.

<img src="/img/docs/logs-kubectl.png" alt="Default Cluster Labels" height="75%" width="75%"/>

Not only from a security point of view, audit logs also come in handy to troubleshoot system issues. With a historical log, teams will be able to recreate the set of events that led to an issue.

Hence, irrespective of the system or application that you’re using, enabling audit logs is a basic necessity to keep your system safe, compliant and identify possible threats well in advance.

## Summary

As an organization your focus should not only be on making your applications faster, flexible and scalable, but also making it secure. And the first step to do that is to secure your infrastructure. In the world of cloud native applications, securing Kubernetes clusters is vital.

From implementing RBAC and namespaces to limiting access by using least privilege and just in time principles are key to secure your Kubernetes clusters. While this post isn’t a comprehensive list of security tips, these are a few things that you must take into account while securing your Kubernetes clusters.

Open source tools like Paralus help you secure your Kubernetes clusters by implementing best practices along with Zero Trust principles. It helps you create and manage custom roles along with just in time service account creations. It also comes bundled with an audit logging feature that helps you keep track of what’s going on in your cluster. To give Paralus a try, check out our [GitHub Repo](https://github.com/paralus/paralus) and refer to our [documentation](https://www.paralus.io/docs/) to know more.
