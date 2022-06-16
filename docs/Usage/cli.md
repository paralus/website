---
title: "CLI"
description: "Learn how to use the CLI tool with Paralus."
slug: /usage/cli
---

Apart from using the dashboard, Paralus provides you with a command line utility called **pctl**. Using pctl you can accomplish all the tasks that you can do via the dashboard.

## Downloading and Configuring CLI

To download the CLI, you first need to login to Paralus dashboard. Navigate to **My Tools** and click the **Download CLI** button to download the latest release. Copy the `pctl` executable and place it in your `$PATH` folder and make sure it is executable.

In order to run the CLI tool, you also need to download a configuration file from Paralus dashboard. This config file is unique to every user and hence each user needs to download this. To download the configuration file, navigate to **My Tools** and click **Download CLI Config** button. A json file will be downloaded.

<img src="/img/docs/paralus-cli.png" alt="Download pctl CLI config" height="70%" width="70%"/>

For linux users, copy the downloaded `config.json` file and place it in `$HOME/.paralus/cli` folder. Create the folder if it doesn't exist.

## Using the CLI

**pctl** allows you to perform various operations through the command line that you can do via the dashboard. Below is the complete list of commands available.

- **Clusters**
  - Create cluster of type import
    - Using command(s):
  
        `pctl create cluster imported sample-imported-cluster -l sample-location`

    - Using file apply:
  
        `pctl apply -f cluster-config.yml`

  - List clusters
    - Using command(s):
        
        `pctl get cluster`

        `pctl get cluster sample-imported-cluster`

  - Download bootstrap *(separate command)*
    - Using command(s):
  
        `pctl kubeconfig download --cluster sample-imported-cluster`

- **Project**
  - Create a new  project with basic information
    - Using command(s):
  
        `pctl create p project1 --desc "Description of the project"`

    - Using file apply:
  
        `pctl apply -f project-config.yml`

  - List projects
    - Using command(s):
  
        `pctl get project`

        `pctl get project project1`

- **User**
  - Create user
    - Using command(s):
  
        `pctl create user john.doe@example.com`

        `pctl create user john.doe@example.com --console John, Doe`

        `pctl create user john.doe@example.com  --groups testingGroup, productionGroup --console John, Doe, 4089382091`

    - Using file apply:
  
        `pctl apply -f user-config.yml`

  - List users
    - Using command(s):
  
        `pctl get users`

        `pctl get user john.dow@example.com`

- **Group**
  - Create group
    - Using command(s):
  
        `pctl create group sample-group --desc "Description of the group"`

    - Using file apply:
  
        `pctl apply -f group-config.yml`

  - List groups
    - Using command(s):
  
        `pctl get group`

        `pctl get group sample-group`

- **Role**
  - Create role
    - Using command(s):
  
        `pctl create role clusterview --permissions project.read,cluster.read,project.clustepctl.read`

    - Using file apply:

        `pctl apply -f role-config.yml`

  - List groups
    - Using command(s):
  
        `pctl get roles`

        `pctl get role clusterview`

- **Role Permissions**
  - List rolepermissions
    - Using command(s):
  
        `pctl get rolepermissions`

- **OIDC**
  - Create ODIC provider
    - Using command(s):
  
        `pctl create oidc github 721396hsad8721wjhad8 http://myownweburl.com/cb`

    - Using file apply:
  
        `pctl apply -f oidc-config.yml`

  - List OIDC providers
    - Using command(s):
  
        `pctl get oidc`

        `pctl get oidc github`

- **Group Association**
  - Update group association to projects and users
    - Using command(s):
  
      `pctl update groupassociation sample-group --associateproject sample-proj --roles PROJECT_READ_ONLY,INFRA_ADMIN`

      `pctl update groupassociation sample-group  --associateuser y --addusers example.user@company.co,example.user-two@company.co --removeusers example.user-three@company.co`

## Global Parameters

Below are the global parameters that are supported by pctl

| Parameter | Description |
|---|---|
| -c, --config string | Customize cli config file |
| -d, --debug | Enable debug logs |
| -f, --file string | provide file with resource to be created |
| -o, --output string | Print json, yaml or table output. Default is table (default "table") |
| -p, --project string | provide a specific project context |
| -v, --verbose | Verbose mode. A lot more information output. |

## Examples

- List Users

```bash
$ pctl get user

+---------------------+------------+-----------+--------------------------------+
| NAME                | FIRST NAME | LAST NAME | GROUPS                         |
+---------------------+------------+-----------+--------------------------------+
| admin@paralus.local | Admin      | User      | Organization Admins,All Local  |
|                     |            |           | Users                          |
+---------------------+------------+-----------+--------------------------------+
```

- Create a new Project

```bash
$ pctl create project pctlproject

$ pctl get project

+-------------+---------+
| PROJECT     | DEFAULT |
+-------------+---------+
| default     | true    |
+-------------+---------+
| pctlproject | false   |
+-------------+---------+
```
