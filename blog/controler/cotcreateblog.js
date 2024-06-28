const creatBlog = require('../model/creatblog')
exports.creatBlog=(req, res,error) => {
   
    creatBlog.funCreatBlog(req, res);
}