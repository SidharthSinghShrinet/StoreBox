import React from 'react';
import BioCanvas from './components/BioCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/features/hero/HeroSection';
import LiveTicker from './components/common/LiveTicker';
import CorePillars from './components/features/pillars/CorePillars';
import ProcessPipeline from './components/features/pipeline/ProcessPipeline';
import TelemetryConsole from './components/features/telemetry/TelemetryConsole';
import ArchitectureGallery from './components/features/architecture/ArchitectureGallery';
import YieldCalculator from './components/features/calculator/YieldCalculator';
import InquirySection from './components/features/inquiry/InquirySection';
import Footer from './components/common/Footer';
import { useLiveTelemetry } from './hooks/useLiveTelemetry';

export default function App() {
  const telemetry = useLiveTelemetry();

  return (
    <div className="bg-[#070d16] font-['Plus_Jakarta_Sans'] text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden selection:text-[#00382b]">
      {/* Interactive Bioluminescent Canvas Background */}
      <BioCanvas />

      {/* Floating Minimal Header with Mobile Navigation */}
      <Navbar liveFlow={telemetry.flowMGal} />

      {/* Main Experience Stream */}
      <main className="w-full relative z-10 flex flex-col gap-4 sm:gap-6">
        <HeroSection livePurity={telemetry.purity} />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-20">
          <LiveTicker telemetry={telemetry} />
        </div>

        <CorePillars />

        <ProcessPipeline />

        <TelemetryConsole temperature={telemetry.temperature} />

        <ArchitectureGallery />

        <YieldCalculator />

        <InquirySection />
      </main>

      {/* Sleek Minimal Footer */}
      <Footer />
    </div>
  );
}
