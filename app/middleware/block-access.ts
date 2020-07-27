import { Context } from '@nuxt/types';

function blockAccess(ctx: Context): void {
  ctx.error({ statusCode: 404 });
}

export default blockAccess;
