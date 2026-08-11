import './TestimonialCard.css';

export default function TestimonialCard({ quote, author, location, className = '' }) {
  return (
    <div className={`ui-testimonial-card ${className}`}>
      <p className="story-quote">"{quote}"</p>
      <span className="story-author">— {author}{location ? `, ${location}` : ''}</span>
    </div>
  );
}
