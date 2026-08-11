import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import './Cart.css';

import braceletImg from '../assets/bracelet.png';

export default function Cart() {
  return (
    <div className="cart-page container page-section">
      <header className="cart-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-title"
        >
          Shopping Bag
        </motion.h1>
      </header>

      <motion.div 
        className="cart-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="cart-items">
          <div className="cart-item">
            <Link to="/product/2" className="cart-item-img">
              <img src={braceletImg} alt="Bracelet" />
            </Link>
            <div className="cart-item-details">
              <div className="cart-item-header">
                <h3 className="cart-item-name"><Link to="/product/2">Ethereal Chain Bracelet</Link></h3>
                <button className="icon-button remove-btn" aria-label="Remove item"><Trash2 size={16} strokeWidth={1.5} /></button>
              </div>
              <p className="cart-item-variant">18k Solid Gold</p>
              
              <div className="cart-item-actions">
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

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$890</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="price">$890</span>
          </div>
          <Link to="/checkout" className="btn-primary checkout-btn">Proceed to Checkout</Link>
          <p className="secure-checkout-text">Secure Checkout. 30-Day Returns.</p>
        </div>
      </motion.div>
    </div>
  );
}
