const express=require('express')
const router=express.Router()
const {createUser,validateUser}=require('../controllers/userController')
router.post('/new',createUser)
router.post('/login',validateUser)
module.exports=router