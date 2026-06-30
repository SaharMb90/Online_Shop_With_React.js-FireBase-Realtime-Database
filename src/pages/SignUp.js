<<<<<<< HEAD
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
=======
// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css'; // Ensure you have your CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Ensure auth is initialized here
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    try {
      // Attempt to create the user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Redirect to admin panel after successful sign-up
    } catch (err) {
      // Improved error handling
      console.error('Signup Error:', err);
      setError(err.message); // Set error message from the error object
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignUp}>
        <div className="size">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="size">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
