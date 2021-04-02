const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'Luizfodao8462',
    database: 'agenda'
})

module.exports = connection