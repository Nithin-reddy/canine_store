var express = require('express');
var router = express.Router();
var Appointment = require('../schema/appointmentSchema')
/* GET users listing. */
router.post('/bookappointment', function (req, res, next) {
  var a = new Appointment(req.body);
  return a.save().then(re => {
    return res.redirect('/')
  }).catch(err => {
    console.log(err);
    return res.redirect("/")
  })
});

router.get('/myappointments', async function (req, res, next) {
  var items = await Appointment.find({}) || [];
  return res.render('myappointments', { app: items })
});


module.exports = router;
