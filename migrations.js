const mongoose = require('mongoose');
const mongo_uri = process.env.MONGODB_URI || 'mongodb+srv://rockey:mongo@cluster0.varna.mongodb.net/jasmine?retryWrites=true&w=majority';
const mongo_options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
};

var {
    DogBreed
} = require('./schema/dogBreed')
mongoose.connect(mongo_uri, mongo_options).then(conn => {
    console.log("CONNETD TO DB");
    console.log("RUNNING SCRIPTS TO DB");
    var breeds = [{
        name: "German Shepard",
        about: "The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. In the English language, the breed's officially recognized name is German Shepherd Dog.",
        lifeSpan: '9-13',
        energyLevel: 4,
        exerciseRequirements: 4,
        playFull: 4,
        affectionLevel: 4,
        friendlinessToOtherDogs: 3,
        guard: 4,
        groomRequiremnts: 4,
        easeOfTraining: 4,
        maxWeight: "Male: 30–40 kg, Female: 22–32 kg",
        maxHeight: "Male: 60–65 cm, Female: 55–60 cm",
        areaOfOrigin: "Germany",
        healthNotes: "",
        image: "german-shep.jpg"
    },
    {
        name: "Affenpinscher",
        about: "The Affenpinscher is square-proportioned, compact and sturdy, with medium bone. This breed is a smaller version of a working terrier, and as such is not a delicate dog. This is an active, tough dog that is agile enough to catch and dispatch rodents. The gait is light, sound, and confident. The Affenpinscher has a monkey-like facial expression with long eyebrows and beard, which lends an air of comic seriousness. The rough coat is about 1 inch long on the body, somewhat longer on the head, neck, chest, stomach and legs. This coat type provided protection from pests and harsh conditions.",
        lifeSpan: '12–14',
        energyLevel: 4,
        exerciseRequirements: 4,
        playFull: 4,
        affectionLevel: 4,
        friendlinessToOtherDogs: 3,
        guard: 1,
        groomRequiremnts: 4,
        easeOfTraining: 3,
        maxWeight: "7-9 lb",
        maxHeight: "9.5-11.5",
        areaOfOrigin: "Germany",
        healthNotes: "Occasionally seen: PDA, open fontanel, respiratory difficulties, Legg-Perthes,,Life span: 12–14 years",
        image: "affenpinscher-detail.jpg"
    },
    {
        name: "Afghan Hound ",
        about: "The Afghan is built along greyhound-like lines, enabling this dog to execute a double-suspension gallop and run down fleet game. The comparatively short back and steep pelvis helped the Afghan to leap great heights and to turn almost in place, essential attributes for coursing in rocky mountainous terrain.",
        lifeSpan: '12–14',
        energyLevel: 2,
        exerciseRequirements: 3,
        playFull: 3,
        affectionLevel: 1,
        friendlinessToOtherDogs: 3,
        guard: 1,
        groomRequiremnts: 4,
        easeOfTraining: 2,
        maxWeight: "50-60 lb",
        maxHeight: "25-27",
        areaOfOrigin: "Afghanistan",
        healthNotes: "Occasionally seen: necrotic myelopathy, CHD, hypothyroidism,,Life span: 12–14 years",
        image: "afghan-hound-detail.jpg"
    },
    {
        name: "American Hairless Terrier",
        about: "The American Hairless Terrier came into existence when a hairless female puppy named Josephine was born in a litter of purebred Rat Terriers.",
        lifeSpan: '9-13',
        energyLevel: 4,
        exerciseRequirements: 4,
        playFull: 4,
        affectionLevel: 4,
        friendlinessToOtherDogs: 3,
        guard: 4,
        groomRequiremnts: 4,
        easeOfTraining: 4,
        maxWeight: "5-12 lb",
        maxHeight: "11-13",
        areaOfOrigin: "America",
        healthNotes: "The Hairless is susceptible to blackheads, sunburn, wool allergy, and tooth loss. The Hairless has irregular dentition and thinner enamel.",
        image: "american-hairless.webp"
    },
    {
        name: "Rottweiler",
        about: "The Rottweiler is a medium large breed, slightly longer than they are tall, and robust with a powerful, substantial build. Historically, they combine the abilities that were necessary for jobs that entail great strength, agility, and endurance. ",
        lifeSpan: '9-13',
        energyLevel: 4,
        exerciseRequirements: 4,
        playFull: 2,
        affectionLevel: 4,
        friendlinessToOtherDogs: 1,
        guard: 4,
        groomRequiremnts: 1,
        easeOfTraining: 4,
        maxWeight: "80-135 lb",
        maxHeight: "22-27",
        areaOfOrigin: "Germany",
        healthNotes: "Occasionally seen: PRA, cataract, seizures, vWD, panosteitis, entropion, ectropion",
        image: "rottweiler-detail.jpg"
    },
    {
        name: "American Eskimo Dog",
        about: "The Eskie is built along classic Nordic Spitz lines. This breed is compactly built, slightly longer than tall. The stand-off, double coat resists soaking and provides insulation against the cold. The small thick ears are also cold resistant, and the trot is agile and bold.",
        lifeSpan: '12–14',
        energyLevel: 3,
        exerciseRequirements: 3,
        playFull: 4,
        affectionLevel: 4,
        friendlinessToOtherDogs: 2,
        guard: 4,
        groomRequiremnts: 4,
        easeOfTraining: 4,
        maxWeight: "6-40 lb",
        maxHeight: "9-19",
        areaOfOrigin: "United States",
        healthNotes: "Occasionally seen: diabetes",
        image: "american-eskimo-dog-detail.jpg"
    },
    {
        name: "Golden Retriever",
        about: "Goldens are athletic, strong and capable of carrying heavy game over land and water, using a broad, powerful head with strong neck and well-developed fore and hindquarters.",
        lifeSpan: '9-13',
        energyLevel: 4,
        exerciseRequirements: 4,
        playFull: 5,
        affectionLevel: 5,
        friendlinessToOtherDogs: 4,
        guard: 3,
        groomRequiremnts: 4,
        easeOfTraining: 4,
        maxWeight: "55-75 lb",
        maxHeight: "21.5-24",
        areaOfOrigin: "England",
        healthNotes: "Skin problems (allergies, hot spots, ear infections)",
        image: "golden-retriever-detail.jpg"
    }]
    DogBreed.create(breeds).then(re => {
        console.log("DONE......");
        process.exit(1)


    }).catch(err => {
        console.log(err);

    })

}).catch(err=> {
    console.log(err);
    
})