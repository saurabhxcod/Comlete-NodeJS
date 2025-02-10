// console.log("Lets Start learning Express.")
import express from 'express';

const app=express();
const PORT=3000;

//Routing 
app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})