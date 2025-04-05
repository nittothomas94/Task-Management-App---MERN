import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/UserPages/Home/home';
import AddTaskPage from './pages/UserPages/AddTaskPage/addTask';
import TaskPage from './pages/UserPages/TaskPage/taskPage';
import EditTaskPage from './pages/UserPages/EditTaskPage/editTask';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </>
  );
};

export default App;
