const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}...`);
});