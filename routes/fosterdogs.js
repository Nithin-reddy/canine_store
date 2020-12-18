var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var ObjectID = require('mongodb').ObjectID;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../media'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split(".").pop())
  }
})

var {
  FosterDog
} = require('../schema/fosterDogSchema')

var {
  sessionAuthChecker,
  sessionLoginChecker
} = require('../middlewares/sessionChecker')

var {
  DogBreed
} = require('../schema/dogBreed');


// var upload = multer({ storage: storage });

const https = require('https');

var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var s3 = new aws.S3({
  accessKeyId: process.env.accessKey,
  secretAccessKey: process.env.secretAccessKey,
  endpoint: new aws.Endpoint('https://s3.sirv.com'),
  s3ForcePathStyle: true,
  httpOptions: {
    agent: new https.Agent({ rejectUnauthorized: false })
  }
})


var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'methille',
    metadata: function (req, file, cb) {

      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split(".").pop())
    }
  })
})



router.get('', async function (req, res, next) {
  var fosterDogs = await FosterDog.find({}).populate("breed")
  return res.render('fosterdogs', { fosterDogs })
})

router.get('/add', async function (req, res, next) {
  var dogs = await DogBreed.find({})
  return res.render('addfosterdog', { dogs })
});


router.post('/add', sessionAuthChecker, upload.array('image'), async function (req, res, next) {
  try {
    // var dog = await FosterDog.create({ ...req.body, images: req.files.map(f => { return { path: f.filename } }), user_id: req.user._id }) // LCOAL
    var dog = await FosterDog.create({ ...req.body, images: req.files.map(f => { return { path: f.key } }), user_id: req.user._id }) // S#
    return res.redirect('/foster-dogs/added-dogs')
  } catch (error) {
    return res.redirect('/foster-dogs/added-dogs')
  }
});


router.get('/delete/:id', sessionAuthChecker, async function (req, res, next) {
  try {
    const _id = new ObjectID(req.params.id);
    var dog = await FosterDog.deleteOne({ _id: _id })
    return res.redirect('/foster-dogs/added-dogs')
  } catch (error) {
    console.log(error);
    return res.redirect('/foster-dogs/added-dogs')
  }
});



router.get('/view/:id', async function (req, res, next) {
  var fosterDog = await FosterDog.findOne({ _id: req.params.id }).populate("breed")
  return res.render('viewfosterdog', { fosterDog })
});

router.get('/added-dogs', sessionAuthChecker, async function (req, res, next) {
  try {
    var fosterDogs = await FosterDog.find({ user_id: req.user._id }).populate("breed")
    return res.render('viewMyfosterdog', { fosterDogs })

  } catch (error) {
    return res.render('viewfosterdog', { fosterDogs: [] })
  }
});


module.exports = router;