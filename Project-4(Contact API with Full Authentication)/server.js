// console.log("Let's Learn how to create API")

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import bodyParser from 'express'
import userRouter from './Routes/User.js'

const app=express();
const PORT=2000;

app.use(bodyParser.json())
//DB connection
mongoose.connect(process.env.MONGODB_URI,{dbName:"Contact_API"})
.then(()=>console.log("MongoDB Connected!!"))
.catch((err)=>console.log(err))


//middleware
app.use('/api/user',userRouter);
//home route
app.get('/',(req,res)=>{
    res.json({message:"This is home route."})
})



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})