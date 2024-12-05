const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    email:{
        type:mongoose.SchemaTypes.String,
        require:true,
     },
     password:{
        type:mongoose.SchemaTypes.String,
        require:true,
     },
     tasks:[{ type: Schema.Types.ObjectId, ref: "Task"}]
});
const User=mongoose.model("User",userSchema);
module.exports=User;