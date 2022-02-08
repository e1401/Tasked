import { timestamp } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import Select from 'react-select';
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }
];

function Create() {
  const { user } = useAuthContext();
  const { documents } = useCollection('users');
  const { addDocument, response } = useFirestore('projects');
  const [users, setUsers] = useState([]);
  const history = useHistory();

  //form field values
  const [projectName, setProjectName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (category === '') {
      setFormError('Please select category');
      return;
    }
    if (assignedUsers.length === 0) {
      setFormError('Please assign at least one user');
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id
      };
    });
    const project = {
      projectName,
      details,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      category: category.value,
      comments: [],
      createdBy,
      assignedUsersList
    };
    await addDocument(project);
    console.log(response);
    if (response.success) {
      history.push('/');
    }
  };

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name</span>
          <input
            type="text"
            required
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
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
          <Select onChange={(option) => setCategory(option)} options={categories} />
        </label>
        <label>
          <span>Assign to:</span>
          <Select options={users} onChange={(option) => setAssignedUsers(option)} isMulti />
        </label>
        <button className="btn">Create project</button>
        {formError && <div className="error">{formError}</div>}
        {response.error && <div className="error">{response.error}</div>}
      </form>
    </div>
  );
}

export default Create;
