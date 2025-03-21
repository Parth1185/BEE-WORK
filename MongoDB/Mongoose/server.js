const express = require("express")
const app = express();
const mongoose = require('mongoose');   // Using Node.js `require()`
const User = require("./model/user");
const Blog = require("./model/blog");
app.use(express.json())   //middleware

app.post("/users", async(req,res)=>{
    let {name, email, password} = req.body;
    let newUser = new User({name : name, email : email, password : password});
    await newUser.save();     //will add data into user collection
    res.send("User Added");
})

app.post("/blog", async (req, res) => {   //async function return promises
  let { title, content, author } = req.body;
  let newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.send("Blog Added");
});

app.get("/blog", async (req,res)=>{
 let allblogs = await Blog.find();
 res.send(allblogs)
})

app.get("/users", async (req,res)=>{
  let allusers = await User.find();
  res.send(allusers)
 })

mongoose.connect('mongodb://127.0.0.1:27017/G13MDB')      //G13MDB  is name of database
.then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));


app.listen(5858,(req,res)=>{
    console.log("Server is Started on PORT : 5858");
})

//any query to the database in asynchronous


/*
const express = require("express")

Imports the Express.js framework, which helps in building the backend server.
const app = express();

Creates an instance of an Express application, which will handle HTTP requests.
const mongoose = require('mongoose');

Imports Mongoose, an ODM (Object Data Modeling) library that simplifies MongoDB operations.
const User = require("./model/user");

Imports the User model from the model/user.js file, which defines the structure of user data in MongoDB.
const Blog = require("./models/blog");

Imports the Blog model from the models/blog.js file, which defines the structure of blog data in MongoDB.
app.use(express.json())

Enables JSON parsing in incoming HTTP requests so that request data can be accessed via req.body.
app.post("/users", async(req,res) => {

Defines a POST route at /users, which allows clients to send user data to be stored in the database.
let {name, email, password} = req.body;

Extracts name, email, and password from the JSON request body.
let newUser = new User({name: name, email: email, password: password});

Creates a new User document using the User model with the provided data.
await newUser.save();

Saves the new user record in the MongoDB database asynchronously.
res.send("User Added");

Sends a response back to the client confirming that the user was added successfully.
app.post("/blogs", async (req, res) => {

Defines a POST route at /blogs, which allows clients to send blog data to be stored in the database.
let { title, content, author } = req.body;

Extracts title, content, and author from the JSON request body.
let newBlog = new Blog({ title, content, author });

Creates a new Blog document using the Blog model with the provided data.
await newBlog.save();

Saves the new blog post in the MongoDB database asynchronously.
res.send("Blog Added");

Sends a response back to the client confirming that the blog was added successfully.
*/