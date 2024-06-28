const mysql = require('mysql2');
const db = mysql.createPool(
    {
       host:"localhost",
       user:"root",
       database:"blog",
       password:"pass12"
    }


)

module.exports=db.promise();