const express =require('express');
const path = require('path');
const root = require('../util/path');

exports.error=(req,res,next)=>{res.sendFile(path.join(root,'views/404.html'))}