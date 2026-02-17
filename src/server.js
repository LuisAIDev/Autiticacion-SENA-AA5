const app = require('./app');

// Usar el puerto del .env o el 3000 por defecto (Punto 7)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log('✅ Proyecto: LUIS_ORLANDO_GUERRA_AA5_EV01');
});
