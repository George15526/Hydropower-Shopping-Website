// server/config/db.js
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

// MongoDB settings
// mongoose.connect('mongodb://localhost:27017/ecommerce');

// MySQL settings
const sequelize = new Sequelize('ecommerce', 'root', 'sayanything', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database sync complete!');
    })
    .catch((err) => {
        console.log('Database sync failed:', err);
    });

module.exports = { sequelize };