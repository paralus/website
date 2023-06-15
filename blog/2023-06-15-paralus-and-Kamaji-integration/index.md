---
slug: paralus-and-kamaji-integration
title: "Streamlining Kubernetes Cluster Management and RBAC with Kamaji and Paralus"
authors: [saim]
tags: [paralus, Kamaji]
image: /img/docs/paralus-kamaji-blog.png
---

## Introduction
Managing Kubernetes clusters at scale can be a daunting task, especially when dealing with multiple clusters and the need to federate access and manage RBAC for a group of developers. However, the integration of two open-source projects, Kamaji and Paralus, provides an innovative solution to address these challenges. In this blog post, we will explore how Kamaji's Kubernetes-in-Kubernetes approach and Paralus' centralized RBAC and authentication features work together seamlessly to simplify cluster management, enhance security, and streamline RBAC operations.

<!--truncate -->

## Entering Kamaji: managing Kubernetes Clusters at Scale
<img src="/img/docs/paralus-kamaji-blog-how-kamaji-works.png" alt="kamaji architecture" height="60%" width="60%"/>  
<br/>


[Kamaji](https://github.com/clastix/kamaji) is an open-source project that introduces a unique approach to managing Kubernetes clusters at scale.
It leverages the Kubernetes-in-Kubernetes concept, allowing for the efficient management of multiple clusters from a centralized control plane. This is made possible by running Control Plane components such as kube-apiserver, scheduler, and controller-manager as regulars Pods in a management cluster: the datastore component is leveraged with multi-tenancy, allowing to decrease the burden of operating etcd at scale, and reducing the operational toil and burden.

#### Key features of Kamaji include:
- **High-density:** running as pods, the Kubernetes control planes can benefit from optimal resource allocation and horizontal scaling.
- **Scalability:** With Kamaji, administrators can easily add or remove clusters without the need for complex manual configurations, ensuring scalability and flexibility.
- **Simplified Management:** Kamaji provides a user-friendly interface to monitor and manage clusters, streamlining operations such as deploying applications, scaling resources, and managing persistent storage across clusters. 


## Entering Paralus, a centralized RBAC and Authentication
Paralus is an open-source project that focuses on RBAC and authentication in Kubernetes environments. It offers a single pane of glass for RBAC management and enhances security through centralized control.

<img src="/img/docs/paralus-platformcon-2023.png" alt="how paralus works" height="90%" width="90%"/>  
<br/>

#### Key features of Paralus include:
- **RBAC Centralization:** Paralus acts as the centralized entry point for all clusters, providing a unified RBAC configuration and management interface. This simplifies the process of granting and revoking permissions across multiple clusters.
- **Authentication and Authorization:** Paralus supports various authentication methods, including OAuth and OpenID Connect, allowing for seamless integration with existing identity providers. It also provides fine-grained authorization controls to ensure secure access to resources.
- **Audit Logging:** Paralus logs and tracks all user activities, enabling administrators to perform detailed auditing and maintain a comprehensive audit trail for compliance and troubleshooting purposes.
 
## Solution Showcase: Kamaji and Paralus Integration
By combining Kamaji and Paralus, organizations can achieve a powerful solution for managing multiple Kubernetes clusters and implementing advanced RBAC practices. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/JWA2LwZazM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

<br/>

#### The following takes are available thanks to Kamaji:
- **Fast provisioning of Control Planes:** running as Pods, the onboard process is blazing fast, allowing the creation of a fully compliant CNCF Kubernetes Control Plane in less than 30 seconds.
- **Constant reconciliation of Control Planes:** ensuring high availability and the desired state, Kamaji constantly checks the current state of your definitions with the desired one, removing any operational burden in regards to bootstrap and maintenance.
- **Single pane of glass for multi-cluster management:** managing a fleet of control planes in a declarative, GitOps, and Cloud-Native way allows your organization to tame the multi-cluster challenges, allowing a self-service approach according to the latest Platform Engineering needs.
 

#### Thanks to Paralus, we can achieve the following outcomes:
- **Secure Access Federation:** Paralus acts as the entry point for accessing all managed clusters, ensuring secure authentication and authorization across the board. It enforces consistent access controls and policies, reducing the risk of unauthorized access.
- **RBAC Simplification:** Paralus provides a centralized interface for managing RBAC across all clusters, enabling administrators to define and enforce role-based access at scale. This streamlines the process of granting permissions and ensures consistent authorization policies for developers.
- **Audit Logging and Compliance: **Paralus captures detailed audit logs of user activities, allowing organizations to meet compliance requirements and investigate any security incidents or policy violations efficiently.

## Here's how the integration works
 
<img src="/img/docs/paralus-kamaji-blog.png" alt="paralus and kamaji integration" height="90%" width="90%"/>  
<br/>

- **Installing Paralus on the management cluster:** it will be used to expose the access and control the users' RBAC for the workloads clusters.
- **Provisioning Control Planes on Kamaji:** once ready, a valid kubeconfig will be generated and can be used by the Platform administrators.
- **Install the Paralus agent on each Tenant Control Plane:** for each cluster and their kubeconfig, the Paralus agent must be installed, waiting for their registration on the Paralus dashboard.
- **Configure Access and RBAC:** by grouping clusters into Projects, users provided by an Identity Provider can access the cluster according to the enforced RBAC. Users will be able to download a kubeconfig containing the available clusters already configured as cluster contexts: they need to set the desired context to interact with the selected cluster.


## Conclusion
Managing multiple Kubernetes clusters and federating access while maintaining robust RBAC practices is a complex task. However, the combination of Kamaji and Paralus offers a comprehensive solution that simplifies cluster management, enhances security, and streamlines RBAC operations.

With Kamaji's Kubernetes-in-Kubernetes approach and Paralus' centralized RBAC and authentication capabilities, organizations can effectively manage their clusters, achieve audit logging, and implement advanced RBAC practices, ultimately leading to improved efficiency, security, and compliance.

 
 
 
 