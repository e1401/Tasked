import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';

import './Dashboard.css';

function Dashboard() {
  const { documents, error } = useCollection('projects');

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {documents && <ProjectFilter projects={documents} />}
      {error && <p className="error">{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

export default Dashboard;
