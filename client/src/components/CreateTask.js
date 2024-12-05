import React, { useState } from 'react'
import { createTask } from '../redux/action';
import {useDispatch} from "react-redux";
const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data={title, description, dueDate, status};
      dispatch(createTask(dispatch,data));
    console.log(data);
  };
  return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="container p-4" style={{ maxWidth: '400px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h4 className="mb-3 text-center">Create Task</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small">Title</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Task title"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Description</label>
                <textarea
                  className="form-control form-control-sm"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Task description"
                  rows="2"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Due Date</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
              <button type="submit" className="btn btn-sm btn-primary w-100 mt-2">Submit</button>
            </form>
          </div>
        </div>
    
  )
}

export default CreateTask