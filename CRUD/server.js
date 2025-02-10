// console.log("Lets start learning CRUD operation.")
import express from "express";

//C->create=POST(method)
//R->read=GET(method)
//U->update=PUT(method)
//D->delete=delete(method)

app.get("/contact",(req,res)=>{
    res.send("This is a contact page")
})

app.post("/form",(req,res)=>{
    res.send("This is a form page")
})
const app=express();
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})