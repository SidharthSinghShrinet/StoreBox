import React from 'react';

export default function ArchitectureCard({ item }) {
  const isSecondary = item.color === 'secondary';
  const tagColor = isSecondary ? 'text-secondary' : item.color === 'tertiary' ? 'text-tertiary' : 'text-primary';
  const hoverBorder = isSecondary
    ? 'hover:border-secondary/40 hover:shadow-[0_0_35px_rgba(76,214,251,0.18)]'
    : 'hover:border-primary/40 hover:shadow-[0_0_35px_rgba(0,229,185,0.18)]';

  const hoverTitle = isSecondary ? 'group-hover:text-secondary' : 'group-hover:text-primary';

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] ${hoverBorder} overflow-hidden group flex flex-col hover:-translate-y-1.5 transition-all duration-500 cursor-default`}
    >
      <div className="relative w-full h-52 sm:h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          src={item.image}
          alt={item.alt}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d16]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 gap-6 sm:gap-8">
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <span className={`font-mono text-[10px] sm:text-[11px] ${tagColor} uppercase tracking-widest font-light`}>
            {item.tag}
          </span>
          <h3 className={`font-['Space_Grotesk'] text-xl sm:text-2xl font-light text-white ${hoverTitle} transition-colors duration-300`}>
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
            {item.desc}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-on-surface-variant/80 font-light flex items-center justify-between">
          <span>{item.specLeft}</span>
          <span className={item.color === 'secondary' ? 'text-secondary' : item.color === 'tertiary' ? 'text-white' : 'text-primary'}>
            {item.specRight}
          </span>
        </div>
      </div>
    </div>
  );
}
