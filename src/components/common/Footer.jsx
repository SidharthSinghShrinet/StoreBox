import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setTimeout(() => setJoined(false), 3000);
    setEmail('');
  };

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#05090f] text-on-surface-variant relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-20 flex flex-col gap-10 sm:gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-10">
          <div className="sm:col-span-2 flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="font-['Space_Grotesk'] text-lg sm:text-xl font-medium text-white tracking-wider">
                AURA AQUIS
              </span>
              <span className="text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                BIOS-07
              </span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm font-light leading-relaxed">
              Autonomous subterranean infrastructure delivering zero-effluent closed-loop water purification, biomethane extraction, and environmental intelligence.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-on-surface-variant/80 font-light pt-1 sm:pt-2">
              <span>ISO 14001</span>
              <span>·</span>
              <span>EPA CLASS 1</span>
              <span>·</span>
              <span>WHO SAFEWATER CORE</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-medium">
              Operations
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-light text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#architecture">Chamber Architecture</a>
              <a className="hover:text-primary transition-colors" href="#process-pipeline">Catalytic Mineralization</a>
              <a className="hover:text-primary transition-colors" href="#telemetry-console">Hydraulic SCADA</a>
              <a className="hover:text-primary transition-colors" href="#process-pipeline">Microbial Sequencing</a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-medium">
              Jurisdiction
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-light text-on-surface-variant">
              <span className="text-white text-xs font-mono">SECTOR 07 VAULT</span>
              <span>Intake Basin 04-East</span>
              <span>Sub-Aquifer Conduit 12-B</span>
              <a className="text-secondary hover:underline pt-1 text-xs font-mono flex items-center gap-1 group" href="#contact-hub">
                Schedule Inspection <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-medium">
              Telemetry Dispatch
            </div>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed">
              Receive bi-weekly ecological bulletins and membrane flux logs.
            </p>
            <form onSubmit={handleJoin} className="flex flex-col xs:flex-row items-stretch gap-2 pt-1">
              <input
                className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-light focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40"
                placeholder="engineer@domain.tld"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="shimmer-btn px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-all active:scale-95 shadow-[0_0_12px_rgba(0,229,185,0.3)] cursor-pointer flex-shrink-0"
              >
                {joined ? 'Sent' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 text-xs font-mono font-light text-on-surface-variant/70">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} AURA AQUIS MUNICIPAL INFRASTRUCTURE</span>
            <span className="hidden xs:inline">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              UPTIME: 99.998%
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a className="hover:text-white transition-colors" href="#">Security Protocol</a>
            <a className="hover:text-white transition-colors" href="#">Telemetry Disclosure</a>
            <a className="hover:text-white transition-colors" href="#">EPA Public Filing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
