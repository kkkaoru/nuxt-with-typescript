import path from 'path';
import Sass from 'sass';
import Fiber from 'fibers';
import { Config as WebfontloaderConfig } from 'webfontloader';
import { Configuration } from '@nuxt/types';
import { NuxtOptionsRouter } from '@nuxt/types/config/router';

const router: NuxtOptionsRouter = {};

const SITE_DESCRIPTION =
  'ディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプションディスクリプション';

const configuration = {
  mode: 'universal',
  srcDir: 'app',
  router,
  render: {
    /**
     * compression を通すと2重に Gzip がかかりブラウザが表示できないので
     * なにもしないミドルウェアを定義しておく
     */
    compressor: (_req, _res, next) => {
      next();
    },
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'ページのタイトル',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: SITE_DESCRIPTION,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://placehold.it/1200x630',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summery_large_image',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@TwitterJP',
      },
      {
        hid: 'theme-color',
        property: 'theme-color',
        content: '#000',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/composition-api.ts',
    '~/plugins/axios-accessor.ts',
    {
      src: '~/plugins/vue-lazyload',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/gtm',
    [
      '@nuxt/typescript-build',
      {
        typescript: {
          memoryLimit: 4096,
        },
      },
    ],
    // Doc: https://github.com/nuxt-community/eslint-module
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // Doc: https://github.com/nuxt-community/stylelint-module
    [
      '@nuxtjs/stylelint-module',
      {
        fix: true,
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader', '@nuxtjs/style-resources', '@nuxtjs/axios', 'portal-vue/nuxt', '@nuxtjs/sentry'],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:300,500,700&display=swap'],
    },
  } as WebfontloaderConfig,
  gtm: {
    // Set to false to disable module
    enabled: process.env.NUXT_GTM_ID !== undefined,
    id: process.env.NUXT_GTM_ID,
    pageTracking: true,
  },
  styleResources: {
    scss: ['@/utils/scss/break-points.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    hardSource: process.env.NODE_ENV !== 'production',
    extend(config) {
      config.resolve.alias['timezone-support$'] = path.join(
        __dirname,
        'node_modules/timezone-support/dist/index-2012-2022.js',
      );
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
  env: {
    NUXT_USE_MOCK_DIRECTORIES: process.env.NUXT_USE_MOCK_DIRECTORIES,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    disabled: Boolean(process.env.SENTRY_DSN) !== true,
  },
} as Configuration;

export default configuration;
