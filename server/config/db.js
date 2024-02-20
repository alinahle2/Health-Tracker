const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: "simpledb",
  port: 3306
});

db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log('Database connected');
});

module.exports = db;