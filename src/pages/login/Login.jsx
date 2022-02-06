import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react';
//styles
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <label>
        <span>E-mail</span>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {error && <div className="error">{error}</div>}
      {!isPending && <button className="btn">Log in</button>}
      {isPending && (
        <button className="btn" disabled>
          Log in
        </button>
      )}
    </form>
  );
}

export default Login;
