import React from 'react';
import Gamer1 from '../assets/gamer1.jpg';
import Gamer2 from '../assets/gamer2.jpg';
import Gamer3 from '../assets/gamer3.jpg';
import Gamer4 from '../assets/gamer4.jpg';
import Gamer5 from '../assets/gamer5.jpg';
import { motion } from 'framer-motion';

const Gamer = () => {
  const processSteps = [
    {
      title: 'Research & Planning',
      details: [
        "We began by defining the website's objectives, identifying our target audience, and analyzing competitors to understand industry standards and opportunities for differentiation. This foundational step ensured that our design strategy was aligned with user expectations and market demands.",
      ],
    },
    {
      title: 'Content Strategy',
      details: [
        ' Developing a robust content plan was crucial. We focused on creating high-quality articles, reviews, and multimedia content that would engage our audience and provide value. This strategy not only enhances user experience but also supports search engine optimization (SEO) efforts, increasing the sites visibility.',
      ],
    },
    {
      title: 'Visual Design',
      details: [
        ' Our design team crafted a visually appealing interface that resonates with the gaming community. We employed a cohesive color scheme, dynamic graphics, and intuitive layouts to create an immersive experience. The design elements were chosen to reflect the energy and excitement inherent in gaming culture.',
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
              GAMER
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Gamer is a premier online platform dedicated to keeping gaming
              enthusiasts informed about the latest trends and top titles in the
              gaming industry. The website offers up-to-date news on trending
              games, in-depth reviews, and curated lists of top games across
              various genres and platforms. By providing timely and relevant
              content, Gamer ensures that its audience stays engaged and
              well-informed about the dynamic world of gaming.
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
              src={Gamer1}
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
            <p className='text-2xl font-semibold text-gray-800'>Gaming</p>
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
                In the rapidly evolving gaming industry, players often face
                significant challenges in discovering trending and top-quality
                games. The sheer volume of new releases can be overwhelming; for
                instance, in 2024, over 19,000 games were launched on Steam
                alone, making it difficult for gamers to identify titles that
                align with their preferences.
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
                To tackle the challenges of game discoverability and market
                saturation, we employ a user-centered design approach to create
                intuitive interfaces that facilitate seamless navigation. By
                deeply understanding our users' needs and preferences, we design
                platforms that guide players effortlessly through curated game
                selections, personalized recommendations, and interactive
                features, enhancing their overall experience and helping them
                find games that truly resonate with their interests.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className='w-full'>
          <img src={Gamer2} alt='site' className='w-full object-cover' />
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

        <div className='w-full bg-fuchsia-200 py-16 px-6 sm:px-16'>
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
              src={Gamer3}
              alt='Project 1'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={Gamer4}
              alt='Project 2'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={Gamer5}
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

export default Gamer;
