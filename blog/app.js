const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database'); 
const path = require('path');
const root = require('./util/path');

const app = express();

const rotcreatBlog = require('./router/createBlog');
const rotreadblog = require('./router/readblog');
const rotaddcomments = require('./router/comments');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(root, 'public')));

app.use(rotcreatBlog);
app.use(rotreadblog);
app.use(rotaddcomments);

app.use('/delete-comment', (req, res) => {
    const commentId = req.body.comment_id;
    console.log('Comment ID to delete:', commentId);
    
    if (commentId) {
        db.execute('DELETE FROM Comments WHERE comment_id = ?', [commentId])
            .then(result => {
                console.log('Result:', result);
                res.redirect('/');
            })
            .catch(error => {
                console.error('Error:', error);
                res.status(500);
            });
    } else {
        console.error('No comment ID provided');
        res.status(400);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'view', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
