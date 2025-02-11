// console.log("Let's Start learning Model Views Controllers.")

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config();

const app=express();
const PORT=3000;

//Database Connection
mongoose.connect(process.env.MONGODB_URI,{dbName :"NodeJS Mastery"})
.then(()=>console.log("MongoDB Connected!!!"))
.catch((err)=>console.log(err))

//middleware
app.use(express.static(path.join(path.resolve(),'public')))


app.get("/",(req,res)=>{
    res.render('index.ejs')
})

app.listen(PORT,()=>{
    console.log(`Server is Connected to PORT ${PORT}`)
})