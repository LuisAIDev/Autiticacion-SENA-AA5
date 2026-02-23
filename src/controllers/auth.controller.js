const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

exports.register = async (req, res, next) => {
  try {
    const { nombre, username, password } = req.body;

    if (!nombre || !username || !password) {
      return res.status(400).json({
        ok: false,
        message: 'Campos obligatorios',
      });
    }

    const userExists = await userService.findUserByUsername(username);
    if (userExists) {
      return res.status(400).json({
        ok: false,
        message: 'Usuario ya existe',
      });
    }

    // ✅ DESPUÉS (con hash real)
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await userService.createUser({
      nombre,
      username,
      passwordHash,
    });

    res.status(201).json({
      ok: true,
      message: 'Usuario registrado',
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        ok: false,
        message: 'Campos obligatorios',
      });
    }

    const user = await userService.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({
        ok: false,
        message: 'Credenciales inválidas',
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        ok: false,
        message: 'Credenciales inválidas',
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );

    res.json({
      ok: true,
      message: 'Login exitoso',
      token,
    });
  } catch (error) {
    next(error);
  }
};
