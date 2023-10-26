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
  function getProducts() {
      return data.products;
  }

  function getProductById(id) {
        return data.products.find((product) => product.id === id);
    }

  function getProductsByCategory(category) {
      return data.products.filter((product) => product.category === category);
  }

  function search(query) {
      return data.products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
  }

  module.exports = {
      getProducts, getProductById, getProductsByCategory, search
  };