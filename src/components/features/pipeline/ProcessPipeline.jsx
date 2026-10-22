import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { pipelineStages } from '../../../data/pipelineStages';
import StageTabs from './StageTabs';
import StageExhibit from './StageExhibit';
import Badge from '../../ui/Badge';

export default function ProcessPipeline() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = pipelineStages[activeStageIndex];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10" id="process-pipeline">
      <div
        ref={sectionRef}
        className={`flex flex-col gap-3 sm:gap-4 max-w-2xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Badge variant="primary" pulse>
          Sequential Purification Conduit
        </Badge>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
          5-Tier Bioregenerative Architecture
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
          Select each stage to examine real-time retention duration, pore architecture, and progressive molecular water purification indices.
        </p>
      </div>

      <StageTabs
        stages={pipelineStages}
        activeIndex={activeStageIndex}
        onSelectStage={setActiveStageIndex}
      />

      <StageExhibit stage={activeStage} />
    </section>
  );
}
