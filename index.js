const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'acme'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('mysql connectd');
});

app.get('/', (req, res) => {
    //const sql = 'SELECT * FROM users';

    const sql = 'SELECT age, count(location) from users group by location';

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.listen(5000, () => console.log('server started'));