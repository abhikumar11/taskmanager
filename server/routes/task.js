const express=require('express');
const { createTask, getTask } = require('../controller/task');
const router=express.Router();

router.post("/createtask",createTask);
router.get("/get",getTask);
module.exports = router;