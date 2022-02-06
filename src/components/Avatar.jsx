import './Avatar.css';

function Avatar({ user }) {
  return (
    <div>
      {user && (
        <>
          <div className="avatar">
            <img src={user.photoURL} alt="user profile" />
            <p>{user.displayName}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Avatar;
