const express = require("express");
const port=process.env.PORT || 3003;
const mysql = require("mysql2");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const conn = require('./config/db.js');

//API middlewares
app.use(cors({
    origin: '*',
}))
app.use(express.json()); //to accept data in json format 
app.use(express.urlencoded()); //to decode the data send through html form
app.use(express.static('frend')); //to serve our public folder as static folder
app.use(bodyParser.json());

//API Routes


// REGISTER
app.post('/formpostr', async function (req,res) {
    await console.log(req.body);
    const param = req.body;
    const name = param.name;
    // const phone = param.phone;
    const email = param.email;
    const password = param.password;
    const now = new Date();

    const queryStr = "INSERT INTO regis (name, phone, email, password, created_at) VALUES (?, ?, ?, ?, ?)";
    const values = [name, phone, email, password, now]

    conn.query(queryStr, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message" : err.sqlMessage,
                "data" : null
            });
        } else {
            res.status(200).json({
                "success" : true,
                "message" : "sukses menambah akun (register)",
                "data" : results
            });
        }
    })
})

// LOGIN
app.post('/formpostl', async function (req, res){
    await console.log(req.body);
    const param = req.body;
    const email = param.email;
    const password = param.password;
    const queryLgn = "SELECT email, password FROM regis WHERE email = ?";
    const values = [email]
    conn.query(queryLgn, values, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                "success": false,
                "message" : err.sqlMessage,
                "data" : null
            });
        } else {
            if (results.length > 0 && password == results[0].password) {
                res.status(200).json({
                    "success" : true,
                    "message" : "Login Sukses",
                    "data" : results
                });
                console.log('berhasil login')
            }
            else {
                res.status(500).json({
                    "success": false,
                    "message" : "password salah",
                    "data" : null
                });
                console.log('password salah');
            }
        }
    })
})