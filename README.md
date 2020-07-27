# Nuxt example with TypeScript

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Caching

We use hard-source-webpack-plugin. This plugin create cache directory.

```
# Can remove build cache
$ npm run clean:cache
```

https://github.com/mzgoddard/hard-source-webpack-plugin
