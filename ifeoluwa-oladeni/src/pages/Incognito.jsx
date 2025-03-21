import React from 'react';
import Incog from '../assets/incog.jpg';
import Chome from '../assets/Chome.jpg';
import Cabout from '../assets/Cabout.jpg';
import Ccontact from '../assets/Ccontact.jpg';
import Cstart from '../assets/Cstart.jpg';

import { motion } from 'framer-motion';

const Incognito = () => {
    const processSteps = [
      {
        title: 'User Research',
        details: [
          " Understanding the target audience is fundamental. This phase involves gathering insights into users' needs, behaviors, and pain points through methods like interviews, surveys, and observations. The goal is to create a user-centric design that resonates with the intended audience.",
        ],
      },
      {
        title: 'Defining User Requirements',
        details: [
          '  Based on the research, designers identify specific user needs and establish clear objectives for the website. This step ensures that the design aligns with both user expectations and business goals',
        ],
      },
      {
        title: ' Wireframing',
        details: [
          ' Organizing content logically is crucial for intuitive navigation. Designers create wireframes—skeletal layouts that outline the placement of elements on each page. This stage focuses on structure without delving into visual design details.',
        ],
      },
      {
        title: 'Visual Design and UI Elements:  ',
        details: [
          ' This stage brings the wireframes to life by incorporating visual elements such as color schemes, typography, imagery, and branding guidelines. The aim is to create an aesthetically pleasing interface that enhances usability.',
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
              className='text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-left uppercase'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Incognito Tech solutions
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              At Incognito Technologies, we’re digital alchemists. We transform
              businesses with cutting-edge software, sleek designs, and
              data-driven strategies. From startups to enterprises, we craft
              digital solutions that turn challenges into opportunities. Our
              passion? Empowering your success in the digital age. Join us on
              the journey to redefine your digital frontier.   
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
                  UI/UX Design
                </motion.span>
              </h2>

              {/* Visit Site */}
              {
                <motion.a
                  href='https://incognitotechs.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Site →
                </motion.a>
              }
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
              src={Incog}
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
            <p className='text-2xl font-semibold text-gray-800'>Technology</p>
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
                At Incognito Technologies, we recognize that businesses often
                encounter significant challenges in their digital transformation
                journeys. Common obstacles include resistance to change, budget
                constraints, and a lack of clear strategy. Additionally,
                integrating new technologies can be complex, and ensuring data
                security and privacy remains a critical concern.
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
                Incognito Technologies offers a comprehensive suite of digital
                services designed to enhance business performance and drive
                growth. Our expertise includes cutting-edge software
                development, intuitive UI/UX design, and data-driven marketing
                strategies. By tailoring solutions to each client's unique
                needs, we empower businesses—from startups to enterprises—to
                navigate the digital landscape effectively, transforming
                challenges into opportunities and ensuring sustained success in
                the digital age.
              </p>
            </motion.div>
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
              src={Incog}
              alt='Crowd'
              className='w-full h-auto object-cover'
            />
          </motion.div>

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
  

        <div className='w-full bg-emerald-500 py-16 px-6 sm:px-16'>
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
              src={Chome}
              alt='Project 1'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={Cabout}
              alt='Project 2'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={Ccontact}
              alt='Project 3'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <div className='w-full'>
          <img src={Cstart} alt='site' className='w-full object-cover' />
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
            Since launching, CrowdCarry has gained rapid traction, with our
            website receiving 150+ visits in the first month alone. This strong
            engagement has helped boost awareness, attract early adopters, and
            drive business growth. With increasing demand, we’re on track to
            making portable power more accessible and convenient for Nigerians
            nationwide.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Incognito;
