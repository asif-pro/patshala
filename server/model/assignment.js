const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const assignmentSchema = new Schema({

    assignment_number:{
        type: Number,
        required: true,
  },
    subject:{
        type: String,
        required: true,
  },
    section:{
        type: String,
        required: true,
  },
    teacher_id:{
        type: String,
        required: false,
  },
    studentId:{
        type: String,
        required: true,
  },
    score: {
        type: Number,
        required: true,
  }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;