const mongoose = require('mongoose');

const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/taskmanagement")
    .then((res)=>{console.log("Connected to database")})
    .catch((err)=>{console.log("Error connecting to database")})
}
module.exports=connectDb;