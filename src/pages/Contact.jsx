import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import contactEditorialImage from '../assets/contact_editorial.png';
import './Contact.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="contact-editorial-page page-section">
      <div className="contact-editorial-container">
        
        {/* Left Column: Brand Experience */}
        <motion.div 
          className="contact-brand-column"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="contact-intro">
            <span className="eyebrow">CONTACT AURA</span>
            <h1 className="editorial-heading">Let's create something timeless.</h1>
            <p className="editorial-description">
              Whether you're looking for a signature piece, a bespoke creation, or assistance with your collection, our team is here to help.
            </p>
          </div>

          <div className="contact-image-wrapper">
            <img src={contactEditorialImage} alt="AURA Jewellery Editorial" className="contact-editorial-image" />
          </div>

          <div className="contact-details-editorial">
            <div className="detail-block">
              <h3>CLIENT SERVICES</h3>
              <a href="mailto:contact@aurajewelry.com" className="editorial-link">contact@aurajewelry.com</a>
            </div>
            
            <div className="detail-block">
              <h3>PHONE</h3>
              <p>+1 (800) 123-4567</p>
            </div>

            <div className="detail-block">
              <h3>STUDIO</h3>
              <p>123 Artisan Way, New York</p>
            </div>

            <div className="detail-block hours">
              <p>Mon — Fri &middot; 10:00 — 18:00 EST</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          className="contact-form-column"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="form-header-editorial">
            <h2>SEND AN INQUIRY</h2>
            <p>We'd love to hear from you.</p>
          </div>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                className="editorial-form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="input-group-editorial">
                  <label>NAME</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                
                <div className="input-group-editorial">
                  <label>EMAIL</label>
                  <input type="email" placeholder="Your email address" required />
                </div>
                
                <div className="input-group-editorial">
                  <label>PHONE</label>
                  <input type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="input-group-editorial">
                  <label>SUBJECT</label>
                  <div className="editorial-select-wrapper">
                    <select required defaultValue="">
                      <option value="" disabled>What can we help you with?</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Bespoke Jewellery">Bespoke Jewellery</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Aftercare">Aftercare</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="input-group-editorial">
                  <label>MESSAGE</label>
                  <textarea placeholder="Tell us how we can assist..." rows="4" required></textarea>
                </div>
                
                <button type="submit" className="editorial-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'} <ArrowRight size={16} className="submit-arrow" />
                </button>

                <p className="trust-indicator">Typically replies within 24 hours</p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="editorial-success-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="editorial-success-content">
                  <h3>Thank you. Your inquiry has been received.</h3>
                  <p>Our team will get back to you shortly.</p>
                  
                  <button type="button" className="editorial-reset-btn" onClick={() => setIsSubmitted(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}
