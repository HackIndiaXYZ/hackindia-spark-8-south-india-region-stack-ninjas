import React from 'react';
import { cn } from '../../utils/cn';

export const Button = ({ className, variant = 'primary', size = 'md', children, ...props }) => {
  const variants = {
    primary: 'hero-gradient text-white hover:shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border border-outline-variant bg-transparent text-on-surface hover:bg-surface-container',
    ghost: 'hover:bg-surface-container text-on-surface-variant',
    error: 'bg-error text-on-error hover:bg-error/90',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ className, children, ...props }) => {
  return (
    <div className={cn('bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 card-hover', className)} {...props}>
      {children}
    </div>
  );
};
