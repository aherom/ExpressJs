const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database'); 
const path = require('path');
const root = require('./util/path')

const app = express();

const rotcreatBlog = require('./router/createBlog');
const rotreadblog = require('./router/readblog');
const rotaddcomments = require('./router/comments')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(root, 'public')));


app.use(rotcreatBlog);

app.use(rotreadblog);


app.use(rotaddcomments);

app.use(rotaddcomments);


app.get('/',(req,res,error)=>
{
    res.sendFile(path.join(root, 'view', 'index.html'));
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');});