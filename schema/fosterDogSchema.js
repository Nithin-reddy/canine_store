var mongoose = require('mongoose');
const { Schema } = mongoose;

var fosterDogImageSchema = new Schema({ path: String })

var fosterDogSchema = new Schema({
    breed: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'DogBreed'
    },
    dog_age: {
        type: String,
        enum: ['puppy', 'young', 'adult', 'old'],
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    about: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    images: [fosterDogImageSchema]
}, {
    timestamps: true
})



var FosterDog = mongoose.model('FosterDog', fosterDogSchema);

module.exports = {
    FosterDog
}