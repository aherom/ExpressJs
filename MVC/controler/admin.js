const express =require('express');
const root = require('../util/path');
const path = require('path');

exports.addProductControler=(req,res,next)=>
    {
        res.sendFile(path.join(root, 'views','add-product.html'));
    }


exports.productControler=(req, res, next) => {
               console.log(req.body); 
               res.redirect('/');
               }