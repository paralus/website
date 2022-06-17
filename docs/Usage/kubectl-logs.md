---
title: "Audit Logs"
description: "Learn how Audit logs work in Paralus"
slug: /usage/audit-logs
---

Audit Logs in Paralus are a way to track everything that happens in Paralus. These provide a chronological log to provide evidence of the sequence of activities. All the changes performed by any authorized user in the organization are tracked.

Anyone across the organization can view the logs, however these logs cannot be deleted.

There are two types of logs that you can track:

1. System Logs
2. Kubectl Logs

You can perform the following functions for each of the above mentioned logs:

- **Search:** A free text search box is provided for the users to quickly search for the required log details
- **Clear Filters:** Remove the applied filters and reset to the default view
- **Refresh:** Refreshes the page to view the latest logs
- **Export:** Allows the user to download the user's log in CSV format

## System Logs

System logs contain the entire history of the specific organization. All the activities that are carried out by any user from the dashboard - *adding a new user, creating a project, creating a group etc* - are logged here. This is the default page for Audit logs.

You can apply the following filters to filter the logs:

- Project
- Type Of Action
- User
- Client Type
- Time Range

<img src="/img/docs/logs-system.png" alt="Default Cluster Labels" height="75%" width="75%"/>

## Kubectl Logs

Kubectl logs lists the history of commands and API logs called under each project.

<img src="/img/docs/logs-kubectl.png" alt="Default Cluster Labels" height="75%" width="75%"/>

Read more about [features of Paralus](../usage/).