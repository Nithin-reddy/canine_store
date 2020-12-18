var mongoose = require('mongoose');
const { Schema } = mongoose;

var DogImageSchema = new Schema({ path: String })

const dogServiceSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    images: [DogImageSchema],
    last_updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('DogService', dogServiceSchema);