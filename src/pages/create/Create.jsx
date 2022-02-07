import { useState } from 'react';
import './Create.css';

function Create() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name</span>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Project details</span>
          <textarea
            type="text"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          <span>Due date</span>
          <input
            type="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label>
          <span>Project category</span>
          {/* todo category select */}
        </label>
        <label>
          <span>Assign to:</span>
          {/* todo assigned users */}
        </label>
        <button className="btn">Create project</button>
      </form>
    </div>
  );
}

export default Create;
