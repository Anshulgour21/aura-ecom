import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, Trash2, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../ui/Button';
import Drawer from '../ui/Drawer';
import SearchOverlay from '../ui/SearchOverlay';
import EmptyState from '../ui/EmptyState';
import { useStore } from '../../context/StoreContext';

import MobileBottomNav from './MobileBottomNav';
import './MobileBottomNav.css';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { cart, wishlist, removeFromCart, updateCartQuantity, removeFromWishlist, addToCart } = useStore();

  const getNumericPrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.-]/g, ''));
  };

  const subtotal = cart.reduce((total, item) => total + (getNumericPrice(item.price) * item.quantity), 0);

  const handleMoveToBag = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

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

          <div className="navbar-right desktop-only">
            <Button variant="icon" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={20} strokeWidth={1.5} />
            </Button>
            <Button variant="icon" aria-label="Wishlist" onClick={() => setWishlistOpen(true)} style={{ position: 'relative' }}>
              <Heart size={20} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span style={{ position: 'absolute', top: '0px', right: '0px', background: 'black', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {wishlist.length}
                </span>
              )}
            </Button>
            <Button variant="icon" aria-label="Cart" onClick={() => setCartOpen(true)} style={{ position: 'relative' }}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span style={{ position: 'absolute', top: '0px', right: '0px', background: 'black', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cart.length}
                </span>
              )}
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
        {cart.length === 0 ? (
          <div className="drawer-empty-wrapper" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EmptyState 
              icon={ShoppingBag}
              title="Your bag is empty"
              description="Looks like you haven't added anything to your bag yet."
              actionText="Continue Shopping"
              onAction={() => { setCartOpen(false); window.location.href = '/shop'; }}
            />
          </div>
        ) : (
          <>
            <div className="drawer-cart-items">
              {cart.map(item => (
                <div className="drawer-item" key={item.id}>
                  <Link to={`/product/${item.id}`} className="drawer-item-img" onClick={() => setCartOpen(false)}>
                    <img src={item.img1} alt={item.name} />
                  </Link>
                  <div className="drawer-item-details">
                    <div className="drawer-item-header">
                      <h3 className="drawer-item-name"><Link to={`/product/${item.id}`} onClick={() => setCartOpen(false)}>{item.name}</Link></h3>
                      <Button variant="icon" className="remove-btn" aria-label="Remove item" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} strokeWidth={1.5} />
                      </Button>
                    </div>
                    <p className="drawer-item-variant">Default</p>
                    
                    <div className="drawer-item-actions">
                      <div className="quantity-selector small">
                        <button aria-label="Decrease quantity" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button aria-label="Increase quantity" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                      </div>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="drawer-footer">
              <div className="summary-row total">
                <span>Total</span>
                <span className="price">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <Link to="/checkout" style={{textDecoration: 'none'}} onClick={() => setCartOpen(false)}>
                <Button variant="primary" style={{width: '100%'}}>Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </Drawer>

      {/* Wishlist Drawer */}
      <Drawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} title="Wishlist">
        {wishlist.length === 0 ? (
          <div className="drawer-empty-wrapper" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EmptyState 
              icon={Heart}
              title="A curated collection"
              description="Your wishlist awaits. Save your favorite pieces to revisit them later."
              actionText="Discover Pieces"
              onAction={() => { setWishlistOpen(false); window.location.href = '/shop'; }}
            />
          </div>
        ) : (
          <div className="drawer-cart-items">
            {wishlist.map(item => (
              <div className="drawer-item" key={item.id}>
                <Link to={`/product/${item.id}`} className="drawer-item-img" onClick={() => setWishlistOpen(false)}>
                  <img src={item.img1} alt={item.name} />
                </Link>
                <div className="drawer-item-details">
                  <div className="drawer-item-header">
                    <h3 className="drawer-item-name"><Link to={`/product/${item.id}`} onClick={() => setWishlistOpen(false)}>{item.name}</Link></h3>
                    <Button variant="icon" className="remove-btn" aria-label="Remove item" onClick={() => removeFromWishlist(item.id)}>
                      <Trash2 size={16} strokeWidth={1.5} />
                    </Button>
                  </div>
                  <p className="price">{item.price}</p>
                  <Button variant="secondary" style={{width: '100%', marginTop: '8px'}} onClick={() => handleMoveToBag(item)}>
                    Move to Bag
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Drawer>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
