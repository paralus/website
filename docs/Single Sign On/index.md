---
title: Single Sign On
description: "Understand the SSO specific configurations for ZTKA."
sidebar_position: 5 
category: configuration
slug: /single-sign-on/
---

Single Sign ON (SSO) is a popular authentication mechanism that allows users to authenticate themselves with multiple applications and services using only a single set of credentials. You have two main entities here, one is the Service Provider(*your application*) and there's an Identity Provider. The service provider allows the user to authenticate themselves using any of the identity providers it supports - Google, Microsoft, GitHub, Okta etc. Most of these flows takes place using the OAuth2 protocol.

ZTKA also suppors SSO over OAuth2 using OIDC - Open ID Connect - that is an open source identity layer built on top of the exisiting OAuth2 protocol layer. It allows services providers to verify the identity of their end users based on the authentication performed by an identity provider. Read more about [Open ID Connect](https://openid.net/connect/).

## Identity Providers Support for ZTKA

Since ZTKA uses OIDC under the hood, it can work with virtually every identity provider that OIDC supports. Here's a list of all the identity providers that we've tested and work with ZTKA.

- [GitHub](github)
- [GitLab](gitlab)
- [Google](google)
- [OKTA](okta)
- [Slack](slack)

This document will be update as and when we test further identity providers. If you use any specific identity provider which is not present here, please feel free to Open an Issue.