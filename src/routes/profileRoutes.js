const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const userService = require('../services/userService');

router.get('/profile', authMiddleware, async (req, res, next) => {
  try {
    const user = await userService.findUserById(req.user.id);

    res.json({
      ok: true,
      message: 'Perfil obtenido',
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
