import FadeIn from '../components/animations/FadeIn';
import Parallax from '../components/animations/Parallax';
import Reveal from '../components/animations/Reveal';

import profileImg from '../assets/profile.png';
import lookbookImg from '../assets/lookbook.png';

import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        
        <div className="about-hero">
          <FadeIn slide blur className="about-hero-text">
            <h1>Defining <br/> Modern <br/> Heirlooms</h1>
          </FadeIn>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <Parallax offset={30} className="about-img-large">
              <Reveal>
                <img src={profileImg} alt="Atelier" />
              </Reveal>
            </Parallax>
            
            <FadeIn slide className="about-text-block">
              <p className="lead">Founded in 2026, Aura was born from a desire to strip away the excess of traditional luxury and focus purely on form, light, and materiality.</p>
              <p>Every piece is conceptualized in our Parisian studio and handcrafted by master artisans. We believe that true luxury is quiet—it doesn't shout, it simply exists perfectly.</p>
            </FadeIn>
          </div>

          <div className="about-grid reverse">
            <FadeIn slide className="about-text-block">
              <h2>Sustainable by Design</h2>
              <p>We use exclusively recycled 18k solid gold and lab-grown diamonds of the highest clarity. Our commitment to sustainability isn't an afterthought; it is the foundation of our entire supply chain.</p>
            </FadeIn>
            
            <Parallax offset={-20} className="about-img-small">
              <img src={lookbookImg} alt="Craftsmanship" />
            </Parallax>
          </div>
        </div>

      </div>
    </div>
  );
}
