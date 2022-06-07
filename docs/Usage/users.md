---
title: "Users"
description: "Managing Users on ZTKA"
slug: /usage/users
---

Users are part of your organization who will be accessing your Kubernetes clusters and deploying workloads. In a typical scenario, different users belong to different teams and often work on an array of things. In this document, we show you show how you can add and manage users in ZTKA.

There are two types of users currently supported by ZTKA:

- **Local Users** - *these are standalone users are created from within ZTKA dashboard*
- **IdP Users** - *these are users from your organizations who use the application using your identity provider*

In this document, we will cover the following items:

- [Add New Users](#add-new-users)
  - [Local Users](#local-users)
  - [IdP Users](#idp-users)
- [Edit a User](#edit-a-user)
- [Delete Users](#delete-users)

## Add New Users

### Local Users

Follow the steps mentioned below to add a new user:

- Navigate to Home -> System -> Users
- Click on New User
- Enter details like first name, last name and a valid email id

    <img src="/img/docs/user-add.png" alt="Adding a new local User" />
    Adding a new local User

> If you have configured a SMTP server, an activation email would have been sent to the specified email address with instructions on how to access the Org.
But, since the user has not be configured with any roles and permissions, they will not be access anything useful.

### IdP Users

To add new IdP users, you need to configure an [Identity Provider](../sso/sso). Once people login via your identity provider, they are automatically added to IdP users list.

## Edit a User

For a local user, you can edit the following details:

- **Profile**
  - Edit things like First Name, Last Name and Phone number
  - Configure Kubectl settings like validity period

    <img src="/img/docs/user-edit-profile.png" alt="Editing user profile" />
    Editing user profile

- **Groups**
  - Manage memberships to groups - *add/remove users from groups*

    <img src="/img/docs/user-edit-group.png" alt="Editing user group" />
    Editing user group

- **Projects**
  - Manager memberships to users - *add/remove users from projects*

    <img src="/img/docs/user-edit-project.png" alt="Editing user project" />
    Editing user project

## Delete Users

You can delete a user by clicking the delete button in front of their name.

<img src="/img/docs/user-delete.png" alt="Deleting a User" />
Deleting a User
