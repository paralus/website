---
title: "Projects"
description: "Learn how to use Paralus and configure projects."
slug: /usage/projects
---

Project in Paralus is a way to organize your infrastructure, user access and resources. Organization Admins can create any number of projects in the organization.

> Currently only organization admins can create projects.

A project is a logical grouping that consist of the following:

- [Clusters](clusters)
- [Users](users)
- [Groups](groups)

In this section, we talk about

- [Create Project](#create-project)
- [Switch Project](#switch-project)
- [Update Project](#update-project)
  - [Add/Remove Group](#addremove-group)
  - [Add/Remove Users](#addremove-users)
- [Delete Project](#delete-project)

## Create Project

Login to the web consle as an organization admin.

1. Click on **New Project**
2. Provide a name and description

    <img src="/img/docs/project-add.png" alt="Adding a new Project" height="75%" width="75%"/>

Once a project is created, organization admins can assign groups and users to it.

> All organizations start with a "Default Project". This project cannot be deleted.

All the projects are shown by default on the homescreen for the organization admin.

## Switch Project

Organization admins having multiple projects or users assigned to multiple projects & can switch easily between multiple projects. The current project is shown on the top banner.

<img src="/img/docs/project-switch.png" alt="Switching Projects" height="75%" width="75%"/>

To switch to a different project, user can click on the dropdown and select a project to switch to.

## Update Project

Organization admins can add / remove groups are users to project.

> **Pro Tip:** It's always easier *(and practical)* to assign groups to projects rather than individual users.

### Add/Remove Group

From the Project Settings page, navigate to **Assigned Groups** tab. Click on Assign Group To Project button, choose a group from the drop down list, choose a role and assign.

<img src="/img/docs/project-add-group.png" alt="Assigning Groups to Projects" height="75%" width="75%"/>

To remove a group, navigate to Assigned Groups tab and click on the delete icon to remove an assigned group.

### Add/Remove Users

From the Project Settings page, navigate to **Assigned Users** tab. Click on Assign User To Project button, choose a project from the drop down list, choose a role and assign.

<img src="/img/docs/project-user.png" alt="Assigning Users to Projects" height="75%" width="75%"/>

To remove a user, navigate to Assigned Users tab and click on the delete icon to remove an assigned user.

## Delete Project

Click the delete icon to delete a project. An organization admin can delete a project as long as there are no resources associated to it. The system will prompt you to first delete any exising resources before deleting the project.
