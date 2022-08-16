---
title: 2022
description: "Paralus release history with release notes for 2022"
slug: /release-notes/2022
---

## v0.1.2

### August 12, 2022

### paralus/paralus

**Fixed**

- Fixed init failing with db validation error from [meain](https://github.com/meain)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

## v0.1.1

### August 09, 2022

**SKIP THIS RELEASE:** There was a bug in this release which caused db initialization to fail and has been fixed in v0.1.2.

We have a new release `v0.1.1`. You can get the latest code from [Paralus GitHub repo](https://github.com/paralus)

Below is the list of changes done, issues fixed and features added in various repos. You can also check out the individual repos for more details.

### paralus/paralus

**Fixed**

- Fix to validate bare minimum role permissions for custom roles from [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

### paralus/dashboard

**Changed**

- Hide copy button on non https webpages from [meain](https://github.com/meain)
- Removed building images to registry on pull requests from [niravparikh05](https://github.com/niravparikh05)

**Fixed**

- Fix blank screen on initial login from [meain](https://github.com/meain)
- Fix time/date rendering in audit logs from [meain](https://github.com/meain)
- Invalid date displayed on cluster page from [niravparikh05](https://github.com/niravparikh05)
- Project manage membership: Should not be able to associate org role to users and groups from [niravparikh05](https://github.com/niravparikh05)
- Project manage membership: Unable to associate inbuilt namespaced roles to users and groups from [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

### paralus/helm-charts

**Added**

- Helm upgrade & rollback hook to restart Kratos from [akshay196](https://github.com/akshay196)

**Changed**

- Allow explicit setting of postgresql DSN from [mcfearsome](https://github.com/mcfearsome) and [meain](https://github.com/meain)

**Fixed**

- Prevent filebeat from fetching application logs for audit from [meain](https://github.com/meain)
- Fixed typo in output of postgresql Password from [mcfearsome](https://github.com/mcfearsome)

Find more details in [paralus/helm-charts](https://github.com/paralus/helm-charts).
