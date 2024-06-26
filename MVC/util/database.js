const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node',
  password: 'pass123'
});

//console.log('Pool created:', pool);
module.exports = pool.promise();
