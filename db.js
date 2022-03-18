const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5433,
    user: "test",
    password: "ontrac",
    database: "postgres"
});

module.exports = client;