import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'label';
  color?: 'primary' | 'secondary' | 'white' | 'yellow' | 'gray';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  className = '',
}) => {
  const variants = {
    h1: 'text-4xl md:text-5xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold leading-tight',
    h3: 'text-2xl md:text-3xl font-semibold leading-tight',
    h4: 'text-xl md:text-2xl font-semibold leading-tight',
    body: 'text-base leading-relaxed',
    caption: 'text-sm leading-relaxed',
    label: 'text-sm font-medium'
  };
  
  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    white: 'text-white',
    yellow: 'text-yellow-600',
    gray: 'text-gray-500'
  };
  
  const classes = `${variants[variant]} ${colors[color]} ${className}`;
  
  // Renderizar elementos HTML directamente
  if (variant === 'h1') {
    return <h1 className={classes}>{children}</h1>;
  }
  if (variant === 'h2') {
    return <h2 className={classes}>{children}</h2>;
  }
  if (variant === 'h3') {
    return <h3 className={classes}>{children}</h3>;
  }
  if (variant === 'h4') {
    return <h4 className={classes}>{children}</h4>;
  }
  if (variant === 'label') {
    return <label className={classes}>{children}</label>;
  }
  if (variant === 'caption') {
    return <p className={classes}>{children}</p>;
  }
  
  return <p className={classes}>{children}</p>;
};

export default Text; 