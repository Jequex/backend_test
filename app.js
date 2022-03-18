const express = require('express');
const client = require('./db');
require('dotenv').config();

client.connect();
client.on('connect', () => {
    console.log("database connection successful");
})

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})