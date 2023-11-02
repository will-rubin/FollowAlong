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

  const data = require("../products.json");

  /**
   * Returns an array of all products.
   * @returns {Product[]} An array of all products.
   */
  function getAll() {
      return data.products;
  }

  function get(id) {
        return data.products.find((product) => product.id === id);
    }

  function getByCategory(category) {
      return data.products.filter((product) => product.category === category);
  }

  function search(query) {
      return data.products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
  }

  /**
   * 
   * @param {Product} product
   * @returns {Product} The created product. 
   */
  function create(product) {
      const newProduct = {
          id: data.products.length + 1,
          ...product
      };
      data.products.push(newProduct);
      return newProduct;
  }

    /**
     * 
     * @param {Product} product - The product data to update.
     * @returns {Product} The updated product.
     */
    function update(product) {
        const index = data.products.findIndex((p) => p.id === product.id);
        if(index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        data.products[index] = {
            ...data.products[index],
            ...product
        };
        return data.products[index];
    }

    /**
     * 
     * @param {number} id - The id of the product to delete.
     * @returns {Product} The deleted product.
     */
    function remove(id) {
        const index = data.products.findIndex((p) => p.id === id);
        if(index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        const [product] = data.products.splice(index, 1);
        return product;
    }

  module.exports = {
      getAll, get, getByCategory, search, create, update, remove
  };