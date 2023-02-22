---
slug: paralus-kcd-pakistan-2023
title: "Paralus at KCD Pakistan - 2023"
authors: [atul]
tags: [paralus]
image: /img/docs/Paralus-KCD-Pakistan-2023-AtulpriyaSharma.jpeg
---

Applications today have become advanced and complex. They can perform simple tasks like adding up two numbers to controlling a rocket in space. Irrespective of what the application does, ensuring that the application and the underlying infrastructure is safe and secured is critical.

So as teams and organizations build applications, we want to ensure that their infrastructure is secured. That was one of the reasons we came up with Paralus. We went a step further and [donated it to the CNCF](http://paralus.io/blog/paralus-cncf-sandbox-project) to help the community and also in turn build Paralus.

<!--truncate -->

While we do all of it, I also try to spread the word about Paralus and talk about the things it can do to secure your Kubernetes clusters. As part of that, I recently spoke about Zero Trust Security and Paralus at **Kubernetes Community Days, Pakistan**.

In a talk titled "**From Perimeter to Zero Trust, Securing Kubernetes Clusters with Paralus**", I spoke about the evolving nature of threats, technologies that help prevent them, security options in Kubernetes, and also how Paralus can help you secure your Kubernetes clusters through a small demo.

<img src="/img/docs/Paralus-KCD-Pakistan-2023-AtulpriyaSharma.jpeg" alt="Atulpriya Sharma talks about Paralus at KCD Pakistan" height="90%" width="90%"/>

## Threats Then & Now

I spoke about how the threats have evolved over the years. From the time when we used floppy disks to transmit information to using the internet. Viruses and trojans were popular during the floppy era. However in the internet era, phishing attacks to DDoS and even IoT-based threats where devices are compromised have become common.

While the threats evolved, our security mechanisms did evolve too. From having basic anti-virus and malware applications to deploying firewalls and intrusion and threat-detection tools. However, with the continuous evolution of such threats, the existing mechanism needed an overhaul. That's when Zero Trust became the front-runner and is the gold standard of security today.

<img src="https://pbs.twimg.com/media/FpZmkTaWIAEQFld.jpg" alt="KCD Pakistan" height="90%" width="90%"/>
<br/>Paralus at KCD Pakistan

## Security Mechanisms in Kubernetes

Kubernetes as we all know has become the operating system of the cloud. Most organizations are running their applications Kubernetes. Initially, though, Kubernetes didn't focus much on security. However, the team soon realized the scale of adoption and started focusing on security.

That's when the Kubernetes security project was founded and the whole focus of this project was to improve the security of Kubernetes and give some native mechanisms that can safeguard your Kubernetes cluster. Things like **Role-Based Access Control (RBAC)**, and **Network** and **Admission policies** were some of the means that were added.

<img src="https://pbs.twimg.com/media/FpZr5JrXEAARbre.jpg" alt="KCD Pakistan" height="90%" width="90%"/>
<br/>Attendees at KCD Pakistan

## The Emergence of Zero Trust

However, configuring these native mechanisms at scale is error-prone & the effort required is momentous. Hence a more robust solution that's not only secure but easy to deploy was required. That's where Zero Trust comes in.

With the philosophy of **trust nothing**, Zero Trust uses the least privilege principle to control access and focuses on auditing. You can also read our previous blog post on [Perimeter vs Zero Trust](https://www.paralus.io/blog/perimeter-vs-zero-trust-kubernetes) to know more.

Paralus comes with Zero Trust baked in and is super easy to deploy. Below are the salient feature of Paralus:

- Creation of **custom roles**, users, and groups.
- Ability to control access via **pre-configured roles** across clusters, namespaces, projects, and more.
- **Seamless integration with Identity Providers** (IdPs) allowing the use of external authentication engines for users and group definitions, such as GitHub, Google, Azure AD, Okta, and others.
- **Automatic logging** of all user actions performed for audit and compliance purposes.
- Interact with Paralus either with a modern web **GUI** (default), a CLI tool called **pctl**, or Paralus **API**.

You can refer to our [quickstart guides](https://www.paralus.io/docs/quickstart/) to get started with Paralus.

Watch the complete video of my talk at KCD Pakistan and see how Paralus helps secure your Kubernetes clusters with ease.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/RCQJq966sK8" title="Atulpriya Sharma talks about Paralus at KCD Pakistan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Together We Can Grow!

We couldn't have asked for a better start to 2023 than this. We're a small team of maintainers and our project is easy to get involved with. And hence, we'd want you to join and contribute to Paralus. We'd love your involvement and support, here's what you can do:

- Join [#Paralus](https://kubernetes.slack.com/archives/C04MK1JFFV3) on Kubernetes Slack
- Follow us on [Twitter](https://twitter.com/paralus_)
- Give a star on [GitHub](https://github.com/paralus/paralus)
- Join Paralus as a [contributor](https://github.com/paralus/paralus/blob/main/CONTRIBUTING.md)

Looking forward to you joining us and helping us adopt and take Paralus to the next level.
