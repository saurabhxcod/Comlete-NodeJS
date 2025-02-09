// console.log("Lets Start learning HTTP module");

import http from "http"
const server=http.createServer((req,res)=>{ 
    res.end("You requested for something.") 
});
const PORT=5000;
server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
}) 