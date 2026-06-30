import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const STORAGE_KEY = 'verdure_session';
const USERS_KEY = 'verdure_users';

const seedUsers = () => {
  const existing = localStorage.getItem(USERS_KEY);
  if (existing) return JSON.parse(existing);
  const seeded = [
    { email: 'guest@verdure.shop', password: 'glasshouse', name: 'Guest' },
  ];
  localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
  return seeded;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    seedUsers();
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setUser(JSON.parse(saved));
    const savedHistory = localStorage.getItem('verdure_purchase_history');
    if (savedHistory) setPurchaseHistory(JSON.parse(savedHistory));
  }, []);

  const signUp = (name, email, password) => {
    const users = seedUsers();
    if (users.some((u) => u.email === email)) {
      return { ok: false, error: 'این ایمیل قبلاً ثبت شده.' };
    }
    const next = [...users, { name, email, password }];
    localStorage.setItem(USERS_KEY, JSON.stringify(next));
    const session = { email, name };
    setUser(session);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return { ok: true };
  };

  const signIn = (email, password) => {
    const users = seedUsers();
    const match = users.find((u) => u.email === email && u.password === password);
    if (!match) return { ok: false, error: 'ایمیل یا رمز عبور اشتباه است.' };
    const session = { email: match.email, name: match.name };
    setUser(session);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return { ok: true };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const recordPurchase = (items) => {
    const next = [...purchaseHistory, ...items];
    setPurchaseHistory(next);
    localStorage.setItem('verdure_purchase_history', JSON.stringify(next));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, purchaseHistory, recordPurchase }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
