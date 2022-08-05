---
title: "Core Components"
description: "Core components of Paralus architecture"
slug: /architecture/core-components
---

These are the core components of Paralus that provide core features including Zero Trust functionality. There are 5 core components of Paralus and each of them have their own repo.

- [Paralus](#paralus)
- [Relay](#relay)
  - [Relay Server](#relay-server)
  - [Relay Agent](#relay-agent)
- [CLI](#cli)
- [Dashboard](#dashboard)
- [Prompt](#prompt)

## Paralus

It exposes APIs that allows you to create and manage organization, projects, clusters, roles etc. This is at the heart of Paralus and responsible for authorization and authentication. It makes use of the following components for authentication & authorization:

- **Kratos:** Paralus makes use of [Ory Kratos](https://github.com/ory/kratos) open source library that takes care of authentication.
  

- **Casbin:** Authorization is done by [Casbin](https://github.com/casbin/casbin). It also enforces policies and ensure that only authorized requests are forwarded to the Relay server and eventually executed on the cluster.
  

- **Sentry:** [Sentry](https://github.com/getsentry/sentry) is another open source library that generates unique kubeconfig file for each user based on the policy definition. It provides an API endpoint to authenticate kubectl user requests and maps it to a user profile. It also takes care of roles, role bindings and Kubernetes related authentication related tasks.


To know more about Paralus, check out the [Paralus GitHub Repo](https://github.com/paralus/paralus).

## Relay

Relay is comprised of two parts, a Relay Server and a Relay Agent. Both of these work together allow the execution of kubectl commands on the target cluster.

### Relay Server

It acts as a KubeAPI proxy and enforces access policies at the edge. It forwards only authenticated and authorized kubectl requests to the cluster. Accepts connections at `*.user.domain-name` and `core-connector.domain-name` endpoint. This involves TLS termination with client certificate validation using  Paralus Certifying Authority. Upstream `kubectl` request to relay agents, establishes a long lasting channel between with agents deployed in cluster using gRPC

### Relay Agent

The Relay agent runs on the Kubernetes cluster and establishes a gRPC channel with sentry service to register the cluster with Paralus. It connects to te Relay server and forward authenticated/authorized kubectl requests to cluster Kube-API server. Based on the user policy, this creates a just-in-time service accounts.

To know more about Relay, check out the [Relay GitHub Repo](https://github.com/paralus/relay).

## CLI

Paralus also comes with a command line tool called `pctl` that you can use to interact with Paralus. You can download the CLI binary, install it and access Paralus using the command line. Currently, `pctl` requires Paralus to be installed along with the dashboard. It doesn't work without that. It's part of our roadmap to make pctl run independently.

We suggest you to read more about [CLI](/docs/usage/cli). Check out the [CLI GitHub Repo](https://github.com/paralus/cli).
  
## Dashboard

The dashboard is the primary way a user interacts with Paralus. It is an intuitive graphical user interface that allows the user to use all the feaures of Paralus. Check out the [Dashboard GitHub Repo](https://github.com/paralus/dashboard).
  
## Prompt

Paralus also provides a web based CLI tool called prompt. It allows the user to execute kubectl commands on designated clusters from the dashboard itself. Check out the [Prompt Repo](https://github.com/paralus/prompt).
