import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth-shared.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    const result = signUp(name, email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate('/');
  };

  return (
    <div className="gh-page">
      <div className="gh-page__panel">
        <p className="gh-page__eyebrow">New here</p>
        <h1 className="gh-page__title">Create an account</h1>
        {error && <p className="gh-error">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="gh-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="gh-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="gh-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="gh-btn">Sign up</button>
        </form>
        <div className="gh-page__switch">
          Already have an account?
          <button type="button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
