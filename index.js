const express = require("express");const port=process.env.DB_PORT || 3003;
const mysql = require("mysql2");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const absolutePath = path.resolve('./app/routes.js');
console.log(absolutePath);
require('dotenv').config()
const mainRouter = require('./app/routes.js');

const { Sequelize, DataTypes} = require("sequelize");
const sequelize = require('./config/db.js');

//API middlewares
app.use(cors({
    origin: '*',
}))
app.use(express.json()); //to accept data in json format 
app.use(express.urlencoded({ extended: true })); //to decode the data send through html form
app.use(express.static('./')); //to serve our public folder as static folder 

// http router
app.use("/", mainRouter);

app.listen(port, ()=>{
    console.log("server started on port 3003");
});