const http = require("http");
const server =  http.createServer((request,response)=>{

    console.log("Server is started...");
    // response.end("<h1> Server is created successfully....</h1>");
    if(request.url==="/home")
    {
        response.end("<h1> Welcome to Home Page.</h1>")
    }
    else if(request.url==="/about")
    {
        response.end("<h1> Welcome to About Page.</h1>")
    }
    else if(request.url==="/services")
    {
        response.end("<h1> Welcome to Services Page.</h1>")
    }
    else{
        response.end("File not found!!!")
    }
    
})

server.listen(4000,()=>{
    console.log("Server is started on PORT:4000");
})