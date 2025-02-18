import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import multer from 'multer';

const app = express();
const PORT = 3000;

//Cloudinary Setup
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'dr0i1kytj',
    api_key: '615354158661121',
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

//DB Connection
mongoose.connect(process.env.MONGODB_URI, { dbName: 'Image_Uploader' })
    .then(() => { console.log("MongoDB Connected!!!") })
    .catch((err) => console.log(err));

//middleware
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({extended:true}))


//rendering login.ejs file
app.get('/', (req, res) => {
    res.render('login.ejs', { url: null })
})
//rendering register file
app.get('/register',(req,res)=>{
    res.render('register.ejs',{url:null})
})

//Disk Storage.
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

//file model
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String, 
    filename:String,
    public_id:String,
    img_url:String
})
const User=mongoose.model('user',userSchema)

//multer file upload on cloudinary
app.post('/register', upload.single('file'), async (req, res, next) => {
    const file=req.file.path
    const {name,email,password}=req.body
    const cloudinaryRes=await cloudinary.uploader.upload(file,{
        folder:"NodeJS Mastery"
    })

    //save to database
    const db=await User.create({
        name,
        email,
        password,
        filename:file.originalname,
        public_id:cloudinaryRes.public_id,
        img_url:cloudinaryRes.secure_url,
    })
    res.redirect('/')
    // res.json({message:'file uploaded Successfully',cloudinaryRes})

})

//login
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    // console.log("Printing the body",req.body)

    let user=await User.findOne({email})
    if(!user) res.render("login.ejs")
    else if(user.password!=password) res.render('login.ejs')
    else res.render('profile.ejs',{user})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}) 