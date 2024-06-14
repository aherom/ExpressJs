const express = require('express');
const bodyParser = require('body-parser');
const adminrouter = require('./routes/admin');
const clientrouter = require('./routes/shop');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminrouter);
app.use(clientrouter);
app.use((req,res,next)=>{res.status(404).send(`<h1>Page not found </h1>`)});

app.listen(4001); 