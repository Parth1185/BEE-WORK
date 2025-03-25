const express = require("express")
const app = express();
const mongoose = require('mongoose');   // Using Node.js `require()`
const User = require("./model/user");
const Blog = require("./model/blog");
app.use(express.json())   //middleware

app.post("/users", async (req, res) => {
  let { name, email, password } = req.body;
  let newUser = new User({ name: name, email: email, password: password });
  await newUser.save();     //will add data into user collection
  res.send("User Added");
})

app.post("/blog", async (req, res) => {   //async function return promises
  let { title, content, author } = req.body;
  let newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.send("Blog Added");
});

app.get("/blog", async (req, res) => {
  let allblogs = await Blog.find();
  res.send(allblogs);
})

app.get("/blog/:id", async (req, res) => {
  let { id } = req.params;
  let oneblog = await Blog.findById(id);
  res.send(oneblog)
})

app.get("/users", async (req, res) => {
  let allusers = await User.find();
  res.send(allusers)
})

app.get("/users/:id", async (req, res) => {
  let { id } = req.params;
  let oneuser = await User.findById(id);
  res.send(oneuser);
})

app.delete("/blog/:id", async (req,res)=>{
  let {id} = req.params;
  await Blog.findByIdAndDelete(id);
  res.send("Blog deleted...")
})

app.put("/blog/:id", async (req,res)=>{
  let {id} = req.params;
  let blog = await Blog.findById(id);
  let {title,content,author} = req.body;
  blog.title = title;
  blog.content = content;
  blog.author = author;
  await blog.save();
  res.send(blog);
  // res.send("Blog Updated...")
})


mongoose.connect('mongodb://127.0.0.1:27017/G13MDB')      //G13MDB  is name of database
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));


app.listen(5858, (req, res) => {
  console.log("Server is Started on PORT : 5858");
})