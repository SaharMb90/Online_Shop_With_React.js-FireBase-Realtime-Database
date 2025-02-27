
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trolley from './pages/Trolley'; 
import Contact from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProfileInfo from './pages/ProfileInfo'; // Import ProfileInfo component
import { getAuth, signOut } from 'firebase/auth';
import './App.css';
import Snowflakes from './pages/Snowflakes';

function App() {
  const [trolley, setTrolley] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const navigate = useNavigate();

  const addToTrolley = (product) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      setTrolley((prevTrolley) => [...prevTrolley, product]);
    }
  };

  const completePurchase = () => {
    if (trolley.length > 0) {
      setPurchaseHistory((prevHistory) => [...prevHistory, ...trolley]);
      setTrolley([]); // Clear the trolley after purchase
      alert("Purchase complete!"); // Add an alert or navigation to a confirmation page
    }
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setUserEmail('');
        setUserPassword('');
        navigate('/login');
      })
      .catch((error) => console.error('Sign out error', error));
  };

  return (
    <div className="App">
      
      <Header 
        isAuthenticated={isAuthenticated} 
        userEmail={userEmail} 
        handleSignOut={handleSignOut} 
      />
      <main>
      <Snowflakes/>
        <Routes>
          <Route path="/" element={<Home addToTrolley={addToTrolley} />} />
          <Route path="/trolley" element={<Trolley trolley={trolley} completePurchase={completePurchase} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/login" 
            element={
              <Login 
                setIsAuthenticated={setIsAuthenticated} 
                setUserEmail={setUserEmail} 
                setUserPassword={setUserPassword} 
              />
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProfileInfo 
                userEmail={userEmail} 
                userPassword={userPassword} 
                purchaseHistory={purchaseHistory} 
              />
            } 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}
export default App;
