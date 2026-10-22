import React from 'react';

export default function HeroCinematic() {
  return (
    <div className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#060c14] border border-white/[0.08] hover:border-primary/30 transition-all duration-700 shadow-[0_16px_50px_rgba(0,0,0,0.5)] sm:shadow-[0_24px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_90px_rgba(0,229,185,0.15)]">
      <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[620px] overflow-hidden">
        <img
          className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-1000 ease-out"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XxswuuNEsnfNYu7oxD3Mag4ImPJ355DiVqVV0r3tj4d8y4yFWRCNjn1K8q59jV6INwnDNVuM-1gQg7nYMTFJtPIz52lalN9UmDg0t9hZwZJ0yzi885LVh4QdscHaHEZyYvJFP5MHUyZMCFsj6K0ekk3dzf06KzM2tfhTRovlyDavT-RPTHbdr6DL_TEHVG4gNuBkIWDHJtvA_RabuUMKIWuzD7o8UQNOtictJNoMbxdt73NRNGTGL2iIYj"
          alt="Panoramic evening aerial view of the ultra-modern AURA AQUIS municipal water treatment plant"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d16] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 flex items-center gap-3">
          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 font-mono text-[11px] sm:text-xs text-white/90 tracking-wider flex items-center gap-2 shadow-lg">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse"></span>
            BASIN 03-A · HARMONIC FLUX
          </span>
        </div>
      </div>
    </div>
  );
}
