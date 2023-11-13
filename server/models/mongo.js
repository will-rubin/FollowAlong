
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://newpaltz:suny@cluster0.ugduvlt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const products = await client.db("amazify").collection("products").find().toArray();
    console.log({products}); //creating a json object with one property called products, making it clear
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
