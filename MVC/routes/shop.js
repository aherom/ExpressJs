const express = require('express');
const router = express.Router();
const controler = require('../controler/shop')
router.use('/',controler.shopcontroler);

module.exports = router;