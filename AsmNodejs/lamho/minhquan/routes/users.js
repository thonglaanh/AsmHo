var express = require('express');
var router = express.Router();


/* GET home page. */
var userctrl = require('../controller/usersctl');



router.get('/ds', userctrl.dsusers);





router.get('/adduser', userctrl.addusers);
router.post('/adduser', userctrl.addusers);


router.get('/edit/:idusers', userctrl.editusers);
router.post('/edit/:idusers', userctrl.editusers);

router.get('/delete/:id', userctrl.deleteusers);
router.post('/delete/:id', userctrl.deleteusers);


module.exports = router;
