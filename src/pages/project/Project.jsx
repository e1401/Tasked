import './Project.css';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  const { document, error } = useDocument('projects', `${id}`);
  console.log(id);
  console.log(document, error);
  return (
    <div>
      Project page
      {document && <h2>{document.projectName}</h2>}
    </div>
  );
}

export default Project;
