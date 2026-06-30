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
