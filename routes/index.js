var express = require('express');
var router = express.Router();
var User = require('../schema/userSchema');
var {DogBreed} = require('../schema/dogBreed');
var DogService = require('../schema/dogServices');


var {
  sessionAuthChecker,
  sessionLoginChecker
} = require('../middlewares/sessionChecker')
/* GET home page. */
router.get('/', sessionAuthChecker,async function (req, res, next) {
  var services = await DogService.find({});
  res.render('index', { title: 'Express', services });
});

router.get('/login', sessionLoginChecker, function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function (req, res, next) {
  var data = {
    aleart: '',
    email: '',
    password: ''
  }
  return User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.render('login', { ...data, aleart: "Email/Password did Not found" })
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) {
        return res.render('login', { ...data, aleart: "Email/Password did not match." })
      }
      req.session.user = user.row_values();
      return res.redirect('/');

    })
  })
});

router.get('/register', sessionLoginChecker, function (req, res, next) {
  return res.render('register', { errors: '' })
});


router.post('/register', function (req, res, next) {
  return User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.render('register', { errors: 'User already exists' })
    }
    let u = new User(req.body)
    return u.save().then(r => {
      req.session.user = r.row_values();
      return res.redirect('/')
    }).catch(err => {
      return res.render('register', { errors: 'User validation failed' })
    })
  })
});

router.get('/logout', function (req, res, next) {
  res.clearCookie('user_sid');
  res.redirect('/login');
});


module.exports = router;
