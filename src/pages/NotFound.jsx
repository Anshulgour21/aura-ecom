import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <motion.div 
        className="not-found-content container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-desc">
          The page you are looking for has vanished into the ether. Perhaps it never existed, or perhaps it is merely hidden.
        </p>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Button variant="primary">Return Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
