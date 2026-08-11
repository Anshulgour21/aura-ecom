import { motion } from 'framer-motion';
import Button from './Button';
import './EmptyState.css';

export default function EmptyState({ icon: Icon, title, description, actionText, onAction }) {
  return (
    <motion.div 
      className="ui-empty-state"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {Icon && <div className="empty-state-icon"><Icon strokeWidth={1} size={48} /></div>}
      <h3 className="empty-state-title">{title}</h3>
      {description && <p className="empty-state-desc">{description}</p>}
      {actionText && onAction && (
        <Button variant="secondary" onClick={onAction} className="empty-state-action">
          {actionText}
        </Button>
      )}
    </motion.div>
  );
}
