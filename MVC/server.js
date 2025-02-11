// console.log("Let's Start learning Model Views Controllers.")

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import { userRegister } from './Controllers/User.controller.js'
dotenv.config();

const app = express();
const PORT = 3000;

//Database Connection
mongoose.connect(process.env.MONGODB_URI, { dbName: "NodeJS_Mastery" })
    .then(() => console.log("MongoDB Connected!!!"))
    .catch((err) => console.log(err))

//middleware
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.post('/formSubmit',userRegister);

app.listen(PORT, () => {
    console.log(`Server is Connected to PORT ${PORT}`)
})