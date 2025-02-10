// console.log("Lets learn form Handling.")

import express from 'express'
import path from 'path'
const app=express();
const PORT=3000;

//middleware
app.use(express.static(path.join(path.resolve(),'public')))
app.use(express.urlencoded({extended:true}))

//save the data in database
app.post('/form-submit',(req,res)=>{
    console.log(req.body)
    res.json({messsage:'Form has been submitted.',
        status:true
    })
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})