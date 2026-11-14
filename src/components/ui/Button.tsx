import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium transition-colors select-none';
  const variants = {
    primary: 'bg-editorial-brown hover:bg-editorial-brownHover text-white shadow-xs',
    secondary: 'bg-editorial-charcoal hover:bg-black text-white',
    outline: 'bg-transparent hover:bg-editorial-cream text-editorial-charcoal border border-editorial-border',
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
