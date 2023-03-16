---
title: GitHub
description: "Configuring GitHub as Identity Provider for Paralus"
category: configuration
slug: /single-sign-on/github

---

In this document, we'll show you how to use GitHub as an Identity provider for Paralus. This will allow your users to login via GitHub and access Paralus. Below is the list of items that we will cover in this document:

- [Creating a GitHub SSO Application](#creating-a-github-sso-application)
- [Adding an Identity Provider to Paralus](#adding-an-identity-provider-to-paralus)
- [Verify Login with GitHub](#verify-login-with-github)

## Creating a GitHub SSO Application

Login to your GitHub account and navigate to `Profile -> Settings -> Developer Settings -> OAuth Apps` and **Create a new OAuth App**.

<img src="/img/docs/paralus-github-oauth-1.png" alt="Creating New GitHub OAuth App" height="75%" width="75%"/>

Provide details like the Name and Description. For homepage url, provide the url to your Paralus dashboard.

Leave the **Application Callback URL** empty for now and Register the application.

Note down the `client-id` and `client-secret` as those will be required to configure identity provider for Paralus.

## Adding an Identity Provider to Paralus

Login to your Paralus dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name for the identity provider and choose IdP type `Github` from the drop down.

For client identifier & secret, provide the `client-id` & `client-secret` of the GitHub app created earlier.

Under **Scopes** provide `user:email`

For **Issuer URL**, provide this url: `https://token.actions.githubusercontent.com`

<img src="/img/docs/paralus-github-idp-1.png" alt="Adding new identity provider in Paralus" height="75%" width="75%"/>

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the GitHub OAuth app created in the earlier step.

On the **Mapper Configuration** screen, the mapper url will be pre-filled, click Save & Exit.

At this point, you have successfully added Github as an identity provider for Paralus.

## Verify Login with GitHub

To confirm if the setup was correct, logout from Paralus.

On the login screen, you should now see a `Sign In With GitHub` button. Click on it to begin the login process using Github.

<img src="/img/docs/paralus-github-idp-login.png" alt="Login using GitHub" height="75%" width="75%" />

Enter your GitHub credentials and login to GitHub.

<img src="/img/docs/paralus-github-idp-login-3.png" alt="Authenticate on GitHub" height="75%" width="75%"/>

Once authenticated, you'll be redirected to Paralus dashboard.

Congratulations! You've successfully configured GitHub as an identity provider for Paralus.

> Note: Depending on the permission, the user that logs in using GitHub might not see any projects on the dashboard. As an admin, you'll have to configure their [group](../usage/groups) and assign them a [project](../usage/projects).
