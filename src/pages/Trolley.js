<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Trolley.css';

function Trolley({ trolley, completePurchase }) {
  const navigate = useNavigate();
  const { recordPurchase } = useAuth();
  const total = trolley.reduce((sum, item) => sum + item.price, 0);

  const handlePurchase = () => {
    recordPurchase(
      trolley.map((item) => ({ ...item, date: new Date().toLocaleDateString() }))
    );
    completePurchase();
    navigate('/profile');
  };

  return (
    <div className="gh-page">
      <div className="gh-page__panel gh-trolley">
        <p className="gh-page__eyebrow">Your basket</p>
        <h1 className="gh-page__title">Basket</h1>

        {trolley.length > 0 ? (
          <>
            <ul className="gh-trolley__list">
              {trolley.map((item, index) => (
                <li key={index} className="gh-trolley__item">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="gh-trolley__total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button type="button" className="gh-btn" onClick={handlePurchase}>
              Complete purchase
            </button>
          </>
        ) : (
          <p className="gh-page__hint">Your basket is empty. Find something green on the home page.</p>
        )}
      </div>
    </div>
  );
}

export default Trolley;
=======
import React from "react";


function Trolley({ trolley, completePurchase }) {
  const trolleyItems = trolley.map((item, index) => (
    <li key={index}>
      {item.name} - ${item.price}
     
    </li>
  ));

  return (
    <div>
      <h1>Your Trolley</h1>
      {trolley.length > 0 ? (
        <div>
          <ul>{trolleyItems}</ul>
          <button onClick={completePurchase}>Complete Purchase</button>
        </div>
      ) : (
        <p>Your trolley is empty.</p>
      )}
    </div>
  );
}


export default Trolley;

>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
