//vanilla node server w/ express
const express = require('express');  //CommonJS module syntax
const productController = require('./controllers/products.js'); //import the router object from products.js
const app = express();  //instantiate express app, then create map of application routes
const path = require('path'); //path module to help with file paths

const PORT = 3000;

app 
  .use('/', express.static(path.join( __dirname, '../client/dist/')))
  .use(express.json())
  .use('/api/v1/products', productController)
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //allow CORS
    res.header('Access-Control-Allow-Headers', '*'); //allow CORS
    next()
  })
  .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })

console.log('1: Trying to start server...')

app.listen(PORT, () => {
  console.log(`2: Server is running at http://localhost:${PORT}...`);
});

console.log('3: End of file, waiting for requests...');
