/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = '';
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-flex transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
