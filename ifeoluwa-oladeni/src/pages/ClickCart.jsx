import React from 'react';
import { useState, useRef } from 'react';
import Crowdcarry1 from '../assets/crowdcarry1.jpg';
import Clickcartlogo from '../assets/clickcartlogo.png';
import Clickcartlogo1 from '../assets/Clickcartlogo1.jpg';
import Clickphone from '../assets/clickphone.png';
import Clickphone1 from '../assets/clickphone1.jpg';
import Click from '../assets/click.jpg';
import Chome from '../assets/Chome.jpg';
import Cabout from '../assets/Cabout.jpg';
import Ccontact from '../assets/Ccontact.jpg';
import Cstart from '../assets/Cstart.jpg';

import { motion } from 'framer-motion';
import ColourPallete from '../compontents/ColourPallete';

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

          <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative bg-white rounded-xl p-10 overflow-hidden'>
            {/* Left Section - Text & Logos */}
            <motion.div
              className='flex flex-col gap-6 md:w-1/2 z-10'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo Mark Label */}
              <div className='bg-gray-800 text-white px-4 py-2 w-max rounded-lg'>
                Primary Typography{' '}
              </div>
              {/* Large Title */}
              <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Clash Display
              </h1>

              <motion.h1
                className='text-2xl md:text-3xl  text-gray-800 mb-6 text-left'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z{' '}
                <span className=' lowercase'>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </span>{' '}
                1234567890`!@#$%^&*()_+
              </motion.h1>
            </motion.div>

            {/* Right Section - Phone Image (Inside White Background) */}
            <motion.h1
              className='text-5xl md:text-9xl font-bold text-gray-800 mb-6 text-left'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Aa
            </motion.h1>
          </div>
          <div>
            <ColourPallete />
          </div>

          {/* Full-Width Image (No Padding) */}
          <motion.div
            className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={Click}
              alt='Crowd'
              className='w-full h-auto object-cover'
            />
          </motion.div>
        </div>

        <div className='w-full  flex flex-col sm:flex-row px-6 sm:px-40 py-12 gap-7'>
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
            <p className='text-2xl font-semibold text-gray-800 mb-6'>2024</p>

            <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
              Industry
            </h3>
            <p className='text-2xl font-semibold text-gray-800'>Ecommerce</p>
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
                Many users of the e-commerce platform are experiencing
                difficulties in finding relevant products, navigating through
                the website, and completing purchases. This leads to
                frustration, abandoned shopping carts, and ultimately, lost
                revenue for the company. Additionally, users may encounter
                issues with slow page load times, confusing checkout processes,
                and limited payment options, further impacting their overall
                shopping experience.
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
                Personalized Recommendations: Leverage data analytics and
                machine learning algorithms to provide personalized product
                recommendations based on users' browsing history, purchase
                behavior, and preferences. Streamline the navigation structure
                of the website to make it easier for users to find products and
                navigate between different categories and pages. 
              </p>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </>
  );
};

export default ClickCart;
