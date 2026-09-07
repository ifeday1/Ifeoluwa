/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ target, suffix = '', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const step = Math.max(1, Math.round(target / 28));
    let current = 0;
    let frame;

    const tick = () => {
      current += step;
      if (current >= target) {
        setValue(target);
      } else {
        setValue(current);
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

export default CountUp;
