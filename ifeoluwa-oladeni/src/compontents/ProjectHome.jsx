import React from 'react';
import { motion } from 'framer-motion';
import Ifehero from '../assets/Ifehero.png';

const ProjectHome = () => {
  return (
    <>
      <section className='px-6 py-12 md:px-20  text-white'>
        {/* Header Section */}
        <div className='flex justify-between items-center mb-6'>
          <h2 className='md:text-5xl text-2xl font-semibold text-gray-400'>
            Featured Projects
          </h2>
          <a href='/works' className='text-white hover:underline'>
            View All
          </a>
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Project 1 */}
          <div className='flex flex-col items-start'>
            <motion.a
              href='/works/frontier'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Ifehero}
                alt='Project 1'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3'>FRONTIER SOLAR TECH</h3>

            {/* Smaller Horizontal Info Boxes */}
            <div className='flex gap-2 mt-3'>
              {['Branding', 'UI/UX', 'Web development'].map((text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className='bg-gray-800 px-4 py-2 rounded-lg text-center text-sm text-white'
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className='flex flex-col items-start'>
            <motion.a
              href='/project-2'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src='https://via.placeholder.com/400'
                alt='Project 2'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3'>Project Two</h3>

            {/* Smaller Horizontal Info Boxes */}
            <div className='flex gap-2 mt-3'>
              {['Tech', 'Scalable', 'Fast'].map((text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className='bg-gray-800 px-4 py-2 rounded-lg text-center text-sm text-white'
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHome;
