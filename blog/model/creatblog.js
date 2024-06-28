const db = require('../util/database');

const funCreatBlog = function (req,res)
{
    const title = req.body.title;
    const author_name = req.body.author;
    const content = req.body.content;
     
    console.log(title,content)
    console.log(author_name)
    const sql = 'INSERT INTO Blogs (title, author_name, content) VALUES (?, ?, ?)';
    db.execute(sql, [title, author_name, content])
        .then(result => {
            res.status(201).redirect('/');
        })
        .catch(error => {
            res.status(500).send('Failed to create blog post.');
            console.error(error);
        });
}

module.exports={funCreatBlog};