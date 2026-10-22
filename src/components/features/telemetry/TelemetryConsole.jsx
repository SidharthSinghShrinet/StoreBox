import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import PurityDialGauge from './PurityDialGauge';
import ComparisonTable from './ComparisonTable';

export default function TelemetryConsole({ temperature = "14.6" }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10" id="telemetry-console">
      <div
        ref={sectionRef}
        className={`flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 border-b border-white/[0.06] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-2 sm:gap-3 max-w-xl">
          <span className="font-mono text-xs text-secondary uppercase tracking-widest font-medium">
            Real-Time Verification
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
            Effluent Purity vs. Raw Influent
          </h2>
        </div>
        <div className="text-[11px] sm:text-xs font-mono text-on-surface-variant font-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          Continuous Optical Mass Spectrometry · ISO-14001
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-stretch">
        <PurityDialGauge isVisible={isVisible} temperature={temperature} />
        <ComparisonTable />
      </div>
    </section>
  );
}
