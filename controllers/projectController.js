const {Project}=require('../model/Project')
async function addnewProject(req,res){
    try{
        Project.create({
            "category":req.body.category,
            "About": req.body.About,
            "Raised": req.body.Raised,
            "Goal": req.body.Goal,
            "userID": req.params.userID,
        })
        res.status(200).json({
            "status":"success",
            "message":"Entered in mongoDb"
        })
    }catch(err){
        res.status(500).json({
            "status":"Failure",
            "message":"Not entered into db",
            "error":err
        })
    }
}
async function getProject(req,res){
    try{
    const projectdetails= await Project.find({"userID":req.params.userID})
    res.status(200).json(projectdetails)
}catch(err){
 res.status(500).json({
    "status":"Failure",
    "message":"invalid credentials",
    "error":err
 })
}
}
async function deleteProject(req,res){
    try{
        await Project.findByIdAndDelete(req.params.id)
    res.status(200).json({
        "status":"deleted",
        "message":"entry deleted"
    })
    }catch(err){
        res.status(500).json({
            "status":"failure",
            "message":"couldnt delete",
            "error":err
        })
    }
    }
    async function updateProject(req, res) {
        try {
            await Project.findByIdAndUpdate(req.params.id, {
                "category":req.body.category,
            "About": req.body.About,
            "Raised": req.body.Raised,
            "Goal": req.body.Goal,
            "userID": req.params.userID,
            })
            res.status(200).json({
                "status" : "success",
                "message" : "entry updated"
            })
        } catch(err) {
            res.status(500).json({
                "status" : "failure",
                "message" : "couldn\'t update entry",
                "error" : err
            })
        }
    }
    
module.exports={addnewProject,getProject,deleteProject,updateProject}