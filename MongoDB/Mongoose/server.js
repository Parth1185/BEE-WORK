const express = require("express")
const app = express();
const mongoose = require('mongoose');   // Using Node.js `require()`
const User = require("./model/user");
app.use(express.json())

app.post("/users", async(req,res)=>{
    let {name, email, password} = req.body;
    let newUser = new User({name : name, email : email, password : password});
    await newUser.save();     //will add data into user collection
    res.send("User Added");
})


mongoose.connect('mongodb://127.0.0.1:27017/G13MDB')      //G13MDB  is name of database
.then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));


app.listen(5858,(req,res)=>{
    console.log("Server is Started on PORT : 5858");
})

//any query to the database in asynchronous