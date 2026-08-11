import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  filled,
  ...props 
}, ref) => {
  let baseClass = 'ui-btn';
  
  if (variant === 'primary') baseClass += ' ui-btn-primary';
  else if (variant === 'secondary') baseClass += ' ui-btn-secondary';
  else if (variant === 'ghost') baseClass += ' ui-btn-ghost';
  else if (variant === 'icon') {
    baseClass += ' ui-btn-icon';
    if (filled) baseClass += ' filled';
  }

  return (
    <motion.button 
      ref={ref} 
      className={`${baseClass} ${className}`} 
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;
