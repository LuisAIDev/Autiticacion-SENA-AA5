const express = require('express');
const dotenv = require('dotenv');
const conectarDB = require('./config/db');

// Configuración de variables de entorno [cite: 8]
dotenv.config();

const app = express();

// Middleware para que el servidor entienda JSON
app.use(express.json());

// Conexión a la base de datos
conectarDB();

// Rutas (Las definiremos a continuación)
app.use('/api/auth', require('./routes/auth.routes'));

// Manejo de errores 404 - Ruta no encontrada [cite: 10]
app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

module.exports = app;
