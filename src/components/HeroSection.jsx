import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

export default function HeroSection({ livePurity = "99.98" }) {
  const [heroRef, isHeroVisible] = useScrollReveal();

  const dailyIntake = useAnimatedCounter(48.2, 1400, 1, isHeroVisible);
  const purityRating = useAnimatedCounter(99.98, 1600, 2, isHeroVisible);
  const biomethane = useAnimatedCounter(142, 1400, 0, isHeroVisible);
  const codStripped = useAnimatedCounter(99.4, 1500, 1, isHeroVisible);

  return (
    <section className="relative w-full pt-44 lg:pt-52 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col gap-20 overflow-visible pb-14">
      {/* Subtle ambient glow orbs */}
      <div className="absolute -top-10 left-1/3 w-[38rem] h-[38rem] rounded-full bg-primary/[0.08] blur-[170px] pointer-events-none -z-10 animate-bio-float"></div>
      <div className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] rounded-full bg-secondary/[0.07] blur-[170px] pointer-events-none -z-10 animate-bio-float-delayed"></div>

      {/* Header Meta & Headline Block */}
      <div
        ref={heroRef}
        className={`flex flex-col items-start max-w-4xl gap-6 transition-all duration-700 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-primary/[0.05] border border-primary/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          Autonomous Biosphere Architecture
        </div>

        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.12]">
          Transforming wastewater into{' '}
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
            living molecular purity.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed pt-2">
          AURA AQUIS re-engineers municipal sewage into hyper-pure water, renewable biomethane, and catalytic soil nutrients through quiet bio-recovery chambers and crystalline nanofiltration.
        </p>

        <div className="flex flex-wrap items-center gap-5 pt-4">
          <a
            className="shimmer-btn inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-on-primary font-medium text-sm hover:bg-primary-container transition-all duration-300 shadow-[0_0_28px_rgba(0,229,185,0.35)] hover:shadow-[0_0_44px_rgba(0,229,185,0.6)] hover:-translate-y-0.5 active:scale-95"
            href="#process-pipeline"
          >
            <span className="material-symbols-outlined text-base">water_drop</span>
            <span>Explore Purification Stream</span>
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/[0.08] hover:border-secondary/40 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(76,214,251,0.2)] active:scale-95"
            href="#telemetry-console"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-light">Live Telemetry</span>
            <span className="font-mono text-xs text-secondary ml-1 font-normal">
              {livePurity}%
            </span>
          </a>
        </div>
      </div>

      {/* Cinematic Visual with Clean Floating Telemetry */}
      <div className="flex flex-col gap-8">
        <div className="group relative w-full rounded-3xl overflow-hidden bg-[#060c14] border border-white/[0.08] hover:border-primary/30 transition-all duration-700 shadow-[0_24px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_90px_rgba(0,229,185,0.15)]">
          <div className="relative w-full h-[440px] lg:h-[620px] overflow-hidden">
            <img
              className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XxswuuNEsnfNYu7oxD3Mag4ImPJ355DiVqVV0r3tj4d8y4yFWRCNjn1K8q59jV6INwnDNVuM-1gQg7nYMTFJtPIz52lalN9UmDg0t9hZwZJ0yzi885LVh4QdscHaHEZyYvJFP5MHUyZMCFsj6K0ekk3dzf06KzM2tfhTRovlyDavT-RPTHbdr6DL_TEHVG4gNuBkIWDHJtvA_RabuUMKIWuzD7o8UQNOtictJNoMbxdt73NRNGTGL2iIYj"
              alt="Panoramic evening aerial view of the ultra-modern AURA AQUIS municipal water treatment plant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d16] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 font-mono text-xs text-white/90 tracking-wider flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                BASIN 03-A · HARMONIC FLUX
              </span>
            </div>
          </div>
        </div>

        {/* Quiet, Airy Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 pt-2">
          <div className="flex flex-col gap-1 border-l border-white/[0.08] hover:border-primary transition-colors pl-5 group">
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">
              Daily Intake
            </span>
            <div className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-light text-white tracking-tight">
              {dailyIntake}M
            </div>
            <span className="text-xs text-primary font-light">Gallons Reclaimed / 24h</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-white/[0.08] hover:border-primary transition-colors pl-5 group">
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">
              Purity Rating
            </span>
            <div className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-light text-primary tracking-tight">
              {purityRating}%
            </div>
            <span className="text-xs text-on-surface-variant font-light">WHO SafeWater Tier-1</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-white/[0.08] hover:border-secondary transition-colors pl-5 group">
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-secondary transition-colors">
              Biomethane Harvest
            </span>
            <div className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-light text-white tracking-tight">
              {biomethane} <span className="text-base text-on-surface-variant font-normal">MWh</span>
            </div>
            <span className="text-xs text-secondary font-light">+18.4MW Net Export</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-white/[0.08] hover:border-primary transition-colors pl-5 group">
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">
              COD / BOD Stripped
            </span>
            <div className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-light text-white tracking-tight">
              {codStripped}%
            </div>
            <span className="text-xs text-primary font-light">PFAS Non-Detect</span>
          </div>
        </div>
      </div>
    </section>
  );
}
