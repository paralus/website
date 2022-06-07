---
title: Google
description: "Configuring Google as Identity Provider"
slug: /single-sign-on/google

---

In this document, we'll show you how to use Google as an Identity provider. This will allow your users to login via Google and access ZTKA. Below is the list of items that we will cover in this document:


- [Creating a Google SSO Application](#creating-a-google-sso-application)
  - [Configuring the OAuth Consent UI](#configuring-the-oauth-consent-ui)
  - [Creating OAuth App](#creating-oauth-app)
- [Adding an Identity Provider to ZTKA](#adding-an-identity-provider-to-ztka)
- [Verify Login with Google](#verify-login-with-google)

## Creating a Google SSO Application

Create a new Project if you haven't already. From the top search bar, search for OAuth. You first need to create an OAuth application and provide details for the OAuth consent screen.

### Configuring the OAuth Consent UI

1. Configure the OAuth consent screen by choosting the type of user who would use your application - **Internal** or **External**. Internal users are users from your organization, external are users with a valid Google account. We choose Internal in this case.

    <img src="/img/docs/oidc-google-1.png" alt="Choosing the User Type - Google OAuth" />
    Choosing the User Type - Google OAuth

2. Provide a name for the application, a user admin email id along with authorized domains. Make sure the authorized domain is SSL enabled. If you don't proivde an SSL enaled domain name, Google won't allow you to use certain fields.

    <img src="/img/docs/oidc-google-2.png" alt="Configuring Google OAuth Consent Screen" />
    Configuring Google OAuth Consent Screen

3. Choose a scope. Scopes are the fields that you want to access from your application. In this case we need access to the user profile with email address and name and oidc.

    <img src="/img/docs/oidc-google-3.png" alt="Choosing the scope." />
    Choosing the Scope

### Creating OAuth App

After you've configured the consent UI, navigate to **Credentials** and create a new **OAuth 2.0 Client Id**

1. Click on **Create Credentials** button from the top navigation bar and choose **OAuth Client ID** from the list.
2. In Application Type, select **Web Application**
3. Provide a Name
4. Add an **Authorized redirect URI**. This will be the one provided by ZTKA OIDC setup page.
5. Click create to create the OAuth app

       <img src="/img/docs/oidc-google-4.png" alt="Creating OAuth App" />
       Creating OAuth App

## Adding an Identity Provider to ZTKA

Login to your ZTKA dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type from the drop down. *Incase your identity provider is not in the list, choose Others.*

For client identifier & secret, provide the `client-id` & `client-secret` of the Google OAuth app created earlier.

Under **Scope** provide `openid,email,profile`

For **Issuer URL**, provide this url: `https://accounts.google.com`

<img src="/img/docs/oidc-google-5.png" alt="Adding new identity provider in ZTKA" />
Adding new identity provider in ZTKA

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the Google OAuth app created in the earlier step.

On the **Mapper Configuration** screen, provide `https://raw.githubusercontent.com/RafayLabs/rcloud-base/main/_kratos/oidc-mappers/google.jsonnet?token=GHSAT0AAAAAABPXWZYZI3XFS3LORAHBY5EAYUW7P3A` as the mapper url.

Click Save & Exit.

At this point, you have successfully added Google as an identify provider for ZTKA.

## Verify Login with Google

To confirm if the setup was correct, logout from ZTKA.

On the login screen, you should now see a `Sign In With Google` button. Click on it to begin the login process using Google.

<img src="/img/docs/oidc-google-6.png" alt="Login Using Google" />
Login Using Google

Enter your Google credentials and login to Google. All the application to access the respective details and sign in.

<img src="/img/docs/oidc-google-7.png" alt="Authenticate on Google" />
Authenticate on Google

Once authenticated, you'll be redirected to ZTKA dashboard.

<img src="/img/docs/oidc-google-8.png" alt="Redirect to ZTKA" />
Redirect to ZTKA

> Note: Depending on the permission, the user that logs in using Google might not see the above screen. As an admin, you'll have to configure their group and assign them a project.

Congratulations! You've successfully configured Google as an identity provider for ZTKA.
