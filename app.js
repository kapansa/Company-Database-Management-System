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

const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}...`);
});