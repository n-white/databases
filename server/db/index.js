var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'chat'
});

connection.connect();

module.exports = connection;


