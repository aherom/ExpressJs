const express =require('express');
const root = require('../util/path');
const path = require('path');
const Product = require('../models/product');

exports.addProductControler=(req,res,next)=>
    {
        res.sendFile(path.join(root, 'views','add-product.html'));
    }


exports.productControler=(req, res, next) => {
              // console.log(req.body); 
               const product = new Product(req.body.tittle,req.body.size);
               product.save();
              // console.log(Product.fetchAll());
               res.redirect('/');
               }