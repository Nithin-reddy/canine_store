var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../media'))
  },
  filename: function (req, file, cb) {
    console.log(file);

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


var upload = multer({ storage: storage })



router.get('', async function (req, res, next) {
  var fosterDogs = await FosterDog.find({}).populate("breed")
  return res.render('fosterdogs', { fosterDogs })
})

router.get('/add', async function (req, res, next) {
  var dogs = await DogBreed.find({})
  return res.render('addfosterdog', { dogs })
});


router.post('/add', sessionAuthChecker, upload.array('image'), async function (req, res, next) {
  console.log(req.body, req.file, req.files, req.user)
    try {
      var dog = await FosterDog.create({ ...req.body, images: req.files.map(f => { return { path: f.filename } }), user_id: req.user._id })
      return res.redirect('/foster-dogs/')
    } catch (error) {
      return res.redirect('/foster-dogs/')

    }

});

router.get('/view/:id', async function (req, res, next) {
  var fosterDog = await FosterDog.findOne({ _id: req.params.id }).populate("breed")
  return res.render('viewfosterdog', { fosterDog })
})


module.exports = router;