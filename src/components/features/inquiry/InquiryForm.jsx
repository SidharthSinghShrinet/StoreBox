import React, { useState } from 'react';
import Button from '../../ui/Button';

const INITIAL_FORM_STATE = {
  organization: '',
  influentRate: '20 - 50 Million Gal / Day',
  reclamationGoal: 'Direct Potable Reuse',
  email: ''
};

export default function InquiryForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form fields after successful submission
      setFormData(INITIAL_FORM_STATE);
    }, 700);
  };

  return (
    <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:shadow-[0_24px_80px_rgba(0,229,185,0.12)] transition-all duration-500 shadow-[0_24px_80px_rgba(0,0,0,0.4)] flex flex-col gap-5 sm:gap-6 backdrop-blur-md">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-on-surface-variant uppercase tracking-wider font-light text-[11px] sm:text-xs">
          Feasibility Specification Intake
        </span>
        <span className="text-primary font-mono flex items-center gap-1.5 text-[11px] sm:text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          PORTAL MW-04
        </span>
      </div>

      <form className="flex flex-col gap-4 sm:gap-5 pt-1 sm:pt-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="text-[11px] sm:text-xs font-mono text-on-surface-variant uppercase font-light">
            Organization / Authority
          </label>
          <input
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm font-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-on-surface-variant/40"
            placeholder="e.g. Greater Austin Water District"
            required
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-[11px] sm:text-xs font-mono text-on-surface-variant uppercase font-light">
              Estimated Daily Influent
            </label>
            <select
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0a121d] border border-white/[0.08] text-white text-xs sm:text-sm font-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
              value={formData.influentRate}
              onChange={(e) => setFormData({ ...formData, influentRate: e.target.value })}
            >
              <option>5 - 20 Million Gal / Day</option>
              <option>20 - 50 Million Gal / Day</option>
              <option>50 - 150 Million Gal / Day</option>
              <option>150M+ Gal (Mega Metro)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-[11px] sm:text-xs font-mono text-on-surface-variant uppercase font-light">
              Primary Reclamation Goal
            </label>
            <select
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0a121d] border border-white/[0.08] text-white text-xs sm:text-sm font-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
              value={formData.reclamationGoal}
              onChange={(e) => setFormData({ ...formData, reclamationGoal: e.target.value })}
            >
              <option>Direct Potable Reuse</option>
              <option>Aquifer Injection</option>
              <option>Agricultural Loop</option>
              <option>Biomethane Cogeneration</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="text-[11px] sm:text-xs font-mono text-on-surface-variant uppercase font-light">
            Engineering Contact Email
          </label>
          <input
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm font-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-on-surface-variant/40"
            placeholder="director.publicworks@municipality.gov"
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          icon="science"
          className="mt-1 sm:mt-2 w-full text-center justify-center py-3 sm:py-3.5"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Transmitting Specification...' : 'Initiate Engineering Feasibility Study'}
        </Button>
      </form>

      {submitted && (
        <div className="p-3.5 sm:p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-mono text-center font-light transition-all duration-500 animate-pulse flex items-center justify-between gap-3">
          <span>✓ Inquiry received. Technical telemetry and feasibility credentials transmitted to your engineering address.</span>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-primary hover:text-white transition-colors cursor-pointer text-sm font-bold flex-shrink-0"
            title="Dismiss message"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
