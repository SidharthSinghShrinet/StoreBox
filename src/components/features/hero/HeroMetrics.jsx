import React from 'react';
import { useAnimatedCounter } from '../../../hooks/useAnimatedCounter';

export default function HeroMetrics({ isVisible }) {
  const dailyIntake = useAnimatedCounter(48.2, 1400, 1, isVisible);
  const purityRating = useAnimatedCounter(99.98, 1600, 2, isVisible);
  const biomethane = useAnimatedCounter(142, 1400, 0, isVisible);
  const codStripped = useAnimatedCounter(99.4, 1500, 1, isVisible);

  const metrics = [
    {
      label: "Daily Intake",
      value: `${dailyIntake}M`,
      sub: "Gallons Reclaimed / 24h",
      borderHover: "hover:border-primary",
      valueColor: "text-white",
      subColor: "text-primary"
    },
    {
      label: "Purity Rating",
      value: `${purityRating}%`,
      sub: "WHO SafeWater Tier-1",
      borderHover: "hover:border-primary",
      valueColor: "text-primary",
      subColor: "text-on-surface-variant"
    },
    {
      label: "Biomethane Harvest",
      value: (
        <>
          {biomethane} <span className="text-xs sm:text-base text-on-surface-variant font-normal">MWh</span>
        </>
      ),
      sub: "+18.4MW Net Export",
      borderHover: "hover:border-secondary",
      valueColor: "text-white",
      subColor: "text-secondary"
    },
    {
      label: "COD / BOD Stripped",
      value: `${codStripped}%`,
      sub: "PFAS Non-Detect",
      borderHover: "hover:border-primary",
      valueColor: "text-white",
      subColor: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 pt-2">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className={`flex flex-col gap-1 border-l border-white/[0.08] ${m.borderHover} transition-colors pl-3 sm:pl-5 group`}
        >
          <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">
            {m.label}
          </span>
          <div className={`font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight ${m.valueColor}`}>
            {m.value}
          </div>
          <span className={`text-[10px] sm:text-xs font-light ${m.subColor}`}>{m.sub}</span>
        </div>
      ))}
    </div>
  );
}
