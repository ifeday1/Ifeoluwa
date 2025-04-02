import React from 'react';
import { motion } from 'framer-motion';
import Frontwork from '../assets/frontwork.png';
import Crowdwork from '../assets/crowdwork.png';
import Clickwork from '../assets/clickwork.png';
import Incogwork from '../assets/incogwork.png';
import Winnerswork from '../assets/winnerswork.png';
import Gamerwork from '../assets/gamerwork.png';

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

        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-20'>
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
            <h3 className='text-lg font-semibold mt-3 text-white'>
              FRONTIER SOLAR TECH
            </h3>

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
            <h3 className='text-lg font-semibold mt-3 text-white'>
              CROWD CARRY
            </h3>

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:pt-15 pt-5'>
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
            <h3 className='text-lg font-semibold mt-3 text-white'>
              CLICK CART
            </h3>

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
              href='/works/incognito'
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
            <h3 className='text-lg font-semibold mt-3 uppercase text-white'>
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

        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-15'>
          {/* Project 1 */}
          <div className='flex flex-col items-start'>
            <motion.a
              href='/works/winnersbc'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Winnerswork}
                alt='Project 1'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            <h3 className='text-lg font-semibold mt-3 text-white uppercase'>
              WInners Baptist church
            </h3>

            <div className='flex gap-2 mt-3'>
              {['UI /UX design', 'Web Development'].map((text, index) => (
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
              href='/works/gamer'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='block overflow-hidden rounded-lg shadow-lg w-full'
            >
              <img
                src={Gamerwork}
                alt='Project 2'
                className='w-full object-cover rounded-lg'
              />
            </motion.a>

            {/* Project Title */}
            <h3 className='text-lg font-semibold mt-3 uppercase text-white'>
              Gamer
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
      </div>
    </>
  );
};

export default Works;
