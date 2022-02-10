import Avatar from '../../components/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ProjectDetails({ project }) {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { deleteDocument, response } = useFirestore('projects');
  const history = useHistory();

  const handleDelete = () => {
    if (project.createdBy.id === user.uid) {
      console.log('can delete');
      deleteDocument(id);
      history.push('/');
    }
  };

  console.log(project);
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.projectName}</h2>
        <p>By: {project.createdBy.displayName}</p>
        <p className="due-date">Project due by {project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project &&
            project.assignedUsersList.map((user) => (
              <div key={user.photoURL}>
                {/* <img src={user.photoURL} alt="avatar" /> */}
                <Avatar user={user} />
              </div>
            ))}
        </div>
      </div>
      {project.createdBy.id === user.uid && (
        <button className="btn" onClick={handleDelete}>
          Delete project
        </button>
      )}
    </div>
  );
}

export default ProjectDetails;
