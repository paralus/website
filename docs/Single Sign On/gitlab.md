---
title: GitLab
description: "Configuring GitLab as Identity Provider for Paralus"
slug: /single-sign-on/gitlab
---

In this document, we'll show you how to use GitLab as an Identity provider for Paralus. This will allow your users to login via GitLab and access Paralus. Below is the list of items that we will cover in this document:

- [Creating a GitLab SSO Application](#creating-a-gitlab-sso-application)
- [Adding an Identity Provider to Paralus](#adding-an-identity-provider-to-paralus)
- [Verify Login with GitLab](#verify-login-with-gitlab)

## Creating a GitLab SSO Application

Login to your GitLab account and navigate to `Profile -> Applications` and **Create a new OAuth App**. Choose `email`, `profile`, `read_user`, `openid` as the scopes.

<img src="/img/docs/paralus-gitlab-oauth.png" alt="Creating New GitLab OAuth App" height="75%" width="75%"/>

Leave the **Application Callback URL** empty for now and Register the application.

Note down the `client-id` and `client-secret` as those will be required to configure identity provider for Paralus.

## Adding an Identity Provider to Paralus

Login to your Paralus dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type as `Generic` from the drop down.

For client identifier & secret, provide the `client-id` & `client-secret` of the GitLab app created earlier.

Under **Scopes** provide `openid, profile, email, read_user`

For **Issuer URL**, provide this url: `https://gitlab.com`

<img src="/img/docs/paralus-gitlab-idp-1.png" alt="Adding new identity provider in Paralus" height="75%" width="75%"/>

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the GitLab OAuth app created in the earlier step.

On the **Mapper Configuration** screen, provide `https://raw.githubusercontent.com/paralus/paralus/main/_kratos/oidc-mappers/gitlab.jsonnet` as the mapper url.

Click Save & Exit.

At this point, you have successfully added GitLab as an identity provider for Paralus.

## Verify Login with GitLab

To confirm if the setup was correct, logout from Paralus.

On the login screen, you should now see a `Sign In With GitLab` button. Click on it to begin the login process using GitLab.

<img src="/img/docs/paralus-gitlab-login-1.png" alt="Login using GitLab" height="75%" width="75%"/>

Enter your GitLab credentials and login to GitLab.

<img src="/img/docs/paralus-gitlab-login-2.png" alt="Login using GitLab - providing credentials" height="75%" width="75%"/>

Once authenticated, you'll be redirected to Paralus dashboard.

Congratulations! You've successfully configured GitLab as an identity provider for Paralus.

> Note: Depending on the permission, the user that logs in using GitLab might not see any projects on the dashboard. As an admin, you'll have to configure their [group](../usage/groups) and assign them a [project](../usage/projects).