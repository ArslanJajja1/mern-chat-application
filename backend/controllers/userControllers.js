const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const User = require('../models/userModel');
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all the fields');
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('Email is taken');
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Failed to create user');
  }
});
const loginUser = async () => {};

module.exports = { registerUser, loginUser };
