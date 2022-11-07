import app from './app';

const port = process.env.BACKEND_PORT || 3001;

async function main() {
  const server = await app.listen(port);
}

(async () => {
  await main();
})();
