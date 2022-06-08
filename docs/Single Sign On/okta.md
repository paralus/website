---
title: Okta
description: "Configuring Okta as Identity Provider for Paralus"
slug: /single-sign-on/okta

---

In this document, we'll show you how to use Okta as an Identity provider for Paralus. This will allow your users to login via Okta and access Paralus. Below is the list of items that we will cover in this document:

- [Creating a Okta SSO Application](#creating-a-okta-sso-application)
- [Adding an Identity Provider to Paralus](#adding-an-identity-provider-to-paralus)
- [Verify Login with Okta](#verify-login-with-okta)

## Creating a Okta SSO Application

Login to your Okta account as an admin and navigate to `Applications -> Applications` and **Create a new App Integration**.

In the dialog that opens, choose **OIDC - Open ID Connect** as the **Sign-in Method** and **Web Application** as the **Applicaton Type.**

On the next screen provide a name for the application. Under **Assignments -> Controlled Access**, select `Skip Group Assignment For Now`

<img src="/img/docs/oidc-okta-1.png" alt="Creating New Okta OAuth App" height="75%" width="75%"/>

Leave the **Application Callback URL** empty for now and Register the application.

Note down the `client-id` and `client-secret` as those will be required to configure identity provider for Paralus.

## Adding an Identity Provider to Paralus

Login to your Paralus dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type from the drop down. *Incase your identity provider is not in the list, choose Others.*

For client identifier & secret, provide the `client-id` & `client-secret` of the Okta app created earlier.

Under **Scopes** provide `openid, profile, email`

For **Issuer URL**, provide the url for your Okta Account. *For example: https://dev-8830220.okta.com*

<img src="/img/docs/oidc-okta-5.png" alt="Adding new identity provider in Paralus" height="75%" width="75%"/>

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the Okta OAuth app created in the earlier step.

The **Mapper Configuration** will be set for Okta, so you don't need to change anything on this screen.

On the **Mapper Configuration** screen, provide `https://gist.githubusercontent.com/akshay196/34a8223622554bfa065800108d6f1a34/raw/3e96e2c211839f170655334e3d69fedbe9cb4857/okta.jsonnet` as the mapper url.

Click Save & Exit.

At this point, you have successfully added Okta as an identify provider for Paralus.

## Verify Login with Okta

To confirm if the setup was correct, logout from Paralus.

On the login screen, you should now see a `Sign In With Okta` button. Click on it to begin the login process using Okta.

<img src="/img/docs/oidc-okta-3.png" alt="Login using Okta" height="75%" width="75%"/>

Enter your Okta credentials and login. All the application to access the respective details and sign in.

<img src="/img/docs/oidc-okta-4.png" alt="Login using Okta - providing credentials" height="75%" width="75%"/>

Once authenticated, you'll be redirected to Paralus dashboard.

<img src="/img/docs/oidc-okta-6.png" alt="Redirect to Paralus" height="75%" width="75%"/>

> Note: Depending on the permission, the user that logs in using GitHub might not see the above screen. As an admin, you'll have to configure their [group](../usage/groups) and assign them a [project](../usage/projects).

Congratulations! You've successfully configured Okta as an identity provider for Paralus.
