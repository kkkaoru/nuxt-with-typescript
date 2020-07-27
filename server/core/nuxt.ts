import config from '../../nuxt.config';
const { Nuxt } = require('nuxt');

config.dev = !(process.env.NODE_ENV === 'production');

export const nuxt = new Nuxt(config);

export default config;
