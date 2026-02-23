const express = require('express');
const app = express();

// middlewares
app.use(express.json());

// rutas
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);

// ruta base
app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'API funcionando 🚀',
    estudiante: 'Luis Guerra',
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: 'Ruta no encontrada',
  });
});

// error global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    ok: false,
    message: 'Error interno',
  });
});

module.exports = app;
