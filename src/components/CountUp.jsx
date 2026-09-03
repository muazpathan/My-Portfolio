import { useEffect, useRef, useState } from 'react';

const CountUp = ({ to, duration = 1.5, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const target = parseFloat(to);

          const updateCounter = (currentTime) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic easeOut for silky smooth number transition
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(target * easeOut);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUp;
