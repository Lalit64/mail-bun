import send from "./send";
import Elysia from "elysia";
import { log } from "../log";

const api = (app: Elysia) => {
  app.get("/api/", (ctx) => {
    log(ctx);

    return {
      message: "API - 👋🌎🌍🌏",
    };
  });

  send(app);
};

export default api;
