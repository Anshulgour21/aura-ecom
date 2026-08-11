import { useState, useRef, useEffect } from 'react';
import './SwipeGallery.css';

export default function SwipeGallery({ images, altText = "Product image" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
        setActiveIndex(index);
      }
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="swipe-gallery-container">
      <div className="swipe-gallery-track" ref={scrollRef}>
        {images.map((src, i) => (
          <div key={i} className="swipe-gallery-slide">
            <img src={src} alt={`${altText} ${i + 1}`} />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <div className="swipe-gallery-pagination">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`pagination-dot ${i === activeIndex ? 'active' : ''}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
