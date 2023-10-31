---
slug: security-best-practices-with-paralus-and-falco
title: "Security Best Practices for Multi-Tenant Architectures with CNCF projects Paralus and Falco"
authors: [naveen, thomas]
tags: [paralus, falco]
---

Organizations today need to efficiently manage resources, ensure security, and foster innovation—all within shared environments. [MultiTenancyCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/co-located-events/multi-tenancycon/), a co-located event at [KubeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) is where the brightest minds in the industry come together to address these challenges head-on.

<!--truncate -->

## What is Multi-Tenancy?
Using a single cluster with appropriate namespaces for different applications allows efficient resource sharing, streamlined management, and better scalability. This concept, called multi-tenancy, sharing clusters saves costs and simplifies administration. 
In order to reduce costs and decrease operational overhead, the model that customers are increasingly adopting is to standardize on shared clusters as the default and create a dedicated cluster only when certain considerations are met. 

#### Some of those considerations include
- Application has low latency requirements (target SLA/SLO is significantly different from others)
- Application has specific requirements that are unique to it (e.g. GPU worker nodes, CNI plugin)
- Based on Type of environment – ‘Prod’ has dedicated clusters and ‘Dev’, and ‘Test’ environments have shared clusters

#### Challenges
With multi-tenant clusters, there are certain challenges that customers have to solve from a security and operational efficiency standpoint. Some of those include

- **Access Control:** Enabling a Zero Trust model for K8s infrastructure access
- **Runtime security:** Monitoring and detecting abnormal behavior and possible threats in real time
- **Noisy Neighbor issues:** Enforcing resource quotas and ensuring isolation of namespaces belonging to different teams/applications
- **Policy Enforcement:** Implementing necessary guardrails to ensure compliance (e.g. appropriate labels for resources)
- **Resource Utilization & Chargeback:** Understanding usage and apportioning costs across teams/applications

At this year's MultitenancyCon, Paralus maintainer Naveen Chakrapani and Falco maintainer Thomas Labarussias will be participating in a talk, [Enhanced Security for Multi-Tenant Architectures: Key Components and Best Practices](https://colocatedeventsna2023.sched.com/event/1Rj6V/enhanced-security-for-multi-tenant-architectures-key-components-and-best-practices-naveen-chakrapani-rafay-systems-thomas-labarussias-sysdig) that will focus on Challenges #1 and #2 highlighted above.

## Access Control with Paralus
[Paralus](https://www.paralus.io/)  is a powerful access management solution designed to simplify and centralize access control for Kubernetes. It enables a Zero Trust Access Model with  Just-In-Time (JIT) account creation, automated RBAC (Role-Based Access Control) federation, and centralized audit trails for all user/kubectl activities.

#### Key benefits of Paralus include:
- **Secure access management:** Paralus helps you implement a robust access control strategy, ensuring that only authorized users and processes can interact with your clusters.
- **Automated RBAC:** Managing RBAC policies across multiple clusters can be challenging. Paralus streamlines this process, making RBAC management efficient and error-free.
- **Auditability:** Paralus provides centralized audit trails, helping you maintain visibility into who accessed your clusters and what actions were performed.

In addition to the talk, you can also meet team #paralus at KubeCon, [kiosk F35](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/project-engagement/#floor-plan) and learn how Paralus can help implement a Zero Trust Access model for K8s access and reduce the cognitive load for platform teams and developers.
 
## Runtime Security with Falco
Falco is an open-source runtime security tool for containers and Kubernetes. It allows you to monitor and detect abnormal behavior and possible threats in your infrastructures in real-time. By collecting the syscalls at the kernel level thanks to its performant eBPF probe, and by defining easy to read rules, Falco can alert you of potential security threats, such as unauthorized access attempts, privilege escalations, or abnormal process activities.

#### Key benefits of Falco include:
- **Real-time threat detection:** Falco constantly monitors your applications and clusters and alerts you to security incidents as they happen.
- **Customizable rules:** You can create custom rules tailored to your specific security requirements.
- An eBPF probe plugged to your kernel for better performance.
- **Plugins:** to extend the sources of events, like k8s audit logs or AWS Cloudtrail.
- You can easily integrate Falco in your ecosystem, 60+ integrations are available for the alerts, from chat to message queues and FaaS.

In addition to the talk, you can also meet team Falco at KubeCon, [kiosk F26](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/project-engagement/#floor-plan) and learn more about increasing security posture for your K8s environments in a performant manner.

## Conclusion
Multitenancy is a shared responsibility between providers and tenants. The talk at MultitenancyCon is aimed to underscore the importance of this responsibility and provide practical insights into securing multi-tenant clusters effectively.

Enhancing security for kubernetes multi-tenant architectures is not a one-time effort; it's an ongoing journey that requires vigilance, education, and a commitment to best practices. By following these key components and best practices, organizations can fortify their multi-tenant environments and build trust among their users or customers.