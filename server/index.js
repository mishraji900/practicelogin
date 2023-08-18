const express = require('express')
const dotenv = require('dotenv').config()
const cors =require('cors')
const mongoose =require('mongoose')
const cookieParser = require('cookie-parser')

//database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('database')
})
.catch((err)=>{
    console.log('not',err)
})
const app=express();
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use('/',require('./routes/authRoutes'))


const port = 8000;
app.listen(port,()=>{
    console.log('listining to 8000')
})