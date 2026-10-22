import { useState, useEffect } from 'react';

export function useAnimatedCounter(targetValue, duration = 1400, decimals = 0, shouldStart = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out quad
      const ease = 1 - (1 - progress) * (1 - progress);
      const current = targetValue * ease;

      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, duration, decimals, shouldStart]);

  return value;
}
