import { ServerMiddleware } from '@nuxt/types';

/**
 * レスポンスヘッダーを設定するミドルウェア
 * XSS 対策などのヘッダーを記述
 */
export const setHeadersMiddleware: ServerMiddleware = (_, res, next) => {
  res.removeHeader('x-powered-by');
  res.setHeader('no-cache', 'Set-Cookie');
  res.setHeader('x-xss-protection', '1; mode=block');
  res.setHeader('x-frame-options', 'DENY');
  res.setHeader('x-content-type-options', 'nosniff');
  res.setHeader('cache-control', 'public, max-age=0, must-revalidate');
  next();
};
