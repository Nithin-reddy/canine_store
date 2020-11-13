var express = require('express');
var router = express.Router();

var {
    sessionAuthChecker,
    sessionLoginChecker
} = require('../middlewares/sessionChecker')
var {
    DogBreed
} = require('../schema/dogBreed');


router.get('', async function (req, res, next) {
    var breeds = await DogBreed.find({});
    return res.render('dogbreeds', { errors: '', breeds })
});

router.get('/view/:id',async function (req, res, next) {
    try {
        console.log("0000000");
        
        var breed = await DogBreed.findById(req.params.id);
        console.log(breed);
        
        return res.render('viewdogbreeds', { errors: '', breed })
    } catch (error) {
        console.log(error);
        return res.render('viewdogbreeds', { errors: '', breeds })
    }
});


module.exports = router;
