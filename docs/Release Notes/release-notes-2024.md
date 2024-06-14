---
title: 2024
description: "Paralus release history with release notes for 2024"
slug: /release-notes/2024
---
---

## v0.2.9

**June 14, 2024**

In our latest release, we've fixed the issue with project creation and updates when roles are specified, and added permissions for cli.config.read for non-admin users. We also cleaned up some unused code and introduced a new description field for project and cluster cards, making them more informative and user-friendly.

** Breaking changes **

This relese introduces new permissions for users to download CLI configurations.

```sql
-- insert records into authsrv_resourcepermission
INSERT INTO authsrv_resourcepermission (name, scope, base_url, description, created_at, modified_at, trash, resource_urls, resource_action_urls) VALUES ('cli.config.read', 'PROJECT', '/auth/v3', 'Download cli configuration', current_timestamp, current_timestamp, false, '[{"url": "/cli/config", "methods": ["GET"]}]', 'null');

-- insert records into authsrv_resourcerolepermission
WITH resourcerole AS ( SELECT id as rrid FROM authsrv_resourcerole WHERE name IN ('PROJECT_ADMIN', 'PROJECT_READ_ONLY', 'CLUSTER_ADMIN', 'NAMESPACE_ADMIN', 'NAMESPACE_READ_ONLY') ), resourcepermission AS ( SELECT id as rpid FROM authsrv_resourcepermission WHERE name = 'cli.config.read' ) INSERT INTO authsrv_resourcerolepermission (name, description, created_at, modified_at, trash, resource_permission_id, resource_role_id) SELECT 'cli.config.read', 'Download cli configuration', current_timestamp, current_timestamp, false, resourcepermission.rpid, resourcerole.rrid FROM resourcerole, resourcepermission;

-- insert into casbin_rule
WITH resourcerole AS ( SELECT name FROM authsrv_resourcerole WHERE name IN ('PROJECT_ADMIN', 'PROJECT_READ_ONLY', 'CLUSTER_ADMIN', 'NAMESPACE_ADMIN', 'NAMESPACE_READ_ONLY') ) INSERT INTO casbin_rule (ptype, v0, v1, v2) SELECT 'g', '/auth/v3/cli/config', resourcerole.name, 'GET' FROM resourcerole;
```

#### Multiple components underwent changes

[Click here](https://github.com/paralus/paralus/releases/tag/v0.2.8) to view the detailed changelog for paralus.

[Click here](https://github.com/paralus/dashboard/releases/tag/v0.2.3) to view the detailed changelog for dashboard.

[Click here](https://github.com/paralus/relay/releases/tag/v0.1.8) to view the detailed changelog for relay.

[Click here](https://github.com/paralus/prompt/releases/tag/v0.1.3) to view the detailed changelog for prompt.

## v0.2.8

**February 28, 2024**

Ever wondered whether connection to your imported target clusters are still intact, only way to find out until now was to perform web kubectl. With current release, we have introduced cluster health check-ins which will showcase whether your cluster connection is healthy / unhealthy on your cluster listing page !

#### Multiple components underwent changes

[Click here](https://github.com/paralus/paralus/releases/tag/v0.2.7) to view the detailed changelog for paralus.

[Click here](https://github.com/paralus/relay/releases/tag/v0.1.7) to view the detailed changelog for relay.

[Click here](https://github.com/paralus/dashboard/releases/tag/v0.2.2) to view the detailed changelog for dashboard.
