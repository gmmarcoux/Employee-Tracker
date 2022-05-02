const mysql = require("mysql2");

connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "employeeDB"
})

module.exports = connection;