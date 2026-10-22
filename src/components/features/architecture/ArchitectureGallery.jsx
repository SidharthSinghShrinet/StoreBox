import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { architectureShowcase } from '../../../data/telemetryData';
import ArchitectureCard from './ArchitectureCard';
import TourInvitation from './TourInvitation';
import Badge from '../../ui/Badge';

export default function ArchitectureGallery() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10" id="architecture">
      <div
        ref={sectionRef}
        className={`flex flex-col gap-3 sm:gap-4 max-w-2xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Badge variant="primary">
          Civic Civility in Infrastructure
        </Badge>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
          The Architecture of Bioreclamation
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
          Concealed for a century behind chain-link fences, modern wastewater treatment is an ecological cathedral. AURA AQUIS features zero-odor biomes, translucent clarifiers, and quiet skywalks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {architectureShowcase.map((item) => (
          <ArchitectureCard key={item.id} item={item} />
        ))}
      </div>

      <TourInvitation />
    </section>
  );
}
