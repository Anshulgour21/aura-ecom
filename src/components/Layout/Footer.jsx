import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="brand-logo">AURA</h2>
          <p className="footer-tagline">Timeless elegance, crafted for the modern editorial.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <Link to="/shop">Shop All</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/editorial">Editorial</Link>
            <Link to="/about">Our Story</Link>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/shipping">Shipping & Returns</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/care">Jewellery Care</Link>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Aura Jewellery. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
