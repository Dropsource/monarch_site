# monarch_site

The monarch_site is built using [Docusaurus 2](https://v2.docusaurus.io/), a 
modern static website generator.

## Installation

```
yarn install
```

Make sure you have latest node.js.

## Local Development

```
yarn run start --host 0.0.0.0
```

This command starts a local development server and open up a browser window. Most 
changes are reflected live without having to restart the server. The `--host` flag
will allow access to your dev site from within the local network.

## Build

```
yarn build
```

This command generates static content into the `build` directory and can be served 
using any static contents hosting service.


## Image Processing

### Image Compression
Compress the images before publishing them. There are website, like [Compress PNG](https://compresspng.com/) 
which can compress a png. However, we seem to get better results with compression 
apps like "mini PNG Lite" which you can get from the macOS App Store.

### static/assets (not content versioned)
The command `yarn build` moves `static/assets` to `build/assets`. It does the 
same thing with `static/gifs` and `static/img`. Moving forward only use the
`static/assets` directory.

Images in the `static/assets` directory do not get content versioned. Their cache 
busting is more difficult but they are good to use for content which should be
heavily cached, like landing page images, or open graph images.

Avoid changing the content of images in the `static/assets` directory. These images 
are cached and replacing the content may not bust the cache since the file name will 
be the same. Instead of changing the image content, add a new image and change the 
reference to that image. After deploying the new image and after verifying the new 
image is properly deployed, then the old image can be deleted.

### docs/assets and blog/assets (content versioned)
Images in the `docs/assets` or `blog/assets` are usually referenced via the 
`import` statement in an mdx or js file. The import statement will content 
version those images. Unfortunately, after `yarn build`, the import statement moves them to 
the `build/assets/images` directory, which is confusing. Beware of that.

### Open graph images
Ideally every blog post and newsletter should have its own open graph image. 
If you are adding an open graph image, then make sure its dimensions are 
1.9:1 or 2:1. A width of 1200 or 1500 pixels is ok. Make sure to compress it

```
pngquant *.png
```

You can use the page `/opengraph` to draft your own open graph image. Edit the page
via opengraph.js

## Deployments

## Deployment PROD

We use render.com to host the production monarch_site. The production site 
deploys the contents of the `master` branch in Github. Ask someone in the 
team for the contents of the `.deploy_hook` file. Then run:
```
sh deploy.sh
```

Then go to: 
- https://monarchapp.io/
- https://monarch-site.onrender.com/

## Deployment DEV

We also have a dev site on render.com which deploys from the `dev` branch 
in Github. Make sure you are using the deploy hook for the site you want 
to deploy to.
```
sh deploy_dev.sh
```
Then go to: 
- https://monarch-site-dev.onrender.com/

## Staging Site
There is also a staging site, which we can use to collaborate with non-devs. The master and
dev branch have protection rules in Github which only allows developers to modify those 
branches. Other collaborator could submit changes to the staging branch which will then 
need to be merged to dev or master.

The stating deploys from the `staging` branch. The staging site is 
set up under a shared account in render.com. 

- The shared login is ftrigoso+marketing@dropsource.com.
- The staging site is hosted at: https://monarch-site-staging.onrender.com/
- To deploy to staging, login to render.com and do a manual deploy.
