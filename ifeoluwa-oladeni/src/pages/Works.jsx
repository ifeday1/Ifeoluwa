import React from 'react';
import { motion } from 'framer-motion';


const Works = () => {
  return (
    <>
      <div className=' gap-8 p-6 md:p-20  items-center'>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center items-start'
        >
          <p className='md:text-7xl text-5xl font-bold text-neutral-500 uppercase'>
            <span className=' block'>Products</span>
            <span className='block'>crafted</span>
            <span className='text-white block'>with LOVE ❤️ </span>
          </p>

          {/* <motion.a
            href='https://www.linkedin.com/in/ifeoluwa-oladeni'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=' md:my-16 my-3 text-white rounded-lg shadow-lg font-medium transition flex items-center space-x-2'
          >
            <span>Linkedin</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.a> */}
        </motion.div>

      </div>
    </>
  );
};

export default Works;
