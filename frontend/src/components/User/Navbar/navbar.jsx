import './navbar.css';
import Button from '../../Button/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_left">
        <img src="/images/pen-icon.png" alt="pen icon" />
        <h1>Task Management</h1>
      </div>
      <div className="nav_right">
        <Link to={'/task'}>
          <Button
            className="nav_right_but"
            buttonText="Get Started | View Tasks"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
