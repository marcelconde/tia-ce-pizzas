import React from 'react';

const sizeStyles = {
  sm: { wrapper: 'text-sm', prefix: 'text-xs' },
  md: { wrapper: 'text-lg', prefix: 'text-sm' },
  lg: { wrapper: 'text-2xl', prefix: 'text-base' },
} as const;

type PriceSize = keyof typeof sizeStyles;

export interface PriceTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  size?: PriceSize;
}

function formatBRL(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

export function PriceTag({
  value,
  size = 'md',
  className = '',
  ...props
}: PriceTagProps) {
  const styles = sizeStyles[size];

  return (
    <span
      className={`inline-flex items-baseline font-bold text-brand-red ${styles.wrapper} ${className}`}
      {...props}
    >
      <span className={`${styles.prefix} mr-0.5 font-semibold`}>R$</span>
      {formatBRL(value)}
    </span>
  );
}
