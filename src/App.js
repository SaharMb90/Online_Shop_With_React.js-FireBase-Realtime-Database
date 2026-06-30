import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GrowthLine from './components/GrowthLine';
import Home from './pages/Home';
import Trolley from './pages/Trolley';
import Contact from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProfileInfo from './pages/ProfileInfo';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  const [trolley, setTrolley] = useState([]);

  const addToTrolley = (product) => {
    setTrolley((prev) => [...prev, product]);
  };

  const completePurchase = () => {
    setTrolley([]);
  };

  return (
    <AuthProvider>
      <div className="App">
        <GrowthLine />
        <Header basketCount={trolley.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home addToTrolley={addToTrolley} />} />
            <Route path="/trolley" element={<Trolley trolley={trolley} completePurchase={completePurchase} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
