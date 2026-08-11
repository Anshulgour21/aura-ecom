import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  className = '', 
  ...props 
}, ref) => {
  const inputClass = `ui-input ${error ? 'ui-input-error' : ''}`;

  if (type === 'textarea') {
    return (
      <div className={`ui-input-group ${className}`}>
        {label && <label className="ui-label">{label}</label>}
        <textarea ref={ref} className={inputClass} {...props} />
        {error && <span className="ui-error-text">{error}</span>}
      </div>
    );
  }

  return (
    <div className={`ui-input-group ${className}`}>
      {label && <label className="ui-label">{label}</label>}
      <input ref={ref} type={type} className={inputClass} {...props} />
      {error && <span className="ui-error-text">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
