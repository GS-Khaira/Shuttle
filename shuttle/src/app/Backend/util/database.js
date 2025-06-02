const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shuttle',
    password: 'GSKHAIRA@1005g'
})

module.exports = pool.promise();