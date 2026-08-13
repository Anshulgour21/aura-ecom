import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../data/products';
import './SearchOverlay.css';

export default function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSearchQuery(''); // Reset search on open
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const TRENDING_SEARCHES = [
    "Solitaire Rings",
    "Chain Bracelets",
    "Diamond Necklaces",
    "Gold Earrings",
    "Tennis Bracelets"
  ];

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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="search-overlay-container">
              <div className="ui-search-header">
                <button className="icon-button" onClick={onClose} aria-label="Close search">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="ui-search-input-wrapper">
                <SearchIcon size={20} strokeWidth={1.5} className="search-icon" />
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Search jewellery, collections..." 
                  className="ui-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="ui-search-results-area">
                {!searchQuery.trim() ? (
                  <div className="ui-search-trending">
                    <h3>Trending Searches</h3>
                    <div className="trending-grid">
                      {TRENDING_SEARCHES.map(term => (
                        <button 
                          key={term} 
                          className="trending-tag"
                          onClick={() => setSearchQuery(term)}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="ui-search-results">
                    {filteredProducts.length > 0 ? (
                      <>
                        <h3 className="results-heading">Results for "{searchQuery}"</h3>
                        <div className="results-grid">
                          {filteredProducts.map(product => (
                            <div key={product.id} onClick={onClose}>
                              <ProductCard product={product} />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="no-results">
                        <p>No results found for "{searchQuery}".</p>
                        <button className="trending-tag" onClick={() => setSearchQuery('')}>Clear Search</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
