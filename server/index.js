//vanilla node server
const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log('1: Trying to start server...')

app.listen(PORT, () => {
  console.log(`2: Server is running at  http://localhost:${PORT}...`);
});

console.log('3: End of file, waiting for requests...');
