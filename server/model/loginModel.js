const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const loginSchema = new Schema({
  userId: String,
  password: String,
  userType: Number,

//   userId: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   userType: {
//     type: Number,
//     required: true,
//   },
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;