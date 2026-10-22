import React, { useRef, useEffect } from 'react';

export default function StageTabs({ stages, activeIndex, onSelectStage }) {
  const scrollRef = useRef(null);

  // Smoothly center the active tab in view on mobile scroll
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeBtn = scrollRef.current.children[activeIndex];
    if (activeBtn) {
      const container = scrollRef.current;
      const scrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-2 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {stages.map((stage, idx) => {
        const isActive = activeIndex === idx;

        return (
          <button
            key={stage.id}
            onClick={() => onSelectStage(idx)}
            className={`px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex-shrink-0 active:scale-95 cursor-pointer ${
              isActive
                ? 'bg-white/[0.08] text-white border border-primary/40 shadow-[0_0_20px_rgba(0,229,185,0.15)]'
                : 'bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-on-surface-variant border border-white/[0.06]'
            }`}
          >
            <div
              className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-wider ${
                isActive ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {stage.stageNumber}
            </div>
            <div className="font-['Space_Grotesk'] text-xs sm:text-sm font-medium mt-0.5 whitespace-nowrap">
              {stage.tabLabel}
            </div>
          </button>
        );
      })}
    </div>
  );
}
