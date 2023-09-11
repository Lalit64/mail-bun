import { Context } from '../types';

const log = (ctx: Context) => {
  console.log(ctx.request?.method, ctx.path, ctx.set.status);
};

export { log };
