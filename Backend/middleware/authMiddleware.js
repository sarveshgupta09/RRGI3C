// const verifyToken =(req,res,next)=>{
// const token = req.headers.token

// if(!token){
//  return res.status(401).json("Unauthorized")
// }
// if(token !== "12345"){
// return res.status(404).json({message:"Wrong Credentials enter valid Token"})
// }
// next()

// }

const jwt = require('jsonwebtoken')
const verifyToken =(req,res,next)=>{
const authheader= req.headers.authorization || req.headers.Authorization
if(!authheader){
 return res.status(401).json("UnAuthorized")
}
const token = authheader.split(" ")[1]
if(!token){
return res.status(400).json("Invalid Token")
}
try {
    const payload = jwt.verify(token , "BharathReddy")
req.user = payload
next()
} catch (error) {
    res.status(400).json("Wrong Token")
}
}
module.exports={verifyToken}