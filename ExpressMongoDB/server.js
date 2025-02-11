// console.log("Let's Learn how to connect MongoDB with Express.")

import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app=express();
const PORT=3000;

//connection to MongoDB
mongoose.connect(process.env.MONGODB_URI,{"dbName":"NodeJS mastery"}).then(()=>console.log("MongoDB Connected Succesffuly")).catch((err)=>console.log(err))

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})