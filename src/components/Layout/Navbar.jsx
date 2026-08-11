import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, Trash2, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../ui/Button';
import Drawer from '../ui/Drawer';
import SearchOverlay from '../ui/SearchOverlay';
import EmptyState from '../ui/EmptyState';

import ringImg from '../../assets/ring.png';
import braceletImg from '../../assets/bracelet.png';

import MobileBottomNav from './MobileBottomNav';
import './MobileBottomNav.css';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCartOpen(false);
    setWishlistOpen(false);
    setSearchOpen(false);
  }, [location]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          
          {/* Desktop Left Nav */}
          <nav className="navbar-left desktop-only">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/collection" className="nav-link">Collection</Link>
            <Link to="/journal" className="nav-link">Journal</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
          
          {/* Centered Logo */}
          <div className="navbar-center mobile-center-logo">
            <Link to="/" className="brand-logo">AURA</Link>
          </div>

          {/* Right Nav (Desktop Only) */}
          <div className="navbar-right desktop-only">
            <Button variant="icon" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={20} strokeWidth={1.5} />
            </Button>
            <Button variant="icon" aria-label="Wishlist" onClick={() => setWishlistOpen(true)}>
              <Heart size={20} strokeWidth={1.5} />
            </Button>
            <Button variant="icon" aria-label="Cart" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={20} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav 
        onSearchClick={() => setSearchOpen(true)}
        onWishlistClick={() => setWishlistOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />



      {/* Cart Drawer */}
      <Drawer isOpen={cartOpen} onClose={() => setCartOpen(false)} title="Shopping Bag">
        <div className="drawer-cart-items">
          <div className="drawer-item">
            <Link to="/product/2" className="drawer-item-img">
              <img src={braceletImg} alt="Bracelet" />
            </Link>
            <div className="drawer-item-details">
              <div className="drawer-item-header">
                <h3 className="drawer-item-name"><Link to="/product/2">Ethereal Chain Bracelet</Link></h3>
                <Button variant="icon" className="remove-btn" aria-label="Remove item"><Trash2 size={16} strokeWidth={1.5} /></Button>
              </div>
              <p className="drawer-item-variant">18k Solid Gold</p>
              
              <div className="drawer-item-actions">
                <div className="quantity-selector small">
                  <button aria-label="Decrease quantity"><Minus size={14} /></button>
                  <span>1</span>
                  <button aria-label="Increase quantity"><Plus size={14} /></button>
                </div>
                <p className="price">$890</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="drawer-footer">
          <div className="summary-row total">
            <span>Total</span>
            <span className="price">$890</span>
          </div>
          <Link to="/checkout" style={{textDecoration: 'none'}}>
            <Button variant="primary" style={{width: '100%'}}>Checkout</Button>
          </Link>
        </div>
      </Drawer>

      {/* Wishlist Drawer */}
      <Drawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} title="Wishlist">
        <div className="drawer-empty-wrapper" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <EmptyState 
            icon={Heart}
            title="A curated collection"
            description="Your wishlist awaits. Save your favorite pieces to revisit them later."
            actionText="Discover Pieces"
            onAction={() => { setWishlistOpen(false); /* route to shop */ }}
          />
        </div>
      </Drawer>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
