import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <CreateTask/>
      <TaskList/>
    </div>
  );
}

export default App;
