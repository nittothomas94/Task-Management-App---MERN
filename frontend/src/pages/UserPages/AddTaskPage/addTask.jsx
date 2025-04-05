import './addTask.css';
import Navbar from '../../../components/User/Navbar/navbar';
import {
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
  });

  console.log(task);

  const navigate = useNavigate();

  const onSaveClick = async () => {
    await axios.post('/task', task);
    navigate('/task');
  };

  return (
    <>
      <Navbar />
      <div className="add-task-page">
        <div className="main-add_task">
          <h1>Add Task</h1>

          <TextField
            label="Task Title"
            variant="outlined"
            fullWidth
            onChange={e => {
              setTask({ ...task, title: e.target.value });
            }}
          />
          <TextField
            label="Task Description"
            multiline
            rows={4}
            fullWidth
            onChange={e => {
              setTask({ ...task, description: e.target.value });
            }}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              value={task.status}
              label="Status"
              onChange={e => setTask({ ...task, status: e.target.value })}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={onSaveClick}>
            Save Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
