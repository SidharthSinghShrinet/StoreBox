import React from 'react';
import { useAnimatedCounter } from '../../../hooks/useAnimatedCounter';

export default function PurityDialGauge({ isVisible, temperature = "14.6" }) {
  const animatedPurity = useAnimatedCounter(99.98, 1800, 2, isVisible);

  // Circumference is 2 * pi * 40 ≈ 251.3
  const strokeOffset = isVisible ? 3.5 : 251.2;

  return (
    <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 flex flex-col justify-between items-center text-center gap-6 sm:gap-8 backdrop-blur-sm group">
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono">
        <span className="text-on-surface-variant uppercase tracking-wider font-light">
          Effluent Standard
        </span>
        <span className="text-primary font-medium tracking-wider">
          GRADE 1A RECLAMATION
        </span>
      </div>

      {/* Large Circular Meter with breathing room & responsive sizing */}
      <div className="relative flex items-center justify-center my-2 sm:my-4 group-hover:scale-105 transition-transform duration-500">
        <svg
          className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 transform -rotate-90 filter drop-shadow-[0_0_18px_rgba(0,229,185,0.25)]"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-white/[0.05]"
            cx="50"
            cy="50"
            fill="transparent"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            className="text-primary transition-all duration-[2000ms] ease-out"
            cx="50"
            cy="50"
            fill="transparent"
            r="40"
            stroke="currentColor"
            strokeDasharray="251.2"
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            <span>{animatedPurity}</span>
            <span className="text-primary text-xl sm:text-2xl font-normal">%</span>
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mt-1 font-light">
            Purity Index
          </span>
        </div>
      </div>

      <div className="w-full pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-col gap-2 text-xs font-mono">
        <div className="flex items-center justify-between text-[11px] sm:text-xs">
          <span className="text-on-surface-variant font-light">EPA Safe Water Threshold:</span>
          <span className="text-primary font-medium">Surpassed (+42 pts)</span>
        </div>
        <div className="flex items-center justify-between text-[11px] sm:text-xs">
          <span className="text-on-surface-variant font-light">Thermal Balance:</span>
          <span className="text-white font-light font-mono">{temperature}°C (Riverine Ambient)</span>
        </div>
      </div>
    </div>
  );
}
