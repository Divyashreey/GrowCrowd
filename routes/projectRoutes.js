const express=require('express')
const router=express.Router()
const {addnewProject,getProject,deleteProject,updateProject}=require('../controllers/projectController')
router.post('/add/:userID',addnewProject)
router.get('/get/:userID',getProject)
router.delete('/delete/:userID',deleteProject)
router.patch('/update/:userID',updateProject)
module.exports=router