import app from './app';

const port = Bun.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Open http://localhost:3000/ 🌐 to view api`);
});
