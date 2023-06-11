var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "bvl784nao6cruupy71io-mysql.services.clever-cloud.com",
  user: "ur7d7ifwtvyoelux",
  port: 3306,
  password: "9lYGKBB6jal8iMPq5q9R",
  database: "bvl784nao6cruupy71io",
});
connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("connect success");
  }
});
module.exports = connection;
