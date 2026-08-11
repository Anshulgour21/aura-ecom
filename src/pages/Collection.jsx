import { Link } from 'react-router-dom';
import FadeIn from '../components/animations/FadeIn';
import Reveal from '../components/animations/Reveal';
import Parallax from '../components/animations/Parallax';

import lookbookImg from '../assets/lookbook.png';
import ringImg from '../assets/ring.png';
import braceletImg from '../assets/bracelet.png';
import necklaceImg from '../assets/necklace.png';

import './Collection.css';

export default function Collection() {
  return (
    <div className="collection-page">
      <div className="container">
        
        {/* Editorial Header */}
        <div className="collection-hero">
          <FadeIn blur slide className="collection-hero-text">
            <span className="eyebrow">Autumn/Winter 2026</span>
            <h1 className="collection-title">The <br/> Architecture <br/> of Light</h1>
            <p className="collection-desc">A study in transparency and structure, inspired by modernist forms and raw materials.</p>
          </FadeIn>
          <Parallax offset={20} className="collection-hero-img">
            <Reveal>
              <img src={lookbookImg} alt="Collection Editorial" />
            </Reveal>
          </Parallax>
        </div>

        {/* Editorial Layout */}
        <div className="editorial-section">
          <div className="editorial-grid">
            <FadeIn slide delay={0.2} className="editorial-block text-block">
              <h2>01.</h2>
              <h3>Structured Elegance</h3>
              <p>We approach each piece not just as adornment, but as a structural challenge. The way light interacts with the negative space is just as important as the gold itself.</p>
              <Link to="/shop" className="editorial-link">Shop the look</Link>
            </FadeIn>
            <FadeIn slide className="editorial-block img-block large">
              <img src={necklaceImg} alt="Necklace" />
            </FadeIn>
          </div>

          <div className="editorial-grid reverse">
            <FadeIn slide delay={0.2} className="editorial-block text-block">
              <h2>02.</h2>
              <h3>Raw Materials</h3>
              <p>Sourcing only the highest grade, ethically mined stones. Uncompromising quality ensures these pieces outlast trends and lifetimes.</p>
              <Link to="/shop" className="editorial-link">Shop the look</Link>
            </FadeIn>
            <FadeIn slide className="editorial-block img-block small">
              <img src={braceletImg} alt="Bracelet" />
            </FadeIn>
            <FadeIn slide delay={0.1} className="editorial-block img-block medium">
              <img src={ringImg} alt="Ring" />
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
