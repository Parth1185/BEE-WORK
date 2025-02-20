const express =require("express")
const app=express()


app.use(express.urlencoded({extended:true}))
let userData=[]
// converts urlencoded data into objects
//it is a middleware that has to be run on every requests
//array stores data temporarily, if server crashed or restarted, all data is lost
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/18feb.html")
})


app.post("/adduser",(req,res)=>{
    let {name,email,password}= req.body;
    userData.push({name:name,email:email,password:password})
    console.log(name,email,password)
    res.send(userData)
})
app.listen(22461,()=>{
    console.log("server started")
})

// body------content type-->json, urlencoded, multi path form data-------converted into objects
// if sent by form, urlencoded .... express.urlencoded middleware used