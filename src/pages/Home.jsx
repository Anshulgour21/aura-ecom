import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import FadeIn from '../components/animations/FadeIn';
import Reveal from '../components/animations/Reveal';
import StaggerContainer from '../components/animations/StaggerContainer';

import './Home.css';

import heroImg from '../assets/hero.png';
import ringImg from '../assets/ring.png';
import braceletImg from '../assets/bracelet.png';
import necklaceImg from '../assets/necklace.png';
import lookbookImg from '../assets/lookbook.png';

const FAQS = [
  { question: "What materials do you use?", answer: "We use only solid 14k and 18k gold, alongside ethically sourced diamonds and precious gemstones." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide. Delivery times and shipping costs vary by region." },
  { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase for unworn items in their original packaging." },
  { question: "Can I customize a piece?", answer: "Absolutely. Our bespoke service allows you to create a unique piece tailored to your preferences." }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="home-page">
      
      {/* 1. Full Bleed Hero */}
      <section className="reference-hero">
        <div className="reference-hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        
        <div className="container reference-hero-content">
          <div className="hero-text-wrapper">
            <FadeIn slide blur>
              <h1 className="hero-title">Quiet<br/>Luxury.</h1>
              <div className="hero-divider"></div>
              <p className="hero-desc">TIMELESS DESIGNS, CRAFTED TO BE CHERISHED<br/>EVERY DAY.</p>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <button className="reference-btn">
                  DISCOVER COLLECTION <ArrowRight size={14} strokeWidth={1} style={{marginLeft: '8px'}} />
                </button>
              </Link>
            </FadeIn>
          </div>
          
          <div className="hero-pagination desktop-only">
            <span className="page-num active">01</span>
            <div className="page-line"></div>
            <span className="page-num">04</span>
          </div>
        </div>
      </section>

      {/* 2. Featured Collections Grid */}
      <section className="reference-collections container">
        <div className="reference-collections-header">
          <FadeIn>
            <h2>Featured Collections</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/collection" className="view-all-link">
              VIEW ALL <ArrowRight size={14} strokeWidth={1} />
            </Link>
          </FadeIn>
        </div>
        
        <StaggerContainer className="reference-collections-grid">
          <motion.div className="ref-collection-card" variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 }}}>
            <img src={necklaceImg} alt="Necklaces" />
            <div className="ref-card-overlay">
              <h3>NECKLACES</h3>
            </div>
          </motion.div>
          
          <motion.div className="ref-collection-card" variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 }}}>
            <img src={lookbookImg} alt="Earrings" />
            <div className="ref-card-overlay">
              <h3>EARRINGS</h3>
            </div>
          </motion.div>

          <motion.div className="ref-collection-card" variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 }}}>
            <img src={ringImg} alt="Rings" />
            <div className="ref-card-overlay">
              <h3>RINGS</h3>
            </div>
          </motion.div>

          <motion.div className="ref-collection-card" variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 }}}>
            <img src={braceletImg} alt="Bracelets" />
            <div className="ref-card-overlay">
              <h3>BRACELETS</h3>
            </div>
          </motion.div>
        </StaggerContainer>
      </section>

      {/* 3. FAQ Section */}
      <section className="home-faq-section container">
        <FadeIn>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </FadeIn>
        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="home-contact-section container">
        <FadeIn>
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p>We are here to assist you with any inquiries regarding our collections, bespoke services, or aftercare.</p>
              <div className="contact-details">
                <p><strong>Email:</strong> contact@aurajewelry.com</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Studio:</strong> 123 Artisan Way, New York</p>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <Input label="Name" placeholder="Your full name" required />
                <Input label="Email" type="email" placeholder="Your email address" required />
                <Input label="Message" type="textarea" placeholder="How can we help?" rows={4} required />
                <Button variant="primary" type="submit" style={{ width: '100%', marginTop: 'var(--spacing-4)' }}>Send Message</Button>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
