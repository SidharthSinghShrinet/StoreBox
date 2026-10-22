import React, { useState, useEffect } from 'react';

export default function Navbar({ liveFlow = "48.2M" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Purification Stream", href: "#process-pipeline" },
    { label: "Telemetry", href: "#telemetry-console" },
    { label: "Architecture", href: "#architecture" },
    { label: "Yield Model", href: "#calculator" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-10 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto max-w-7xl mx-auto h-14 sm:h-16 px-4 sm:px-8 rounded-full bg-[#0a121d]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300 ${
            scrolled ? 'border-primary/25 shadow-[0_8px_36px_rgba(0,229,185,0.12)]' : 'hover:border-primary/20'
          }`}
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <a className="flex items-center gap-2.5 sm:gap-3 group" href="#">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(0,229,185,0.4)] transition-all duration-300">
                <span className="material-symbols-outlined text-base sm:text-lg">water_ec</span>
              </div>
              <span className="font-['Space_Grotesk'] text-sm sm:text-base tracking-wider text-white font-medium group-hover:text-primary transition-colors">
                AURA AQUIS
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="relative text-sm font-light text-on-surface-variant hover:text-primary transition-colors tracking-wide group py-1"
                href={link.href}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions: Live Flow + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-secondary hover:border-secondary/30 transition-colors flex-shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
              </span>
              <span>{liveFlow}</span> GAL / DAY
            </div>

            <a
              className="shimmer-btn hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary text-xs font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,229,185,0.15)] hover:shadow-[0_0_28px_rgba(0,229,185,0.5)] active:scale-95 flex-shrink-0"
              href="#contact-hub"
            >
              <span>Request Access</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                arrow_outward
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white hover:text-primary hover:border-primary/40 transition-colors cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Navigation Console
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              {liveFlow} GAL / DAY
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-['Space_Grotesk'] text-2xl font-light text-white hover:text-primary transition-colors flex items-center justify-between py-2 border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6">
          <a
            href="#contact-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="shimmer-btn w-full py-3.5 rounded-full bg-primary text-on-primary text-center font-medium text-sm shadow-[0_0_24px_rgba(0,229,185,0.3)] active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">water_drop</span>
            <span>Request Access &amp; Feasibility Study</span>
          </a>
          <div className="text-center text-xs font-mono text-on-surface-variant font-light">
            ISO-14001 · EPA CLASS 1 STANDARDS
          </div>
        </div>
      </div>
    </>
  );
}
