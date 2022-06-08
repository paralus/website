---
title: Slack
description: "Configuring Slack as Identity Provider for Paralus"
slug: /single-sign-on/slack

---

In this document, we'll show you how to use Slack as an Identity provider for Paralus. This will allow your users to login via Slack and access Paralus. Below is the list of items that we will cover in this document:

- [Creating a Slack SSO Application](#creating-a-slack-sso-application)
- [Adding an Identity Provider to Paralus](#adding-an-identity-provider-to-paralus)
- [Verify Login with Slack](#verify-login-with-slack)

## Creating a Slack SSO Application

Login to your Slack account and **Create a new Slack App**. Choose a workspace that will be associated with your app.

<img src="/img/docs/oidc-slack-1.png" alt="Creating New Slack App" height="75%" width="75%"/>

Leave the **Application Redirect URL** empty for now and create the application.

Note down the `client-id` and `client-secret` as those will be required to configure identity provider for Paralus.

You also need to configure the scopes for your Slack application. Navigate to `Features -> OAuth & Permissions` and add `identity.basic`, `identity.email` & `openid` as scopes.

> Note: Ensure that you add scopes for **User Token Scopes** & not Bot Token Scopes.

<img src="/img/docs/oidc-slack-2.png" alt="Configuring Scopes" height="75%" width="75%"/>

## Adding an Identity Provider to Paralus

Login to your Paralus dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type as `Slack` from the drop down. *Incase your identity provider is not in the list, choose Others.*

For client identifier & secret, provide the `client-id` & `client-secret` of the Slack app created earlier.

Under **Scopes** provide `identity.basic` and `identity.email`

For **Issuer URL**, provide this url: `https://slack.com`

<img src="/img/docs/oidc-slack-3.png" alt="Adding new identity provider in Paralus" height="75%" width="75%"/>

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the redirect URL for the Slack OAuth app created in the earlier step.

On the **Mapper Configuration** screen, provide `https://raw.githubusercontent.com/paralus/core/main/_kratos/oidc-mappers/slack.jsonnet?token=GHSAT0AAAAAABPXWZYZR2EXM74KFPRRQZUCYVAFNPA` as the mapper url. Click Save & Exit.

At this point, you have successfully added Slack as an identify provider for Paralus.

## Verify Login with Slack

To confirm if the setup was correct, logout from Paralus.

On the login screen, you should now see a `Sign In With Slack` button. Click on it to begin the login process using Slack.

<img src="/img/docs/oidc-slack-4.png" alt="Login using Slack" height="75%" width="75%"/>

Enter your Slack credentials and login to Slack. Allow the application to access the respective permissions/scopes and sign in.

<img src="/img/docs/oidc-slack-5.png" alt="Authenticate on Slack" height="75%" width="75%"/>

Once authenticated, you'll be redirected to Paralus dashboard.

<img src="/img/docs/oidc-google-8.png" alt="Redirect to Paralus" height="75%" width="75%"/>

> Note: Depending on the permission, the user that logs in using GitHub might not see the above screen. As an admin, you'll have to configure their [group](../usage/groups) and assign them a [project](../usage/projects).

Congratulations! You've successfully configured Slack as an identity provider for Paralus.
