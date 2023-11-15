//vanilla node server w/ express
const path = require('path'); //path module to help with file paths
const express = require('express');  //CommonJS module syntax
const productController = require('./controllers/products.js'); //import the router object from products.js
const userController = require('./controllers/users.js'); //import the router object from users.js
const app = express();  //instantiate express app, then create map of application routes

const mongo = require('./models/mongo.js');

const PORT = 3000;


//CORS
app 
  .use('/', express.static(path.join( __dirname, '../client/dist/')))

  .use(express.json())

  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //allow CORS
    res.header('Access-Control-Allow-Methods', '*'); //allow CORS
    res.header('Access-Control-Allow-Headers', '*'); //allow CORS
    next()
  })

  .use('/api/v1/products', productController)
  .use('/api/v1/users', userController)

  .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })

  .use((err, req, res, next) => { 
    console.log(err);
    res
      .status(err?.status || 500)
      .json({ message: err?.message || err })
  })

console.log('1: Trying to start server...')

app.listen(PORT, () => {
  console.log(`2: Server is running at http://localhost:${PORT}...`);
});

console.log('3: End of file, waiting for requests...');
