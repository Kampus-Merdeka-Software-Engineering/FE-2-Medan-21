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
app.use(express.urlencoded({ extended: true })); //to decode the data send through html form
app.use(express.static('./')); //to serve our public folder as static folder 

//API Routes


// REGISTER
app.post('/formpostr', async function (req,res) {
    await console.log(req.body);
    const param = req.body;
    const name = param.name;
    const username = param.username;
    const email = param.email;
    const password = param.password;
    const now = new Date();

    const queryStr = "INSERT INTO akun (name, username, email, password, created_at) VALUES (?, ?, ?, ?, ?)";
    const values = [name, username, email, password, now]

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
    const queryLgn = "SELECT email, password FROM akun WHERE email = ?";
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

app.get('/formgeta', async function (req, res){
    await console.log(req.body);
    const param = req.body;
    const idBarang = param.idBarang;
    const queryCart = "SELECT namaBarang, hargaBarang FROM item WHERE idBarang = ?";
    const values = [idBarang]
    conn.query(queryCart, values, (err, results) => {
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
                "message" : "sukses menambahkan barang",
                "data" : results
            });
        }
    })
})


app.listen(port, ()=>{
    console.log("server started on port 3003");
});