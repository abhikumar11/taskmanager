const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
     title: {
          type: mongoose.SchemaTypes.String,
          require: true,
     },
     description: {
          type: mongoose.SchemaTypes.String,
          require: true,
     },
     ddate: {
          type: mongoose.SchemaTypes.Date,
          require: true,
     },
     status:{
          type: mongoose.SchemaTypes.String,
          require: true
     },
    
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
