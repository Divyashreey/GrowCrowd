const mongoose=require('mongoose')
const projectDetailSchema=new mongoose.Schema({
   category:{
        type:String
    },
    About:{
        type:String
    },
    Raised:{
        type:Number
    },
    Goal:{
        type:Number
    },
    userID:{
        type:String
    }
  
},{versionKey:false})
const Project=mongoose.model('ProjectDetails',projectDetailSchema)
module.exports={Project}