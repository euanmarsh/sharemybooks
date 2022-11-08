const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection ({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb'
});

app.post('/create', (req, res) =>{
    //userID
    const username = req.body.username
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email  
    const password = req.body.password
    //create_time
    //admin
    const studentNumber = req.body.studentNumber

    db.query('INSERT INTO user (firstName, lastName, email, username, password, studentNumber, admin) VALUES (?,?,?,?,?,?)', [fname, lname, email, username, password, studentNumber, 0],
    (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.send("Complete")
        }
    });
});