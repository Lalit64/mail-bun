import api from "./api";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { helmet } from "elysia-helmet";
import { Context } from "./types";
import { log } from "./log";

const app = new Elysia();

app.use(helmet());
app.use(cors());

api(app);

app.get("/", (ctx) => {
  log(ctx);
  return { message: "Use /api/send for emails 😀." };
});

export default app;
