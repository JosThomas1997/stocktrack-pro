const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stocktrack',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res.rows);
});