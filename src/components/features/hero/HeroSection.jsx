import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import HeroCinematic from './HeroCinematic';
import HeroMetrics from './HeroMetrics';

export default function HeroSection({ livePurity = "99.98" }) {
  const [heroRef, isHeroVisible] = useScrollReveal();

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-48 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 overflow-visible pb-10 sm:pb-14">
      {/* Subtle ambient glow orbs */}
      <div className="absolute -top-10 left-1/3 w-[20rem] sm:w-[38rem] h-[20rem] sm:h-[38rem] rounded-full bg-primary/[0.08] blur-[100px] sm:blur-[170px] pointer-events-none -z-10 animate-bio-float"></div>
      <div className="absolute top-1/2 right-1/4 w-[18rem] sm:w-[32rem] h-[18rem] sm:h-[32rem] rounded-full bg-secondary/[0.07] blur-[100px] sm:blur-[170px] pointer-events-none -z-10 animate-bio-float-delayed"></div>

      {/* Header Meta & Headline Block */}
      <div
        ref={heroRef}
        className={`flex flex-col items-start max-w-4xl gap-4 sm:gap-6 transition-all duration-700 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Badge variant="primary" pulse className="text-[11px] sm:text-xs">
          Autonomous Biosphere Architecture
        </Badge>

        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.12]">
          Transforming wastewater into{' '}
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
            living molecular purity.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed pt-1 sm:pt-2">
          AURA AQUIS re-engineers municipal sewage into hyper-pure water, renewable biomethane, and catalytic soil nutrients through quiet bio-recovery chambers and crystalline nanofiltration.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pt-3 w-full sm:w-auto">
          <Button
            href="#process-pipeline"
            variant="primary"
            icon="water_drop"
            className="w-full sm:w-auto text-center"
          >
            Explore Purification Stream
          </Button>

          <Button
            href="#telemetry-console"
            variant="secondary"
            className="w-full sm:w-auto text-center justify-center"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-light">Live Telemetry</span>
            <span className="font-mono text-xs text-secondary ml-1 font-normal">
              {livePurity}%
            </span>
          </Button>
        </div>
      </div>

      {/* Cinematic Visual & Metrics */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <HeroCinematic />
        <HeroMetrics isVisible={isHeroVisible} />
      </div>
    </section>
  );
}
