import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const menuItems = [
  { name: 'Work', path: '/works' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isDarkBackground =
    location.pathname === '/' ||
    location.pathname === '/works' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  const navBgClass = isDarkBackground ? 'bg-ink/70' : 'bg-white/80';
  const textColorClass = isDarkBackground ? 'text-ivory' : 'text-ink';
  const mutedTextClass = isDarkBackground ? 'text-muted' : 'text-neutral-500';
  const hoverTextClass = isDarkBackground
    ? 'hover:text-ivory'
    : 'hover:text-ink';
  const ctaClass = isDarkBackground
    ? 'bg-ivory text-ink hover:bg-coral-soft'
    : 'bg-ink text-ivory hover:bg-coral';

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-100 ${navBgClass} backdrop-blur-xl border-b border-white/8`}
    >
      <div className='max-w-[1200px] mx-auto flex items-center justify-between h-[84px] px-6 md:px-10'>
        <Link
          to='/'
          onClick={() => setIsOpen(false)}
          className={`font-display text-xl font-semibold ${textColorClass}`}
        >
          Ifeoluwa Oladeni<span className='text-coral'>.</span>
        </Link>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center gap-7 text-sm'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors duration-200 ${
                isActive(item.path) ? textColorClass : mutedTextClass
              } ${hoverTextClass}`}
            >
              {item.name}
            </Link>
          ))}
          <Magnetic>
            <Link
              to='/contact'
              className={`${ctaClass} px-[22px] py-[11px] rounded-full text-[13px] font-semibold transition-colors duration-200`}
            >
              Let&rsquo;s talk
            </Link>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`md:hidden flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-coral rounded ${textColorClass}`}
          aria-label='Toggle menu'
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className='fixed top-0 right-0 w-full h-screen z-110 flex flex-col p-6 md:hidden bg-ink text-ivory'
            role='dialog'
            aria-modal='true'
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-5 right-5 text-ivory focus:outline-none focus:ring-2 focus:ring-coral rounded'
              aria-label='Close menu'
            >
              <X size={26} />
            </button>

            <div className='flex flex-col items-start gap-6 text-2xl font-display font-semibold w-full mt-24'>
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className={`w-full pb-2 border-b ${
                    isActive(item.path)
                      ? 'border-coral text-coral'
                      : 'border-white/8 hover:text-coral-soft'
                  } transition-colors duration-200`}
                >
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className='w-full pb-2 border-b border-white/8 hover:text-coral-soft transition-colors duration-200'>
                <Link to='/contact' onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>

            <p className='mt-auto pb-10 text-base font-sans text-muted'>
              I am dedicated to creating impactful user and brand experiences
              through insights, research, and the latest design methodologies.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
