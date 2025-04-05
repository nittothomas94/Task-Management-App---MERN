import './editTask.css';
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
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';

const EditTaskPage = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
  });

  const { id } = useParams();

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await axios.get('/task/' + id);
    setTask(response.data);
  };

  console.log(task);

  const navigate = useNavigate();

  const onUpdateClick = async () => {
    await axios.patch('/task/' + id, task);
    navigate('/task');
  };

  return (
    <>
      <Navbar />
      <div className="edit-task-page">
        <div className="main-edit_task">
          <h1>Edit Task</h1>

          <TextField
            value={task.title}
            label="Task Title"
            variant="outlined"
            fullWidth
            onChange={e => {
              setTask({ ...task, title: e.target.value });
            }}
          />
          <TextField
            value={task.description}
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

          <Button variant="contained" color="primary" onClick={onUpdateClick}>
            Update Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditTaskPage;
