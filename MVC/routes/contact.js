const express = require("express");
const controler = require('../controler/contact');
const router = express.Router();

router.use('/contactus',controler.contactcontroler);


router.use('/success',controler.contactUsSaveControler);
module.exports= router;