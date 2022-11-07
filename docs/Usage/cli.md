---
title: "CLI"
description: "Learn how to use the CLI tool, pctl with Paralus."
slug: /usage/cli
---

Apart from using the dashboard, Paralus provides you with a command line utility called **pctl**. Using pctl you can accomplish all the tasks that you can do via the dashboard.

## Downloading and Configuring CLI

To download the CLI, you first need to login to Paralus dashboard. Navigate to **My Tools** and click the **Download CLI** button to download the latest release. Copy the pctl executable and place it in your `$PATH` folder and make sure it is executable.

In order to run the CLI tool, you also need to download a configuration file from Paralus dashboard. This config file is unique to every user and hence each user needs to download this. To download the configuration file, navigate to **My Tools** and click **Download CLI Config** button. A json file will be downloaded.

<img src="/img/docs/paralus-cli.png" alt="Download pctl CLI config" height="70%" width="70%"/>

For linux users, copy the downloaded `config.json` file and place it in `$HOME/.paralus/cli` folder. *Create the folder if it doesn't exist.*

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

## Using the CLI

**pctl** allows you to perform various operations through the command line that you can do via the dashboard. Below is the complete list of available commands:

- **Project**
  - Create a new project:

    ```sh
    pctl create project pctlproject
    ```

    ```sh
    $ pctl get project
    +-------------+---------+
    | PROJECT     | DEFAULT |
    +-------------+---------+
    | default     | true    |
    +-------------+---------+
    | demo        | false   |
    +-------------+---------+
    | localdev    | false   |
    +-------------+---------+
    | pctlproject | false   |
    ```

  - Delete a project:

    ```sh
    pctl delete project pctlproject
    ```

- **Users**
  - Get users:

    ```sh
    $ pctl get users
    +--------------------------+------------+-----------+-----------------------------------+
    | NAME                        | FIRST NAME | LAST NAME | GROUPS                         |
    +--------------------------+------------+-----------+-----------------------------------+
    | admin@paralus.local         | Admin      | User      | Organization Admins,All Local  |
    |                             |            |           | Users                          |
    +--------------------------+------------+-----------+-----------------------------------+
    | apple-ns@paralus.io         | Apple      | Namespace | All Local Users                |
    +--------------------------+------------+-----------+-----------------------------------+
    | paralus-project@paralus.io  | Project    | Admin     | All Local Users                |
    +--------------------------+------------+-----------+-----------------------------------+
    | testns@ns.com               | testns     | testns    | All Local Users                |
    +--------------------------+------------+-----------+-----------------------------------+
    ```

  - Create a new user:

    ```sh
    $ pctl create user user.paralus@paralus.io
    Recovery URL:  http://console.paralusdemo.com/self-service/recovery?flow=08ceb94b-7614-4147-91d4-c89bc43a3cfb&token=tAP7K0M2s6GRLn7STGCVgarumCaLWjHj
    ```

    The command returns the password reset URL for the newly created user. You can share this with the user for them to reset the password.

    > The password recovery link is only valid for 10 mins. It will give an error outside of it. You can refer to our [troubleshooting guide](https://www.paralus.io/docs/references/troubleshooting#password-reset-link-expired) to regenerate a new password link.

    You can also assign the newly created user to a pre-existing group using the following command:

    ```sh
    pctl create user user.paralus@paralus.io –groups productiongroup
    ```

  - Delete a User:

    ```sh
    pctl delete user user.paralus@paralus.io
    ```

- **Groups**
  - Create a new group:

    ```sh
    pctl create group devtestgroud --desc "Testing group created from pctl"
    ```

    You can validate the creation of the group using the following command:

    ```sh
    $ pctl get group
    +---------------------+--------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------+
    | NAME                | DESCRIPTION                    | TYPE           | USERS                                                                                                               |
    +---------------------+--------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------+
    | All Local Users     | Default group for all local    | DEFAULT_USERS  | admin@paralus.local,paralus-project@paralus.io,testns@ns.com,apple-ns@paralus.io,user.paralus@paralus.io    |
    |                     | users                          |                |                                                                                                                     |
    +---------------------+--------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------+
    | Organization Admins | Default organization admin     | DEFAULT_ADMINS | admin@paralus.local                                                                                  |
    |                     | group                          |                |                                                                                                                     |
    +---------------------+--------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------+
    | devtestgroud        | Testing group created from     |                |                                                                                                                     |
    |                     | pctl                           |                |                                                                                                                     |
    +---------------------+--------------------------------+----------------+---------------------------------------------------------------------------------------------------------------------+
    ```

  - Update group association:  

    ```sh
    pctl update groupassociation sample-group --associateproject sample-proj --roles PROJECT_READ_ONLY,INFRA_ADMIN
    ```

    ```sh
    pctl update groupassociation sample-group --associateuser y --addusers example.user@company.co,example.user-two@company.co --removeusers example.user-three@company.co    
    ```

  - Delete a group:
  
    ```sh
    pctl delete group devtestgroud
    ```

- **Roles**
  - Create a new role:

    ```sh
    $ pctl create role clusterview --scope project --permissions project.read,cluster.read,partner.read,organization.read

    $ pctl get role
    +---------------------+--------------------------------+-----------+--------------+
    | NAME                | DESCRIPTION                    | IS GLOBAL | SCOPE        |
    +---------------------+--------------------------------+-----------+--------------+
    | ADMIN               | User can view and manage       | true      | organization |
    |                     | all your application and       |           |              |
    |                     | infrastructure resources       |           |              |
    |                     | across all projects.           |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | ADMIN_READ_ONLY     | User can view all your         | true      | organization |
    |                     | application and infrastructure |           |              |
    |                     | resources across all projects. |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | CLUSTER_ADMIN       | User can view and manage all   | true      | project      |
    |                     | your cluster resources.        |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | NAMESPACE_ADMIN     | User can only can publish      | true      | namespace    |
    |                     | workloads in assigned          |           |              |
    |                     | namespaces.                    |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | NAMESPACE_READ_ONLY | User can only view workloads   | true      | namespace    |
    |                     | in assigned namespaces.        |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | PROJECT_ADMIN       | User can view and manage all   | true      | project      |
    |                     | your application resources.    |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | PROJECT_READ_ONLY   | User can only view your        | true      | project      |
    |                     | application resources.         |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | SUPER_ADMIN         | User has super user access to  | true      | system       |
    |                     | all resources                  |           |              |
    +---------------------+--------------------------------+-----------+--------------+
    | clusterview         |                                | false     | project      |
    +---------------------+--------------------------------+-----------+--------------+
    ```

    You can also view the list of rolepermissions using the following command:

    ```sh
    $ pctl get rolepermissions
    +-------------------------------+--------------------------------+
    | NAME                          | DESCRIPTION                    |
    +-------------------------------+--------------------------------+
    | audit.read                    | Read system audit logs         |
    +-------------------------------+--------------------------------+
    | cluster.read                  | read cluster information,      |
    |                               | download cluster bootstrap     |
    +-------------------------------+--------------------------------+
    | cluster.write                 | create, manage and delete      |
    |                               | clusters                       |
    +-------------------------------+--------------------------------+
    | console.all                   | View console and manage user   |
    |                               | access                         |
    +-------------------------------+--------------------------------+
    | group.read                    | View group info and            |
    |                               | association                    |
    +-------------------------------+--------------------------------+
    | group.write                   | Manage group and its           |
    |                               | associations                   |
    +-------------------------------+--------------------------------+
    | hub.openapi.explorer.read     | view openapi-explorer          |
    +-------------------------------+--------------------------------+
    | kubeconfig.read               | View all kubeconfig            |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | kubeconfig.write              | create, manage and revoke      |
    |                               | kubeconfig settings at user,   |
    |                               | organization level.            |
    +-------------------------------+--------------------------------+
    | kubectl.cluster.read          | View kube cluster information  |
    +-------------------------------+--------------------------------+
    | kubectl.cluster.write         | Update kubectl at cluster      |
    |                               | level                          |
    +-------------------------------+--------------------------------+
    | kubectl.clustersettings.read  | View kubectl settings at       |
    |                               | cluster level                  |
    +-------------------------------+--------------------------------+
    | kubectl.clustersettings.write | Update kubectl settings at     |
    |                               | cluster level                  |
    +-------------------------------+--------------------------------+
    | kubectl.fullaccess            | Full access to kubectl         |
    +-------------------------------+--------------------------------+
    | kubectl.namespace.read        | View kubectl namespace         |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | kubectl.namespace.write       | create, edit kubectl at        |
    |                               | namespace level                |
    +-------------------------------+--------------------------------+
    | location.read                 | View locations                 |
    +-------------------------------+--------------------------------+
    | location.write                | Manage locations               |
    +-------------------------------+--------------------------------+
    | oidc.read                     | View oidc configuration        |
    +-------------------------------+--------------------------------+
    | oidc.write                    | create, manage oidc            |
    |                               | configuration.                 |
    +-------------------------------+--------------------------------+
    | ops_star.all                  | Provides complete access, make |
    |                               | me a super admin.              |
    +-------------------------------+--------------------------------+
    | org.auditLog.read             | Permission to view system      |
    |                               | audit logs                     |
    +-------------------------------+--------------------------------+
    | org.relayAudit.read           | Permission to view kubectl     |
    |                               | audit logs                     |
    +-------------------------------+--------------------------------+
    | organization.read             | View organization information  |
    +-------------------------------+--------------------------------+
    | organization.write            | Manage organization            |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | partner.read                  | View partner information       |
    +-------------------------------+--------------------------------+
    | project.admin.write           | update project associtation    |
    |                               | with user-role and             |
    |                               | group-roles.                   |
    +-------------------------------+--------------------------------+
    | project.audit.read            | View project kubectl audit     |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | project.auditLog.read         | View project system audit      |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | project.read                  | View project information       |
    +-------------------------------+--------------------------------+
    | project.relayAudit.read       | View project kubectl audit log |
    |                               | information                    |
    +-------------------------------+--------------------------------+
    | project.write                 | create, manage and delete      |
    |                               | project information.           |
    +-------------------------------+--------------------------------+
    | role.read                     | View roles                     |
    +-------------------------------+--------------------------------+
    | role.write                    | create, manage roles.          |
    +-------------------------------+--------------------------------+
    | rolepermission.read           | View role permissions          |
    +-------------------------------+--------------------------------+
    | ssouser.read                  | View sso users information     |
    +-------------------------------+--------------------------------+
    | ssouser.write                 | create, manage sso users       |
    |                               | information.                   |
    +-------------------------------+--------------------------------+
    | template.read                 | View templates                 |
    +-------------------------------+--------------------------------+
    | user.read                     | View users information         |
    +-------------------------------+--------------------------------+
    | user.write                    | create, manage users.          |
    +-------------------------------+--------------------------------+
    | v2debug.read                  | Read web kubectl               |
    +-------------------------------+--------------------------------+
    ```

  - Delete a role:

    ```sh
    pctl delete role clusterview
    ```

- **Identity Provider**
  - Create a new identity provider:

    ```sh
    $pctl create oidc github --clientid 721396hsad8721wjhad8 --clientsecret 721396hsad8721wjhad8 --callback-url http://paralus.localcb --issuer-url https://github.com --mapper-url https://mapper-url --scopes name
    ```

    > For valid scopes, refer to our documentation on [Single Sign On](https://www.paralus.io/docs/single-sign-on/)

    To get a list of OIDC providers, you can use the following command:

    ```sh
    pctl get oidc
    +--------+----------------------+------------------------------------------------------------------------+----------+--------------------+--------------------+--------+------------------+
    | NAME   | CLIENT ID            | CALLBACK URL                                                           | AUTH URL | MAPPER URL         | ISSUER URL         | SCOPES | REQUESTED CLAIMS |
    +--------+----------------------+------------------------------------------------------------------------+----------+--------------------+--------------------+--------+------------------+
    | github | 721396hsad8721wjhad8 | http://console.paralus.local/self-service/methods/oidc/callback/github |          | https://mapper-url | https://github.com | name   |                  |
    +--------+----------------------+------------------------------------------------------------------------+----------+--------------------+--------------------+--------+------------------+
    ```

  - Delete an identity provider:

    ```sh
    pctl delete oidc github 
    ```
  
- **Cluster**
  - Create a new cluster:

    ```sh
    pctl create cluster imported minikube -l pune-ind
    ```

    We can also add a cluster by profile a cluster configuration file using the following command:

    ```sh
    pctl apply -f cluster.yaml
    Resource sample-cluster of type Cluster configured.

    $ pctl get cluster
    +----------------+----------------+----------+-----------+
    | NAME           | DESCRIPTION    | TYPE     | OWNERSHIP |
    +----------------+----------------+----------+-----------+
    | sample-cluster | sample-cluster | imported | default   |
    +----------------+----------------+----------+-----------+
    ```
    
    Your cluster configuration file can be as simple as the following:

    ```yaml
      kind: Cluster
      metadata:
      # set the name of the cluster
      name: sample-cluster
      # specific the project name to create the cluster
      project: default
      spec:
      # type can be "imported"
      clustertype: imported
    ```

    > Note, once the cluster is imported, you need to apply the generated bootstrap.yaml file to the imported cluster.

    ```sh
    $ pctl get cluster

    +------------+-------------+----------+--------------------+
    | NAME            | DESCRIPTION     | TYPE     | OWNERSHIP |
    +------------+-------------+----------+--------------------+
    | dotest          | dotest          | imported | default   |
    +------------+-------------+----------+--------------------+
    | paralus-v2      | paralus-v2      | imported | default   |
    +------------+-------------+----------+--------------------+
    | sample-cluster  | sample-cluster  | imported | default   |
    +------------+-------------+----------+--------------------+
    ```

    You can also get details of a single cluster using the following command:

    ```sh
    pctl get cluster sample-cluster
    +----------------+----------------+---------+----------+-----------------------+
    | NAME           | DESCRIPTION    | PROJECT | TYPE     | STATUS                |
    +----------------+----------------+---------+----------+-----------------------+
    | sample-cluster | sample-cluster | default | imported | {"conditionStatus":2} |
    +----------------+----------------+---------+----------+-----------------------+
    ```
    
    You can also download the kubeconfig for a specific cluster using the following command:

    ```sh
    pctl kubeconfig download --cluster sample-imported-cluster
    
    apiVersion: v1
    clusters: null
    contexts: null
    current-context: ""
    kind: Config
    preferences: {}
    users:
    - name: admin-64paralus-46local
      user:
        client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNsRENDQWpxV3ZFFZWEpoYkhWekNGMWVyY28KS3JMc3k2TjlBaUJZQ0sxMUxLa28xTUVhdW9jQzBOK0J0MHE3YmlGamI1aGRoYy9FQzNVUFd3PT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
        client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
    ```


  - Delete a cluster:

    ```sh
    pctl delete cluster minikube
    ```

Read more about [features of Paralus](../usage/).