const express = require("express");
const root = require('../util/path');
const path =require('path');
const router = express.Router();

router.use('/contactus',(req,res,next)=>
{
    
    res.sendFile(path.join(root, 'views','contact.html'));
    
});


router.use('/success',(req,res,next)=>
    {
        res.redirect('/');
    });
module.exports= router;