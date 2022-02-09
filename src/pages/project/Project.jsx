import './Project.css';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import ProjectComment from './ProjectComment';

function Project() {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectDetails project={document} />
      <ProjectComment />
    </div>
  );
}

export default Project;
