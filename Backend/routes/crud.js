const route = require('express').Router()
const {verifyToken } = require('../middleware/authMiddleware')
const {upload}=require('../files/file')
const {login,getStudent,register,deleteStudent,updateStudent,getStudentByid , uploadFiles}= require('../controllers/crudcontroller')

route.post("/register",register)
route.get("/getDetails",verifyToken,getStudent)
route.get("/getDetails/:studentId",getStudentByid)
route.put("/updateDetails/:id",updateStudent)
route.delete("/deleteDetails/:id",deleteStudent)
route.post("/login", login)
route.post("/upload",upload.single("image"),uploadFiles)


module.exports = route