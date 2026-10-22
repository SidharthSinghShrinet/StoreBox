import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import InquiryForm from './InquiryForm';
import Badge from '../../ui/Badge';

export default function InquirySection() {
  const [sectionRef, isVisible] = useScrollReveal();

  const benefits = [
    "Full EPC (Engineering, Procurement, Construction) financing structures",
    "EPA Title 40 CFR Part 503 Exceptional Quality Bio-solids Guarantee",
    "25-Year Guaranteed Effluent Purity and Servicing SLA"
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col py-10 sm:py-14 gap-8 sm:gap-10" id="contact-hub">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Editorial Column */}
        <div
          ref={sectionRef}
          className={`lg:col-span-6 flex flex-col gap-6 sm:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <Badge variant="primary">
              Infrastructure Partnerships
            </Badge>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug">
              Deploy Next-Gen Water Security
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed pt-1 sm:pt-2">
              Whether designing greenfield regional water resource recovery facilities or upgrading aging municipal sludge works into closed-loop biomethane engines, our engineering consortium deploys turnkey modular vaults.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm font-light text-on-surface-variant pt-1 sm:pt-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2.5 sm:gap-3 group">
                <span className="material-symbols-outlined text-primary text-base sm:text-lg group-hover:scale-125 transition-transform flex-shrink-0">
                  check_circle
                </span>
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Form Column */}
        <div className="lg:col-span-6">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
