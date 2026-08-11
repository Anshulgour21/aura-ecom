import { NavLink } from 'react-router-dom';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import './MobileBottomNav.css';

export default function MobileBottomNav({ 
  onSearchClick, 
  onWishlistClick, 
  onCartClick 
}) {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={24} strokeWidth={1.5} />
        <span>Home</span>
      </NavLink>

      <button className="bottom-nav-item" onClick={onSearchClick}>
        <Search size={24} strokeWidth={1.5} />
        <span>Search</span>
      </button>

      <button className="bottom-nav-item" onClick={onWishlistClick}>
        <Heart size={24} strokeWidth={1.5} />
        <span>Wishlist</span>
      </button>

      <button className="bottom-nav-item" onClick={onCartClick}>
        <ShoppingBag size={24} strokeWidth={1.5} />
        <span>Cart</span>
      </button>

      <NavLink 
        to="/about" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <User size={24} strokeWidth={1.5} />
        <span>Menu</span>
      </NavLink>
    </nav>
  );
}
