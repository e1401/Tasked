import './ProjectList.css';

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div>
      {projects.length === 0 && <p>No projects</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.projectName}</div>
      ))}
    </div>
  );
}

export default ProjectList;
