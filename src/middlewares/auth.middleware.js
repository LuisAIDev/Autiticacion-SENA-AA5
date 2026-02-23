const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({
      ok: false,
      message: 'Acceso denegado. No hay token.',
    });
  }

  try {
    const token = authHeader.replace('Bearer ', '');
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({
      ok: false,
      message: 'Token inválido o expirado',
    });
  }
};

module.exports = authMiddleware;
