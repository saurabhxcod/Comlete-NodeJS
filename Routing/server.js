// console.log("Lets learn Routing in NodeJS")

import http from "http"

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end("<h1>Hello Saurabh.</h1>")

    if(req.url==='/wdm'){
        res.end("Welcome to NodeJS world.")
    }
    else if(req.url==='/post'){
        res.end("Welcome to my posts.")
    }
    else{
        res.end("Invalid Request")
    }
})
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})


