import { timestamp } from '../../firebase/config';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar';
const { v4: uuidv4 } = require('uuid');

function ProjectComment({ project }) {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');

  const { id } = useParams();

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
  };
  return (
    <div className="project-comments">
      <h4>Project comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar user={comment} />
              </div>
              <div className="comment-date">
                <p>Date here</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

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
