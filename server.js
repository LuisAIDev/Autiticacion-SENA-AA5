require('dotenv').config();
const express = require('express');
const conectarDB = require('./src/config/db');

const app = express();
app.use(express.json());

conectarDB();

const authRoutes = require('./src/routes/auth.routes');
const profileRoutes = require('./src/routes/profileRoutes');

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'API funcionando 🚀',
    estudiante: 'Luis Guerra',
  });
});

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
