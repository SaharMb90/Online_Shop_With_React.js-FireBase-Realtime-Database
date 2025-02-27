// src/pages/AdminPanel.js
import React, { useEffect, useState } from 'react';
import { database } from '../firebase'; // Import Firebase config
import { ref, onValue } from 'firebase/database';
import './AdminPanel.css'; // Optional: Add styles for your admin panel

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsRef = ref(database, 'contacts/');

    // Listen for changes to the contacts data
    const unsubscribe = onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      const contactList = [];
      for (let id in data) {
        contactList.push({ id, ...data[id] }); // Add id for reference
      }
      setContacts(contactList);
    });

    // Cleanup listener on unmount
    return () => {
      unsubscribe(); // Call the unsubscribe function to remove the listener
    };
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
