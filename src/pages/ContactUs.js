import React, { useState } from 'react';
import '../styles/auth-shared.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected in this demo — the message is held locally only.
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="gh-page">
      <div className="gh-page__panel">
        <p className="gh-page__eyebrow">Questions, care tips, custom orders</p>
        <h1 className="gh-page__title">Contact us</h1>
        {sent && <p className="gh-success">Message received. We'll write back within a day or two.</p>}
        <form onSubmit={handleSubmit}>
          <div className="gh-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="gh-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="gh-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="gh-btn">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
