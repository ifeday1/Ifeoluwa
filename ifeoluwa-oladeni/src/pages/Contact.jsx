import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
const handleCopy = () => {
  navigator.clipboard.writeText(email);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
import { FaRegCopy } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'oladeniifeoluwa123@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const boxes = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];

  return (
    <>
      <div className='flex items-center justify-center  px-4 sm:px-6 lg:px-8 py-12'>
        <motion.div
          className='relative w-full max-w-7xl p-8 sm:p-16 lg:p-24 text-center rounded-3xl shadow-2xl'
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(56,189,248,0.2) 50%, rgba(17,24,39,1) 100%)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let’s Collaborate 🤝
          </motion.h2>
          <motion.p
            className='mt-4 text-gray-300 text-lg sm:text-xl'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Write me an email and I will respond as soon as possible
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-6 sm:p-8 rounded-lg mt-8 sm:mt-12 shadow-lg max-w-2xl mx-auto border border-gray-600 w-full'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className='text-gray-300 font-medium text-base sm:text-lg break-all'>
              {email}
            </span>
            <motion.button
              onClick={handleCopy}
              className='flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-xl font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all mt-4 sm:mt-0'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaRegCopy /> {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className='flex flex-col items-center justify-center min-h-screen space-y-6 p-6'>
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className='w-64 p-6 text-center text-white font-semibold bg-blue-600 rounded-lg shadow-lg cursor-pointer'
            whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
            whileTap={{ scale: 0.95 }}
          >
            {box}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Contact;
