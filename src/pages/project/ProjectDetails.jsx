import Avatar from '../../components/Avatar';

function ProjectDetails({ project }) {
  console.log(project);
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.projectName}</h2>
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
    </div>
  );
}

export default ProjectDetails;
