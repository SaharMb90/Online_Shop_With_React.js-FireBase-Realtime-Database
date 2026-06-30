import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import './Footer.css';

const Footer = () => {
  const [ref, visible] = useReveal(0.1);

  return (
    <footer className={`gh-footer ${visible ? 'is-visible' : ''}`} ref={ref}>
      <svg className="gh-footer__roots" viewBox="0 0 1180 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="gh-footer__roots-path"
          d="M0,4 C150,4 120,60 280,55 C420,50 400,10 590,10 C780,10 760,70 920,60 C1060,52 1030,6 1180,6"
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.4"
        />
      </svg>

      <div className="gh-footer__inner section-wrap">
        <div className="gh-footer__col gh-footer__brand">
          <div className="gh-footer__mark">⌗ Verdure</div>
          <p className="gh-footer__tag">A glasshouse for plants that outlive trends.</p>
        </div>

        <div className="gh-footer__col">
          <h4>Shop</h4>
          <Link to="/">All plants</Link>
          <Link to="/trolley">Basket</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="gh-footer__col">
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/signup">Create account</Link>
        </div>

        <div className="gh-footer__col">
          <h4>Follow</h4>
          <div className="gh-footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="gh-footer__base section-wrap">
        <span>© {new Date().getFullYear()} Verdure — Sahar Mirzabaki</span>
        <span className="gh-footer__base-note">Grown, not manufactured.</span>
      </div>
    </footer>
  );
};

export default Footer;
