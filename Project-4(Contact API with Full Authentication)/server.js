// console.log("Let's Learn how to create API")

import express from "express";
import mongoose from "mongoose";
import {config} from 'dotenv';
config({path:'.env'})
import bodyParser from 'express'
import userRouter from './Routes/User.js'
import contactRouter from './Routes/Contact.js'

const app=express();
const PORT=process.env.PORT;

app.use(bodyParser.json())
//DB connection
mongoose.connect(process.env.MONGODB_URI,{dbName:"Contact_API"})
.then(()=>console.log("MongoDB Connected!!"))
.catch((err)=>console.log(err))


//userRouter
app.use('/api/user',userRouter);
//contact Router
app.use('/api/contact',contactRouter);


//home route
app.get('/',(req,res)=>{
    res.json({message:"This is home route."})
})



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})