var express = require('express');
var router = express.Router();

var {
    sessionAuthChecker,
    sessionLoginChecker
} = require('../middlewares/sessionChecker')
var DogService = require('../schema/dogServices');


router.get('/view/:id', async function (req, res, next) {
    try {
        var service = await DogService.findById(req.params.id);
        var services = await DogService.find({ "_id": { "$ne": service._id } });
        return res.render('dogServices', { errors: '', service, services });
    } catch (error) {
        console.log(error);
        return res.render('dogServices', { errors: '', service: {}, services: [] });
    }
});


module.exports = router;
