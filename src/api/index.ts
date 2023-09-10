import { log } from '../app';
import send from './send';
import Elysia from 'elysia';

const api = (app: Elysia) => {
  app.get('/api/', (ctx) => {
    log(ctx);

    return {
      message: 'API - 👋🌎🌍🌏',
    };
  });

  send(app);
};

export default api;
