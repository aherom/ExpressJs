const express = require('express');
const root = require('../util/path');
const path = require('path');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.sendFile(path.join(root, 'views','shop.html'));
});

module.exports = router;