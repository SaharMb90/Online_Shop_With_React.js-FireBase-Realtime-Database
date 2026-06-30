<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBasket, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = ({ basketCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`gh-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="gh-header__inner">
        <Link to="/" className="gh-header__mark">
          <span className="gh-header__mark-glyph">⌗</span>
          <span className="gh-header__mark-text">Verdure</span>
        </Link>

        <nav className={`gh-header__nav ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/trolley" onClick={() => setMenuOpen(false)}>Basket</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          {user ? (
            <div
              className="gh-header__user"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button type="button" className="gh-header__user-btn">{user.name || user.email}</button>
              {dropdown && (
                <div className="gh-header__dropdown">
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                  <button type="button" onClick={signOut}>Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
          )}
        </nav>

        <Link to="/trolley" className="gh-header__basket">
          <FaShoppingBasket />
          {basketCount > 0 && <span className="gh-header__basket-count">{basketCount}</span>}
        </Link>

        <button
          type="button"
          className="gh-header__toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
=======
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
>>>>>>> 880e70e4f7f59473f1e22df6cf7395221cb5662d
