const express =require('express');
const path = require('path');
const router = express.Router();
const controler = require('../controler/admin');

   router.use('/add-product',controler.addProductControler);

   router.post('/product',controler.productControler);

    
    module.exports=router;