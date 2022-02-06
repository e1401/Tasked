//styles and assets
import './Navbar.css';
import TaskedLogo from '../assets/tasked-logo.svg';

import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout, isPending } = useLogout();
  const { user, authIsReady } = useAuthContext();

  return (
    <nav className="navbar">
      {authIsReady && (
        <ul>
          <li className="logo">
            <img src={TaskedLogo} alt="Tasked logo" />
          </li>
          <li>
            {!user && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
              </>
            )}
          </li>
          <li>
            {user && (
              <>
                {!isPending && (
                  <button className="btn" onClick={logout}>
                    Logout
                  </button>
                )}
                {isPending && (
                  <button className="btn" onClick={logout} disabled>
                    Logging out
                  </button>
                )}
              </>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
