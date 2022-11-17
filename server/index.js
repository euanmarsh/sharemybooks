const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors()); //allows requests to be sent from frontend to backend
app.use(express.json()); //parses JSON requests and puts data into req

app.listen(port, () => console.log(`Server running on port: ${port}`));

const db = mysql.createConnection ({ //connecting to MySql (must hide details)
    user: 'root',
    host: 'localhost',
    password: 'Ealdo252',
    database: 'sharemybooks'
});

app.post('/create', (req, res) =>{ //must hash passwords

    console.log(req.body);
    const username = req.body.username
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email  
    const password = req.body.password
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

app.get('/bookdata', (req, res) =>{

    db.query("SELECT * FROM book", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
   
});

app.post('/login', (req, res) =>{

    const username = req.body.username
    const password = req.body.password

	if (username && password) {
        db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password],
        (error, result) => {
            console.log(result);
            if (error) {
                console.log(error);
                res.send("Query has gone wrong.");
            }
            if (result.length > 0) {
                console.log("here");
                res.send("success");
            } else {
                res.send("Wrong username or password.");
            }
            res.end();
        });
	} else {
		res.send('Enter username and password.');
	}
   
});