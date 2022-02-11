const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales'];

function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (button) => {
    changeFilter(button);
  };
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((button) => (
          <button
            className={currentFilter === button ? 'active' : ''}
            key={button}
            onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default ProjectFilter;
