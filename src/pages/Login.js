import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth-shared.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = signIn(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate('/');
  };

  return (
    <div className="gh-page">
      <div className="gh-page__panel">
        <p className="gh-page__eyebrow">Welcome back</p>
        <h1 className="gh-page__title">Login</h1>
        {error && <p className="gh-error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="gh-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="gh-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="gh-btn">Login</button>
        </form>
        <p className="gh-page__hint">Demo account: guest@verdure.shop / glasshouse</p>
        <div className="gh-page__switch">
          Don't have an account?
          <button type="button" onClick={() => navigate('/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
