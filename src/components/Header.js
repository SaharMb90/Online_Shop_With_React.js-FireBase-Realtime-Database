import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaPhoneAlt, FaSignInAlt, FaBars } from 'react-icons/fa'; // Import icons
import './Header.css';

const Header = ({ isAuthenticated, userEmail, handleSignOut }) => {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility state
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  const handleMouseEnter = () => setShowDropdown(true); // Show dropdown on hover
  const handleMouseLeave = () => setShowDropdown(false); // Hide dropdown when mouse leaves

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu

  return (
    <div className='header-background'>
      <header className="header wave-header">
        <div className="logo">
          <Link to="/"></Link>
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/trolley">
            <FaShoppingCart /> Basket
          </Link>
          <Link to="/contact">
            <FaPhoneAlt /> Contact Us
          </Link>
          {isAuthenticated ? (
            <div 
              className="user-menu" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <span className="user-welcome">Hello, {userEmail}</span>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/profile">Profile Info</Link>
                  <Link to="/trolley">My Basket</Link>
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          )}
        </nav>

        {/* Menu icon for mobile view, only shows up at 430px or smaller */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>
    </div>
  );
};

export default Header;
