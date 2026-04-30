require('dotenv').config();

const app = require('./app');
const pool = require('./config/db');

const requiredEnv = ['JWT_SECRET', 'DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_NAME', 'DB_PORT'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.error('Faltan variables de entorno requeridas:', missingEnv.join(', '));
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

pool.query('SELECT NOW()')
  .then((res) => console.log('Conectado:', res.rows))
  .catch((err) => console.error('Error conexión:', err));
