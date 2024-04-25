const {User}=require('../model/User')
const jwt=require('jsonwebtoken')
 const secretK='d9i0v4y70ash90r4ee64'
 function generateToken(userDetails){
    return jwt.sign(userDetails,secretK)
}
 async function validateUser(req,res){
    try{
        const user=await User.find({"emailID":req.body.emailID,"password":req.body.password})
    if(user.length===0){
        res.status(401).json({
            "status":"failure",
            "message":"user does not exsist"
        })
    }else{
        const userDetails={
            "emailID": user[0].emailID,
            "username": user[0].username,
           "phoneno": user[0].phoneno,
            'address': user[0].address,
            "userID":user[0]._id.toString()
        }
        const accessToken=generateToken(userDetails)
        res.status(200).json({
            "status": "success",
            "message": "user exists",
            "accessToken":accessToken,
            "userDetails":userDetails
        })
    }
    }catch(err){
        res.status(500).json({
            "status": "failure",
            "message": "authentication failed",
            "error": err
        })
    }
 }
 async function createUser(req,res){
    try{
   const user=await User.find({"emailID":req.body.emailID}) 
   if(user.length===0){ 
   const user=await User.create({
    "emailID":req.body.emailID,
    "password":req.body.password,
    "username":req.body.username,
    "phoneno":req.body.phoneno,
    "address":req.body.address
   })

   const userDetails={
    "emailID": user.emailID,
    "username": user.username,
   "phoneno": user.phoneno,
    'address': user.address,
    "userID":user._id.toString()
}

const accessToken=generateToken(userDetails)
   res.status(200).json({
    "status":"success",
    "message":"new user created",
    "accessToken":accessToken,
    "userDetails":userDetails
   })
   }else{
    res.status(409).json({
        "status":"Failure",
        "message":"user ALready exsist"
       })
   }
 }catch(error){
    res.status(500).json({
        "status": "failure",
        "message": "user not created",
        "error": error
    })
    }
}
module.exports={createUser,validateUser}