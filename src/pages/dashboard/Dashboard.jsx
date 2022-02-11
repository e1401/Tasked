import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

import './Dashboard.css';

function Dashboard() {
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('all');
  const { user } = useAuthContext();

  console.log(documents);

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filteredProjects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case 'all':
            return true;

          case 'mine':
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case 'development':
          case 'design':
          case 'sales':
          case 'marketing':
            console.log(document.category, currentFilter);
            return document.category === currentFilter;

          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {documents && (
        <ProjectFilter
          // projects={documents}
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {error && <p className="error">{error}</p>}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div>
  );
}

export default Dashboard;
