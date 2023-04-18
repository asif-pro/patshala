const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const softSkillsSchema = new Schema({

    skill_name:{
        type: String,
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
    studentId:{
        type: String,
        required: true,
  },
    score: {
        type: Number,
        required: true,
  }
});

const SoftSkills = mongoose.model('SoftSkills', softSkillsSchema);

module.exports = SoftSkills;