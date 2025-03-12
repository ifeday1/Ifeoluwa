import { useState, useRef } from 'react';
import Solarp from '../assets/solarp.jpg';
import Solarf from '../assets/solarf.jpg';

import { motion } from 'framer-motion';

const Frontier = () => {
  return (
    <>
      <div className=' bg-white'>
        <div className='w-full min-h-screen flex flex-col'>
          {/* Content Section */}
          <div className='px-10 sm:px-75 py-12'>
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-left'>
              FRONTIER SOLAR TECH
            </h1>

            {/* Content Text */}
            <p className='text-lg text-gray-600 mb-8 text-left max-w-2xl'>
              Frontier Solar Tech is committed to revolutionizing energy
              solutions through solar power, renewable energy, and power-saving
              technologies. Our mission is to provide sustainable, efficient,
              and cost-effective energy solutions that reduce reliance on fossil
              fuels and promote a cleaner, greener future. We specialize in
              high-performance solar systems, innovative renewable energy
              solutions, and smart power-saving technologies designed to
              maximize energy efficiency for homes, businesses, and industries.
              By harnessing the power of the sun, we help our clients lower
              energy costs, reduce carbon footprints, and achieve energy
              independence.
            </p>

            {/* My Roles & Visit Site Section */}
            <div className=' text-left'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                My Roles:{' '}
                <span className='text-lg text-gray-600 mb-4'>
                  {' '}
                  User Research, Product Design
                </span>
              </h2>

              {/* Visit Site */}
              <a
                href='https://frontiersolartechltd.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
              >
                Visit Site →
              </a>
            </div>
          </div>

          {/* Full-Width Image (No Padding) */}
          <div className='w-full'>
            <img
              src={Solarp}
              alt='Project Preview'
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='w-full min-h-screen flex flex-col sm:flex-row px-6 sm:px-40 py-12 gap-7'>
          {/* First Flex - Year & Industry */}
          <motion.div
            className='flex flex-col py-6 sm:py-0 w-full sm:w-1/3'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
              Year
            </h3>
            <p className='text-2xl font-semibold text-gray-800 mb-6'>2022</p>

            <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
              Industry
            </h3>
            <p className='text-2xl font-semibold text-gray-800'>Cleantech</p>
          </motion.div>

          {/* Second Flex - Challenge & Solution */}
          <motion.div
            className='flex flex-col gap-8 py-6 sm:py-0 w-full sm:w-2/3'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
                The Challenge
              </h2>
              <p className='text-lg text-gray-600'>
                The growing dependence on traditional energy sources has led to
                rising electricity costs, increased carbon emissions, and
                environmental degradation. Many homes, businesses, and
                industries struggle with inefficient energy consumption and a
                lack of reliable, sustainable alternatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <h2 className='text-3xl font-semibold text-gray-800 mb-2'>
                The Solution
              </h2>
              <p className='text-lg text-gray-600'>
                At Frontier Solar Tech, we tackle this challenge by providing
                innovative solar power solutions, renewable energy technologies,
                and smart power-saving systems.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className='w-full'>
          <img
            src={Solarf}
            alt='site'
            className='w-full object-cover'
          />
        </div>
      </div>
    </>
  );
};

export default Frontier;
