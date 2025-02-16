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
    .then(() => { console.log("MognoDB Connected!!!") })
    .catch((err) => console.log(err));

//middleware
app.use(express.static(path.join(path.resolve(), 'public')))


//rendering ejs file
app.get('/', (req, res) => {
    res.render('index.ejs', { url: null })
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
const imageSchema=new mongoose.Schema({
    filename:String,
    public_id:String,
    img_url:String
})
const imgFile=mongoose.model('cloudinary',imageSchema)

  //multer file upload on cloudinary
app.post('/upload', upload.single('file'), async (req, res, next) => {
    const file=req.file.path
    const cloudinaryRes=await cloudinary.uploader.upload(file,{
        folder:"NodeJS Mastery"
    })

    //save to database
    const db=await imgFile.create({
        filename:file.originalname,
        public_id:cloudinaryRes.public_id,
        img_url:cloudinaryRes.secure_url,
    })
    res.render('index.ejs',{url:cloudinaryRes.secure_url})
    // res.json({message:'file uploaded Successfully',cloudinaryRes})

})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})