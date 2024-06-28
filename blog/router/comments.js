const express = require('express');
const router = express.Router();
const cotaddcomments = require('../controler/cotaddcomments')

router.post('/add-comment',cotaddcomments.addcomments)
router.get('/comments',cotaddcomments.getcomments);

module.exports=router;