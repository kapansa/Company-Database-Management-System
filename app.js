require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect(`${process.env.DB_ACCESS}`, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("It works");
});

app.get("/", (req, res) =>{
    res.render(__dirname + "/views/index");
});

app.get("/login_admin", (req, res) =>{
    res.render(__dirname + "/views/loginAsAdmin");
});

app.get("/login_worker", (req, res) =>{
    res.render(__dirname + "/views/loginAsWorker");
});

app.get("/signup", (req, res) =>{
    res.render(__dirname + "/views/signup-registration");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}...`);
});