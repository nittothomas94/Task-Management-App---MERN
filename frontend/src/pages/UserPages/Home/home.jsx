import './home.css';
import Navbar from '../../../components/User/Navbar/navbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onCLick = () => {
    navigate('/task');
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-main">
          <div className="img_head_home">
            <img src="/images/pen-icon.png" alt="pen icon" />
            <h1>Task Manager</h1>
          </div>
          <p>A Simple Task managemeent app tp keep track of your to-do-list</p>
          <Button variant="contained" color="primary" onClick={onCLick}>
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
