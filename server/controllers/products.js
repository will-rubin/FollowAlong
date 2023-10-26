

const express = require('express');
const { getProducts, getProductById, search } = require('../data/models/products.js'); //import the getProducts function from products.js
const router = express.Router(); //pretty much the same as app in index.js

router.get('/', (req, res, next) => { //req has all info about the request, IP address, headers, etc. res is the response object with send and other functions, next is a function that will pass control to the next matching route
   
    res.send([
        {id: 1, name: 'product 1'},
        {id: 2, name: 'product 2'},
    ]);

});

router.get('/search', (req, res, next) => {
    const results = search(req.query.q);
    res.send(results);
});

router.get('/:id', (req, res, next) => { 
    const product = getProductById(+req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send(`Product with id ${req.params.id} not found`);
    }

})


module.exports = router; //export the router object so it can be used in index.js, this is a default export
                    