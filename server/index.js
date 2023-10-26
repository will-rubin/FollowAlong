//vanilla node server w/ express
const express = require('express');  //CommonJS module syntax
const productController = require('./controllers/products.js'); //import the router object from products.js
const app = express();  //instantiate express app, then create map of application routes

const PORT = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!');
})

.use('/products', productController); //use the router object from products.js, this is a middleware function. Use is a catchall verb, so it will match any HTTP verb, get, post, put, delete, etc. and any path that starts with /products. So /products, /products/1, /products/1/reviews, etc. will all match this route.
console.log('1: Trying to start server...')

app.listen(PORT, () => {
  console.log(`2: Server is running at http://localhost:${PORT}...`);
});

console.log('3: End of file, waiting for requests...');
