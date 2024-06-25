const express = require('express');
const root = require('../util/path');
const path =require('path');
const db = require('../util/database')
exports.contactcontroler = (req,res,next)=>
    {
        
        res.sendFile(path.join(root, 'views','index.html'));
    }    

exports.contactUsSaveControler = (req,res,next)=>
    {
        const { name, phone } = req.body;
      
        db.execute('INSERT INTO user (name, phone) VALUES (?, ?)', [name, phone])
            .then(result => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Database error');
            });
    }