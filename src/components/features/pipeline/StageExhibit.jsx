import React, { useState, useEffect } from 'react';

export default function StageExhibit({ stage }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 220);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-5 sm:p-8 lg:p-14 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:border-white/10">
      {/* Image Gallery Column */}
      <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-[#060c14] border border-white/[0.06] group">
          <img
            key={stage.id}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              fade ? 'opacity-50 scale-98' : 'opacity-100 scale-100'
            }`}
            src={stage.image}
            alt={stage.imageAlt}
            loading="lazy"
          />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md font-mono text-[10px] sm:text-[11px] text-primary border border-primary/20 shadow-md">
            {stage.microscopyTag}
          </div>
        </div>

        <div className="flex items-center justify-between px-1 sm:px-2 text-[11px] sm:text-xs font-mono text-on-surface-variant font-light">
          <span className="uppercase tracking-wider">Pore Diameters</span>
          <span className="text-white font-normal truncate ml-2 text-right">{stage.pore}</span>
        </div>
      </div>

      {/* Technical Details Column */}
      <div
        className={`lg:col-span-7 flex flex-col justify-between gap-6 sm:gap-10 transition-all duration-300 ${
          fade ? 'opacity-40 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-primary font-medium tracking-wider text-[11px] sm:text-xs">{stage.badge}</span>
              <span className="text-white/30 hidden xs:inline">|</span>
              <span className="text-on-surface-variant text-[11px] sm:text-xs">{stage.code}</span>
            </div>
            <div className="text-on-surface-variant text-[11px] sm:text-xs">{stage.time}</div>
          </div>

          <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-3xl font-light text-white leading-snug">
            {stage.title}
          </h3>

          <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
            {stage.desc}
          </p>
        </div>

        {/* Clean 3 Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-6 border-y border-white/[0.06]">
          {stage.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-0.5 sm:gap-1">
              <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant font-light uppercase tracking-tight sm:tracking-normal">
                {m.label}
              </span>
              <span className={`font-['Space_Grotesk'] text-lg sm:text-2xl lg:text-3xl font-light tracking-tight ${m.color}`}>
                {m.value}
              </span>
              <span className="text-[9px] sm:text-[11px] text-on-surface-variant/70 font-light truncate">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* Minimal Progress Bar with Dynamic Transition */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-light">
            <span className="text-on-surface-variant uppercase tracking-wider">
              Molecular Purity Index
            </span>
            <span className="text-primary font-medium">{stage.percentLabel}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out rounded-full shadow-[0_0_12px_rgba(0,229,185,0.6)]"
              style={{ width: stage.barWidth }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
