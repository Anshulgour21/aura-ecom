import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Drawer.css';

export default function Drawer({ isOpen, onClose, title, children, side = 'right' }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // On mobile, always slide up from bottom
  const initialAnim = isMobile ? { y: '100%' } : { x: side === 'right' ? '100%' : '-100%' };
  const animateAnim = isMobile ? { y: 0 } : { x: 0 };
  const exitAnim = isMobile ? { y: '100%' } : { x: side === 'right' ? '100%' : '-100%' };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="ui-drawer-portal">
          <motion.div 
            className="ui-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className={`ui-drawer-content side-${side} ${isMobile ? 'mobile-drawer' : ''}`}
            initial={initialAnim}
            animate={animateAnim}
            exit={exitAnim}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ui-drawer-header">
              <h2 className="ui-drawer-title">{title}</h2>
              <button className="icon-button" onClick={onClose} aria-label="Close drawer">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="ui-drawer-body">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
