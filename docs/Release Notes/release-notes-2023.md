---
title: 2023
description: "Paralus release history with release notes for 2023"
slug: /release-notes/2023
---
---
## v0.2.6

**September 25, 2023**

What changed as part of this release ?

We have made significant improvements to auditlogs, with v0.2.6 ability to view audit logs has been extended to non organization admin users thus improving productivity and giving more insights to users with inbuilt project, cluster admins and read only roles, even custom roles with relavent access permissions.

**Breaking changes**

Prior to paralus v0.2.5, users will not have org, partner metadata information in kratos identities which will impact audit logs screens, apply below migrations if you are upgrading paralus

`update identities set metadata_public = jsonb_set(metadata_public, '{organization}', '"replace-with-your-organization-id"', true);`

`update identities set metadata_public = jsonb_set(metadata_public, '{partner}', '"replace-with-your-partner-id"', true);`

**Security Improvements**

Enhance the security of all container images using [cosign](https://github.com/sigstore/cosign), providing the ability to verify images that are part of our official release.

Multiple components were released

[Click here](https://github.com/paralus/paralus/releases/tag/v0.2.5) to view the detailed changelog for paralus.

[Click here](https://github.com/paralus/relay/releases/tag/v0.1.6) to view the detailed changelog for relay.

[Click here](https://github.com/paralus/dashboard/releases/tag/v0.2.1) to view the detailed dashboard.

---
## v0.2.5

**August 11, 2023**

We've made multiple bug fixes and process improvements, a step in the right direction to enhance our security posture overall.

Notable bug fixes that you should be aware of
- GET cluster api now validates the project input given as part of the request.
- Fixed organization admins to view secrets with restrictions enabled.
- Cluster API response to contain relay information as part of annotations for consumption.

**Enhanced Security Posture**
- Introduced security vulnerability scanning as part of the code contributions to paralus

[Click here](https://github.com/paralus/paralus/releases/tag/v0.2.4) to view the detailed changelog.

---
## v0.2.4

**April 28, 2023**

**paralus/paralus**

**What's Changed**

- Fix the number of wg.add bug - [tyut22316](https://github.com/tyut22316)
- Remove references to admindbuser - [niravparikh05](https://github.com/niravparikh05)
- Fixing link issues - [techmaharaj](https://github.com/techmaharaj)
- Fix re-running admindb migration failures - [akshay196](https://github.com/akshay196)

Find more details in [paralus/paralus](https://github.com/paralus/paralus/compare/v0.2.2...v0.2.3).

**paralus/dashboard**

**What's Changed**

- chore: add dependabot.yml and CODEOWNERS - [akshay196](https://github.com/akshay196)
- chore: pinned IDP mapper url to v0.2.2 version - [akshay196](https://github.com/akshay196)

Find more details in [paralus/dashboard](https://github.com/paralus/dashboard/compare/v0.1.9...v0.2.0).

**paralus/cli**

**What's Changed**

- Download CLI config to remove dashboard dependency for pctl usage - [hiteshwani29](https://github.com/hiteshwani29)
- Add codeowners and dependabot configuration - [akshay196](https://github.com/akshay196)

Find more details in [paralus/cli](https://github.com/paralus/cli/compare/v0.1.3...v0.1.4).

---

## v0.2.3

**March 31, 2023**

**paralus/paralus**

**Breaking Change**

- Okta JSONNet mapper configuration for SSO login got changed to support multiple groups. This may impact the existing Okta user logins configured with paralus versions prior to v0.2.1. As a workaround use [pinned Okta mapper URL](https://raw.githubusercontent.com/paralus/paralus/v0.2.1/_kratos/oidc-mappers/okta.jsonnet) to your existing Okta OIdC configuration.

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
