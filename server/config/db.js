// server/config/db.js
const mysql = require('mysql2');

const connectDB = () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });

    connection.connect((err) => {
        if (err) {
            console.error(`Error connecting MySQL: ${err.message}`);
            process.exit(1);
        } else {
            console.log('MySQL connected');
        }
    });

    return connection;
}

module.exports = connectDB;