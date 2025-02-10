// console.log("Let's Learn how to send JSON reponse.")

import express from "express";
import path  from 'path';

const app=express();
const PORT=3000;

const products=[
    {title:"OnePlus",price:75000},
    {title:"Iphone16",price:155000},
    {title:"Samsung",price:175000},
]
//send response 
app.get('/',(req,res)=>{
    //For json response

    // res.json({message:'fetched all products',
    //     products:products,
    //     success:true
    // })

    //for HTML response
    // res.send("<h1>This is a HTML response</h1>")

    //send html file
    const dir=path.resolve();
    const url=path.join(dir,'./index.html')
    res.sendFile(url)

    
})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})