require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
 
// Para archivo .env
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = require('./app');
