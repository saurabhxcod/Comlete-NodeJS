// console.log("Lets learn how to setup static files.")

import express from 'express';
import path from 'path';

const app=express();
const PORT=3000;

//middleware
app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})