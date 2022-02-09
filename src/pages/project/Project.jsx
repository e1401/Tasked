import './Project.css';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);
  console.log(id);
  console.log(document, error);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <h1>{document.projectName}</h1>
    </div>
  );
}

export default Project;
