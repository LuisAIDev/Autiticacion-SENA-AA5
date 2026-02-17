const jwt = require('jsonwebtoken');

// Middleware para proteger rutas (Punto 7 de la guía)
module.exports = (req, res, next) => {
  // 1. Leer el token del header Authorization
  const authHeader = req.header('Authorization');

  // 2. Revisar si no hay token (Error 401 - No autenticado)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ ok: false, message: 'No hay token, permiso denegado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 3. Verificar el token con la clave secreta (Punto 7)
    const cifrado = jwt.verify(token, process.env.JWT_SECRET);
    req.user = cifrado; // Guardamos los datos del usuario en la petición
    next(); // Continuar a la ruta
  } catch (error) {
    // Error 403 - Token inválido (Punto 8)
    res.status(403).json({ ok: false, message: 'Token no es válido' });
  }
};
