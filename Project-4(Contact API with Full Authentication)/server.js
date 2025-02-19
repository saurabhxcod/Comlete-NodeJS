// console.log("Let's Learn how to create API")

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import bodyParser from 'express'
import {User} from './Models/User.js'

const app=express();
const PORT=3000;

app.use(bodyParser.json())
//DB connection
mongoose.connect(process.env.MONGODB_URI,{dbName:"Contact_API"})
.then(()=>console.log("MongoDB Connected!!"))
.catch((err)=>console.log(err))

//home route
app.get('/',(req,res)=>{
    res.json({message:"This is home route."})
})

//user Routes
//@api name:-user register
//@api method:-post
//@api endpoint-: /api/user/register
app.post('/api/user/register',async(req,res)=>{
    const {name,email,password}=req.body;
    if(name=="" || email=="" || password==""){
        return res.json({message:"All fields are required"})
    }
    let user=await User.findOne({email})

    if(user) return res.json({message:"User already exits",success:false})
        
    user=await User.create({name,email,password})
    
    res.json({message:"User Created Succesfully..",success:true,user})

})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})