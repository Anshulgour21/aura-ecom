import { Link } from 'react-router-dom';
import { Heart, Plus } from 'lucide-react';
import Button from './Button';
import { useStore } from '../../context/StoreContext';
import './ProductCard.css';

export default function ProductCard({ 
  product,
  className = ''
}) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className={`ui-product-card ${className}`}>
      <div className="product-image-wrapper">
        <img src={product.img1} alt={`${product.name} Primary`} className="img-primary" />
        {product.img2 && (
          <img src={product.img2} alt={`${product.name} Secondary`} className="img-secondary" />
        )}
        <div className="product-actions-overlay">
          <Button variant="icon" filled aria-label="Add to Wishlist" onClick={handleWishlist}>
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </Button>
          <Button variant="icon" filled aria-label="Quick Add" onClick={handleAddToCart}>
            <Plus size={18} />
          </Button>
        </div>
        <Link to={`/product/${product.id}`} className="product-link-overlay" aria-label={`View ${product.name}`} />
      </div>
      <div className="product-info-minimal">
        <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
}
