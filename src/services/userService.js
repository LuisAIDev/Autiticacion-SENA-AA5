const User = require('../models/User');

exports.findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

exports.createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

exports.findUserById = async (id) => {
  return await User.findById(id).select('-passwordHash');
};
