import { Link } from 'react-router-dom';
import { Heart, Plus } from 'lucide-react';
import Button from './Button';
import './ProductCard.css';

export default function ProductCard({ 
  id, 
  name, 
  price, 
  primaryImage, 
  secondaryImage,
  className = ''
}) {
  return (
    <div className={`ui-product-card ${className}`}>
      <div className="product-image-wrapper">
        <img src={primaryImage} alt={`${name} Primary`} className="img-primary" />
        {secondaryImage && (
          <img src={secondaryImage} alt={`${name} Secondary`} className="img-secondary" />
        )}
        <div className="product-actions-overlay">
          <Button variant="icon" filled aria-label="Add to Wishlist"><Heart size={18} /></Button>
          <Button variant="icon" filled aria-label="Quick Add"><Plus size={18} /></Button>
        </div>
        <Link to={`/product/${id}`} className="product-link-overlay" aria-label={`View ${name}`} />
      </div>
      <div className="product-info-minimal">
        <h3><Link to={`/product/${id}`}>{name}</Link></h3>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
