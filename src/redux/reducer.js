import { GET_TASK_FAIL, GET_TASK_REQUEST, GET_TASK_SUCCESS, NEW_TASK_FAIL, NEW_TASK_REQUEST, NEW_TASK_SUCCESS } from "./constant";
const initialState = {
  loading: false,
  taskList: []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TASK_REQUEST :
          return {...state,locading:true}
      case GET_TASK_SUCCESS:
          console.log(action.payload.data)
          return {...state,taskList:action.payload.data,message: action.payload.message}
      case GET_TASK_FAIL:
          return {...state,loading:true,error:action.payload}
      case NEW_TASK_REQUEST:
          return {...state}
      case NEW_TASK_SUCCESS:
          return {...state,taskList:[...state.taskList,...action.payload]}
      case NEW_TASK_FAIL:
          return {...state,loading:true,error:action.payload}
      default:
          return state
    }
  }
  
  export default taskReducer;
  