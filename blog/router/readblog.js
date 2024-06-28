const express = require('express');
const db = require('../util/database'); 
const router = express.Router();
const cotreadBlog = require('../controler/cotreadblog')
router.get('/blogs',cotreadBlog.readBlog);

module.exports=router;