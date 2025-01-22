import app from "./app";
import Bun from "bun";

const port = Bun.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Open http://localhost:${port}/ 🌐 to view api`);
});
