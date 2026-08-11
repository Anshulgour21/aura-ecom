import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import './SearchOverlay.css';

export default function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const slideAnim = isMobile ? { y: '100%' } : { y: '-20px' };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="ui-search-portal">
          <motion.div 
            className="ui-search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className={`ui-search-content ${isMobile ? 'mobile-search' : ''}`}
            initial={{ opacity: 0, ...slideAnim }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, ...slideAnim }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container">
              <div className="ui-search-header">
                <button className="icon-button" onClick={onClose} aria-label="Close search">
                  <X size={28} strokeWidth={1} />
                </button>
              </div>
              <div className="ui-search-input-wrapper">
                <SearchIcon size={32} strokeWidth={1} className="search-icon" />
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="ui-search-input"
                />
              </div>
              <div className="ui-search-suggestions">
                <div className="suggestion-group">
                  <h3>Trending</h3>
                  <ul>
                    <li><button>Solitaire Rings</button></li>
                    <li><button>Chain Bracelets</button></li>
                    <li><button>Diamond Necklaces</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
