# Paralus Documentation, Blog & Website

This repo contains the [Paralus website](https://paralus.io), documentation, and blog. The website is built using [Docusaurus 2](https://docusaurus.io/), and styled using [Tailwind CSS](https://tailwindcss.com/).

## Development

`cd` into your cloned repository, and start the server:

```
$ npm install
$ npm run start
```

You can view the website at [http://localhost:3000](http://localhost:3000). The local site auto-reloads when you make changes.

Opening a pull request will automatically generate a preview URL. Merging to `main` autodeploys to the [Paralus website](https://paralus.io) using Vercel.

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
