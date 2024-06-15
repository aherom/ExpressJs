const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const login = require('./login');
const storetofile = require('./storetofile');
const writeMessage =  require('./writeMessage');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(login);
app.use(storetofile);
app.use(writeMessage);



app.listen(4001);
