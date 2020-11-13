var mongoose = require('mongoose');
const { Schema } = mongoose;


var DogServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})



var DogService = mongoose.model('FosterDog', DogServiceSchema);

module.exports = {
    DogService
}