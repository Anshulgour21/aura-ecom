import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page container page-section">
      <header className="contact-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-title"
        >
          Contact Us
        </motion.h1>
      </header>

      <motion.div 
        className="contact-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="contact-info">
          <h2>Client Services</h2>
          <p>Our advisors are available to assist you with inquiries, styling advice, and bespoke orders.</p>
          
          <div className="info-block">
            <h3>Email</h3>
            <p>concierge@aurajewellery.com</p>
          </div>
          
          <div className="info-block">
            <h3>Phone</h3>
            <p>+33 1 40 20 50 50</p>
            <p className="sub-text">Available Monday to Friday, 9am - 6pm CET</p>
          </div>

          <div className="info-block">
            <h3>Paris Boutique</h3>
            <p>15 Place Vendôme<br/>75001 Paris, France</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
