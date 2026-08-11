import './LoadingSkeleton.css';

export default function LoadingSkeleton({ className = '', width, height, circle }) {
  const style = {
    width: width || '100%',
    height: height || '100%',
    borderRadius: circle ? '50%' : 'var(--radius-lg)'
  };

  return <div className={`ui-skeleton ${className}`} style={style} />;
}
