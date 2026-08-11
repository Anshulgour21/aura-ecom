const Badge = ({ children, variant = 'primary', className = '' }) => {
  let baseClass = 'ui-badge';
  
  if (variant === 'outline') baseClass += ' ui-badge-outline';
  else if (variant === 'accent') baseClass += ' ui-badge-accent';

  return (
    <span className={`${baseClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
