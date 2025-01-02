// src/components/Input/Input.tsx
import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = ''
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;