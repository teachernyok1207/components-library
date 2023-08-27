import React from 'react';
import Popup from 'reactjs-popup';
import toast, { Toaster } from 'react-hot-toast';

export default function Toast() {
  const notify = () => {
    toast.success((t) => (
      <div className="toast-header">
        <p className="toast-title">Success</p>
        <p className="toast-desc">Your work has been saved</p>
      </div>
    ));
  };

  return (
    <div>
      <p className="component-label">Toast Pop-Up</p>
      <button onClick={notify} className="green toast-button">
        Trigger Pop-Up
      </button>
      <Toaster
        toastOptions={{
          style: {
            width: '284px',
            textAlign: 'left',
            borderRadius: '8px',
            background: '#ECFDF5',
            color: '#065F46',
            boxShadow:
              '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
          },
        }}
        position="top-left"
        reverseOrder={false}
      />
    </div>
  );
}
