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

## Deployment

As of 2020-12-15, we have two sites, a prod and a dev site:
- the prod site is monarch-site.onrender.com
- the dev site is monarch-site-dev.onrender.com

The prod site uses the master branch. The dev site uses the dev branch.

You should create a .deploy_hook file with the deploy hook url for the site you want to deploy to.
You can get the deploy hook url from the render.com site.

In general, the dev machines should deploy to the dev site. The build machines should deploy to the prod sites.
 
Deploy from macos:
```
bash deploy.bash
```

Deploy from windows:
```
deploy.bat
```

