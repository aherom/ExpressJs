const dbgetcomments = require('../model/dbgetcomments');
const addcomment = require('../model/dbaddcomments');
exports.addcomments =   (req, res, next) => {
    addcomment.funcaddcomments(req,res);
}

exports.getcomments= (req, res, next) => {
    dbgetcomments.funcgetcomments(req,res);
}