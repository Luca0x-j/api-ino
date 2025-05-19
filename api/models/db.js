const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'luccadev123',
    database: 'api'
});

module.exports = pool.promise();