<<<<<<< HEAD
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
=======
// src/pages/Contact.js
import React, { useState } from 'react';
import { database } from '../firebase'; // Import the Firebase configuration
import { ref, set } from 'firebase/database';
// import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new reference in the database
      const newContactRef = ref(database, 'contacts/' + Date.now()); // Using timestamp as unique key
      
      // Set the data in the database
      await set(newContactRef, {
        name,
        email,
        message,
      });

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Error sending message, please try again.');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
