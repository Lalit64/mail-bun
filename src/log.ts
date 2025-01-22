import { Context } from "elysia";

const log = (
  ctx: Context<
    {
      body: unknown;
      params: Record<never, string>;
      query: undefined;
      headers: undefined;
      response: unknown;
    },
    {}
  >
) => {
  console.log(ctx.request?.method, ctx.path, ctx.set.status);
};

export { log };
