# Nuxt example with TypeScript

## Needs

- [direnv](https://direnv.net/)

## Build Setup

```bash
# Set env
$ cp .env.sample .env
$ direnv allow .

# install dependencies
$ yarn

# serve with hot reload at localhost
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
