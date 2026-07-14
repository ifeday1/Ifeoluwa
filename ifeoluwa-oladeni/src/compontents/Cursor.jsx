import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const hoverCapable = window.matchMedia('(hover: hover)').matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!hoverCapable || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let dx = 0,
      dy = 0,
      rx = 0,
      ry = 0,
      frame;

    const handleMove = (e) => {
      dx = e.clientX;
      dy = e.clientY;
      dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
    };

    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      frame = requestAnimationFrame(loop);
    };

    // Delegated so it keeps working as React Router swaps pages in/out.
    const handleOver = (e) => {
      if (e.target.closest('a, button')) ring.classList.add('hovered');
    };
    const handleOut = (e) => {
      if (e.target.closest('a, button')) ring.classList.remove('hovered');
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className='cursor-dot' />
      <div ref={ringRef} className='cursor-ring' />
    </>
  );
};

export default Cursor;
