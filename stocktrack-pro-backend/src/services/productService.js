const pool = require('../config/db');

const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

module.exports = { getProducts };