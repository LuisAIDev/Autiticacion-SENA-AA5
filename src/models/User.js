const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    username: { type: String, required: true, unique: true }, //
    passwordHash: { type: String, required: true },
    rol: { type: String, default: 'user' },
  },
  { timestamps: true },
); //

// Middleware para hashear la contraseña antes de guardar
UserSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
