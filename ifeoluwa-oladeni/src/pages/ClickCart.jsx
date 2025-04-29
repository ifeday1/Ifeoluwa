import React from 'react';
import Clickcartlogo from '../assets/clickcartlogo.png';
import Clickcartlogo1 from '../assets/Clickcartlogo1.jpg';
import Clickphone1 from '../assets/clickphone1.jpg';
import Click from '../assets/click.jpg';
import Clickuser from '../assets/clickuser.png';

import H1 from '../assets/h1.png';
import H2 from '../assets/h2.png';
import H3 from '../assets/h3.png';
import H4 from '../assets/h4.png';
import H5 from '../assets/h5.png';
import H6 from '../assets/h6.png';
import H7 from '../assets/h7.png';
import H8 from '../assets/h8.png';
import iPhone from '../assets/iphone1.png';
import iPhone2 from '../assets/iphone2.png';

import { motion } from 'framer-motion';
import ColourPallete from '../compontents/ColourPallete';

const ClickCart = () => {
  // Goals Data
  const goals = [
    {
      icon: '📈',
      title: 'Increase Sales Revenue',
      description:
        'This can involve attracting new customers, increasing average order value, and maximizing customer lifetime value.',
    },
    {
      icon: '🔄',
      title: 'Expand Customer Base',
      description:
        'This involves marketing efforts to raise brand awareness, drive website traffic, and convert visitors into customers.',
    },
    {
      icon: '⏳',
      title: 'Improve Customer Experience',
      description:
        'Goals related to customer experience may include reducing friction in the buying process and improving website usability.',
    },
    {
      icon: '✅',
      title: 'Improve Operational Efficiency',
      description:
        'This may include optimizing inventory management, reducing shipping times, and automating repetitive tasks.',
    },
    {
      icon: '📱',
      title: 'Enhance Mobile Experience',
      description:
        'Optimizing the mobile website or app for performance, usability, and compatibility across different screen sizes.',
    },
    {
      icon: '📊',
      title: 'Achieve Sustainable Growth',
      description:
        'Making strategic decisions that support business growth while maintaining financial stability and customer satisfaction.',
    },
  ];
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
                  issues with slow page load times, confusing checkout
                  processes, and limited payment options, further impacting
                  their overall shopping experience.
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
                  of the website to make it easier for users to find products
                  and navigate between different categories and pages. 
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className='w-full py-8 flex justify-center items-center'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative bg-white shadow-lg rounded-xl p-10 overflow-hidden'>
              
              <motion.div
                className='flex flex-col gap-6 md:w-1/2 z-10'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
            
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

        <div className='w-full py-16 bg-blue text-white flex flex-col items-center'>
          {/* Title */}
          <motion.h1
            className='text-4xl font-bold uppercase mb-8 text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Goals of the App
            <div className='w-12 h-1 bg-pink-500 mx-auto mt-2'></div>
          </motion.h1>

          {/* Goals Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start transition-all hover:scale-105'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className='text-4xl mb-4'>{goal.icon}</div>

                {/* Title */}
                <h2 className='text-xl font-semibold mb-2'>{goal.title}</h2>

                {/* Description */}
                <p className='text-gray-400'>{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-Width Image (No Padding) */}
        <motion.div
          className='w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className=' md:text-4xl text-3xl font-bold uppercase md:px-30 px-7 py-10 text-left'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            USERFLOW
          </motion.h1>

          <img
            src={Clickuser}
            alt='Crowd'
            className='w-full h-auto object-cover md:px-30 px-7'
          />
        </motion.div>

        <div className='w-full bg-slate-400 py-16 px-4 mt-10'>
          {/* Flex Container */}
          <motion.div
            className='flex flex-wrap gap-4 justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={H1}
              alt='Project 1'
              className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={H2}
              alt='Project 2'
              className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={H3}
              alt='Project 3'
              className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={H4}
              alt='Project 3'
              className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className='w-full py-5'>
            {/* Flex Container */}
            <motion.div
              className='flex flex-wrap gap-4 justify-center items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={H5}
                alt='Project 1'
                className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={H6}
                alt='Project 2'
                className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={H7}
                alt='Project 3'
                className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={H8}
                alt='Project 3'
                className='w-5/25 sm:w-1/5 object-cover rounded-lg shadow-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>

        <div className='w-full bg-blue py-16 px-4 sm:px-16'>
          {/* Flex Container */}
          <motion.div
            className='flex flex-wrap gap-4 justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={iPhone}
              alt='Project 1'
              className='w-[48%] sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={iPhone2}
              alt='Project 2'
              className='w-[48%] sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <div className='w-full bg-gray-100 py-16 px-6 sm:px-75'>
          {/* Section Header */}
          <motion.h2
            className='text-4xl font-bold text-gray-800 text-left mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Outcome
          </motion.h2>

          {/* Outcome Content */}
          <motion.p
            className='text-lg text-gray-700 mb-6 max-w-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The launch of the Gamer website yielded significant positive
            outcomes, notably enhancing user engagement and expanding our
            audience reach. By implementing a user-centered design and offering
            curated content, we observed increased website traffic and prolonged
            user interaction, indicating a strong alignment with our target
            audience's preferences. Additionally, our strategic use of social
            media and influencer partnerships further amplified our reach,
            attracting a broader demographic of gaming enthusiasts. These
            results underscore the effectiveness of our design and marketing
            strategies in establishing Gamer as a trusted platform within the
            gaming community.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default ClickCart;
