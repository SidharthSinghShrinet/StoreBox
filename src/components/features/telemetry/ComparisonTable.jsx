import React from 'react';
import { waterParameters } from '../../../data/telemetryData';

export default function ComparisonTable() {
  return (
    <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-secondary/30 transition-all duration-500 flex flex-col justify-between gap-6 sm:gap-8 backdrop-blur-sm">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-on-surface-variant uppercase tracking-wider font-light text-[11px] sm:text-xs">
          Lab Analysis: Intake vs Outflow
        </span>
        <span className="text-secondary font-mono flex items-center gap-1.5 text-[11px] sm:text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          Sensor Node #82
        </span>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
        <table className="w-full text-left font-mono text-xs min-w-[480px]">
          <thead>
            <tr className="text-on-surface-variant/70 border-b border-white/[0.06]">
              <th className="py-3 pr-3 uppercase font-light text-[10px] sm:text-xs">Water Parameter</th>
              <th className="py-3 px-3 uppercase font-light text-error/80 text-[10px] sm:text-xs">Raw Influent</th>
              <th className="py-3 px-3 uppercase font-medium text-primary text-[10px] sm:text-xs">Effluent</th>
              <th className="py-3 pl-3 uppercase font-light text-right text-[10px] sm:text-xs">Net Stripped</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {waterParameters.map((param, idx) => (
              <tr key={idx} className="hover:bg-white/[0.03] transition-colors group">
                <td className="py-3.5 pr-3 text-white font-light font-['Plus_Jakarta_Sans'] text-xs sm:text-sm group-hover:text-primary transition-colors">
                  {param.parameter}
                </td>
                <td className="py-3.5 px-3 text-on-surface-variant font-light text-xs">
                  {param.rawInfluent}
                </td>
                <td className="py-3.5 px-3 text-primary font-medium text-xs">
                  {param.effluent}
                </td>
                <td className="py-3.5 pl-3 text-white font-light text-right text-xs">
                  {param.netStripped}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-3 sm:pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono font-light text-on-surface-variant">
        <span>Injection Zone: Edwards Aquifer Sub-Vault 07</span>
        <span className="text-secondary font-medium tracking-wide">STATUS: RECLAMATION APPROVED</span>
      </div>
    </div>
  );
}
