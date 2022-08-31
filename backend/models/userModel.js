const mongoose = require('mongoose');

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FRdJhLdEEhFbcIuR-DEGYsFMjn-6QUGZ7A&usqp=CAU',
    },
  },
  { timestamps: true },
);
const User = mongoose.model('User', userModel);
module.exports = User;
