import React from 'react';
import Ifehero from '../assets/Ifehero.png';
import { motion } from 'framer-motion';
import ProjectHome from '../compontents/ProjectHome';

const Home = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-0 mt-10 md:mt-20 max-w-[1200px]'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col justify-center items-start space-y-4'
          >
            <p className='md:text-7xl text-4xl font-bold text-neutral-500 uppercase'>
              <span className='block'>Creating trusted</span>
              <span className='block'>products and,</span>
              <span className='text-white block'> unforgettable</span>
              <span className='text-white block'>user experiences. ✨</span>
            </p>

            <motion.a
              href='https://www.linkedin.com/in/ifeoluwa-oladeni'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='md:my-16 my-3 text-white rounded-lg shadow-lg font-medium transition flex items-center space-x-2'
            >
              <span>LinkedIn</span>
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
            </motion.a>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col space-y-4 items-left'
          >
            <div className='space-y-2'>
              <img
                src={Ifehero}
                alt='Ifeoluwa Oladeni'
                className='rounded-lg shadow-lg w-full h-auto' // Make image responsive
              />
            </div>
            <p className='text-lg text-white'>
              Hi, I’m Ifeoluwa Oladeni, a UX/UI and Product Designer focused on
              turning ideas into simple, user-friendly digital experiences. For
              the past three years, I’ve been creating designs that connect with
              users and drive business growth. I also write code, bringing
              designs to life with clean, functional interfaces. Outside of
              work, I enjoy sports, traveling, and playing the drums.
            </p>
          </motion.div>
        </div>
      </div>

      <ProjectHome />
    </>
  );
};

export default Home;
