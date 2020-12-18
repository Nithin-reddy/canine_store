var express = require('express');
var router = express.Router();
var Appointment = require('../schema/appointmentSchema');
var nodemailer = require('nodemailer');

/* GET users listing. */
router.post('/bookappointment', function (req, res, next) {
  var a = new Appointment(req.body);
  return a.save().then(re => {
    var transporter = nodemailer.createTransport({
      host: process.env.email_host || 'smtp.googlemail.com', // Gmail Host
      port: process.env.emailPort || 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: process.env.email,
        pass: process.env.password
      }
    });
    const mailOptions = {
      from: '"Canine Care" <no-reply@caninecare.com> ', // sender address
      to: req.body.email, // list of receivers
      subject: 'Appointment booked - Canine Care!', // Subject line
      html: `<p>Hi <strong>${req.body.name}</strong>, <br> <strong>Your Appointment has been Booked </strong><br> You ll recive a call about the same before the day of Appointment</p>`// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });
    res.redirect('/');
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
