const mysql = require('mysql2');
const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "backend_capstone"
    //charset: "utf8mb4",
    //timezone: "+07:00",
});

conn.getConnection( (err) => {
    if (err) throw err
    console.log('DB Connected');
});

module.exports = conn;