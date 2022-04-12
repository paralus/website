# RCloud Open Source Website

This repository contains the source code for the informational website for RCloud.

The website is built using [Create React App](https://create-react-app.dev/) and [Chakra UI](https://chakra-ui.com/).

## Local Development

Clone the repository to your local machine, and then run the following commands:

```
$ npm install
$ npm start
```

## Deployment

Automatic deploys are configured using Vercel. In Vercel configuration, the Framework Preset should be specified as `Create React App`, and build command as `CI=false npm run build`.
