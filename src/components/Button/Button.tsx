import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button = ({ children, onClick, className = '', fullWidth = false }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;