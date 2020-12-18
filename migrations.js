const mongoose = require('mongoose');
const mongo_uri = process.env.MONGODB_URI || 'mongodb+srv://rockey:mongo@cluster0.varna.mongodb.net/jasmine?retryWrites=true&w=majority' || 'mongodb://localhost/jasmine' || 'mongodb+srv://rockey:mongo@cluster0.varna.mongodb.net/jasmine?retryWrites=true&w=majority';
const mongo_options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
};

var {
    DogBreed
} = require('./schema/dogBreed');

var DogService = require('./schema/dogServices');
console.log("USING URL::::::", mongo_uri);

mongoose.connect(mongo_uri, mongo_options).then(async (conn) => {
    console.log("CONNETD TO DB");
    console.log("RUNNING SCRIPTS TO DB");
    var E_Breeds = await DogBreed.find({});
    if (!E_Breeds || !E_Breeds.length) {

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
        }, {
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
        }, {
            name: "Afghan Hound",
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
            name: "Basenji",
            about: "The Basenji is square-proportioned and high on leg. This breed is far more slightly built and longer legged than most other primitive breeds, allowing a good amount of speed and the ability to perform the double-suspension gallop. The Basenji’s erect ears help locate game in thick bush and may act as heat dissipaters. This dog’s short coat also aids in dealing with the hot climate of Africa.",
            lifeSpan: '12–14',
            energyLevel: 4,
            exerciseRequirements: 3,
            playFull: 3,
            affectionLevel: 3,
            friendlinessToOtherDogs: 1,
            guard: 1,
            groomRequiremnts: 1,
            easeOfTraining: 2,
            maxWeight: "22-24 lb",
            maxHeight: `16-17"`,
            areaOfOrigin: "Congo Dog, Congo Terrier",
            healthNotes: "Major concerns: Fanconi syndrome, PRA, Basenji enteropathy, Minor concerns: PPM, PK, hypothyroidism, umbilical hernia",
            image: "basenji-detail.jpg"
        }, {
            name: "Komondor",
            about: "The Komondor is a large, muscular dog, with plenty of bone and substance, slightly longer than tall. The gait is light and leisurely, with long strides. The hallmark coat is double, consisting of a dense wooly undercoat and a coarser outer coat that is wavy or curly. The undercoat is trapped in the outer coat so that it forms strong, felty, tassel-like cords. This coat helped protect the dog from the elements as well as the teeth of tough adversaries. It also helped the Komondor to blend in with the flock the dog was protecting.",
            lifeSpan: '10–12',
            energyLevel: 3,
            exerciseRequirements: 3,
            playFull: 3,
            affectionLevel: 5,
            friendlinessToOtherDogs: 3,
            guard: 5,
            groomRequiremnts: 4,
            easeOfTraining: 4,
            maxWeight: "70-80 lb",
            maxHeight: `25.5-27.5"`,
            areaOfOrigin: "Hungary",
            healthNotes: "Major concerns: CHD, gastric torsion, Occasionally seen: entropion",
            image: "komondor-detail.jpg"
        }, {
            name: "Chihuahua",
            about: "The Chihuahua is graceful, small, and compact, slightly longer than he is tall. The Chihuahua has a saucy expression and alert, terrier-like attitude. The coat can be smooth, with soft, glossy hair, or long, with soft straight or wavy coats and fringed ears.",
            lifeSpan: '14–18',
            energyLevel: 5,
            exerciseRequirements: 1,
            playFull: 2,
            affectionLevel: 2,
            friendlinessToOtherDogs: 1,
            guard: 1,
            groomRequiremnts: 2,
            easeOfTraining: 3,
            maxWeight: "6 - 8 lb",
            maxHeight: `6-9"`,
            areaOfOrigin: "Mexico",
            healthNotes: "Major concerns: none, Minor concerns: pulmonic stenosis, hydrocephalus, patellar luxation, KCS, hypoglycemia",
            image: "chihuahua-detail.jpg"
        }, {
            name: "Labrador Retriever",
            about: "The Labrador is a moderate dog, not extreme in any way. It is square or slightly longer than tall, of fairly large bone and substance. The breed’s broad head and strong jaws enabled the dog to carry the largest game birds, such as Canada geese. A heavy body and strong legs enable the dog to swim and run powerfully. The coat, which is short, straight, and dense with a soft undercoat, is weatherproof and helps to protect it from icy waters. The Lab is a working retriever and possesses style without over-refinement, and substance without clumsiness.",
            lifeSpan: '9-13',
            energyLevel: 4,
            exerciseRequirements: 4,
            playFull: 5,
            affectionLevel: 5,
            friendlinessToOtherDogs: 4,
            guard: 3,
            groomRequiremnts: 4,
            easeOfTraining: 4,
            maxWeight: "55-80 lb",
            maxHeight: "21.5-24",
            areaOfOrigin: "Canada",
            healthNotes: "Major concerns: CHD, elbow dysplasia, OCD, obesity, patellar luxation, Skin problems (allergies, hot spots, ear infections)",
            image: "Labrador-482x260.png"
        }, {
            name: "Pug",
            about: "Square-proportioned, compact and of a stocky build, the Pug is a large dog in a little space. Their gait is strong and jaunty, but with a slight roll of the hindquarters. Their distinctive expression is soft and solicitous. Their forehead has large, deep wrinkles. Their coat is fine, smooth, and short.",
            lifeSpan: '12–15',
            energyLevel: 3,
            exerciseRequirements: 3,
            playFull: 5,
            affectionLevel: 5,
            friendlinessToOtherDogs: 4,
            guard: 1,
            groomRequiremnts: 3,
            easeOfTraining: 4,
            maxWeight: "14-18 lb",
            maxHeight: `10-11"`,
            areaOfOrigin: "China",
            healthNotes: "Major concerns: Pug dog encephalitis, CHD, brachycephalic syndrome, Minor concerns: elongated palate, stenotic nares, patellar luxation, Legg-Perthes, entropion, KCS, skin infections, hemivertebra",
            image: "pug-detail.jpg"
        }, {
            name: "Harrier",
            about: "The Harrier is a smaller version of the English Foxhound, bred to be suited for hunting hares. The Harrier has large bones for its size, and is slightly longer than tall. This is a scenting pack hound was bred to run with other dogs, scenting quarry, and hunting tirelessly over any terrain for long periods. It has a gentle expression when relaxed and alert when aroused. The coat is short and hard.",
            lifeSpan: '12–14',
            energyLevel: 4,
            exerciseRequirements: 3,
            playFull: 4,
            affectionLevel: 4,
            friendlinessToOtherDogs: 4,
            guard: 3,
            groomRequiremnts: 1,
            easeOfTraining: 3,
            maxWeight: "35-60 lb",
            maxHeight: `19-21"`,
            areaOfOrigin: "Great Britain",
            healthNotes: "Major concerns: CHD, Occasionally seen: epilepsy, perianal fistula",
            image: "harrier-detail.jpg"
        }, {
            name: "Beagle",
            about: "The Beagle should look like a miniature Foxhound, and is solid for the size. The Beagle’s moderate size enables the ability to follow on foot. Beagles can also be carried, and they can scurry around in thick underbrush. Their close hard coat protects them from underbrush. Their moderate build enables them to nimbly traverse rough terrain. The Beagle’s amiable personality allows this breed to get along with other dogs and to be a wonderful pet. Beagles are noted for their melodious bay. The deep muzzle allows more room for olfactory receptors, aiding the Beagle’s uncanny sense of smell.",
            lifeSpan: '12–15',
            energyLevel: 4,
            exerciseRequirements: 4,
            playFull: 5,
            affectionLevel: 5,
            friendlinessToOtherDogs: 4,
            guard: 3,
            groomRequiremnts: 4,
            easeOfTraining: 4,
            maxWeight: "18-30 lb",
            maxHeight: `13"`,
            areaOfOrigin: "England",
            healthNotes: "Major concerns: intervertebral disk disease, CHD, ccasionally seen: deafness, hemophilia A, cataract, demodicosis, umbilical hernia, Musladin-Leuke Syndrome (MLS)",
            image: "beagle-detail.jpg"
        }, {
            name: "Dalmatian",
            about: "The Dalmatian is a square-proportioned, athletic dog of good substance and sturdy bone. They are built for efficiency at the trot and great endurance, and their movement should be steady and effortless. The expression is alert and intelligent; the coat short and sleek.",
            lifeSpan: '12–15',
            energyLevel: 4,
            exerciseRequirements: 4,
            playFull: 3,
            affectionLevel: 5,
            friendlinessToOtherDogs: 3,
            guard: 3,
            groomRequiremnts: 2,
            easeOfTraining: 4,
            maxWeight: "40-60 lb",
            maxHeight: `19-23"`,
            areaOfOrigin: "Yugoslavia",
            healthNotes: "Minor concerns: allergies, seizures, iris sphincter dysplasia, hypothyroidism",
            image: "dalmatian-detail.jpg"
        }, {
            name: "Boston Terrier",
            about: "The Boston Terrier is a compactly built, square-proportioned, short-backed, clean-cut dog. This breed conveys the impression of determination, strength, sturdiness, liveliness, and style, with a graceful carriage. The Boston retains many of the attributes of his Bulldog ancestors, but in a clean-cut package that makes a handy house companion. The short fine coat, with distinctive markings, adds to this breed’s dapper appearance.",
            lifeSpan: '10–14',
            energyLevel: 3,
            exerciseRequirements: 1,
            playFull: 3,
            affectionLevel: 3,
            friendlinessToOtherDogs: 4,
            guard: 1,
            groomRequiremnts: 1,
            easeOfTraining: 4,
            maxWeight: "10-25 lb",
            maxHeight: `15-17"`,
            areaOfOrigin: "United States",
            healthNotes: "Minor concerns: patellar luxation, stenotic nares, elongated soft palate, allergies",
            image: "boston-terrier-detail.jpg"
        }, {
            name: "Bernese Mountain Dog",
            about: "The Bernese Mountain Dog is slightly longer than tall, though appearing square. This breed is a sturdy, large, hardy dog with a combination of strength, speed, and agility. The Bernese’s natural working gait is a slow trot, but with good reach and drive. The thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. The expression is gentle, and the color is striking.",
            lifeSpan: '6–9',
            energyLevel: 2,
            exerciseRequirements: 4,
            playFull: 5,
            affectionLevel: 5,
            friendlinessToOtherDogs: 4,
            guard: 2,
            groomRequiremnts: 4,
            easeOfTraining: 4,
            maxWeight: "70-120 lb",
            maxHeight: `23-27.5"`,
            areaOfOrigin: "Switzerland",
            healthNotes: "Major concerns: CHD, elbow dysplasia, mast cell tumor, gastric torsion",
            image: "bernese-mountain-dog-detail.jpg"
        }, {
            name: "Anatolian Shepherd",
            about: "The Anatolian is built tough to do a tough job. This is a large, powerful, rugged dog, having both great agility and endurance. The Anatolian has good bone and a large head, plus a powerful, smooth, and fluid gait. This breed’s coat consists of a thick undercoat and an outer coat that ranges from short (about 1 inch) to rough (about 4 inches), slightly longer around the neck and mane. The expression is intelligent, and the general impression is one of a bold yet calm protector.",
            lifeSpan: '10–13',
            energyLevel: 4,
            exerciseRequirements: 4,
            playFull: 5,
            affectionLevel: 5,
            friendlinessToOtherDogs: 4,
            guard: 5,
            groomRequiremnts: 2,
            easeOfTraining: 4,
            maxWeight: "18-30 lb",
            maxHeight: `13"`,
            areaOfOrigin: "Turkey",
            healthNotes: "Occasionally seen: elbow dysplasia",
            image: "anatolian-shepherd-detail.jpg"
        }, {
            name: "Akbash",
            about: "A unique combination of Mastiff and gazehound features, the Akbash Dog’s characteristics enable him to perform as a livestock guardian. This all-white, lean, leggy, muscular dog has an alert, regal appearance conveying power, strength and courage with the speed and agility necessary to challenge and chase predators. His wedge-shaped head is adorned with pendant ears and long tail is curled over his back when moving or excited. Like other gazehounds, the Akbash Dog is characterized by his long legs, deep chest and tucked flank; the breed’s Mastiff influence is found in his height, weight, broad head and powerful appearance.",
            lifeSpan: ' 10 - 12',
            energyLevel: 3,
            exerciseRequirements: 3,
            playFull: 3,
            affectionLevel: 5,
            friendlinessToOtherDogs: 3,
            guard: 3,
            groomRequiremnts: 2,
            easeOfTraining: 4,
            maxWeight: "90-120 lb",
            maxHeight: `28 to 34 inches`,
            areaOfOrigin: "Turkey",
            healthNotes: "Occasionally Seen: Gastric torsion and umbilical hernias",
            image: "akbash-482x260.jpg"
        }, {
            name: "Others",
            about: "No Information this",
            lifeSpan: 'No Info',
            energyLevel: 0,
            exerciseRequirements: 0,
            playFull: 0,
            affectionLevel: 0,
            friendlinessToOtherDogs: 0,
            guard: 0,
            groomRequiremnts: 0,
            easeOfTraining: 0,
            maxWeight: "No Info",
            maxHeight: `No Info`,
            areaOfOrigin: "No Info",
            healthNotes: "No Info",
            image: "do-animal-dog-catre.jpeg"
        }];
        await DogBreed.create(breeds);
    }

    var E_services = await DogService.find({});
    if (!E_services || !E_services.length) {
        var services = [
            {
                title: "Dog Boarding",
                description: `You’ve got to leave and you can’t bring your pooch with you! It’s time to look into Dog Boarding. Before you drop your pup off, check out all the information we’ve got on Dog Boarding so you’ll pick the one that’s right for your furry best friend. <br>
            We know it sucks when vacay can’t include your little guy. We also know there’s any number of valid reasons our pets can’t travel with us – from fear of flying to car sickness to stressing out the in-laws – but that doesn’t mean he has to suffer in silence while we indulge! PetGuide.com has lined up some of the top care options available to put your mind at ease and help him forget all about you as he frolics with his new BFFs. Well, forget about you till he hears your voice and launches into that crazy happy dance he does!`,
                images: [
                    {
                        path: "dog-boarding.jpg"
                    },
                    {
                        path: "dog-boarding1.jpg"
                    }
                ]
            }, {
                title: "Dog Grooming",
                description: `Whether he’s an ultra-heavy shedder with fur that flies around your baseboards like tumbleweed through a desert, or a super low maintenance kind of pooch that is practically self-cleaning, mark my words: the day will come when you need to deal with one dirty little dog. We can help!
            <br>
            Wondering if human shampoo works as well as doggie shampoo? Check out our tips for buying (or making) the right shampoo for your breed of dog – including for those pups that suffer from skin allergies. If you’re not sure how to brush or hand-strip his fur to keep him looking his very best, we offer advice on how to tackle everything from long-haired dogs to wiry, to curly and everything in between. You’ll learn why it’s important to get your dog used to being brushed and groomed from the time he is a young pup as well as how to clean his ears, carefully trim his nails and even brush his teeth without totally destroying your relationship.`,
                images: [
                    {
                        path: "dog-grooming-.jpg"
                    }
                ]
            }, {
                title: "Walking",
                description: `Dog walking is an important aspect of a dog’s life. Walking helps the dogs not only keep fit and healthy but keep a check on behavioural issues like anxiety and barking. It is difficult for a lot of pet parents/ owners to take their dogs for a regular walk. This is where we step in to help take your dog for a walk at your own convenient home or neighbourhood. We are passionate about dogs and have been doing the same for many years. If you have been looking for professional dog walkers, who are available at your own area, the dog walkers whom you can book online with ease, who are reliable – Look no more because we at Petsfolio help you just do that. And guess what we help you dog walk at a very reasonable dog walking fees. Dog walking seems easy but it comes with its own set of challenges. It needs lots of patience, care, and expertise. Equipped with expertise, experience and intense passion, we at ‘Petsfolio’ help you do it in four simple steps:`,
                images: [
                    {
                        path: "dog_walking.jpg"
                    }
                ]
            }, {
                title: "Day care",
                description: `Dog Daycare is a fantastic option for pet parents if you want your pooch to gain valuable socialization skills. Plus, it’s an awesome way to tire out your dog and prevent boredom if you’re busy or at work. Find out all about Dog Daycare on PetGuide.com.
            <br>
            If you’re new to the doggie daycare game, you’re going to want to learn the low-down on what to look for in a facility that works for both you and your furry best friend. Beyond the obvious, such as staff qualifications and being permitted to have a look-see to make sure the center is safe and clean, you’ll need to find out how they partner pooch pals to ensure your pup doesn’t get trampled by a bigger dog – or do the trampling. What do they do when Rover needs discipline, how big is the indoor and outdoor space your fur-kid gets to romp around in, and are they cool if you call incessantly during the day to make sure he’s okay? Hey, is dog daycare even the right fit for your pup?`,
                images: [
                    {
                        path: "dog-care.jpg"
                    }
                ]
            }, {
                title: "Dog Training",
                description: `Dog training is much more than teaching your pooch to sit and stay. From puppy to adulthood, dog training should last throughout your dog’s lifetime. House training, tricks, obedience, agility, service, and therapy – there are many different types of training out there, not to mention the variety of trends and theories that go along with it.  PetGuide.com goes through the basics and beyond to teach your dog some old and new tricks.
                <br>
            When it comes to efficient and successful Dog Training techniques, there are no universal tricks that work for all dogs. Find the right training strategy that will help you train your pooch in our articles that cover positive reinforcement, Schutzhund method, crate training and more. Looking for a solution to a specific behavioral problem? You’ll find all the answers you need in our complete guides on socialization, efficient training in multiple-dog household, preventing escapes and destructive behavior. Make sure to take a look at our top tips from various experts that cover an array of important Dog Training topics such as learning tricks, modifying unwanted behavior, and age-specific training techniques.`,
                images: [
                    {
                        path: "dog-training.jpg"
                    }
                ]
            }, {
                title: "Sepical health Care",
                description: "Because you are more familiar with your dog than anyone else, you should watch it carefully for subtle signs of illness that another person or even a veterinarian may miss. General signs of illness include a lack of appetite or decreased activity. Other more specific signs include vomiting and diarrhea, urinating more (or less) frequently, coughing and sneezing, or a discharge from the eyes, ears, or nose. Illness can also show up as a loss of hair or itchy areas on the skin or around the ears. Problems with the musculoskeletal system are often seen as stiffness or lameness, such as not putting weight on a leg. If your dog shows any of these signs for more than a day or two, a visit with your veterinarian is a good idea.",
                images: [
                    {
                        path: "special-care.jpg"
                    }
                ]
            }, {
                title: "Puppy Care",
                description: `Squee! Everyone loves puppies! What’s not to love? They’re cute, cuddly, inquisitive and full of love. For everything you need to know about puppies, be sure to read all of our informative articles.
            <br>
            Welcoming a furry bundle of joy into your family can be easy with our comprehensive guides. Before your lovely four-legged baby arrives, make sure to arrange everything they’ll need to feel safe and comfortable in their new surroundings. Our articles on preparing your home for a new puppy and thorough checklists of essential puppy supplies will help you get ready for a new addition to your family in no time. After you go through these initial steps of the process, it’s time to teach your pooch some manners! Check out Petguide.com’s helpful guides and articles on how to train little pups, help your shoes survive the teething stage and how to successfully puppy-proof your home. Trust us, you’ll need all the help you can get!
            <br>
            For a puppy, everything is a brand new experience that takes some getting used to. Petguide.com’s articles cover everything from how to handle their first visit to the vet’s office to being pawesome on their first ever playdate.`,
                images: [
                    {
                        path: "puppy-care.jpg"
                    }
                ]
            }
        ];
        await DogService.create(services)
    }

    console.log("DONE");
    process.exit(1)



}).catch(err => {
    console.log(err);

})