import React from 'react';

export default function CalculatorSlider({ value, onChange, onSelectPreset }) {
  const presets = [
    { label: "100K (Town Scale)", val: 100000 },
    { label: "1M (Major Metro)", val: 1000000 },
    { label: "2.5M (Mega Conurbation)", val: 2500000 }
  ];

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-4">
        <label
          htmlFor="pop-slider"
          className="text-xs sm:text-sm font-light text-on-surface-variant uppercase tracking-wider font-mono flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Serviced Population
        </label>
        <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-light text-primary transition-all duration-300">
          {value.toLocaleString()}{' '}
          <span className="text-sm sm:text-base text-on-surface-variant font-normal">Residents</span>
        </div>
      </div>

      <div className="relative w-full py-2">
        <input
          id="pop-slider"
          type="range"
          min="100000"
          max="2500000"
          step="25000"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono text-on-surface-variant/70 font-light">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectPreset(preset.val)}
            className="hover:text-white transition-colors cursor-pointer bg-white/[0.03] sm:bg-transparent border border-white/[0.06] sm:border-0 px-2 py-1 sm:p-0 rounded-lg sm:rounded-none text-left font-mono active:scale-95"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
