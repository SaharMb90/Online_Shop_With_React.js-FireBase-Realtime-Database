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
