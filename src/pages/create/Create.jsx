import { useState, useEffect } from 'react';
import { useCollection } from '../../hooks/useCollection';
import Select from 'react-select';
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }
];

function Create() {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  //form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate, category, assignedUsers);
  };

  // useEffect(() => {
  //   const userList = async () => {
  //     if (documents) {
  //       const result = await documents.map((user) => ({
  //         value: user.displayName,
  //         label: user.displayName
  //       }));
  //       setUsers(result);
  //     } else {
  //       console.log(error);
  //     }
  //   };
  //   userList();
  // }, [documents, error]);

  // console.log(users);

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
          <Select onChange={(option) => setCategory(option)} options={categories} />
        </label>
        <label>
          <span>Assign to:</span>
          <Select options={users} onChange={(option) => setAssignedUsers(option)} isMulti />
        </label>
        <button className="btn">Create project</button>
      </form>
    </div>
  );
}

export default Create;
