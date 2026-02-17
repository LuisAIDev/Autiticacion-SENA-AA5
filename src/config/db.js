const mongoose = require('mongoose');

// Configuración de la conexión siguiendo el requisito técnico
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Base de datos conectada correctamente');
  } catch (error) {
    console.error('❌ Error al conectar la base de datos:', error.message);
    process.exit(1); // Detener la app si falla la conexión
  }
};

module.exports = conectarDB;
