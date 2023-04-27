---
title: Okta
description: "Configuring Okta as Identity Provider for Paralus"
slug: /single-sign-on/okta

---

In this document, we'll show you how to use [Okta](https://www.okta.com) as an Identity provider for Paralus. This will allow your users to login via Okta and access Paralus. Below is the list of items that we will cover in this document:

- [Creating a Okta SSO Application](#creating-a-okta-sso-application)
  - [Add a custom groups claim](#add-a-custom-groups-claim)
- [Adding an Identity Provider to Paralus](#adding-an-identity-provider-to-paralus)
- [Verify Login with Okta](#verify-login-with-okta)

## Creating a Okta SSO Application

Login to your Okta account as an admin and navigate to `Applications -> Applications` and **Create a new App Integration**.

In the dialog that opens, choose **OIDC - Open ID Connect** as the **Sign-in Method** and **Web Application** as the **Application Type.**

<img src="/img/docs/oidc-okta-1.png" alt="Creating New Okta OAuth App" height="75%" width="75%"/>

Leave the **Application Callback URL** empty for now and Register the application.

Based on who can access the Paralus app integration, select **Controlled access** options.

Note down the `Client ID` and `Client Secret` as those will be required to configure identity provider for Paralus.

### Add a custom groups claim

Paralus comes with the in-built functionality for mapping Identity provider (IdP) groups to Paralus. This makes access management simpler. As an administrator, you don't need to manage access for an individual user but for a group of users.

To map the groups correctly, the group names in Okta and Paralus must be the same. This way, the IdP users belonging to a group can access Paralus resources based on the permissions assigned to the group in Paralus. For example, you create a group called `DevTeam` in Paralus and the same group in Okta as well. Assign permissions to the Paralus group and add users to the Okta group. Now, when an IdP user belonging to the `DevTeam` group logs into Paralus using Okta, they will inherit the permissions set for the group. Read how to [manage users and groups in Okta](https://help.okta.com/oie/en-us/Content/Topics/users-groups-profiles/usgp-groups-main.htm).

Okta by default does not return user group information in OIDC authentication event. You need to add a custom claim in Okta authorization server that provides groups data.

Steps to add a groups claim in Okta authorization server:

1. Navigate to `Security -> API` and select the default authorization server. Click on **Add Claim**.
2. In the dialog that opens, set _Name_ to **groups**.
3. Choose _Include in token type_ as **ID Token** and **Always**.
4. Select _Value type_ to **Groups**.
5. Set the _Filter_ to **Match regex** and specify **.*** as a pattern.
6. Select _Include in_ to **Any scope**.

<img src="/img/docs/oidc-okta-2.png" alt="Added groups claim to Okta authorization server" height="75%" width="75%"/>

> **Note:** This adds a groups claim for a custom authorization server. You can [add a groups claim for the org autorization server](https://developer.okta.com/docs/guides/customize-tokens-groups-claim/main/#add-a-groups-claim-for-the-org-authorization-server). If you're adding groups claim for org authorization server then org issuer url and scopes will change in next step.

## Adding an Identity Provider to Paralus

Login to your Paralus dashboard and navigate to `System -> Identity Providers` and click on **New Identity Provider**

Provide the name of the identity provider and choose IdP type as `Generic` from the drop down.

For client identifier & secret, provide the `Client ID` & `Client Secret` of the Okta app created earlier.

Under **Scopes** provide `openid, profile, email`

> **Note:** If you add a groups claim for the org authorization server, include `groups` scope.

For **Issuer URL**, provide the url for your Okta authorization server. For example: https://dev-1234567.okta.com/oauth2/default

> **Note:** If you add a groups claim for the org authorization server then issuer url should omit `oauth2/default`. For example: https://dev-1234567.okta.com

<img src="/img/docs/paralus-okta-oauth.png" alt="Adding new identity provider in Paralus" height="75%" width="75%"/>

Click Save & Continue.

From the next screen copy the `Callback URL` and paste it in the callback URL for the Okta OAuth app created in the earlier step.

On the **Mapper Configuration** screen, provide `https://raw.githubusercontent.com/paralus/paralus/v0.2.2/_kratos/oidc-mappers/okta.jsonnet` as the mapper url. The mapper url uses [the custom groups claim](#add-a-custom-groups-claim).

Click Save & Exit.

At this point, you have successfully added Okta as an identity provider for Paralus.

## Verify Login with Okta

To confirm if the setup was correct, logout from Paralus.

On the login screen, you should now see a `Sign In With Okta` button. Click on it to begin the login process using Okta.

<img src="/img/docs/paralus-okta-login-1.png" alt="Login using Okta" height="75%" width="75%"/>

Enter your Okta credentials and login. All the application to access the respective details and sign in.

<img src="/img/docs/paralus-okta-login-2.png" alt="Login using Okta - providing credentials" height="75%" width="75%"/>

Once authenticated, you'll be redirected to Paralus dashboard.

Congratulations! You've successfully configured Okta as an identity provider for Paralus.

> **Note:** If the user is not part of any groups then user might not see any projects on the dashboard. As an admin, you'll have to [configure their group](../usage/groups#addremove-users) and assign them a [project](../usage/groups#assign-groups-to-projects).

> **Limitation:** Currently after the IdP user is logged in to Paralus, any change in Okta groups does not reflect in Paralus. This is a known gap. This is being tracked as a part of this [issue](https://github.com/paralus/paralus/issues/2).
