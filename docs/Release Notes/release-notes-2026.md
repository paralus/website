---
title: 2026
description: "Paralus release history with release notes for 2026"
slug: /release-notes/2026
sidebar_position: 5
---

---

## v0.3.1

**January 14, 2026**

In our latest release, we have resolved several issues, Outdated Bitnami Contour images, SQL Not Null Constraint problems, and the update of deprecated Kratos client SDKs across Paralus and the Paralus Dashboard. We have also fixed an issue where Casbin entries were not being inserted into the database and ensured that the default project is created correctly in the Paralus Dashboard.

** Breaking changes **

This release introduces several fixes related to SQL ** NOT NULL ** constraints. If you are upgrading Paralus from a previous version, please apply the migrations listed below.

```sql
ALTER TABLE authsrv_partner ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_organization ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_project ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_ssoaccount ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_group ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_resourcerole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_resourcepermission ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_resourcerolepermission ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_projectaccountresourcerole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_projectaccountnamespacerole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_projectgroupnamespacerole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_projectgrouprole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_groupaccount ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_grouprole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_accountresourcerole ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_template ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE sentry_bootstrap_infra ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sentry_bootstrap_agent_template ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sentry_bootstrap_agent ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sentry_kubeconfig_revocation ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sentry_kubeconfig_setting ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE sentry_kubectl_cluster_settings ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE authsrv_idp ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE authsrv_oidc_provider ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE cluster_metro ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE cluster_operator_bootstrap ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN modified_at SET DEFAULT CURRENT_TIMESTAMP, ALTER COLUMN trash SET DEFAULT FALSE;

ALTER TABLE cluster_tokens ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE cluster_clusters ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE authsrv_apikey ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;
```

#### Multiple components underwent changes

[Click here](https://github.com/paralus/paralus/releases/tag/v0.3.0) to view the detailed changelog for paralus.

[Click here](https://github.com/paralus/dashboard/releases/tag/v0.2.5) to view the detailed changelog for dashboard.
