const express1 = require('express')
const mongoose = require('mongoose')
const Bharath = require('./models/studentModel')
const app = express1()
app.use(express1.json())
const {verifyToken}= require('./middleware/authMiddleware')
const routes = require('./routes/crud')


mongoose.connect('mongodb://localhost:27017/Rrgi')
.then(()=>console.log("Data BAse Connected"))
.catch((err)=>console.log(err))

app.use(routes)


app.listen(4500,()=>{
console.log("Server Sterted")
})