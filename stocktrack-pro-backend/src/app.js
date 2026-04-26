const express = require('express');
const cors = require('cors');

const app = express();

// middlewares base
app.use(cors());
app.use(express.json());

// ruta de prueba
app.get('/', (req, res) => {
  res.send('API en funcionamiento');
});

module.exports = app;