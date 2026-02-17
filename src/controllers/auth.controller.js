const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// A. Registro de Usuario
exports.register = async (req, res) => {
  try {
    const { nombre, username, passwordHash } = req.body;

    // Verificar si el usuario ya existe
    let user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ ok: false, message: 'El usuario ya existe' });

    // Crear nuevo usuario (el hash se hace en el modelo)
    user = new User({ nombre, username, passwordHash });
    await user.save();

    res.status(201).json({ ok: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error en el servidor' });
  }
};

// B. Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validar credenciales
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(401)
        .json({ ok: false, message: 'Credenciales inválidas' });

    // Comparar contraseña hasheada
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
      return res
        .status(401)
        .json({ ok: false, message: 'Credenciales inválidas' });

    // Generar token firmado con clave secreta [cite: 6, 7]
    const token = jwt.sign(
      { id: user._id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
    );

    res.json({ ok: true, token });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error en el servidor' });
  }
};
