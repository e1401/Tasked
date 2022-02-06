import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

//styles and assets
import './Sidebar.css';
import AddIcon from '../assets/add_icon.svg';
import DashboardIcon from '../assets/dashboard_icon.svg';

function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* place for avatar and user */}
          {!user && <p>Please log in or sign up</p>}
          {user && <p>Hey {user.displayName}</p>}
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>Create project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
