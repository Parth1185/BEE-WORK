const express = require("express")
const app = express();

app.set("view engine", "ejs");
app.get("", (req,res)=>{
    res.render("layout");
});

app.get('/home', (req,res)=>{
    res.render("home");
});

app.get('/about', (req,res)=>{
    res.render("about");
});

app.get('/placement', (req,res)=>{
    res.render("placement");
});

app.get('/contact', (req,res)=>{
    res.render("contact");
});

app.get('/courses', (req,res)=>{
    res.render("courses", {title : "courses"});
});

app.listen(12014, ()=>{
    console.log("Server is started...");
})