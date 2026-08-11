import { useState, useEffect } from 'react';
import FadeIn from '../components/animations/FadeIn';
import StaggerContainer from '../components/animations/StaggerContainer';
import ProductCard from '../components/ui/ProductCard';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';

import ringImg from '../assets/ring.png';
import braceletImg from '../assets/bracelet.png';
import necklaceImg from '../assets/necklace.png';
import lookbookImg from '../assets/lookbook.png';

import './Shop.css';

const DUMMY_PRODUCTS = [
  { id: 1, name: "Solitaire Minimalist Ring", price: "$1,250", img1: ringImg, img2: necklaceImg },
  { id: 2, name: "Ethereal Chain Bracelet", price: "$890", img1: braceletImg, img2: lookbookImg },
  { id: 3, name: "Lumière Diamond Necklace", price: "$2,100", img1: necklaceImg, img2: ringImg },
  { id: 4, name: "Classic Gold Hoops", price: "$650", img1: lookbookImg, img2: braceletImg },
  { id: 5, name: "Pavé Diamond Ring", price: "$3,400", img1: ringImg, img2: lookbookImg },
  { id: 6, name: "Signature Link Necklace", price: "$1,850", img1: necklaceImg, img2: braceletImg },
];

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
      <div className="container">
        
        <FadeIn className="shop-header">
          <h1 className="shop-title">The Collection</h1>
          <p className="shop-desc">Discover our full range of masterfully crafted pieces.</p>
        </FadeIn>

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
            {DUMMY_PRODUCTS.map((p, index) => (
              <FadeIn 
                key={p.id} 
                className={`shop-grid-item item-${index}`}
                slide
              >
                <ProductCard 
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  primaryImage={p.img1}
                  secondaryImage={p.img2}
                />
              </FadeIn>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}
