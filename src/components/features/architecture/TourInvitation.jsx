import React from 'react';
import Button from '../../ui/Button';

export default function TourInvitation() {
  return (
    <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 group">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <span className="material-symbols-outlined text-xl sm:text-2xl">visibility</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white font-medium text-base sm:text-lg">
            Experience the Facility in Person
          </div>
          <div className="text-xs sm:text-sm text-on-surface-variant font-light">
            Guided engineering, municipal, and academic delegations hosted every Thursday.
          </div>
        </div>
      </div>

      <Button
        href="#contact-hub"
        variant="outline"
        icon="arrow_forward"
        iconPosition="right"
        className="w-full md:w-auto text-center justify-center"
      >
        Book Delegation
      </Button>
    </div>
  );
}
