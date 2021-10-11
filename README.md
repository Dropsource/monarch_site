# monarch_site

The monarch_site is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```
yarn install
```

Make sure you have latest node.js.

## Local Development

```
yarn run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment PROD

We use render.com to host the production monarch_site. The production site deploys the contents of the `master` branch in Github. Ask someone in the team for the contents of the `.deploy_hook` file. Then run:
```
sh deploy.sh
```

Then go to: 
- https://monarchapp.io/
- https://monarch-site.onrender.com/

## Deployment DEV

We also have a dev site on render.com which deploys from the `dev` branch in Github. Make sure you are using the deploy hook for the site you want to deploy to.
```
sh deploy_dev.sh
```
Then go to: 
- https://monarch-site-dev.onrender.com/

## Staging Site
There is also a staging site, which deploys from the `staging` branch. The staging site is 
set up under a shared account in render.com. 

- The shared login is ftrigoso+marketing@dropsource.com.
- The staging site is hosted at: https://monarch-site-staging.onrender.com/
- To deploy to staging, login to render.com and do a manual deploy.
- 