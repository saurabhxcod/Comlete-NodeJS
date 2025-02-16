import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
const PORT=3000;

//DB Connection
mongoose.connect(process.env.MONGODB_URI,{dbName:'Image_Uploader'})
.then(()=>{ console.log("MognoDB Connected!!!")})
.catch((err)=>console.log(err));

//rendering ejs file
app.get('/',(req,res)=>{
    res.render('index.ejs',{url:null})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})