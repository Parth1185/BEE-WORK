// // 1. query parameter
// // http://localhost:3000/profile?key=value

// const express = require("express")
// const app = express();

// // app.get("/profile", (req,res)=>{
// //     const {username,age} = req.query;        //req.query ke through input hota hai
// //     console.log(username + " " + age);
// //     res.send(`Profile Page of ${username} ${age} years`)
// // })

// app.get("/profile/:id", (req,res)=>{
//     const {id} = req.params;
//     //find in database
//     res.send(`Profile Page of ${id}`)
// })

// app.get("/profile/:id/:username", (req,res)=>{
//     const {id,username} = req.params;
//     //find in database
//     res.send(`Profile Page of ${id} ${username}`)
// })

// let usersData = [
//     {
//         id:101,
//         name:"Parth",
//         city : "Ludhiana"
//     },

//     {
//         id:102,
//         name:"Kartik",
//         city : "New Delhi"
//     },

//     {
//         id:103,
//         name:"Gaurav",
//         city : "Jammu"
//     },
// ]




// app.get("/allusers",(req,res)=>{
//     res.send(usersData)
// })

// app.get("/getuserbyID",(req,res)=>{
//     // const id=req.query.id
//     const{id}=req.query;
//     for(let i=0;i<usersData.length;i++){
//         if(usersData[i].id==id){
//             return res.send(usersData[i])
//         }
//     }
//     res.send("users not found")
// })



// // app.get("getoneuser",(req,res)=>{
//     //     
//     // })
    
// app.listen(14503, (req,res)=>{
//     console.log("Server is started...");
// })





// const express = require("express"); 
// const app = express(); 


// let userData = [
//     {
//     id: 1,
//     name: "John",
//     city: "New York"
//     },
//     {
//     id: 2,
//     name: "Jane",
//     city: "Los Angeles"
//     }
// ];


// app.get("/allUsers" , (req , res) =>{
//     res.send(userData) ; 
// })

// app.get("/getuserbyId",(req,res)=>{
//     const{id} = req.query;
//     for(let i = 0 ; i < userData.length ; i++){
//         if(userData[i].id == id){
//             return res.send(userData[i]);
//         }
//     }
//     res.send("User not found");
// })



// app.get("/addUser",(req,res)=>{
//     const{id,name,city} = req.query;
//     console.log(id,name,city);

//     let newUser = {
//         id:id,
//         name:name,
//         city:city
// }
// userData.push(newUser);
// res.send("User added successfully...");
//     // userData.push({id,name,city});
// });


// app.listen(4050 , ()=>{
//     console.log("Server Started..."); 
// })



/*
use post request when
if changing state of server (adding, removing data)
if we need to send data in hidden mode, data is not visible in url
all data is stored in a body
can be accessed through req.body
*/