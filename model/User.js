const mongoose=require('mongoose')
const userDetailSchema=new mongoose.Schema({
    emailID:{
        type:String
    },
    password:{
        type:String
    },
    username:{
        type:String
    },
    phoneno:{
        type:Number
    },
    address:{
        type:String
    },
},{versionKey:false})
const User=mongoose.model('UserDetails',userDetailSchema)
module.exports={User}