const express = require('express')
const app = express()
const connectDB = require('./db')
const router = require('./router')
require("dotenv").config();


app.use(express.json())
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("hello w")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connectDB()
        console.log(`The serve is running on http://localhost:${process.env.PORT}`)
    }catch(error){
        console.error(error.message)
    }
})