import FadeIn from '../components/animations/FadeIn';
import StaggerContainer from '../components/animations/StaggerContainer';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

import lookbookImg from '../assets/lookbook.png';
import ringImg from '../assets/ring.png';
import profileImg from '../assets/profile.png';
import braceletImg from '../assets/bracelet.png';

import './Journal.css';

const ARTICLES = [
  {
    id: 1,
    category: "Design",
    title: "The Architecture of a Solitaire",
    date: "Oct 12, 2026",
    img: ringImg,
    featured: true
  },
  {
    id: 2,
    category: "Process",
    title: "Sustainable Sourcing in Modern Times",
    date: "Sep 28, 2026",
    img: profileImg,
    featured: false
  },
  {
    id: 3,
    category: "Style",
    title: "The Art of Restraint in Layering",
    date: "Sep 15, 2026",
    img: lookbookImg,
    featured: false
  },
  {
    id: 4,
    category: "Culture",
    title: "Parisian Minimalism",
    date: "Aug 30, 2026",
    img: braceletImg,
    featured: false
  }
];

export default function Journal() {
  const featured = ARTICLES.find(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  return (
    <div className="journal-page">
      <div className="container">
        
        <FadeIn className="journal-header">
          <h1>The Journal</h1>
        </FadeIn>

        {/* Featured Article */}
        <div className="featured-article">
          <Reveal className="featured-img-wrapper">
            <img src={featured.img} alt={featured.title} />
          </Reveal>
          <FadeIn slide delay={0.3} className="featured-content">
            <span className="article-category">{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>A deep dive into the engineering and aesthetic choices behind our most iconic piece.</p>
            <Button variant="secondary">Read Article</Button>
          </FadeIn>
        </div>

        {/* Grid Articles */}
        <StaggerContainer className="articles-grid">
          {rest.map((article) => (
            <FadeIn key={article.id} className="article-card" slide>
              <div className="article-img-wrapper">
                <img src={article.img} alt={article.title} />
              </div>
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
            </FadeIn>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}
