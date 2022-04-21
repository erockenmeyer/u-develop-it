const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: 'EwC7IHbNmjpUxWLGNGb4',
        database: 'election'
    }
);

module.exports = db;