import React from 'react';
import { motion } from 'framer-motion';
import Frontwork from '../assets/frontwork.png';
import Crowdwork from '../assets/crowdwork.png';
import Clickwork from '../assets/clickwork.png';
import Incogwork from '../assets/incogwork.png';
// import Winnerswork from '../assets/winnerswork.png';

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
                src={Frontwork}
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
              href='/works/crowdcarry'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Crowdwork}
                alt='Project 2'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3'>CROWD CARRY</h3>

            {/* Smaller Horizontal Info Boxes */}
            <div className='flex gap-2 mt-3'>
              {['UI Design'].map((text, index) => (
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

        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-15'>
          {/* Project 1 */}
          <div className='flex flex-col items-start'>
            <motion.a
              href='/works/clickcart'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Clickwork}
                alt='Project 1'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3'>CLICK CART</h3>

            {/* Smaller Horizontal Info Boxes */}
            <div className='flex gap-2 mt-3'>
              {[
                'Brand Identity Design',
                'UI /UX design',
                'UX Writing',
                ' UX Research',
              ].map((text, index) => (
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
              href='/works/crowdcarry'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Incogwork}
                alt='Project 2'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3 uppercase'>
              Incognito Tech solutions
            </h3>

            {/* Smaller Horizontal Info Boxes */}
            <div className='flex gap-2 mt-3'>
              {['UI/UX Design'].map((text, index) => (
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
