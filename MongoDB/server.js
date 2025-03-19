const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 3019;
app.use(express.static(__dirname)); // middleware

app.get("", (req,res)=>{
    // res.send("<h1> Server Created...</h1>"); //server ended on this line
    
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/home", (req,res) =>{
    res.send("Home Page");
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port} .`);
});



//how to create server // using http module, using express
// cmd to run server : nodemon  __filename or node
//max 7 middleware
//threadpool handle synchronous tasks
//DNS change url to ip address