---
title: "Roles"
description: "Creating & Managing Roles on Paralus"
slug: /usage/roles
---

Roles are assigned to people in your organization. Access control is driven based on these roles. Paralus comes with a set of pre defined roles. It also allows you to create new roles with the permissions you want.

In this document, we help you understand how you can create and manage roles.

- [Types Of Roles](#types-of-roles)
- [Determine Roles](#determine-roles)
  - [As An End User](#as-an-end-user)
  - [As An Organization Admin](#as-an-organization-admin)
- [Managing Roles](#managing-roles)
  - [Manage By Group](#manage-by-group)
  - [Manage Role Per User](#manage-role-per-user)
- [Creating Roles](#creating-roles)
- [Editing Roles](#editing-roles)
- [Deleting Roles](#deleting-roles)
- [Permissions List](#permissions-list)

## Types Of Roles

| Role | Description |
|:---:|:---:|
| Organization Admin | A  privileged, super user type role with access to everything in the Org.  This user can view, manage projects, clusters, users, groups, roles, role associations and namespaces.|
| Org Admin Read Only | A privileged role has only Read  access to workloads, namespaces, certificates, secret stores,  registries, aggregation endpoints, clusters, add-ons, and blueprints |
| Project Admin | A  privileged role allowed to manage all workload resources in a Project.  Specifically, they have Read + Write access to workloads, certificates,  registries, secret stores, and aggregation endpoints |
| Project Read Only | A Read Only version of the Project Admin role |
| Cluster Admin | A  privileged role allowed to build clusters in a Project. Specifically,  Cluster Admins has read only infrastructure access + Cluster CRUD  (Create, Read, Update, and Delete) operations |
| Namespace Admin | A role allowed to view only the user specified namespaces, and policy violations, but not allowed to create a new namespace. Allowed to perform end-to-end (create, publish/unpublish, edit, delete) actions on workloads with the user selected namespace(s). Specifically, they can view only the Resources that are associated with the selected namespace(s) |
| Namespace Read Only | A Read Only version of the Namespace Admin role |

> Note: A user can be associated with multiple roles at the same time. In such a scenario, the union of the permissions associated with both roles is applied.

<img src="/img/docs/role-hierarchy.png" alt="Typical hierarchy of roles in an organization." height="75%" width="75%"/>

## Determine Roles

### As An End User

Authorized users in an organization can determine their exact role and profile in the web conosle by following the below mentioned steps:

- Login to the console
- Click on your name/email address on the top right
- Select Profile from the drop-down menu

    <img src="/img/docs/role-user.png" alt="Checking your permission as an end user" height="75%" width="75%"/>
      
### As An Organization Admin

Organization admins can determine a users's role be following the below mentioned steps:

- Login to the console
- Navigate to System -> Users
- Search for the specific user
- View current role assignment

## Managing Roles

Assignment and management of roles for users in the organization can be done only by an Organization admins. All the changes to roles are logged and can be found in the [Audit Logs](audit-logs).

Roles can be assigned to users in one of the two following ways:

- By Group *(Associate role to a specific group, add/remove users to the group)*
- Per User *(Associate role to a specific user)*

### Manage By Group

This is the preferred way to manage roles when you have a large number of users that need similar roles. For example, if you have a team of developers, you can create a group called Developers, define the permissions and add users to the group. Even when you have a new developer joining the team, you would just need to add that user to this group.

Read more about [groups](groups).

### Manage Role Per User

There might be situations where you want to assign a role to a specific user. In such cases you can you can follow the below mentioned steps:

- Login to the console as an Organzation Admin
- Navigate to System -> Users

    <img src="/img/docs/roles-users-list-admin.png" alt="Listing all users" height="75%" width="75%"/>

- Select the desired user
- Navigate to the Projects Tab
- Click Assign User To Project button
- Select a project from the drop down
- Assign Role(s), click Save & Exit

    <img src="/img/docs/roles-new-user-project-final.png" alt="Assigning Roles to a User" height="75%" width="75%"/>

## Creating Roles

As an organization admin, you can also create a role by choosing the permissions you need. Follow the steps to create a custom role:

- Login to the console as an Organization Admin
- Navigate to System -> Roles

    <img src="/img/docs/roles-new-role-home.png" alt="Listing all the roles" height="75%" width="75%"/>

- Click on New Role
- Give a new for the new role & click Create

    <img src="/img/docs/roles-new-add-developer.png" alt="Adding a New Role" height="75%" width="75%"/>

- On the next screen, choose the [permissions](#permissions-list) that you want to assign to the role. Select the permissions from the left pane and add them to the right pane.

    <img src="/img/docs/roles-add-permissions.png" alt="Choosing permissions for the new role" height="75%" width="75%"/>

- Click Save to create the new role

## Editing Roles

To edit an already created role, login as an organization admin and follow the below steps:

- Login to the console as an Organization Admin
- Navigate to System -> Roles
- Click Edit on the role you wish to edit
- Add/Remove the permissions
- Save and exit

## Deleting Roles

To delete an already created role, login as an organization admin and follow the below steps:

- Login to the console as an Organization Admin
- Navigate to System -> Roles
- Click Delete on the role you wish to delete

---

## Permissions List

Below is the list of permissions that you can choose to assign and create a role.

| Permission | Description |
|---|---|
| cluster.read | Read cluster information & download cluster bootstrap |
| cluster.write | Create, Manage and Delete clusters |
| console.all | View console and Manage user access |
| group.read | View group information and associations |
| group.write | Manage group and its associations |
| hub.openapi.explorer.read | View openapi-explorer |
| location.read | View locations |
| location.write | Create, Manage & Delete locations |
| oidc.read | View OIDC configuration. |
| oidc.write | Create, Manage and Delete OIDC configuration |
| ops_star.all | Provides complete access - the super admin |
| organization.read | View organization information |
| organization.write | Manage organization information |
| partner.read | View partner information |
| project.admin.write | Update project associtation with user-role and group-roles |
| project.read | View project information |
| project.write | Create, manage and delete project information |
| role.read | View roles |
| role.write | Create, Manage and Delete roles |
| rolepermission.read | View role permissions |
| ssouser.read | View SSO users information |
| ssouser.write | Create, Manage and Delete SSO users information |
| template.read | View templates |
| user.read | View users information |
| user.write | Create, Manage and Delete users |
| audit.read | Read system audit logs |
| kubeconfig.read | View all kubeconfig information |
| kubeconfig.write | Create, Manage and revoke kubeconfig settings at user, organization level |
| kubectl.clustersettings.read | View kubectl settings at cluster level |
| kubectl.clustersettings.write | Update kubectl settings at cluster level |
| kubectl.fullaccess |  |
| kubectl.namespace.read |  |
| kubectl.namespace.write |  |
| org.auditLog.read | View system audit logs |
| org.relayAudit.read | View kubectl audit logs |
| project.auditLog.read | View project system audit information |
| project.audit.read | View project kubectl audit information |
| project.relayAudit.read | View project kubectl audit log information |
| v2debug.read | read web kubectl |

Read more about [features of Paralus](../usage/).