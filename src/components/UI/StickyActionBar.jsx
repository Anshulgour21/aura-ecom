import Button from './Button';
import './StickyActionBar.css';

export default function StickyActionBar({ price, onAddToCart }) {
  return (
    <div className="sticky-action-bar">
      <div className="sticky-action-content">
        <div className="sticky-price">{price}</div>
        <Button variant="primary" onClick={onAddToCart} className="sticky-btn">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
