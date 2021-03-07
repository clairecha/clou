const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'clou',
  // debug: true,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;
