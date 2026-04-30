const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();

// middlewares base
app.use(cors());
app.use(express.json());

// ruta de prueba
app.get('/', (req, res) => {
  res.send('API en funcionamiento');
});

// rutas de autenticación
app.use('/api/auth', authRoutes);

// ruta protegida de ejemplo
app.get('/api/profile', authenticate, (req, res) => {
  res.json({
    message: 'Perfil protegido',
    user: req.user,
  });
});

module.exports = app;