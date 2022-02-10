import './Project.css';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import ProjectComment from './ProjectComment';
// import { useFirestore } from '../../hooks/useFirestore';
// import { useAuthContext } from '../../hooks/useAuthContext';
// import { useHistory } from 'react-router-dom';

function Project() {
  // const { user } = useAuthContext();
  // const { deleteDocument, response } = useFirestore('projects');
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);
  // const history = useHistory();
  // console.log(id);

  // const handleDelete = async () => {
  //   if (document.createdBy.id === user.uid) {
  //     console.log('can delete');
  //     await deleteDocument(id);

  //     history.push('/');
  //     console.log(response);
  //   }
  // };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectDetails project={document} />
      <ProjectComment project={document} />
      {/* {document.createdBy.id === user.uid && (
        <button className="btn" onClick={handleDelete}>
          Delete project
        </button>
      )} */}
    </div>
  );
}

export default Project;
