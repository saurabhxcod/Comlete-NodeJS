// console.log("Let's learn Template Engine.")

import express from 'express'
const app=express();
const PORT=3000;

const products = [
    { title: 'Product 1', price: 100 },
    { title: 'Product 2', price: 200 },
    { title: 'Product 3', price: 300 }
];

app.get('/',(req,res)=>{
    let name="Saurabh"
    res.render('index.ejs',{name,products})
})

app.listen(PORT,()=>{
    console.log(`Server is runnign on PORT ${PORT}`)
})