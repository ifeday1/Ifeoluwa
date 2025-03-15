import React from 'react';
import { useState, useRef } from 'react';
import Crowdcarry1 from '../assets/crowdcarry1.jpg';
import Clickcartlogo from '../assets/clickcartlogo.png';
import Clickcartlogo1 from '../assets/Clickcartlogo1.jpg';
import Clickphone from '../assets/clickphone.png';
import Clickphone1 from '../assets/clickphone1.jpg';
import F3 from '../assets/F3.jpg';
import Chome from '../assets/Chome.jpg';
import Cabout from '../assets/Cabout.jpg';
import Ccontact from '../assets/Ccontact.jpg';
import Cstart from '../assets/Cstart.jpg';

import { motion } from 'framer-motion';

const ClickCart = () => {
  return (
    <>
      <div className=' bg-white'>
        <div className='w-full min-h-screen flex flex-col'>
          {/* Content Section */}
          <motion.div
            className='px-10 sm:px-75 py-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Heading */}
            <motion.h1
              className='text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-left'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              CLICK CART
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Click Cart is an innovative e-commerce platform designed to
              provide businesses with a seamless digital storefront and enhance
              the customer checkout experience. Leveraging modern web
              development technologies, Click Cart enables users to browse and
              purchase products online with ease.
            </motion.p>

            {/* My Roles & Visit Site Section */}
            <motion.div
              className='text-left'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              <h2 className='text-2xl font-semibold text-gray-800 '>
                My Roles:{' '}
                <motion.span
                  className='text-lg text-gray-600'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  UI /UX design, UX Writing, UX Research, Brand Identity Design
                </motion.span>
              </h2>
            </motion.div>
          </motion.div>

          <div className='w-full py-8 flex justify-center items-center'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative bg-white shadow-lg rounded-xl p-10 overflow-hidden'>
              {/* Left Section - Text & Logos */}
              <motion.div
                className='flex flex-col gap-6 md:w-1/2 z-10'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Large Title */}
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                  Brand Identity
                </h1>

                {/* Logo Mark Label */}
                <div className='bg-gray-800 text-white px-4 py-2 w-max rounded-lg'>
                  Logo Mark
                </div>

                {/* Logos Display */}
                <div className='flex items-center gap-4'>
                  <img
                    src={Clickcartlogo}
                    alt='Logo 1'
                    className='w-20 md:w-28'
                  />
                  <img
                    src={Clickcartlogo1}
                    alt='Logo 2'
                    className='w-20 md:w-28'
                  />
                </div>
              </motion.div>

              <motion.div
                className='md:w-1/2 flex justify-end relative py-6'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className='relative w-full flex justify-end'>
                  <img
                    src={Clickphone1}
                    alt='Phone Mockup'
                    className='w-[250px] md:w-[300px] bottom-0 right-0'
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative bg-white shadow-lg rounded-xl p-10 overflow-hidden'>
            {/* Left Section - Text & Logos */}
            <motion.div
              className='flex flex-col gap-6 md:w-1/2 z-10'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Large Title */}
              <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Brand Identity
              </h1>

              {/* Logo Mark Label */}
              <div className='bg-gray-800 text-white px-4 py-2 w-max rounded-lg'>
                Logo Mark
              </div>

              {/* Logos Display */}
              <div className='flex items-center gap-4'>
                <img
                  src={Clickcartlogo}
                  alt='Logo 1'
                  className='w-20 md:w-28'
                />
                <img
                  src={Clickcartlogo1}
                  alt='Logo 2'
                  className='w-20 md:w-28'
                />
              </div>
            </motion.div>

            {/* Right Section - Phone Image (Inside White Background) */}
            <motion.div
              className='md:w-1/2 flex justify-end relative py-6'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='relative w-full flex justify-end'>
                <img
                  src={Clickphone1}
                  alt='Phone Mockup'
                  className='w-[250px] md:w-[300px] bottom-0 right-0'
                />
              </div>
            </motion.div>
          </div>

          {/* Full-Width Image (No Padding) */}
          <motion.div
            className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={Crowdcarry1}
              alt='Crowd'
              className='w-full h-auto object-cover'
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ClickCart;
