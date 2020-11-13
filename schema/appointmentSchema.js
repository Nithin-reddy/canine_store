var mongoose = require('mongoose');
const { Schema } = mongoose;


const appointMentSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    phone: {
        type: String,
        default: '',
        index: true,
    },
    description: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: null,
        index: true
    },
    last_updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Appointment', appointMentSchema)