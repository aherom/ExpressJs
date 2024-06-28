const db = require('../util/database'); 
const funcaddcomments = function(req,res)
{
    const blog_id = req.body.blog_id;
    const comment_text = req.body.comment_text;

    const sql = 'INSERT INTO Comments (blog_id, comment_text) VALUES (?, ?)';
    db.execute(sql, [blog_id, comment_text])
        .then(result => {
            res.status(201).send('Comment added successfully!');
        })
        .catch(error => {
            res.status(500).send('Failed to add comment.');
            console.error(error);
        });
}

module.exports={funcaddcomments };