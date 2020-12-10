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

We use render.com to host the monarch_site. Ask someone in the team for the contents of the `.deploy_hook` file. Then run:
```
bash deploy.bash
```