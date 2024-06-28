const dbredblog = require('../model/dbreadblog')
exports.readBlog= (req, res, next) => {
    dbredblog.funcreaddlog(req,res);
}