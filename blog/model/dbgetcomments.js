const db = require('../util/database');
const funcgetcomments = function (req, res)
{
    const blog_id = req.query.blog_id;
    db.execute('SELECT * FROM Comments WHERE blog_id = ?', [blog_id])
        .then(result => {
            res.json(result[0]);
        })
        .catch(error => {

            res.status(500).send('Failed to fetch comments.');
            console.error(error);
        });
}

module.exports={funcgetcomments};