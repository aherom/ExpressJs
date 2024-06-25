//const express = require('express');
const root = require('../util/path');
const path = require('path');
const Product = require('../models/product');

module.exports.shopcontroler= (req, res, next) => {
//console.log(Product.fetchAll());
res.sendFile(path.join(root, 'views','index.html'));
}

module.exports.productsController = (req,res,next)=>
    {
        Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.json(rows);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'An error occurred' });
        });
    }