---
slug: paralus-and-argocd-integration
title: "A Deep Dive into Argo CD and Paralus"
authors: [nirav]
tags: [paralus, argocd]
image: /img/docs/paralus-kamaji-blog.png
---

## Introduction
The world of Kubernetes has evolved rapidly, transforming the way organizations manage containerized applications. In this age of dynamic workloads and cloud-native architecture, security, and access control are paramount. Argo CD and Paralus are two powerful tools that have emerged to address these concerns, enabling organizations to implement zero-trust principles in their Kubernetes environments. In this blog, we'll explore the concepts behind Argo CD and Paralus and delve into their integration for zero-trust Kubernetes access.

## Understanding Argo CD

[**Argo CD**](https://argo-cd.readthedocs.io/en/stable/), an open-source GitOps continuous delivery tool, simplifies the deployment and management of applications in Kubernetes clusters. GitOps is a methodology that uses Git as a single source of truth for both infrastructure and application configurations. Argo CD watches your Git repository for changes and ensures that the actual state of the cluster matches the desired state defined in the repository.

Key features of Argo CD include

- **Declarative Application Configuration:** Applications are defined in Git repositories using YAML files, making it easy to version and manage configurations.
- **Automated Synchronization:** Argo CD continuously monitors Git repositories for changes, ensuring that the cluster is always in the desired state.
- **Role-Based Access Control (RBAC):** Argo CD allows you to define granular access control policies for users and teams, enhancing security.

## Paralus for Zero Trust Kubernetes Access

**Paralus** is a powerful tool designed to provide [zero-trust access to Kubernetes clusters](https://www.paralus.io/blog/zero-trust-security-kubernetes-access-using-paralus). Zero trust, as a security paradigm, assumes that threats can come from both inside and outside the network, and no entity should be implicitly trusted. Paralus integrates with Kubernetes to ensure that every interaction is authenticated and authorized, irrespective of the user's location.

Key features of Paralus include

- **Authentication:** Users must authenticate themselves before accessing the Kubernetes cluster. Paralus supports various authentication methods, such as username/password, single sign-on using openid connect (sso), and more.
- **Role-Based Access Control:** Access to Kubernetes resources is determined by policies and roles, ensuring only authorized users can perform specific actions.
- **Audit Trails:** Every action taken in the Kubernetes cluster is logged, providing transparency and accountability.

## Use Case: Secure Access to Kubernetes with Argo CD and Paralus

Let's dive into a practical use case to understand how Argo CD and Paralus work together to provide Zero Trust Kubernetes access.

### Scenario

Imagine a mid-sized tech company with multiple Kubernetes clusters deployed in various cloud providers and on-premises data centers. The company uses Argo CD for continuous deployment of applications and wants to strengthen the security posture of their clusters.

### Using Argo CD to manage Paralus applications

We can leverage Argo CD to deploy and manage Paralus core controller apps and relay agents across these multiple kubernetes clusters

**Paralus Core:** Install and manage paralus app as an argocd helm application

In this example we are going to deploy paralus core to the same cluster as argocd, you can choose a [different destination cluster](https://argo-cd.readthedocs.io/en/stable/user-guide/commands/argocd_cluster_add/). This would make paralus upgrades automatic on every release depending on your synchronization option and leverage the power for argocd.

```
argocd app create paralus-core

apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
name: paralus-core
spec:
destination:
name: ''
namespace: paralus
server: 'https://kubernetes.default.svc'
source:
path: charts/ztka
repoURL: 'https://github.com/paralus/helm-charts.git'
targetRevision: HEAD
helm:
parameters:
- name: analytics.enable
value: 'false'
- name: deploy.postgresql.enable
value: 'true'
- name: kratos.kratos.development
value: 'true'
sources: []
project: default
syncPolicy:
syncOptions:
- CreateNamespace=true
```

Next up synchronize the application to deploy Paralus core components to your target cluster

<img src="/img/docs/paralus-core-argoapp.png" alt="paralus core argocd app sync" height="60%" width="60%"/>  
<br/>

Now you can access paralus console after [configuring your DNS Settings](https://www.paralus.io/docs/Installation/#domain-name-setup)

<img src="/img/docs/paralus-console.png" alt="paralus console" height="60%" width="60%"/>  
<br/>

[**Relay Agents:**](https://www.paralus.io/docs/architecture/core-components#relay-agent) All the Paralus imported clusters can be configured as separate argocd applications. This enables managing and upgrading relay agents by just updating the version in git repo. Very useful to upgrade a fleet of agents across imported clusters.

```
argocd app create gke-dev

apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: gke-dev
spec:
  destination:
    name: ''
    namespace: paralus-system
    server: 'https://35.224.124.44'
  source:
    path: argocd/cloud/gke/dev/
    repoURL: 'https://github.com/niravparikh05/paralus-integrations.git'
    targetRevision: HEAD
  sources: []
  project: default
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

<img src="/img/docs/relay-agent-argoapp.png" alt="relay agent argo app sync" height="60%" width="60%"/>  
<br/>

## Integrating Argo CD with Paralus

The integration of Argo CD with Paralus enhances Kubernetes access control and security, promoting a zero-trust approach. Here's how it works

- **Authentication:** When a user attempts to access the Kubernetes cluster through Argo CD, Paralus handles the authentication process. Users must provide their credentials and complete any additional authentication steps, to verify their identity.
- **Access Control:** Paralus enforces access policies based on the user's identity and role. Even within Argo CD, users can only interact with resources and applications they are authorized to access.
- **Auditability:** Paralus logs all interactions within the Kubernetes cluster, providing a detailed audit trail. This ensures that all actions are recorded and can be reviewed for security and compliance purposes.

This is possible by adding clusters in argocd using the kubeconfig generated using paralus, in this example we will add a cluster with kubeconfig generated having service account with full cluster access

```
argocd cluster add gke-dev --name gke-dev-paralus --kubeconfig ./kubeconfig-admin@paralus.local.yaml

WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `gke-dev` with full cluster level privileges. Do you want to continue [y/N]? y
INFO[0003] ServiceAccount "argocd-manager" already exists in namespace "kube-system" 
INFO[0004] ClusterRole "argocd-manager-role" updated    
INFO[0005] ClusterRoleBinding "argocd-manager-role-binding" updated 
Cluster 'https://94a82cca-76ce-4cbb-8a36-8acc25eca1bd.user.ic-oss.dev.rafay-edge.net:443' added
```

Now deploying any application to above destination cluster will adhere to paralus’ [just in time access](https://www.paralus.io/blog/paralus-jit-access-service-account) and can be tracked via paralus' [audit logs](https://www.paralus.io/docs/usage/audit-logs)

Let’s say we add a new guestbook application to above cluster as our destination

```
argocd app create guestbook

apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: guestbook
spec:
  destination:
    name: ''
    namespace: default
    server: >-
      https://94a82cca-76ce-4cbb-8a36-8acc25eca1bd.user.ic-oss.dev.rafay-edge.net:443
  source:
    path: guestbook
    repoURL: 'https://github.com/argoproj/argocd-example-apps.git'
    targetRevision: HEAD
  sources: []
  project: default
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

Next up synchronize the guestbook app

<img src="/img/docs/relay-agent-argoapp.png" alt="relay agent argo app sync" height="60%" width="60%"/>  
<br/>

Verifying the auditlogs, we can see that the guestbook application has been deployed with paralus system user having necessary permissions.

<img src="/img/docs/paralus-argocd-auditlogs.png" alt="paralus argocd audit logs" height="60%" width="60%"/>  
<br/>

By integrating Argo CD with Paralus, organizations can achieve a robust, zero-trust security model that safeguards their Kubernetes infrastructure and the applications running within it.

## Conclusion

In the ever-evolving landscape of Kubernetes, ensuring security and access control is of utmost importance. Argo CD and Paralus represent two powerful tools that, when combined, can provide a robust zero-trust approach to Kubernetes access.

By using Argo CD for GitOps-driven application deployment and Paralus for strong authentication, role-based access control, and auditability, organizations can confidently embrace the world of container orchestration without compromising security. This integration not only secures the Kubernetes environment but also enhances compliance and accountability.

In summary, Argo CD and Paralus are a dynamic duo for implementing a zero-trust approach to Kubernetes access, providing a secure and reliable foundation for modern containerized applications.