import { GET_TASK_FAIL, GET_TASK_REQUEST, GET_TASK_SUCCESS, NEW_TASK_FAIL, NEW_TASK_REQUEST, NEW_TASK_SUCCESS } from "./constant"
import axios from "axios";
export const createTask=(dispatch,data)=>async()=>{
    try {
        dispatch({type:NEW_TASK_REQUEST})
        const res = await axios.post("http://localhost:3001/task/createtask",{
          title:data.title,
          description:data.description,
          ddate:data.dueDate,
          status:data.status
        })
        console.log(res.data);
        dispatch({type:NEW_TASK_SUCCESS,payload:res.data})
    } catch (err) {
        dispatch({type:NEW_TASK_FAIL,payload:err.message})
    }
}
export const getTask=(dispatch)=>async()=>{
    try {
        dispatch({type:GET_TASK_REQUEST,payload:"Fetching..."})
        const data = await axios.get("http://localhost:3001/task/get")
        console.log(data.data.task);
        dispatch({type:GET_TASK_SUCCESS,payload:{data:data.data.task,message:"Fetched Successfully"}})
    } catch (err) {
        dispatch({type:GET_TASK_FAIL,payload:err.message})
    }
}