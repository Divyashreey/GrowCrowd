const express=require('express')
const cors= require('cors')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const userRoutes=require('./routes/userRoutes')
const projectRoutes=require('./routes/projectRoutes')
 const app=express()
 app.use(bodyparser.json())
 app.use(cors())
app.use('/user',userRoutes)
app.use('/project',projectRoutes)
 async function connecttoDb(){
    try{
    await mongoose.connect('mongodb+srv://Divya:Divya@cluster0.g0xdx7d.mongodb.net/CrowdFunding?retryWrites=true&w=majority&appName=Cluster0')
    console.log("mongo db is running in port 4000"); 
     const port=process.env.PORT||4000
     app.listen(port, function() {
        console.log(`Listening on port ${port}...`)
    })
}
catch(error){
    
console.log(error+" couldnt establish connection");
}}
connecttoDb()