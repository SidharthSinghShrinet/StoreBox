import React, { useState, useMemo } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import CalculatorSlider from './CalculatorSlider';
import YieldTile from './YieldTile';
import Badge from '../../ui/Badge';

export default function YieldCalculator() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [population, setPopulation] = useState(650000);

  const yieldData = useMemo(() => {
    const annualGalBillion = ((population * 120 * 365 * 0.998) / 1000000000).toFixed(1);
    const energyMWh = Math.round((population / 1000) * 130).toLocaleString();
    const sludgeTons = Math.round((population / 1000) * 28).toLocaleString();
    const revenueMillions = ((population * 7.15) / 1000000).toFixed(2);

    return {
      water: `${annualGalBillion} Billion`,
      energy: energyMWh,
      sludge: sludgeTons,
      revenue: `$${revenueMillions}M`
    };
  }, [population]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10" id="calculator">
      <div
        ref={sectionRef}
        className={`flex flex-col gap-3 sm:gap-4 max-w-xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Badge variant="secondary" pulse>
          Municipal Deployment Modeler
        </Badge>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
          Regional Economic &amp; Ecologic Yield
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
          Adjust the population scale to simulate annual municipal wastewater conversion, grid-power injection, and carbon offset yields.
        </p>
      </div>

      <div className="p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-secondary/30 transition-all duration-500 flex flex-col gap-8 sm:gap-14 backdrop-blur-sm">
        <CalculatorSlider
          value={population}
          onChange={setPopulation}
          onSelectPreset={setPopulation}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pt-4 sm:pt-6 border-t border-white/[0.06]">
          <YieldTile
            label="Potable Water / Year"
            value={yieldData.water}
            sub="Gallons to Aquifers"
            color="primary"
          />
          <YieldTile
            label="Clean Power Export"
            value={yieldData.energy}
            sub="MWh Clean Baseload"
            color="secondary"
          />
          <YieldTile
            label="Sludge Diverted"
            value={yieldData.sludge}
            sub="Tons Organic Bio-Nutrient"
            color="primary"
          />
          <YieldTile
            label="Carbon Offsets"
            value={yieldData.revenue}
            sub="Est. Annual Credits"
            color="secondary"
          />
        </div>
      </div>
    </section>
  );
}
