const express = require('express');
const root = require('../util/path');
const path = require('path');

exports.shopcontroler= (req, res, next) => {
    res.sendFile(path.join(root, 'views','shop.html'));
}
