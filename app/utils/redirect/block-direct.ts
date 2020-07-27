import { Context } from '@nuxt/types';

export function useBlockDirectAccess(ctx: Context, redirectTo = '/'): boolean {
  if (ctx.from) {
    return true;
  }
  // VueRouterを経由しないダイレクトなアクセスを拒否する
  ctx.redirect(redirectTo);
  return false;
}
