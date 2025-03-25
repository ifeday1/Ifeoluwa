import React from 'react';
import Solarp from '../assets/solarp.jpg';
import Solarf from '../assets/solarf.jpg';
import F1 from '../assets/F1.jpg';
import F2 from '../assets/F2.jpg';
import F3 from '../assets/F3.jpg';

import { motion } from 'framer-motion';

const Frontier = () => {
  const processSteps = [
    {
      title: 'Research & Planning',
      details: [
        'Conducted market research & competitor analysis.',
        'Identified user needs related to solar energy adoption.',
        'Defined key features, including a product catalog & inquiry system.',
      ],
    },
    {
      title: 'Wireframing & UI Design',
      details: [
        'Created responsive wireframes & interactive prototypes in Figma.',
        'Designed a modern, clean interface with an eco-friendly color scheme.',
        'Ensured easy navigation & clear CTAs for user engagement.',
      ],
    },
    {
      title: 'Key Website Features',
      details: [
        'Homepage: Highlights brand mission, benefits & renewable energy solutions.',
        'Product Section: Displays solar panels, batteries, inverters, and power-saving tech.',
        'Includes detailed specifications & pricing information.',
        'Allows users to add products to cart, compare, and request quotes.',
        'Contact & Inquiry Forms: Simplifies consultations & customer support.',
      ],
    },
    {
      title: 'Testing & Optimization',
      details: [
        'Conducted usability testing to refine navigation & user experience.',
        'Optimized for performance, mobile responsiveness & accessibility.',
      ],
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
              FRONTIER SOLAR TECH
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
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
            </motion.p>

            {/* My Roles & Visit Site Section */}
            <motion.div
              className='text-left'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                My Roles:{' '}
                <motion.span
                  className='text-lg text-gray-600'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  User Research, Product Design
                </motion.span>
              </h2>

              {/* Visit Site */}
              <motion.a
                href='https://frontiersolartechltd.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Site →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Full-Width Image (No Padding) */}
          <motion.div
            className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={Solarp}
              alt='Project Preview'
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
          <img src={Solarf} alt='site' className='w-full object-cover' />
        </div>

        <div className='w-full px-6 sm:px-75 py-12 bg-gray-100'>
          <motion.h2
            className='text-4xl font-bold text-gray-800 mb-8 text-left'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Process
          </motion.h2>

          <div className='space-y-10'>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                  {step.title}
                </h3>
                <ul className='list-disc list-inside text-gray-600 space-y-2'>
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='w-full bg-amber-100 py-16 px-6 sm:px-16'>
          {/* Section Header */}
          {/* <motion.h2
            className='text-4xl font-bold text-white text-center mb-10'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </motion.h2> */}

          {/* Flex Images */}
          <motion.div
            className='flex flex-col sm:flex-row gap-6 justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={F1}
              alt='Project 1'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={F2}
              alt='Project 2'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={F3}
              alt='Project 3'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
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
            The Frontier Solar Tech website has successfully transformed how
            users explore and invest in solar energy solutions.
          </motion.p>

          {/* Key Achievements */}
          <motion.ul
            className='list-none space-y-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'>✅</span>
              <p className='text-lg text-gray-700'>
                Over 1,000 users actively engaging with the platform.
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'>✅</span>
              <p className='text-lg text-gray-700'>
                Increased sales by providing a seamless browsing and purchasing
                experience.
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'>✅</span>
              <p className='text-lg text-gray-700'>
                Improved customer inquiries & conversions through an intuitive
                product section.
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'>✅</span>
              <p className='text-lg text-gray-700'>
                Enhanced brand credibility with a professional, modern, and
                responsive design.
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'>✅</span>
              <p className='text-lg text-gray-700'>
                Optimized performance & accessibility, ensuring a smooth
                experience across all devices.
              </p>
            </motion.li>
          </motion.ul>

          {/* Final Statement */}
          <motion.p
            className='text-lg text-gray-700 mt-6 max-w-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            The website has not only expanded Frontier Solar Tech’s online
            presence but has also positioned the company as a leader in the
            renewable energy sector, driving growth and sustainability. 🌍⚡
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Frontier;
