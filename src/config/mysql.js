const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "escola",
  port: 3311
});

connection.connect((err) => {
  if (err) {
    console.log("Erro MySQL:", err);
  } else {
    console.log("MySQL conectado!");
  }
});

module.exports = connection;