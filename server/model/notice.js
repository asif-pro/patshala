const mongoose = require('./connection');
const Schema   = mongoose.Schema;

const noticeSchema = new Schema({

    title:{
        type: String,
        required: true,
    },
    details:{
        type: String,
        required: false,
    },
    date:{
        type: String,
        required: true,
    }
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;