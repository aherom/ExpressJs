const express = require('express');
const controlcreatBlog = require('../controler/cotcreateblog');
const router = express.Router();

router.post('/create-blog',controlcreatBlog.creatBlog);

module.exports=router;