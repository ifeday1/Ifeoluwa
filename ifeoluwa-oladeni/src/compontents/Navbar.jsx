import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Imgnav from '../assets/Imgnav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Paths with dark background (#080707)
  const isDarkBackground =
    location.pathname === '/' ||
    location.pathname === '/works' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  // Background color classes
  const navbarBgClass = isDarkBackground ? 'bg-[#080707]' : 'bg-white';

  // Text color classes
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';

  // Menu item active color classes for dark/light backgrounds
  const activeTextClass = isDarkBackground ? 'text-cyan-400' : 'text-cyan-600';
  const hoverTextClass = isDarkBackground
    ? 'hover:text-cyan-500'
    : 'hover:text-cyan-700';

  return (
    <nav className={`${navbarBgClass} z-10 sticky top-0`}>
      <div
        className={`container mx-auto flex justify-between items-center p-4 max-w-[1200px] ${textColorClass}`}
      >
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-semibold cursor-pointer ${textColorClass}`}
        >
          <Link to='/' onClick={() => setActive('Home')}>
            Ifeoluwa Oladeni
          </Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-lg font-medium'>
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className={`relative cursor-pointer ${
                active === item.name ? activeTextClass : ''
              }`}
              onClick={() => setActive(item.name)}
            >
              <Link
                to={item.path}
                className={`${active === item.name ? '' : hoverTextClass}`}
              >
                {item.name}
              </Link>

              {/* Active underline */}
              <motion.span
                className={`absolute left-0 bottom-0 h-1 rounded ${
                  active === item.name
                    ? activeTextClass.replace('text-', 'bg-')
                    : ''
                }`}
                initial={{ width: 0 }}
                animate={{ width: active === item.name ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden flex items-center space-x-2 focus:outline-none focus:ring-2 rounded ${
            isDarkBackground
              ? 'text-white focus:ring-cyan-400'
              : 'text-black focus:ring-cyan-600'
          }`}
          aria-label='Toggle menu'
        >
          <Menu size={28} />
          <span className='text-lg select-none'>Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className={`fixed top-0 right-0 w-full h-screen z-20 flex flex-col p-6 md:hidden ${
              isDarkBackground
                ? 'bg-[#080707] text-white'
                : 'bg-white text-black shadow-lg'
            }`}
            role='dialog'
            aria-modal='true'
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className={`absolute top-5 right-5 focus:outline-none focus:ring-2 rounded ${
                isDarkBackground
                  ? 'text-white focus:ring-cyan-400'
                  : 'text-black focus:ring-cyan-600'
              }`}
              aria-label='Close menu'
            >
              <X size={28} />
            </button>

            {/* Top-left Image */}
            <motion.img
              src={Imgnav}
              alt='Navigation decoration'
              className='rounded-lg w-32 h-32 mb-4 select-none'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              draggable={false}
            />

            {/* Mobile menu links */}
            <div className='flex flex-col items-start space-y-6 text-2xl font-semibold w-full'>
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer w-full p-2 border-b ${
                    isDarkBackground
                      ? active === item.name
                        ? 'border-cyan-400 text-cyan-400'
                        : 'border-gray-700 hover:text-cyan-500'
                      : active === item.name
                      ? 'border-cyan-600 text-cyan-600'
                      : 'border-gray-300 hover:text-cyan-700'
                  }`}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}
                >
                  <Link to={item.path}>{item.name}</Link>
                </motion.div>
              ))}
            </div>

            {/* Descriptive text */}
            <motion.p
              className={`text-left mt-auto pb-10 text-lg font-normal ${
                isDarkBackground ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I am dedicated to creating impactful user and brand experiences
              through insights, research, and the latest design methodologies.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
