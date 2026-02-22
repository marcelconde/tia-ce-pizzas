'use client';

import React from 'react';
import { Spinner } from './Spinner';

const variantStyles = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red active:bg-brand-red-dark',
  secondary:
    'bg-brand-gold text-white hover:bg-brand-gold-dark focus-visible:ring-brand-gold active:bg-brand-gold-dark',
  outline:
    'border-2 border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white focus-visible:ring-brand-red',
  ghost:
    'bg-transparent text-foreground hover:bg-muted focus-visible:ring-ring',
  danger:
    'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 active:bg-red-700',
} as const;

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
} as const;

const spinnerSizeMap = {
  sm: 'sm' as const,
  md: 'sm' as const,
  lg: 'md' as const,
};

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      children,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={[
          'inline-flex items-center justify-center font-semibold rounded-lg',
          'transition-colors duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {loading && (
          <Spinner
            size={spinnerSizeMap[size]}
            color={variant === 'outline' || variant === 'ghost' ? 'brand-red' : 'white'}
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
