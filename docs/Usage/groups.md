---
title: "Groups"
description: "Learn how to configure groups on Paralus."
slug: /usage/groups
---

Groups are a collection of users with same roles. Managing different users with similar roles and permissions one at a time is tedious. Hence, Paralus allows you to group users with same roles together thus making it easier to manage users.

In this section we talk about:

- [Default Group](#default-group)
- [Add/Remove Users](#addremove-users)
- [Assign Groups to Projects](#assign-groups-to-projects)

## Default Group

All organizations come with one default project and two default groups:

- All Local Users - *All users that are managed locally belong this group. This group has the least privileges in the platform.*
- Organization Admins - *Users that belong to this group have access to all projects and is the most priviledged role.*

    <img src="/img/docs/groups.png" alt="Default Groups" height="75%" width="75%"/>

## Add/Remove Users

Organization admins can easily add/remove users from groups.

1. Click on Groups
2. Click on Add/Remove Members

    <img src="/img/docs/groups-users-add.png" alt="Adding new users" height="75%" width="75%"/>

Once the users are added to the group, they will automatically inherit the roles associated with the group.

## Assign Groups to Projects

In the example below, we have a project called "Production". We created a group called "Production Admins" who are meant to be the group of privileged users for this Project.

Instead of assigning users "*one at a time*", we will assign the "Production" Project to the group called "Production Admins".

1. Click on "Assign Group to Project"
2. Select the Project from the drop down
3. Select "Project Admin" role from the list

    <img src="/img/docs/groups-project-add.png" alt="Assigning groups to projects" />

Read more about [features of Paralus](../usage/).