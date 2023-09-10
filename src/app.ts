import api from './api';
import { Elysia } from 'elysia';
import cors from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';

const app = new Elysia();

const log = (ctx: any) => {
  console.log(
    ctx.request?.method,
    (ctx.request?.url).replace('http://localhost:3000', ''),
    '',
  );
};

app.use(helmet());
app.use(cors());

api(app);

app.get('/', (ctx) => {
  log(ctx);
  return { message: 'Use /api/send for emails 😀.' };
});

export default app;
export { log };
