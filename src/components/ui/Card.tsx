import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-border shadow-sm p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-1.5 mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function CardTitle({
  children,
  className = '',
  as: Tag = 'h3',
  ...props
}: CardTitleProps) {
  return (
    <Tag
      className={`text-lg font-semibold text-foreground ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function CardContent({ children, className = '', ...props }: CardContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
