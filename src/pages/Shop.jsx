import { useState, useEffect } from 'react';
import FadeIn from '../components/animations/FadeIn';
import StaggerContainer from '../components/animations/StaggerContainer';
import ProductCard from '../components/ui/ProductCard';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';

import { PRODUCTS } from '../data/products';
import shopHeroImg from '../assets/shop_hero.png';
import './Shop.css';

export default function Shop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium data fetch delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="shop-page">
      <FadeIn className="shop-header">
        <div className="shop-hero-image-wrapper">
          <img src={shopHeroImg} alt="Shop Collection" />
          <div className="shop-hero-text-overlay">
            <h1 className="shop-title">The Collection</h1>
            <p className="shop-desc">Discover our full range of masterfully crafted pieces.</p>
          </div>
        </div>
      </FadeIn>
      <div className="container">

        <div className="shop-filters desktop-only">
          <button className="active">All</button>
          <button>Rings</button>
          <button>Necklaces</button>
          <button>Bracelets</button>
          <button>Earrings</button>
        </div>

        {loading ? (
          <div className="shop-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} style={{ aspectRatio: '4/5' }}>
                <LoadingSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="shop-grid">
            {PRODUCTS.map((p, index) => (
              <FadeIn 
                key={p.id} 
                className={`shop-grid-item item-${index}`}
                slide
              >
                <ProductCard product={p} />
              </FadeIn>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}
