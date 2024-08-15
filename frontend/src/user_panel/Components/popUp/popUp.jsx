import React, { useState, useEffect } from 'react';
import './popUp.css';

const Popup = ({ isError, message, actionText, action, autoCloseTime}) => {
  const [isOpen, setIsOpen] = useState(true);

  // Reopen the popup whenever the message changes
  useEffect(() => {
    if (message) {
      setIsOpen(true);
    }
  }, [message]);

  useEffect(() => {
    if (autoCloseTime) {
      const timeoutId = setTimeout(() => {
        if (action) {
          action();
        }
        setIsOpen(false);
     
      }, autoCloseTime);

      return () => clearTimeout(timeoutId);
    }
  }, [autoCloseTime, action]);

  const handleClose = () => {
    if (action) {
      action();
    }
    setIsOpen(false);
 
  };

  const handleAction = (e) => {
    e.preventDefault();
    if (action) {
      action();
    }
    setIsOpen(false);
 
  };

  return (
    <>
      {(isOpen) && (
        <div className={`popup-main-wrapper ${isError ? 'popup-error' : 'popup-success'}`}>
          <div className="popup-content">
            <p className={`message ${isError ? 'popup-error' : 'popup-success'}`} >{message}</p>
            {actionText && (
              <button className={`popup-action-button ${isError ? 'popup-error' : 'popup-success'}`} onClick={handleAction}>
                {actionText}
              </button>
            )}
          </div>
          <button className={`popup-close-button ${isError ? 'popup-error' : 'popup-success'}`} title="close" onClick={handleClose}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Popup;
