const express= require('express');
const router = express.Router();
const fs = require('fs');
router.post('/submit-message', (req, res) => 
    {   
         console.log(req.body);
         fs.appendFile("message.txt",`${req.body.name}:${req.body.message}\n`,(error)=>{});
         res.redirect('/');
    });
module.exports=router;