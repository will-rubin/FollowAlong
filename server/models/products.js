 
 const { ObjectId, connect } = require('./mongo'); 
 const data = require("../data/products.json");  
 
 /**
     * @typedef {Object} Product
     * @property {number} id - The unique identifier of the product.
     * @property {string} title - The title of the product.
     * @property {string} description - The description of the product.
     * @property {number} price - The price of the product.
     * @property {number} discountPercentage - The discount percentage of the product.
     * @property {number} rating - The rating of the product.
     * @property {number} stock - The stock of the product.
     * @property {string} brand - The brand of the product.
     * @property {string} category - The category of the product.
     * @property {string[]} images - The images of the product.
     * @property {string} thumbnail - The thumbnail of the product.
     */

const COLLECTION_NAME = 'products';
async function getCollection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

  /**
   * Returns an array of all products.
   * @returns {Promise<Product[]>} An array of all products.
   */
  async function getAll() {
      const col = await getCollection();
      return col.find({}).toArray();
  }

  /**
   * 
   * @param {string} id 
   */
    async function get(id) {
        const col = await getCollection();
        return await col.findOne({ _id: ObjectId(id) });
    }

  async function getByCategory(category) {
      const col = await getCollection();
      return await col.findOne({ category });
  }

  async function search(query) {
      const col = await getCollection();
      const products = await col.find({
        $or : [
            { title: { $regex: query, $options: 'i' } }, // i = case insensitive
            { description: { $regex: query, $options: 'i' } }
        ]
      }).toArray();
      return products;
  }

  /**
   * 
   * @param {Product} product
   * @returns {Promise<Product>} The created product. 
   */
  async function create(product) {
      const newProduct = {
          id: data.products.length + 1,
          ...product
      };
      const col = await getCollection();   
      const result = await col.insertOne(newProduct);
      data.products.push(newProduct);
      newProduct._id = result.insertedId;

      return newProduct;
  }

    /**
     * 
     * @param {Product} product - The product data to update.
     * @returns {Promise<Product>} The updated product.
     */
    async function update(product) {
        const col = await getCollection();
        const result = await col.findOneAndUpdate(
            { _id: ObjectId(product._id) },
            { $set: product },
            { returnDocument: 'after' }
        );
        return result.value;
    }

    /**
     * 
     * @param {string} id - The id of the product to delete.
     */
    async function remove(id) {
        const col = await getCollection();
        const result = await col.deleteOne({ _id: ObjectId(id) });
        const index = data.products.findIndex(p => p.id === id);
        if(index === -1) {
            throw new Error('Product not found');
        }
    }

    async function seed() {
        const col = await getCollection();
        await col.insertMany(data.products);
    }

  module.exports = {
      getAll, get, getByCategory, getCollection, COLLECTION_NAME, search, create, update, remove, seed
  };