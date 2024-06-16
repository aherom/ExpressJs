const express = require('express');
const root = require('./util/path');
const path = require('path');
const bodyParser = require('body-parser');
const adminrouter = require('./routes/admin');
const clientrouter = require('./routes/shop');
const contactus = require('./routes/contact')
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(root,'public')));
app.use('/admin',adminrouter);
app.use(contactus);
app.use(clientrouter);
app.use((req,res,next)=>{res.sendFile(path.join(root,'views/404.html'))});

app.listen(4001); 