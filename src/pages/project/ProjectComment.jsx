import { timestamp } from '../../firebase/config';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useParams } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');

function ProjectComment({ project }) {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');
  console.log(project);

  const { id } = useParams();
  console.log(project.id, id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuidv4()
    };
    await updateDocument(id, {
      comments: [...project.comments, commentToAdd]
    });
    if (!response.error) {
      setNewComment('');
    }
    console.log(response);
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