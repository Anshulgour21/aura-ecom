import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import './Wishlist.css';

import ringImg from '../assets/ring.png';

export default function Wishlist() {
  return (
    <div className="wishlist-page container page-section">
      <header className="wishlist-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-title"
        >
          Wishlist
        </motion.h1>
      </header>

      <motion.div 
        className="wishlist-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Wishlist Item */}
        <div className="wishlist-item">
          <Link to="/product/1" className="wishlist-item-img">
            <img src={ringImg} alt="Ring" />
          </Link>
          <div className="wishlist-item-info">
            <h3 className="wishlist-item-name"><Link to="/product/1">Solitaire Minimalist Ring</Link></h3>
            <p className="price">$1,250</p>
          </div>
          <div className="wishlist-item-actions">
            <button className="btn-secondary add-to-bag-btn">Move to Bag</button>
            <button className="icon-button remove-btn" aria-label="Remove item"><Trash2 size={20} strokeWidth={1.5} /></button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
