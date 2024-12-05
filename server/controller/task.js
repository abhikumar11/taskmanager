const Task=require("../models/task");
module.exports.createTask=async(req,res)=>{
    const {title,description,ddate,status}=req.body;
    console.log(req.body);
    try {
        const user=await Task.findOne({title});
        if (user) {
            res.status(200).json({message:"title already in use"});
        }
        else{
            const newTask=Task({title,description,ddate,status});
            await newTask.save();
            res.status(200).json({message:"task created successfully",task:newTask});
        }
    } catch (err) {
        res.status(404).json({message:"something went wrong",err:err});
    }
}
module.exports.getTask=async(req,res)=>{
    try {
        const task = await Task.find();
        res.status(200).json({message:"tasks fetched successfully",task:task});
    } catch (err) {
        res.status(404).json({message:"something went wrong",err:err});
    }
 }