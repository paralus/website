---
title: 2023
description: "Paralus release history with release notes for 2023"
slug: /release-notes/2023
---

---

## v0.2.3

**March 31, 2023**

**paralus/paralus**

**What's Changed**

- All dependabot open PRs - [akshay196](https://github.com/akshay196)
- Added validation for project name - [hiteshwani29](https://github.com/hiteshwani29)
- Bump github.com/prometheus/client_golang from 1.11.0 to 1.11.1 by @dependabot
- Bump github.com/crewjam/saml from 0.4.6 to 0.4.13 by @dependabot
- Bump mellium.im/sasl from 0.2.1 to 0.3.1 by @dependabot
- Github Action update to latest versions - [OmAximani0](https://github.com/OmAximani0)
- Add dependabot.yml - [akshay196](https://github.com/akshay196)
- Fix cluster description ignored bug - [akshay196](https://github.com/akshay196)
- Fix multiple bootstrap requests - [niravparikh05](https://github.com/niravparikh05)
- Support more than one IdP groups mapping - [akshay196](https://github.com/akshay196)
- Added api keys as headers for all grpc messages - [mabhi](https://github.com/mabhi)
- chore(deps): Bump docker/login-action from 1.10.0 to 2.1.0 by @dependabot
- chore(deps): Bump docker/metadata-action from 3.3.0 to 4.3.0 by @dependabot
- chore(deps): Bump docker/build-push-action from 2.5.0 to 4.0.0 by @dependabot
- Update Dockerfile.initialize to new Kratos version - [akshay196](https://github.com/akshay196)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

**paralus/dashboard**

**What's Changed**

- Show kratos errors information on error page - [akshay196](https://github.com/akshay196)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

**paralus/relay**

**What's Changed**

- Patch fix to pin golang.org/x/net to a specific version - [niravparikh05](https://github.com/niravparikh05)
- Add dependabot.yml and CODEOWNERS - [akshay196](https://github.com/akshay196)
- chore(deps): bump actions/checkout from 2 to 3 by @dependabot
- chore(deps): bump docker/build-push-action from 2.5.0 to 4.0.0 by @dependabot
- chore(deps): bump docker/metadata-action from 3.3.0 to 4.3.0 by @dependabot
- chore(deps): bump docker/login-action from 1.10.0 to 2.1.0 by @dependabot
- chore(deps): bump actions/setup-go from 2 to 4 by @dependabot
- Fix same bootstrap register requests from diff target clusters - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/relay](https://github.com/paralus/relay).

**paralus/helm-charts**

**What's Changed**

- Update kratos chart to Kratos app version 0.11.0 - [akshay196](https://github.com/akshay196)

Find more details in [paralus/helm-charts](https://github.com/paralus/helm-charts).

---

## v0.2.2

**February 27, 2023**

**paralus/paralus**

**What's Changed**

- Fix namespace limitation - [mabhi](https://github.com/mabhi)
- Add needs-triage label to issue templates - [akshay196](https://github.com/akshay196)
- Add the ability to configure the SA account lifetime - [mabhi](https://github.com/mabhi)
- Fix validate non empty projects for delete - [mabhi](https://github.com/mabhi)
- Handled no record found during connect cluster with no org setting set - [mabhi](https://github.com/mabhi)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

**paralus/dashboard**

**What's Changed**

- Namespace limitation while creating roles - [mabhi](https://github.com/mabhi)
- Organization level SA de-provision duration - [mabhi](https://github.com/mabhi)
- Added ability to delete idp users - [mabhi](https://github.com/mabhi)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

**paralus/relay**

**What's Changed**

- Updated cleanup logic w.r.t authz-expiry label - [mabhi](https://github.com/mabhi)

Find more details in [paralus/relay](https://github.com/paralus/relay).

**paralus/cli**

**What's Changed**

- Namespace limitations while associating roles - [mabhi](https://github.com/mabhi)
- Add makefile - [akshay196](https://github.com/akshay196)

Find more details in [paralus/cli](https://github.com/paralus/cli).

---

## v0.2.1

**January 27, 2023**

**paralus/paralus**

**What's Changed**

- Auto-generate password and force reset - [akshay196](https://github.com/akshay196)
- Fix project id is recorded as part of cluster related auditlogs - [niravparikh05](https://github.com/niravparikh05)

Find more details in [paralus/paralus](https://github.com/paralus/paralus).

**paralus/dashboard**

**What's Changed**

- Feature force reset - [mabhi](https://github.com/mabhi)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard).

**paralus/cli**

**What's Changed**

- Added support for forcereset and default password - [mabhi](https://github.com/mabhi)

Find more details in [paralus/cli](https://github.com/paralus/cli).

---