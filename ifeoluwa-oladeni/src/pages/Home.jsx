import React from 'react';
import Navbar from '../compontents/Navbar';
import Ifehero from '../assets/Ifehero.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 min-h-screen items-center'>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center items-start space-y-4'
        >
          <p className='md:text-7xl text-4xl font-bold text-neutral-500 uppercase'>
            <span className=' block'>Designing</span>
            <span className='block'>the future,</span>
            <span className='text-white block'>one pixel </span>
            <span className='text-white block'>at a time ✨</span>
          </p>

          <motion.a
            href='https://www.linkedin.com/in/ifeoluwa-oladeni'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=' md:my-30 my-6 text-white rounded-lg shadow-lg font-medium transition flex items-center space-x-2'
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
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col space-y-4 items-left'
        >
          <div className='space-y-2 '>
            <img
              src={Ifehero}
              alt='Placeholder 1'
              className='rounded-lg shadow-lg w-90 '
            />
          </div>
          <p className='text-lg text-white'>
            Hi, I’m Ifeoluwa Oladeni—a passionate UX/UI and Product Designer
            with a mission to transform ideas into intuitive, user-centric
            solutions. I’m dedicated to crafting exceptional digital experiences
            that truly resonate and make a lasting impact. With a relentless
            curiosity, I dive deep into understanding users’ needs, blending
            creativity and strategy to design products that leave them saying,
            “Wow! 🤯” Over the past three years, I’ve honed my skills by
            constantly evolving, learning, and pushing the boundaries of design
            to deliver innovative and meaningful solutions that empower
            businesses and delight users. Outside work, I love sports, traveling
            and Playing drums.
          </p>
         
        </motion.div>
      </div>
      ;
    </>
  );
};

export default Home;
