const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node',
  password: 'ANE412410@om'
});

//console.log('Pool created:', pool);
module.exports = pool.promise();
