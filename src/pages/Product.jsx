import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

import Button from '../components/ui/Button';
import SwipeGallery from '../components/ui/SwipeGallery';
import StickyActionBar from '../components/ui/StickyActionBar';
import FadeIn from '../components/animations/FadeIn';

import ringImg from '../assets/ring.png';
import necklaceImg from '../assets/necklace.png';

import './Product.css';

export default function Product() {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const productImages = [ringImg, necklaceImg, ringImg];

  return (
    <div className="product-page">
      <div className="container product-container">
        {/* Gallery */}
        <div className="product-gallery">
          {isMobile ? (
            <SwipeGallery images={productImages} altText="Solitaire Ring" />
          ) : (
            <div className="desktop-gallery-grid">
              {productImages.map((src, i) => (
                <img key={i} src={src} alt={`Solitaire Ring ${i + 1}`} />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="product-details">
          <div className="product-details-sticky">
            <FadeIn slide>
              <h1 className="product-title">Solitaire Minimalist Ring</h1>
              <p className="product-price">$1,250</p>
              
              <div className="product-description">
                <p>A masterclass in restraint. The Solitaire Minimalist Ring features a brilliant-cut diamond suspended elegantly on an ultra-thin 18k solid gold band.</p>
              </div>

              <div className="product-options">
                <div className="option-group">
                  <label>Material</label>
                  <div className="material-selector">
                    <button className="active">18k Yellow Gold</button>
                    <button>18k White Gold</button>
                    <button>Platinum</button>
                  </div>
                </div>
                
                <div className="option-group">
                  <div className="label-with-link">
                    <label>Size</label>
                    <button className="link-btn">Size Guide</button>
                  </div>
                  <select className="ui-select" defaultValue="">
                    <option value="" disabled>Select a size</option>
                    <option value="5">US 5</option>
                    <option value="6">US 6</option>
                    <option value="7">US 7</option>
                  </select>
                </div>
              </div>

              <div className="product-actions desktop-only">
                <Button variant="primary" style={{ width: '100%' }}>Add to Cart</Button>
                <Button variant="secondary" style={{ width: '100%', marginTop: '8px' }}>
                  <Heart size={18} /> Add to Wishlist
                </Button>
              </div>

              <div className="product-accordion">
                <details>
                  <summary>Details & Dimensions <ArrowRight size={16}/></summary>
                  <p>Band width: 1.2mm<br/>Diamond: 0.5ct VS1<br/>Handcrafted in Paris</p>
                </details>
                <details>
                  <summary>Shipping & Returns <ArrowRight size={16}/></summary>
                  <p>Complimentary express shipping on all orders. 30-day returns.</p>
                </details>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <StickyActionBar price="$1,250" onAddToCart={() => console.log('Added to cart')} />
    </div>
  );
}
