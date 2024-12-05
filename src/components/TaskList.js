import React, { useState,useEffect } from 'react';
import  {useDispatch, useSelector} from "react-redux";
import { getTask } from '../redux/action';
const TaskList=()=> {
  const { taskList, loading, error, message } = useSelector((state) => state);

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getTask(dispatch));
     }, []);
     console.log(taskList);
  const [tasks, setTasks] = useState([]);
 
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Task List</h2>
     
      <ul className="list-group">
        {taskList&&taskList?.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <p>{task?.title}</p>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
