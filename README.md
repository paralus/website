# RCloud Open Source Website

This repository contains the source code for the informational website for RCloud.

The website is built using [Next](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Local Development

Clone the repository to your local machine, and then run the following commands:

```
$ npm install
$ npm run dev
```

## Deployment

Automatic deploys are configured using Vercel. In Vercel configuration, the Framework Preset should be specified as `Create React App`, and build command as `CI=false npm run build`.
