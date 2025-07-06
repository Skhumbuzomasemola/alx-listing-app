import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);

export default Button;
