import { ServerMiddleware } from '@nuxt/types';

export const loggerMiddleware: ServerMiddleware = (req, _, next) => {
  // eslint-disable-next-line no-console
  console.log('[info]', 'Request URL: ', req.url);
  next();
};
