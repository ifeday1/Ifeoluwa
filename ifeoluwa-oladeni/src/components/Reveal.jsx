/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Component = motion[as] ?? motion.div;
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
