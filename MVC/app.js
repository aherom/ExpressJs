const express = require('express');
const bodyParser = require('body-parser');
const adminrouter = require('./routes/admin');
const clientrouter = require('./routes/shop');
const contactus = require('./routes/contact')
const notFound = require('./controler/404');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminrouter);
app.use(contactus);
app.use(clientrouter);
app.use(notFound.error);

app.listen(4001); 