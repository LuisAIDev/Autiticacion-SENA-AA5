const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    rol: { type: String, default: 'user' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
