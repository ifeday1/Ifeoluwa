import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-2xl font-bold'
        >
          Ultimate NFT
        </motion.h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-lg font-medium'>
          {['Home', 'Explore', 'Marketplace', 'Contact'].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#38bdf8' }}
              transition={{ duration: 0.2 }}
              className='hover:text-cyan-400'
            >
              <a href='#'>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button with "Menu" Text */}
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
            className='fixed top-0 right-0 w-full h-screen bg-gray-800 text-white flex flex-col items-start justify-start md:hidden p-6'
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
              src='https://via.placeholder.com/200'
              alt='NFT Illustration'
              className='rounded-lg w-32 h-32 mb-4'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Left-Aligned Menu Links with Larger Text */}
            <div className='flex flex-col items-start space-y-6 text-2xl font-semibold w-full'>
              {['Home', 'Explore', 'Marketplace', 'Contact'].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href='#'
                    whileHover={{ scale: 1.1, color: '#38bdf8' }}
                    transition={{ duration: 0.2 }}
                    className='hover:text-cyan-400 w-full p-2 border-b border-gray-600'
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>

            {/* Descriptive Text (Left-Aligned & Well-Spaced) */}
            <motion.p
              className='text-left text-gray-300 mt-auto pb-10 text-lg'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover exclusive NFTs and digital assets on our platform. Join
              the revolution today!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
