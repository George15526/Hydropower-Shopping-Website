// server/index.js
// require('dotenv').config(); // Load .env file

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { sequelize } = require('./config/db')
const authRoutes = require('./routes/authRoutes');
// const dotenv = require("dotenv")

// dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', authRoutes);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, async () => {
        try {
            await sequelize.authenticate();
            console.log('MySQL connected successfully');
            
            await sequelize.sync();
            console.log('Tables sync successfully');
        } catch (error) {
            console.log('Unable to connect to MySQL:', error);
        }
        console.log(`Server is running on http://localhost:${PORT}/api/v1`);
    });
};

module.exports = app;