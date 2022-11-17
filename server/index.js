const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));





const db = mysql.createConnection ({
    user: 'root',
    host: 'localhost',
    password: 'Ealdo252',
    database: 'sharemybooks'
});

app.post('/create', (req, res) =>{
    //userID
    console.log(req.body);
    const username = req.body.username
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email  
    const password = req.body.password
    //create_time
    //admin
    const studentNumber = req.body.studentNum
    db.query('INSERT INTO user (firstName, lastName, email, username, password, studentNumber, admin) VALUES (?,?,?,?,?,?,?)', [fname, lname, email, username, password, studentNumber, 0],
    (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.send("Complete")
        }
    });
});