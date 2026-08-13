import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import EmptyState from '../components/ui/EmptyState';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity } = useStore();

  const getNumericPrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.-]/g, ''));
  };

  const subtotal = cart.reduce((total, item) => total + (getNumericPrice(item.price) * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page container page-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EmptyState 
          icon={ShoppingBag}
          title="Your bag is empty"
          description="Looks like you haven't added anything to your bag yet."
          actionText="Continue Shopping"
          onAction={() => window.location.href = '/shop'}
        />
      </div>
    );
  }

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
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`} className="cart-item-img">
                <img src={item.img1} alt={item.name} />
              </Link>
              <div className="cart-item-details">
                <div className="cart-item-header">
                  <h3 className="cart-item-name"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                  <button className="icon-button remove-btn" aria-label="Remove item" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>
                </div>
                <p className="cart-item-variant">Default</p>
                
                <div className="cart-item-actions">
                  <div className="quantity-selector small">
                    <button aria-label="Decrease quantity" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button aria-label="Increase quantity" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="price">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn-primary checkout-btn">Proceed to Checkout</Link>
          <p className="secure-checkout-text">Secure Checkout. 30-Day Returns.</p>
        </div>
      </motion.div>
    </div>
  );
}
