import { timestamp } from '../../firebase/config';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
const { v4: uuidv4 } = require('uuid');

function ProjectComment() {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuidv4()
    };
    console.log(commentToAdd);
  };
  return (
    <div className="project-comments">
      <h4>Project comment</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}></textarea>
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ProjectComment;
