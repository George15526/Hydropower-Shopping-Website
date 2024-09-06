// server/index.js
require('dotenv').config(); // Load .env file

const express = require("express");

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});