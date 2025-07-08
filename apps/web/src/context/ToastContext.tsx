'use client';

import React, { createContext, useContext } from 'react';
import toast, { Toaster, ToasterProps } from 'react-hot-toast';

interface ToastContextType {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
  toasterProps?: ToasterProps;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  toasterProps = {
    position: 'top-right',
    toastOptions: {
      duration: 3000,
      style: {
        background: 'var(--toast-bg)',
        color: 'var(--toast-color)',
      },
      success: {
        className: 'toast-success',
        iconTheme: {
          primary: '#10B981',
          secondary: 'white',
        },
      },
      error: {
        className: 'toast-error',
        iconTheme: {
          primary: '#EF4444',
          secondary: 'white',
        },
      },
    },
  }
}) => {
  const success = (message: string) => toast.success(message);
  const error = (message: string) => toast.error(message);
  const info = (message: string) => toast(message);
  const warning = (message: string) => toast(message, { 
    icon: '⚠️',
    className: 'toast-warning'
  });

  const value = {
    success,
    error,
    info,
    warning,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toaster {...toasterProps} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}; 