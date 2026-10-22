import { useState, useEffect } from 'react';

export function useLiveTelemetry() {
  const [telemetry, setTelemetry] = useState({
    flowMGal: "48.2M",
    purity: 99.98,
    ph: "7.21",
    barPressure: "84.8",
    temperature: "14.6",
    turbidity: "0.018"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const ph = (7.20 + Math.sin(now / 3000) * 0.03).toFixed(2);
      const bar = (84.8 + Math.cos(now / 4000) * 0.3).toFixed(1);
      const temp = (14.6 + Math.sin(now / 5000) * 0.15).toFixed(1);
      const turb = (0.018 + Math.sin(now / 3500) * 0.002).toFixed(3);

      setTelemetry(prev => ({
        ...prev,
        ph,
        barPressure: bar,
        temperature: temp,
        turbidity: turb
      }));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return telemetry;
}
