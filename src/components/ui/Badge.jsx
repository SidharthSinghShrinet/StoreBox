import React from 'react';

export default function Badge({ children, variant = 'primary', pulse = false, className = '' }) {
  const variantStyles = {
    primary: 'text-primary bg-primary/[0.05] border-primary/20',
    secondary: 'text-secondary bg-secondary/[0.05] border-secondary/20',
    subtle: 'text-white/90 bg-black/60 border-white/10'
  };

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md ${variantStyles[variant] || variantStyles.primary} ${className}`}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />}
      {children}
    </div>
  );
}
