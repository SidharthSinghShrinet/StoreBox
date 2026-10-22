import React from 'react';

export default function YieldTile({ label, value, sub, color = 'primary' }) {
  const isSecondary = color === 'secondary';
  const hoverText = isSecondary ? 'group-hover:text-secondary' : 'group-hover:text-primary';
  const subColor = isSecondary ? 'text-secondary' : 'text-primary';

  return (
    <div className="flex flex-col gap-0.5 sm:gap-1 group">
      <span className={`font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase font-light ${hoverText} transition-colors`}>
        {label}
      </span>
      <div className={`font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-3xl font-light text-white mt-0.5 sm:mt-1 ${hoverText} transition-colors tracking-tight`}>
        {value}
      </div>
      <span className={`text-[10px] sm:text-xs ${subColor} font-light`}>{sub}</span>
    </div>
  );
}
