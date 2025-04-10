const express = require("express")
const app = express();
const mongoose = require('mongoose');   // Using Node.js require()
const User = require("./model/user");
// const Blog = require("./model/blog");

const blogRoute = require("./routes/blogRoutes")
// const userRoute = require("./routes/userRoutes")
app.use(express.json())   //middleware

app.set('view engine', 'hbs');

//create a route to render home page 
app.get("/home", (req, res) => {
  res.render("home", {
    name: "Parth Bhandari",
    age: 20,
    followers:["Kartik", "Rajveer", "Sneha","Sakshi"]
  })
})


app.get("/blogpage", (req, res) => {
  res.render("blogs", {
    blogs:[
    { id: 1, title: "my first blog", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fettjl2rGDjHBlCYCXcWMRAoKDr_AQOoXQ&s", content: "qwertyuiopasdfghjklxcvbnm" },
    { id: 2, title: "my first blog", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fettjl2rGDjHBlCYCXcWMRAoKDr_AQOoXQ&s", content: "qwertyuiopasdfghjklxcvbnm" }
    ]
  })
})


mongoose.connect('mongodb://127.0.0.1:27017/G13MDB')      //G13MDB  is name of database
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));


app.listen(6970, (req, res) => {
  console.log("Server is Started on PORT : 6970");
})