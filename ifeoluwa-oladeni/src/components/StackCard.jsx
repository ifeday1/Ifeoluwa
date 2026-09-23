/* eslint-disable react/prop-types */
import { motion, useReducedMotion, useTransform } from 'framer-motion';

// Pins while scrolling; shrinks and dims as later cards stack on top of it.
const StackCard = ({ children, index, total, progress }) => {
  const reduceMotion = useReducedMotion();
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const filter = useTransform(
    progress,
    [start, 1],
    ['brightness(1)', `brightness(${1 - (total - 1 - index) * 0.2})`]
  );

  return (
    <div
      className='sticky pb-10'
      style={{ top: `${108 + index * 24}px` }}
    >
      <motion.div
        style={reduceMotion ? undefined : { scale, filter }}
        className='origin-top will-change-transform'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StackCard;
