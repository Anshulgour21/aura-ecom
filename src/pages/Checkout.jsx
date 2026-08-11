import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="checkout-page container page-section">
      <header className="checkout-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-title"
        >
          Checkout
        </motion.h1>
      </header>

      <motion.div 
        className="checkout-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="checkout-form-container">
          <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
            <section className="form-section">
              <h2>Contact Information</h2>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
            </section>
            
            <section className="form-section">
              <h2>Shipping Address</h2>
              <div className="input-row">
                <div className="input-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="input-group">
                <input type="text" placeholder="Address" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Apartment, suite, etc. (optional)" />
              </div>
              <div className="input-row">
                <div className="input-group">
                  <input type="text" placeholder="City" required />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Postal Code" required />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2>Payment</h2>
              <div className="payment-box">
                <p>This is a demo store. No actual payment will be processed.</p>
              </div>
            </section>

            <button type="submit" className="btn-primary complete-order-btn">Complete Order</button>
          </form>
        </div>

        <div className="checkout-summary">
           <h2>Order Summary</h2>
           <div className="summary-item">
             <span className="summary-item-name">1x Ethereal Chain Bracelet</span>
             <span className="price">$890</span>
           </div>
           <div className="summary-divider"></div>
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
        </div>
      </motion.div>
    </div>
  );
}
