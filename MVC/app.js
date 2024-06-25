const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./util/database');
const root = require('./util/path');
const adminrouter = require('./routes/admin');
const clientrouter = require('./routes/shop');
const contactus = require('./routes/contact')
const notFound = require('./controler/404');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
//console.log("database",db);
db.execute('SELECT * FROM user')
 .then(result => { console.log(result); })
  .catch(error => { console.log(error); });
app.use(express.static(path.join(root,'public')))
app.use('/admin',adminrouter);
app.use(contactus);
app.use(clientrouter);
app.use(notFound.error);

app.listen(4001); 