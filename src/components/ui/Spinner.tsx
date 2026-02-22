const sizeMap = {
  sm: 16,
  md: 24,
  lg: 40,
} as const;

type SpinnerSize = keyof typeof sizeMap;

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
  className?: string;
}

export function Spinner({
  size = 'md',
  color = 'brand-red',
  className = '',
}: SpinnerProps) {
  const pixels = sizeMap[size];

  const colorValue =
    color === 'white'
      ? '#FFFFFF'
      : color === 'brand-red'
        ? 'var(--brand-red)'
        : color === 'brand-gold'
          ? 'var(--brand-gold)'
          : color;

  return (
    <svg
      className={`animate-spin ${className}`}
      width={pixels}
      height={pixels}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="status"
      aria-label="Carregando"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={colorValue}
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill={colorValue}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
