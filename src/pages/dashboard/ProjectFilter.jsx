import { useState } from 'react';
const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales'];

function ProjectFilter({ projects }) {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleClick = (button) => {
    let newArr = projects.filter((project) => project.category === button);

    console.log(newArr);
    setCurrentFilter(button);
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
