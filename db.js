const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hbdmanager',
    password: 'kachhawaha123@',
    port: 5432,
});

module.exports = pool;
