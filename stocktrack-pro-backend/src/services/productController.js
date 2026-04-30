const { getProducts } = require('../services/productService');

const getAllProducts = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};

module.exports = { getAllProducts };