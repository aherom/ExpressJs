const express = require('express');
const bodyParser = require('body-parser');
const adminrouter = require('./routes/admin');
const clientrouter = require('./routes/client');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(adminrouter);
app.use(clientrouter);
app.listen(4001); 