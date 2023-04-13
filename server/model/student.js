const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const studentSchema = new Schema({

  studentId: {
    type: String,
    required: true,
  },
  studentName: {
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
  dob: {
    type: String,
    required: true,
  },
  clas_s: {
    type: String,
    required: true,
  },
  section: {
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

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;