import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Imgnav from '../assets/Imgnav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home'); // Track active menu

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='text-white z-1 '>
      <div className='container mx-auto flex justify-between items-center p-4 '>
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-2xl font-bold'
        >
          <Link to='/' onClick={() => setActive('Home')}>
            Ifeoluwa Oladeni
          </Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-lg font-medium z-1'>
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, color: '#38bdf8' }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer relative ${
                active === item.name ? 'text-cyan-500' : ''
              }`}
              onClick={() => setActive(item.name)}
            >
              <Link to={item.path}>{item.name}</Link>

              {/* Active Underline Animation */}
              <motion.span
                className='absolute left-0 bottom-0 h-1 bg-cyan-500 rounded z-1'
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
          className='md:hidden flex items-center space-x-2'
        >
          <Menu size={28} />
          <span className='text-lg'>Menu</span>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className='fixed top-0 right-0 w-full h-screen bg-black z-1 text-white flex flex-col items-start justify-start md:hidden p-6'
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className='absolute top-5 right-5 text-white'
            >
              <X size={28} />
            </button>

            {/* Left-Aligned Image at the Top */}
            <motion.img
              src={Imgnav}
              className='rounded-lg w-32 h-32 mb-4'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Mobile Menu Links */}
            <div className='flex flex-col items-start space-y-6 text-2xl font-semibold w-full'>
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1, color: '#38bdf8' }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer w-full p-2 border-b border-gray-600 ${
                    active === item.name
                      ? 'text-cyan-500'
                      : 'hover:text-cyan-400'
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

            {/* Descriptive Text */}
            <motion.p
              className='text-left text-gray-300 mt-auto pb-10 text-lg'
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
