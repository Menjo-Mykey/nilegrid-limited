const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Nilegrid2025',
    database: 'nilegrid_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

app.get('/', (req, res) => {
    res.send('Welcome to Nilegrid Backend');
});

app.listen(3001, () => {
    console.log('Backend server running on http://localhost:3001');
});
