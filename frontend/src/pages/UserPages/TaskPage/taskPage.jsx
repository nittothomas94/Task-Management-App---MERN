import './taskPage.css';
import Navbar from '../../../components/User/Navbar/navbar';
import MyButton from '../../../components/Button/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const TaskPage = () => {
  const [Task, setTask] = useState([]);
  const [Filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const navigate = useNavigate();

  const onAddTurfCLick = () => {
    navigate('/add-task');
  };

  useEffect(() => {
    getTask();
  }, [Filter]);

  const getTask = async () => {
    try {
      let url = '/task';

      if (Filter !== 'All') {
        url += `?status=${Filter}`;
      }

      const response = await axios.get(url);
      setTask(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  console.log(Task);

  const onDeleteClick = id => {
    setTaskToDelete(id);
    setOpenDialog(true);
  };

  const onConfirmDelete = async () => {
    await axios.delete('/task/' + taskToDelete);
    setOpenDialog(false);
    setTaskToDelete(null);
    getTask();
  };

  const onCancel = () => {
    setOpenDialog(false);
    setTaskToDelete(null);
  };

  const onEditClick = id => {
    navigate('/edit-task/' + id);
  };

  return (
    <>
      <Navbar />
      <div className="task_page">
        <div className="main">
          <div className="task_manager">
            <div className="task__manager">
              <img src="/images/pen-icon.png" alt="pen icon" />
              <h1>Task Manager</h1>
            </div>
            <MyButton
              className="add_task_btn"
              onClick={onAddTurfCLick}
              buttonText="Add Task"
            />
          </div>
          <div className="selector-filter">
            <select
              id="statusFilter"
              value={Filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="ul_div">
            {Task.map(item => {
              return (
                <div className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card_bottom">
                    <span className={`badge ${item.status}`}>
                      {item.status}
                    </span>
                    <div className="task-actions">
                      <MyButton
                        buttonText="Edit"
                        onClick={() => onEditClick(item._id)}
                        className="task-action-btn"
                      />
                      <MyButton
                        buttonText="Delete"
                        onClick={() => onDeleteClick(item._id)}
                        className="task-action-btn"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Implement Confirmation Modal using MUI */}

      <Dialog open={openDialog} onClose={onCancel}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the task "{taskToDelete?.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirmDelete} color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskPage;
