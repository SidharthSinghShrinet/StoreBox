import React from 'react';

export default function PillarCard({ pillar, isVisible }) {
  const isPrimary = pillar.accent === 'primary';
  const accentColor = isPrimary ? 'text-primary' : 'text-secondary';
  const hoverBorder = isPrimary
    ? 'hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,185,0.15)]'
    : 'hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(76,214,251,0.15)]';
  const hoverBg = isPrimary
    ? 'group-hover:bg-primary/20 group-hover:shadow-[0_0_16px_rgba(0,229,185,0.3)]'
    : 'group-hover:bg-secondary/20 group-hover:shadow-[0_0_16px_rgba(76,214,251,0.3)]';
  const hoverText = isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary';

  return (
    <div
      className={`p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] ${hoverBorder} transition-all duration-500 flex flex-col justify-between gap-8 sm:gap-12 group hover:-translate-y-1.5 cursor-default backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs sm:text-sm opacity-70 ${accentColor}`}>
            {pillar.index}
          </span>
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center ${accentColor} group-hover:scale-110 ${hoverBg} transition-all duration-300`}
          >
            <span className="material-symbols-outlined text-lg sm:text-xl">{pillar.icon}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <h3 className={`font-['Space_Grotesk'] text-xl sm:text-2xl font-light text-white ${hoverText} transition-colors duration-300`}>
            {pillar.title}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>

      <div className="pt-5 sm:pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <span className="text-on-surface-variant font-light text-[11px] sm:text-xs">{pillar.metricLabel}</span>
        <span className={`${accentColor} font-medium tracking-wider text-[11px] sm:text-xs`}>
          {pillar.metricValue}
        </span>
      </div>
    </div>
  );
}
