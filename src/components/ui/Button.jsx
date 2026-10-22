import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon,
  iconPosition = 'left'
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 cursor-pointer';

  const variants = {
    primary:
      'shimmer-btn px-8 py-3.5 rounded-full bg-primary text-on-primary text-sm hover:bg-primary-container shadow-[0_0_28px_rgba(0,229,185,0.35)] hover:shadow-[0_0_44px_rgba(0,229,185,0.6)] hover:-translate-y-0.5',
    secondary:
      'px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/[0.08] hover:border-secondary/40 text-sm hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(76,214,251,0.2)]',
    navCta:
      'shimmer-btn px-5 py-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(0,229,185,0.15)] hover:shadow-[0_0_28px_rgba(0,229,185,0.5)]',
    outline:
      'shimmer-btn px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-primary border border-white/[0.08] hover:border-primary/40 text-sm'
  };

  const combinedClass = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    return typeof icon === 'string' ? (
      <span className="material-symbols-outlined text-base">{icon}</span>
    ) : (
      icon
    );
  };

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick}>
        {iconPosition === 'left' && renderIcon()}
        {children}
        {iconPosition === 'right' && renderIcon()}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
}
