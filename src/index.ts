import app from './app';

const port = process.env.PORT || 3001;

async function main() {
  const server = await app.listen(port);
  console.log(`Server listening on port ${port}`);
}

(async () => {
  await main();
})();
