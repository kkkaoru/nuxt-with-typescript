import express from 'express';
import { nuxt } from './core/nuxt';
import { setHeadersMiddleware } from './middlewares/header-middleware';
import { loggerMiddleware } from './middlewares/logger-middleware';
import { envMiddleware } from './middlewares/env-middleware';

const app = express();

/** middleware */
app.use(setHeadersMiddleware);

if (process.env.ENDPOINT_ENV === 'api_gw') {
  app.use(envMiddleware);
}

if (process.env.NODE_ENV !== 'development') {
  app.use(loggerMiddleware);
}

app.use(async (req, res, next) => {
  await nuxt.ready();
  nuxt.render(req, res, next);
});

export default app;
