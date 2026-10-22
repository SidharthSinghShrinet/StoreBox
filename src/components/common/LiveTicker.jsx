import React from 'react';

export default function LiveTicker({ telemetry }) {
  const { ph = "7.21", barPressure = "84.8", turbidity = "0.018" } = telemetry || {};

  const items = [
    `CLARIFIER 03: pH ${ph} [OPTIMAL]`,
    "UV CHAMBERS: 254nm ACTIVE",
    `CERAMIC NANOFILTRATION: ${barPressure} BAR`,
    "METHANOGEN DIGESTER 2: 98.7% PURITY",
    `TURBIDITY: ${turbidity} NTU`
  ];

  return (
    <div className="w-full flex items-center gap-3 sm:gap-6 pt-4 border-t border-white/[0.06] text-[11px] sm:text-xs font-mono overflow-hidden select-none">
      <div className="flex items-center gap-1.5 sm:gap-2 text-primary font-medium flex-shrink-0 z-10 bg-[#070d16] pr-2 sm:pr-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
        <span className="tracking-wider">TELEMETRY</span>
      </div>

      <div className="relative w-full overflow-hidden whitespace-nowrap mask-linear-fade">
        <div
          className="inline-flex gap-6 sm:gap-8 items-center text-on-surface-variant/80 font-light tracking-wide will-change-transform"
          style={{ animation: 'marqueeScroll 35s linear infinite' }}
        >
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="text-white/20">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for smooth infinite loop */}
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>{item}</span>
              <span className="text-white/20">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
