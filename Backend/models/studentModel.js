const mongoose1 = require('mongoose')
const studentSchema = new mongoose1.Schema({
    name:String,
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Student" , "Teacher" ,"Management"],
        default:"Student"
    },
    password:String
},{timestamps:true})

module.exports = mongoose1.model("Students" , studentSchema)