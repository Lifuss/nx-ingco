import app from './main';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.BACKEND_PORT) : 3000;

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
