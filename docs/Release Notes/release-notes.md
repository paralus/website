---
title: 2022
description: "Paralus release history with release notes for 2022"
slug: /release-notes/2022
---

---

## v0.1.9

**November 25, 2022**

**paralus/paralus**

**Added**

- Added database auditlog storage option - [niravparikh05](https://github.com/niravparikh05)


Find more details in [paralus/paralus](https://github.com/paralus/paralus).

**paralus/helm-charts**

**Added**

- Support database as a backend for audit logs - [akshay196](https://github.com/akshay196)


Find more details in [paralus/helm-charts](https://github.com/paralus/helm-charts).

---

## v0.1.8

**November 04, 2022**

**paralus/paralus**

**Added**

- Added last login field to user spec - [akshay196](https://github.com/akshay196)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).
​
**paralus/dashboard**

**Added**

- Show last access time in users list page - [akshay196](https://github.com/akshay196)

**Fixed**

- Fix for IdP users unable to login - [niravparikh05](https://github.com/niravparikh05)
- Fix wrong cluster delete success message for non-privileged users - [niravparikh05](https://github.com/niravparikh05)
  

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

---

## v0.1.7

**October 14, 2022**

​
**paralus/paralus**

**Fixed**

- Fixed creating project scoped role failed from cli - [niravparikh05](https://github.com/niravparikh05)
  
Find more details in [paralus/paralus](https://github.com/paralus/paralus).

​
**paralus/dashboard**

**Changed**

- Hide copy button in user reset screen for non https webpages - [niravparikh05](https://github.com/niravparikh05)
- Default to kubectl tab view in audit logs - [niravparikh05](https://github.com/niravparikh05)
- Remove groups and client column from audit logs system and kubectl commands tab - [niravparikh05](https://github.com/niravparikh05)
- Make user clickable in auditlogs kubectl commands tab to view user details like group - [niravparikh05](https://github.com/niravparikh05)
​

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

---

## v0.1.6 

**October 10, 2022**

**​paralus/paralus**

**Fixed**

- Fixed issue where relay server is not coming up in arm64 (Mac M1) - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

---

## v0.1.5
​
**September 30,2022**

**paralus/paralus**

**Fixed**

- Fixed issue where relay server is not coming up in arm64 (Mac M1) - [sandeep540](https://github.com/sandeep540)
- Fixed cluster lister and set group created at property - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

<br />

**paralus/relay**

​
**Added**

- Added arm builds - [meain](https://github.com/meain)

Find more details in [paralus/relay](https://github.com/paralus/relay).

<br />

**paralus/dashboard**

​
**Fixed**

- Fix download kubeconfig file name issue - [akshay196](https://github.com/akshay196)
- Ui cleanups in cluster lister, import and config screens - [niravparikh05](https://github.com/niravparikh05)
- Fixed login failing right after logout - [meain](https://github.com/meain)
- Cluster tabular list view set to default and added user recovery link copy icon - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

---

## v0.1.4

**September 20,2022**

**paralus/helm-charts**

**Fixed**

- Cleanup pods for kratos restart on success - [meain](https://github.com/meain)

Find more details in [paralus/helm-charts](https://github.com/paralus/helm-charts).

---

## v0.1.3

**August 29,2022**

**paralus/paralus**

**Added**

- Added audit points - [vivekhiwarkar](https://github.com/vivekhiwarkar)
- Switched to using codecov for coverage - [meain](https://github.com/meain)
- Add audit log for kubeconfig download [meain](https://github.com/meain)

**Fixed**

- Fixed lint issues due to buf - [vivekhiwarkar](https://github.com/vivekhiwarkar)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

<br />

**paralus/relay**

**Changed**

- Removed building images to registry on pull requests - [niravparikh05](https://github.com/niravparikh05)
- Changes after fixing lint issue due to buf in paralus core - [vivekhiwarkar](https://github.com/vivekhiwarkar)

Find more details in [paralus/relay](https://github.com/paralus/relay).

<br />

**paralus/prompt**

**Changed**

- Removed building images to registry on pull requests - [niravparikh05](https://github.com/niravparikh05)
- Changes after fixing lint issue due to buf in paralus core - [vivekhiwarkar](https://github.com/vivekhiwarkar)

Find more details in [paralus/prompt](https://github.com/paralus/prompt).

---

## v0.1.2

**August 12, 2022**

**paralus/paralus**

**Fixed**

- Fixed init failing with db validation error - [meain](https://github.com/meain)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

---

## v0.1.1

**August 09, 2022**

**SKIP THIS RELEASE:** There was a bug in this release which caused db initialization to fail and has been fixed in v0.1.2.

We have a new release `v0.1.1`. You can get the latest code from [Paralus GitHub repo](https://github.com/paralus)

Below is the list of changes done, issues fixed and features added in various repos. You can also check out the individual repos for more details.

**paralus/paralus**

**Fixed**

- Fix to validate bare minimum role permissions for custom roles - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

<br />

**paralus/dashboard**

**Changed**

- Hide copy button on non https webpages - [meain](https://github.com/meain)
- Removed building images to registry on pull requests - [niravparikh05](https://github.com/niravparikh05)

**Fixed**

- Fix blank screen on initial login - [meain](https://github.com/meain)
- Fix time/date rendering in audit logs - [meain](https://github.com/meain)
- Invalid date displayed on cluster page - [niravparikh05](https://github.com/niravparikh05)
- Project manage membership: Should not be able to associate org role to users and groups - [niravparikh05](https://github.com/niravparikh05)
- Project manage membership: Unable to associate inbuilt namespaced roles to users and groups - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

<br />

**paralus/helm-charts**

**Added**

- Helm upgrade & rollback hook to restart Kratos - [akshay196](https://github.com/akshay196)

**Changed**

- Allow explicit setting of postgresql DSN - [mcfearsome](https://github.com/mcfearsome) and [meain](https://github.com/meain)

**Fixed**

- Prevent filebeat from fetching application logs for audit - [meain](https://github.com/meain)
- Fixed typo in output of postgresql Password - [mcfearsome](https://github.com/mcfearsome)

Find more details in [paralus/helm-charts](https://github.com/paralus/helm-charts).
