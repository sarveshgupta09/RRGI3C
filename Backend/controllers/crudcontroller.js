const Bharath = require('../models/studentModel')
const jwt = require('jsonwebtoken')
const register = async(req,res)=>{
    try {
        const details = await Bharath.create(req.body)
        res.status(201).json({message:"Data Saved Scuceesfully" ,details})
    } catch (error) {
        res.status(400).json(error)
    }

}

const getStudent = async(req,res)=>{
    try {
        const getsData = await Bharath.find({})
        res.status(200).json({message:"Data Fetch Sucessfull", getsData})
    } catch (error) {
        res.status(400).json(error)
    }
}

const getStudentByid = async(req,res)=>{
    try {
        const student = await Bharath.findById(req.params.studentId)
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json(error)
    }

}

const updateStudent =async(req,res)=>{
try {
    const student = await Bharath.findByIdAndUpdate(
        req.params.id,
        req.body ,
        {new:true}
    )
    res.status(200).json(student)
} catch (error) {
    res.status(400).json(error)
}
}

const deleteStudent = async(req,res)=>{
try {
    const student = await Bharath.findByIdAndDelete(req.params.id)
    res.status(200).json("Studnet Deleted Sucesfully")
} catch (error) {
     res.status(400).json(error)
}
}

const login = async(req,res)=>{
const {email,password,role ,_id} = req.body
if(!email || !password){
return res.status(400).json("Email and Password both are required")
}

const existStudent = await Bharath.findOne({email})
if(!existStudent){
    return res.status(400).json("Credentials not found Please register")
}
try {
 const loginData = await Bharath.findOne({email,password})

 const token = jwt.sign({email:loginData.email, _id:loginData._id},"BharathReddy",{expiresIn:'5m'})

    if(loginData.role ==="Teacher"){
        return res.status(200).json({message:"Welcome Teacher" ,loginData,token})
    }
     if(loginData.role ==="Management"){
        return res.status(200).json({message:"Welcome Management" , loginData,token})
    }
    else{
 res.status(200).json({mesaage:"Login Sucessfill" , loginData , token})
    }
   
} catch (error) {
    res.status(400).json(error)
    console.log(error)
}
}

const uploadFiles =async(req,res) =>{
try {
    res.status(200).json({message:"File Uploaded"})
} catch (error) {
    res.status(400).json(error)
}
}

module.exports ={getStudent,getStudentByid,deleteStudent,updateStudent,register,login , uploadFiles}