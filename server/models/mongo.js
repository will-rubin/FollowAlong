
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function connect() {
  await client.connect();
  return client.db(DB_NAME) //we want to avoid magic strings, eq avoid putting the actual port number in the code, use the nv var instead
  
}

module.exports = { 
  connect,
  ObjectId
 };