---
slug: paralus-platformcon-2023
title: "Paralus at PlatformCon - 2023"
authors: [saim]
tags: [paralus]
image: /img/docs/paralus-platformcon-2023-speaker-banner.jpeg 
---

With over 150 speakers and 20,000 attendees [PlatformCon 2023](https://platformcon.com/), the virtual conference created by and for platform engineers was a hub of activity and excitement for tech enthusiasts and industry professionals alike. Team Paralus was also a part of such a vibrant community for the second edition of PlatformCon.

This event brought together a global community of techies, developers, and platform engineers to share the latest advancements and trends in the field of platform engineering. 

The event also featured a diverse range of talks ranging from platform-culture, platform-blueprint, platform-impact to platform-stories. You can watch all the sessions on the  [Platform Engineering YouTube Channel](https://www.youtube.com/@PlatformEngineering).  

<!--truncate -->

In this blog post, we'll be sharing our experience of interacting with attendees at [PlatformCon 2023](https://platformcon.com/) virtually, some glimpses of our talk - [Enable secure self-service access to Kubernetes clusters with Paralus](https://www.youtube.com/watch?v=UbLnCGOv0Rk). where we spoke about how Paralus removes the cognitive load from platform teams working on repetitive tasks including setting up RBAC, revoking permissions, pre-configuring roles across clusters, namespaces, projects, and more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UbLnCGOv0Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<br/>
<br/>

During [PlatformCon 2023](https://platformcon.com/), we were inundated with visitors reaching out to us on the Platform Engineering community [slack channel](https://platformengin-b0m7058.slack.com/join/shared_invite/zt-1vsqjlb51-SiDy9cp2EBGffIUj5_g2mA#/shared-invite/email), who were keen to learn more about our project. We had some quick demos on how to use the project, along with some tasty cookies and cool stickers to give away. The visitors were curious about the project and its potential, and some of them even reached out for a dedicated demo of the tool post PlatformCon.   

Platform engineering was the most discussed topic at PlatformCon. As software gets more complex and Kubernetes enters the enterprise, the idea of Kubernetes being a “platform for platforms” is becoming more and more ubiquitous. 

## What is Platform engineering
Platform engineering is a discipline focused on building and maintaining the underlying infrastructure and tools that enable developers to build, deploy, and run software applications efficiently. It involves creating a stable and scalable platform that provides a foundation for software development, deployment, and operations.

**Six Guiding Principles For Platform Teams**
- **Consistent Automation:** By leveraging GitOps methodologies platform teams are able to empower developers to leverage self-service workflows that they are comfortable with.
- **Security Preparedness:** With the right access to the right roles, separation of duties becomes easier to implement and enforce, and it becomes easier for the platform and security teams to protect against unauthorized use.
- **Centralized Visibility:**
Teams should always be able to review alerts, verify cluster health and check metrics that are relevant to them through a single pane of glass.
- **Governance:** Centralizing governance helps prevent violations and creates standardization across your clusters.
- **Kubernetes Distribution Flexibility:** The common practice in the industry is not to deploy a single distribution everywhere but to select the distribution that is best suited for the environment in question.
- **Oriented To Self-Service:**  Standardized, automated shared services help organizations scale teams’ access to compute resources.

Read more about the [guiding principles for platform teams](https://www.forbes.com/sites/forbestechcouncil/2023/02/23/how-to-empower-modern-kubernetes-management-with-a-platform-team-model/?sh=1690484c52c7)

*In the section below we will be referring to more on this concept **Security Preparedness,** * typical challenges that enterprises face, how paralus can help platform teams enable a seamless kubectl experience, and centralize the config of k8s access controls for their developers across clusters running in public cloud environments and/or on-premise data centers.

## Why securing access to Kubernetes is important? 

The inability to secure Kubernetes infrastructure is a growing problem for organizations. In May 2022, a non-profit security organization named [The Shadowserver Foundation](https://www.shadowserver.org/news/over-380-000-open-kubernetes-api-servers/) scanned more than 450,000 systems hosting Kubernetes and found more than 380,000 (84 percent) of these systems were accessible via the Internet, potentially providing an opening into a corporate network. In fact, the data shows that the majority of Kubernetes API servers are found in the United States (nearly 53 percent).


## Traditional challenges of Kubernetes access management

Access management in Kubernetes can pose several challenges, some of which are considered traditional pain points for administrators:

- **Complexity**: Kubernetes has a complex access control model, involving multiple components and concepts like Roles, RoleBindings, ServiceAccounts, and ClusterRoles. Understanding and managing these components can be challenging, especially for beginners or organizations without prior experience with Kubernetes.

- **Role-Based Access Control (RBAC) Configuration**: Configuring RBAC policies accurately and efficiently is crucial for secure access management. Designing and implementing RBAC rules that align with an organization's security requirements can be complex, particularly when dealing with a large number of users, teams, and applications.

- **Dynamic Environments**: Kubernetes environments are often dynamic, with pods and services frequently created, updated, and deleted. Managing access control in such dynamic environments can be challenging, as permissions need to be adjusted accordingly to ensure users and applications have the appropriate access to resources.

- **Lack of Native Support for External Authentication Providers**: Kubernetes primarily supports authentication through client certificates, bearer tokens, and static token files. However, integrating Kubernetes with external authentication providers, such as LDAP, Active Directory, or OAuth, can be challenging and often requires additional configuration or third-party tools.

- **Secrets Management**: Kubernetes has a built-in Secrets API to manage sensitive information, but securely managing access to these secrets can be challenging. Ensuring that only authorized entities can access and use secrets while keeping them protected from unauthorized access or accidental exposure requires careful configuration and monitoring.

- **Auditing and Compliance**: Maintaining audit logs and ensuring compliance with regulatory requirements can be demanding in Kubernetes. Tracking and reviewing access logs, managing permissions and changes, and generating comprehensive reports are essential but can be time-consuming and require specialized tools or integrations.

Addressing these challenges often involves a combination of well-defined processes, training, automation, and the use of specialized tools to simplify access management and enhance security in Kubernetes environments.

## Enters Paralus, centralized RBAC and authentication solution

[Paralus](https://github.io/paralus/paralus) is an open-source project that focuses on RBAC and authentication in Kubernetes environments. It offers a single pane of glass for RBAC management and enhances security through centralized control. 

<img src="/img/docs/paralus-platformcon-2023.png" alt="how paralus works" height="90%" width="90%"/>  


## Zero-Trust Kubernetes access with Paralus

Paralus grants authorized users seamless and secure access to all clusters with a native and familiar kubectl experience by acting as a proxy between the users and systems needing access and the Kubernetes API server. It also addresses one of Kubernetes' main pain points by eliminating the burden of managing Kubernetes access controls cluster by cluster. Without Paralus, companies must manually manage access to each cluster using jump hosts or VPNs, and build custom tooling to audit and map all actions performed to a user's identity – all of which which is error-prone and increases the risk of breaches as the number of clusters grows.  

Benefits of using Paralus:

- **Secure Access Federation**: Paralus acts as the entry point for accessing all managed clusters, ensuring secure authentication and authorization across the board. It enforces consistent access controls and policies, reducing the risk of unauthorized access.

- **RBAC Simplification**: Paralus provides a centralized interface for managing RBAC across all clusters, enabling administrators to define and enforce role-based access at scale. This streamlines the process of granting permissions and ensures consistent authorization policies for developers.

- **Audit Logging and Compliance**: Paralus captures detailed audit logs of user activities, allowing organizations to meet compliance requirements and investigate any security incidents or policy violations efficiently.

## Conclusion 

Managing multiple Kubernetes clusters and federating access while maintaining robust RBAC practices is a complex task. However, Paralus offers a comprehensive solution that simplifies cluster management, enhances security, and streamlines RBAC operations.

Paralus' centralized RBAC and authentication capabilities, organizations can effectively manage their clusters, achieve audit logging, and implement advanced RBAC practices, ultimately leading to improved efficiency, security, and compliance.


## Together We Can Grow!

We're a small team of maintainers and our project is easy to get involved with. And hence, we'd want you to join and contribute to Paralus. We'd love your involvement and support, here's what you can do:

- Join [#Paralus](https://kubernetes.slack.com/archives/C04MK1JFFV3) on Kubernetes Slack
- Follow us on [Twitter](https://twitter.com/paralus_)
- Give a star on [GitHub](https://github.com/paralus/paralus)
- Join Paralus as a [contributor](https://github.com/paralus/paralus/blob/main/CONTRIBUTING.md)
- You can refer to our [quickstart guides](https://www.paralus.io/docs/quickstart/) to get started with Paralus.


**Remember:** *Not every user needs the unrestricted ability to create, modify and delete kubernetes resources*. 



