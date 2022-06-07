---
title: GitLab
description: "Configuring GitLab as Identity Provider"
slug: /single-sign-on/gitlab
---

In this document, we'll show you how to use GitLab as an Identity provider. This will allow your users to login via GitLab and access ZTKA. Below is the list of items that we will cover in this document:

- [Creating a GitLab SSO Application](#creating-a-gitlab-sso-application)
- [Adding an Identity Provider to ZTKA](#adding-an-identity-provider-to-ztka)
- [Verify Login with GitLab](#verify-login-with-gitlab)

## Creating a GitLab SSO Application

Login to your GitLab account and navigate to `Profile -> Applications` and **Create a new OAuth App**.

<img src="/img/docs/oidc-gitlab1.png" alt="Creating New GitLab OAuth App" />
Creating New GitLab OAuth App

Leave the **Application Callback URL** empty for now and Register the application.

Note down the `client-id` and `client-secret` as those will be required to configure identity provider for ZTKA.

## Adding an Identity Provider to ZTKA

Login to your ZTKA dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type from the drop down. *Incase your identity provider is not in the list, choose Others.*

For client identifier & secret, provide the `client-id` & `client-secret` of the GitLab app created earlier.

Under **Scopes** provide `openid, profile, email`

For **Issuer URL**, provide this url: `https://gitlab.com`

<img src="/img/docs/oidc-gitlab-3.png" alt="Adding new identity provider in ZTKA" />
Adding new identity provider in ZTKA

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the GitLab OAuth app created in the earlier step.

On the **Mapper Configuration** screen, provide `https://raw.githubusercontent.com/RafayLabs/rcloud-base/main/_kratos/oidc-mappers/gitlab.jsonnet?token=GHSAT0AAAAAABPXWZYZLBDBGGIMETKTV7GGYUW4MYQ` as the mapper url.

Click Save & Exit.

At this point, you have successfully added GitLab as an identify provider for ZTKA.

## Verify Login with GitLab

To confirm if the setup was correct, logout from ZTKA.

On the login screen, you should now see a `Sign In With GitLab` button. Click on it to begin the login process using GitLab.

<img src="/img/docs/oidc-gitlab-4.png" alt="Login using GitLab" />
Login using GitLab

Enter your GitLab credentials and login to GitLab. All the application to access the respective details and sign in.

<img src="/img/docs/oidc-gitlab-5.png" alt="Login using GitLab - providing credentials" />
Login using GitLab - providing credentials

Once authenticated, you'll be redirected to ZTKA dashboard.

<img src="/img/docs/oidc-gitlab-7.png" alt="Redirect to ZTKA" />
Redirect to ZTKA

> Note: Depending on the permission, the user that logs in using GitLab might not see the above screen. As an admin, you'll have to configure their group and assign them a project.

Congratulations! You've successfully configured GitLab as an identity provider for ZTKA.
