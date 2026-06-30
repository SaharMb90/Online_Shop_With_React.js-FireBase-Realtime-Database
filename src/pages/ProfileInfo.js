<<<<<<< HEAD
import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth-shared.css';
import './ProfileInfo.css';

const ProfileInfo = () => {
  const { user, purchaseHistory } = useAuth();

  if (!user) {
    return (
      <div className="gh-page">
        <div className="gh-page__panel">
          <p className="gh-page__hint">Log in to see your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gh-page">
      <div className="gh-page__panel gh-profile">
        <p className="gh-page__eyebrow">Account</p>
        <h1 className="gh-page__title">Profile</h1>

        <div className="gh-profile__row">
          <span>Name</span>
          <strong>{user.name || '—'}</strong>
        </div>
        <div className="gh-profile__row">
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>

        <h2 className="gh-profile__sub">Purchase history</h2>
        {purchaseHistory && purchaseHistory.length > 0 ? (
          <ul className="gh-profile__history">
            {purchaseHistory.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <span>${item.price}</span>
                <span className="gh-profile__date">{item.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="gh-page__hint">No purchases yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
=======
// src/pages/ProfileInfo.js
import React, { useState } from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ userEmail, userPassword, purchaseHistory }) => {
  const [showPassword, setShowPassword] = useState(false); // Track password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between showing and hiding password
  };

  const renderPurchaseHistory = () => {
    if (!purchaseHistory || purchaseHistory.length === 0) {
      return <p>No purchases yet.</p>;
    }
    return (
      <ul>
        {purchaseHistory.map((item, index) => (
          <li key={index}>
            <div>
              <strong>{item.title}</strong> - ${item.price} - Purchased on {item.date}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="profile-info">
      <h1>Profile Information</h1>
      <div className="user-details">
        <p><strong>Email:</strong> {userEmail}</p>
        <p>
          <strong>Password:</strong> {showPassword ? userPassword : '••••••••'}
          <button onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </p>
      </div>
      <div className="purchase-history">
        <h2>Purchase History</h2>
        {renderPurchaseHistory()}
      </div>
    </div>
  );
};

export default ProfileInfo;
>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
