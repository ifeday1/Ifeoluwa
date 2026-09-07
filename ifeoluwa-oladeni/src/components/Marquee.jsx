/* eslint-disable react/prop-types */
const Marquee = ({ items }) => {
  const loop = [...items, ...items];

  return (
    <div className='overflow-hidden border-t border-b border-white/8 py-6'>
      <div className='marquee-track'>
        {loop.map((item, index) => (
          <span key={`${item}-item-${index}`} className='flex items-center gap-7'>
            <span className='font-display text-[clamp(18px,2.4vw,24px)] font-semibold text-ivory'>
              {item}
            </span>
            <span className='font-display text-[clamp(18px,2.4vw,24px)] text-muted-2'>
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
