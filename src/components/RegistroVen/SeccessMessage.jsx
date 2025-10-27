import React, { useEffect } from 'react';

function SuccessMessage({ message, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
    if (typeof onDismiss === 'function') {
  onDismiss();}  
    }, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      background: '#4CAF50',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1003,
      animation: 'slideIn 0.3s ease',
    }}>
      {message}
    </div>
  );
}

export default SuccessMessage;
