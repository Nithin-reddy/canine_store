var mongoose = require('mongoose');
const { Schema } = mongoose;

var dogBreedSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 200
    },
    about: {
        type: String,
        required: true,
        max: 5000
    },
    lifeSpan: {
        type: String,
        required: true
    },
    energyLevel: {
        type: Number,
        default: 0
    },
    exerciseRequirements: {
        type: Number,
        default: 0
    },
    playFull: {
        type: Number,
        default: 0
    },
    affectionLevel: {
        type: Number,
        default: 0
    },
    friendlinessToOtherDogs: {
        type: Number,
        default: 0
    },
    guard: {
        type: Number,
        default: 0
    },
    groomRequiremnts: {
        type: Number,
        default: 0
    },
    easeOfTraining: {
        type: Number,
        default: 0
    },
    maxWeight: {
        type: String,
        default: 0
    },
    maxHeight: {
        type: String,
        default: 0
    },
    areaOfOrigin: {
        type: String,
        default: 0
    },
    healthNotes: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

var DogBreed = mongoose.model('DogBreed', dogBreedSchema);


module.exports = {
    DogBreed
}