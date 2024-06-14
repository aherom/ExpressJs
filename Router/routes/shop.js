const express = require('express');
const router = express.Router();
<<<<<<< HEAD
router.use('/welcome',(req,res,next)=>
=======
router.use('/',(req,res,next)=>
>>>>>>> 0bb9fc67acbaf6f4dfc2a6d71ee7ae1656ff7dd0
    {
       
        res.send('<h1>Hello from Express</h1>');
    })

<<<<<<< HEAD
    module.exports=router;
=======
    module.exports=router;
>>>>>>> 0bb9fc67acbaf6f4dfc2a6d71ee7ae1656ff7dd0
