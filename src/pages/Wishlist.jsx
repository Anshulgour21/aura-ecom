import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import EmptyState from '../components/ui/EmptyState';
import './Wishlist.css';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const handleMoveToBag = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page container page-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EmptyState 
          icon={Heart}
          title="Your wishlist is empty"
          description="Save your favorite pieces here to easily find them later."
          actionText="Discover Pieces"
          onAction={() => window.location.href = '/shop'}
        />
      </div>
    );
  }

  return (
    <div className="wishlist-page container page-section">
      <header className="wishlist-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-title"
        >
          Wishlist
        </motion.h1>
      </header>

      <motion.div 
        className="wishlist-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {wishlist.map(item => (
          <div className="wishlist-item" key={item.id}>
            <Link to={`/product/${item.id}`} className="wishlist-item-img">
              <img src={item.img1} alt={item.name} />
            </Link>
            <div className="wishlist-item-info">
              <h3 className="wishlist-item-name"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
              <p className="price">{item.price}</p>
            </div>
            <div className="wishlist-item-actions">
              <button className="btn-secondary add-to-bag-btn" onClick={() => handleMoveToBag(item)}>Move to Bag</button>
              <button className="icon-button remove-btn" aria-label="Remove item" onClick={() => removeFromWishlist(item.id)}>
                <Trash2 size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
