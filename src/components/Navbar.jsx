//styles and assets
import './Navbar.css';
import TaskedLogo from '../assets/tasked-logo.svg';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={TaskedLogo} alt="Tasked logo" />
        </li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
