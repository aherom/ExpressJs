const express = require('express');
const root = require('../util/path');
const path =require('path');

exports.contactcontroler = (req,res,next)=>
    {
        
        res.sendFile(path.join(root, 'views','contact.html'));
    }    

exports.contactUsSaveControler = (req,res,next)=>
    {
        console.log(req.body);
        res.redirect('/');
    }