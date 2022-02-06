import './OnlineUsers.css';
// import { projectFirestore } from '../firebase/config';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import Avatar from './Avatar';

function OnlineUsers() {
  const { documents, error } = useCollection('users');

  console.log(documents);

  return (
    <div className="user-list">
      <h2>All users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <p>{user.displayName}</p>

            {user.online ? <p>User online</p> : <p>User offline</p>}
            <Avatar user={user} />
          </div>
        ))}
    </div>
  );
}

export default OnlineUsers;
