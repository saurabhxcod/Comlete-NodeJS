import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path'
import { shortURL ,getOriginalUrl} from './Controllers/URL.controller.js';
dotenv.config();

//Database Connection
mongoose.connect(process.env.MONGODB_URI, { dbName: "URL_Shortener" })
    .then(() => console.log("MongoDB Connected!!!"))
    .catch((error) => console.log(error))

const app = express();
const PORT = 3000;


//middlware
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({extended:true}))


//rendering ejs file
app.get('/',(req,res)=>{
    res.render('index.ejs',{shortURL:null})
})

app.post('/short',shortURL) 

//redirect to original URL using short code->dynamic routing
app.get('/:shortCode',getOriginalUrl)

app.listen(PORT, () => {
    console.log(`Server is connected at PORT ${PORT}`)
})