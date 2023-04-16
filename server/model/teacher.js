const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const teacherSchema = new Schema({

  TeacherId: {
    type: String,
    required: true,
  },
  TeacherName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isHeadOf: {
    type: Boolean,
    required: true,
  },
  ownSection: {
    type: String,
    required: true,
  },
  
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: Number,
    required: true,
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;