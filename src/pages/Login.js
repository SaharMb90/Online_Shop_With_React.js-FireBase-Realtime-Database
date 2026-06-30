<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true); 
      setUserEmail(userCredential.user.email); // Store the user's email
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div className="signup-redirect">
        <p>Don't have an account?</p>
        <button onClick={handleSignUpRedirect}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
