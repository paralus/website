We 💚 Opensource!

Yes, because we feel that it’s the best way to build and improve a product. It allows people like you from across the globe to contribute and improve a product over time. And we’re super happy to see that you’d like to contribute to Paralus.

We are always on the lookout for anything that can improve the product. Be it feature requests, issues/bugs, code or content, we’d love to see what you’ve got to make this better. If you’ve got anything exciting and would love to contribute, this is the right place to begin your journey as a contributor to Paralus and the larger open source community.

## How to get started?

The easiest way to start is to look at existing issues and see if there’s something there that you’d like to work on. You can filter issues with the label “[Good first issue](https://github.com/paralus/website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)” which are relatively self sufficient issues and great for first time contributors.

Once you decide on an issue, please comment on it so that all of us know that you’re on it.

If you’re looking to add a new feature, [raise a new issue](https://github.com/paralus/website/issues/new) and start a discussion with the community. Engage with the maintainers of the project and work your way through.

You'll need to perform the following tasks in order to submit your changes:

- Fork the Paralus repository.
- Create a branch for your changes.
- Add commits to that branch.
- Open a PR to share your contribution.

Below are all the details you need to know about the `Website` repo and get started with the development.

# Website

## Prerequisites

To use this repository, you need the following installed locally:

- [npm](https://www.npmjs.com/)

Before you start, install the dependencies. Clone the repository and navigate to the directory:

```bash
git clone ttps://github.com/paralus/website.git
cd website
```

## Development setup

`cd` into your cloned repository, and start the server:

```
$ npm install
$ npm run start
```

You can view the website at [http://localhost:3000](http://localhost:3000). The local site auto-reloads when you make changes.

> Opening a pull request will automatically generate a preview URL. Merging to `main` autodeploys to the [Paralus website](https://paralus.io) using Vercel.

## Contributing

### Editing documentation

To create a new page in documentation, create a new file in a suitable section in `/docs`. The file name should follow `page_title.md` format.

Docusaurus supports page metadata such as `sidebar_position`, `slug`, `title`, etc. Check out the [Full list of metadata keys](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs).

Use the existing pages as an example. Normally, they'll contain something like:

```
---
title: "Audit Logs"
description: "Learn how Audit logs work in Paralus"
slug: /usage/audit-logs
---
```

### Editing site

To edit the landing page, you can edit or create new components in the `/components` directory.

Docusaurus ships with a lot of default components that are not exposed in `/src`, such as `Footer` or `Nav`. To override these defaults, you can use [swizzling](https://docusaurus.io/docs/swizzling).

> Tip: if you need to reset a swizzled up component back to its default, delete the swizzled up component's files.

### Editing blog

Blog posts live in `/blog`. They're organized by date, and live in directories that follow the format `YYYY-MM-DD-post_slug`.

Post content is written using Markdown in `index.md`. Images can be included in `/img`, and referenced in the post using format `![alt](./img/image.png)`. We use `<!--truncate-->` to indicate the preview cutoff point in a [list of blogposts](https://paralus.io/blog).

## DCO Sign off

All authors to the project retain copyright to their work. However, to ensure
that they are only submitting work that they have rights to, we are requiring
everyone to acknowledge this by signing their work.

Any copyright notices in this repo should specify the authors as "the
paralus contributors".

To sign your work, just add a line like this at the end of your commit message:

```
Signed-off-by: Joe Bloggs <joe@example.com>
```

This can easily be done with the `--signoff` option to `git commit`.
You can also mass sign-off a whole PR with `git rebase --signoff master`, replacing
`master` with the branch you are creating a pull request against, if not master.

By doing this you state that you can certify the following (from https://developercertificate.org/):

```
Developer Certificate of Origin
Version 1.1
Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
1 Letterman Drive
Suite D4700
San Francisco, CA, 94129
Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.
Developer's Certificate of Origin 1.1
By making a contribution to this project, I certify that:
(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or
(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or
(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.
(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

## Need Help?

If you are interested to contribute to core but are stuck with any of the steps, feel free to reach out to us. Please [create an issue](https://github.com/paralus/website/issues/new) in this repository describing your issue and we'll take it up from there.
