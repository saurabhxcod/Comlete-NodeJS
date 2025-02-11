import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { shortURL } from './Controllers/URL.controller.js';
dotenv.config();

//Database Connection
mongoose.connect(process.env.MONGODB_URI, { dbName: "URL_Shortener" })
    .then(() => console.log("MongoDB Connected!!!"))
    .catch((error) => console.log(error))

const app = express();
const PORT = 3000;

//rendering ejs file
app.get('/',(req,res)=>{
    res.render('index.ejs',{shortURL:null})
})

app.post('/short',shortURL)

app.listen(PORT, () => {
    console.log(`Server is connected at PORT ${PORT}`)
})