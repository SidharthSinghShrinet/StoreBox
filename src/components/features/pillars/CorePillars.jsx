import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { corePillars } from '../../../data/telemetryData';
import PillarCard from './PillarCard';

export default function CorePillars() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10">
      <div
        ref={sectionRef}
        className={`flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-4 border-b border-white/[0.06] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-2 sm:gap-3 max-w-xl">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-medium">
            Ecological Equilibrium
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
            Subterranean Industrial Alchemy
          </h2>
        </div>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-md font-light leading-relaxed">
          Replacing fossil-intensive chemical precipitations with biocatalytic digestion, converting municipal liabilities into permanent circular capital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {corePillars.map((pillar) => (
          <PillarCard key={pillar.index} pillar={pillar} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
