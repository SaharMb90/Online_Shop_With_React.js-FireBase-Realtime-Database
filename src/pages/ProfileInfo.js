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
