---
slug: perimeter-vs-zero-trust-kubernetes
title: "Perimeter vs Zero Trust For Kubernetes"
authors: [atul]
tags: [zero trust]
---

In the last few years, organizations across the spectrum have seen changes in the way they work. Digital Transformation took the center stage and revamped the way employees worked. For many of us, our workplace was a 5x5 cubicle, but now it can be a beach, a hillock or even a treehouse. While that has brought joy for most of us, it was a nightmare for the CIOs and Infosec folks who were worried about the safety and security of their infrastructure.

With employees using their devices and network to connect to organization's infrastructure, there was a high risk involved. The existing security mechanisms that were in place were obsolete and there was a call for more robust security and access mechanisms.

<!--truncate-->

Mechanisms like perimeter security, VPNs are still popular, however there was a need for a robust, fool proof mechanism in place. This led to a rise in adoption of Zero trust.

In this blog post, we'll talk about Zero Trust from the point of view of Kubernetes and how it is different from perimeter security. We'll also look into zero trust principles and why it is important for Kubernetes.

## Securing Kubernetes: Perimeter vs Zero Trust

### Perimeter Security

One of the most widely used forms of security mechanism is perimeter security. The ideology here is simple, anyone inside the perimeter is trusted and anyone outside isn't. The access mechanism in case of perimeter based security model is based on the user and not the network, device or the location. So a user first has to be authenticated only after which they are allowed within the perimeter. Once inside, the users are authorized to access various resources.

A typical perimeter system deploys multiple tools including firewalls, surveillance tools as well as intrusion detection and pattern analysis tools. All of these work in tandem to protect an organization's resources from intruders.

<img src="/img/docs/perimeter-security-diagram.png" alt="Perimeter Security Diagram" />

**Pros:**

* First line of defense
* Relatively simple design & implementation

**Cons:**

* Protects only the openings, boundary
* Doesn't protect from Insider threat

In this age when everyone is a digital nomad, employees and customers today access your organization's data and resources from their own devices and networks. The perimeter wall essentially became fluid as organization allowed devices, users to get in and access their resources.

Hence a more modern, flexible, scalable and a more robust mechanism was required.

### Zero Trust

With such dynamic working conditions, the one factor that took center stage was trust. Should you trust every user or device within your perimeter? You may answer "It depends" but as per Zero Trust, "No! nothing should be trusted by default". Every user, device within a network is untrusted by default.

The framework requires all users to be authenticated, authorized, and validated continuously before granting them access to any application or data. It also iterates that users, devices, service accounts are provided access only to resources they need access to. It helps protect remote users, cloud or on-prem resources and threats.

<img src="/img/docs/zero-trust-principles.png" alt="Principles of Zero Trust For Kubernetes" />

**Pros:**

* Less vulnerabilities
* Prevents internal and external threats

**Cons:**

* Cumbersome setup
* Increased user/device management

The Zero Trust model is designed to address modern day threats and issues. Below are some benefits of Zero Trust over Perimeter security.

* Compared to perimeter security, Zero trust doesn't grant explicit and full access to anyone. This coupled with robust authentication and continuous authorization mechanisms, makes it difficult for attackers to access your data/application.
* Since a traditional perimeter security makes use of hardware devices, it's difficult to scale such a solution. In case of Zero trust, scaling is simpler and automated as well since it's a cloud based solution.

## Why Zero Trust is important For Kubernetes

When it comes to Kubernetes, there are a lot of moving parts and hence the security mechanism that we deploy must be able to work along with it. Being a cloud based model, Zero Trust takes care of all the resources at ease. Here's why Zero Trust is important for Kubernetes.

* In the case of Kubernetes where we have ephemeral resources that span across different clusters, it becomes much more difficult to manage.
* With Zero Trust you can create and enforce policies for your users at a very granular level. All the requests will be validated against these policies before providing access. This policy can consist of roles, user groups and permissions against which access requests are validated. This policy is what makes Zero Trust perfect for Kubernetes - _flexible and scalable_

One of the reasons why many organizations stay away from implementing Zero Trust is the complexity and efforts required to set it up correctly. However, with a zero trust based access management tool like Paralus you can easily configure and manage access to resources spread across multiple clusters.

Having established the consensus that zero trust is the preferred way to secure your Kubernetes resources, let us understand the key principles of Zero Trust.

## Principles of Zero Trust

* **Least privilege** - Give only the necessary access to users as they require. This minimizes a user's exposure to sensitive data. This can be done by carefully creating roles and choosing the right permission for the users. Read more about how Paralus achieves this using [Just In Time service account creation](https://www.paralus.io/blog/paralus-jit-access-service-account).
* **Continuous Verification** - Verify access continuously for all the resources.
* **Micro segmentation** - Instead of securing the complete cluster as a whole, Zero trust creates micro segments and secures different components within the cluster for enhanced protection. This will ensure that a user that has access to a particular pod will not be able to access other pods.
* **Limit blast radius** - Because of segmentation, Zero trust prevents lateral movement and limits the blast radius as the attacker will have to be re-authorized and validated before being able to access any particular resource. Further it also helps prevent any threat from either external or an internal user.
* **Multi factor Authentication** - Zero trust also requires multiple ways to authenticate a user before providing the access. Simply providing a password is not considered to be safe and an additional layer is required to make it more robust. Most common way is using OTPs and TOTPs as 2 factor authentication.

## Conclusion

Zero trust comes with a suite of benefits for the modern day workforce. It's a match made in heaven for Kubernetes that has so many different components. While organizations want to implement zero trust solutions for their Kubernetes clusters, the complexity involved in implementing it is a hurdle.

However, this can be made easier with Paralus. Paralus makes it easy for you to manage access to all your Kubernetes clusters from one single dashboard. With just a few clicks, you can import clusters hosted on various cloud services or on prem and configure access to them.

Check out our blog post on how to [manage access to multiple Kubernetes clusters](https://www.paralus.io/blog/centralized-kubectl-access).
