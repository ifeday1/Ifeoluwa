import React from 'react';
import Wbc from '../assets/wbc.jpg';
import Djc from '../assets/djc.jpg';
import Chome from '../assets/Chome.jpg';
import Cabout from '../assets/Cabout.jpg';
import Ccontact from '../assets/Ccontact.jpg';
import Cstart from '../assets/Cstart.jpg';

import { motion } from 'framer-motion';

const WinnersBC = () => {
  const processSteps = [
    {
      title: 'Research & Planning',
      details: [
        "We began by defining the website's objectives, such as enhancing communication, providing information about services and events, and extending outreach efforts. This phase also involved analyzing technological requirements, user needs, and potential risks.",
      ],
    },
    {
      title: 'Wireframing ',
      details: [
        "We developed a sitemap to outline the website's structure and created wireframes to visualize page layouts. This step ensured a clear plan for navigation and content placement.",
      ],
    },
    {
      title: 'Design and Layout',
      details: [
        "We focused on the visual aspects, including selecting appropriate typography, imagery, and color schemes that align with the church's identity. The design aimed to create an engaging and user-friendly interface.",
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
              className='text-4xl md:text-5xl font-semibold text-gray-800 mb-6 text-left '
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              WInners Baptist Church
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Winners Baptist Church is more than a place of worship it's a
              thriving spiritual home where lives are nurtured, faith is
              deepened, and communities are built. Week after week, its doors
              open not just for worship, but for meaningful connection. Through
              heartfelt services, vibrant youth and children’s ministries, and
              uplifting music and media teams, the church creates spaces for
              every age and stage to grow spiritually. From teaching biblical
              truths in practical ways to reaching out with love through
              community programs and outreach efforts, Winners Baptist Church is
              committed to shaping individuals who make a difference — both in
              their walk with God and in the world around them. It's a place
              where faith comes alive, friendships are formed, and purpose is
              discovered.
            </motion.p>

            {/* My Roles & Visit Site Section */}
            <motion.div
              className='text-left'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              <h2 className='text-2xl font-medium text-gray-800 mb-2'>
                My Roles:{' '}
                <motion.span
                  className='text-lg text-gray-600'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  UI/UX Design, Web Development
                </motion.span>
              </h2>
              {/* Visit Site */}
              <motion.a
                href='https://winnersbaptistchurch.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Site →
              </motion.a>{' '}
              *
            </motion.div>
          </motion.div>

          {/* Full-Width Image (No Padding) */}
          <motion.div
            className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img src={Wbc} alt='Crowd' className='w-full h-auto object-cover' />
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
            <p className='text-2xl font-semibold text-gray-800 mb-6'>
              Religious Organisation
            </p>
            <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
              Contributors
            </h3>
            <p className='text-base font-medium text-gray-800'>
             Moyinoluwa Sodeinde—{' '}
              <span className='text-gray-600'>Copywriter</span>
            </p>
            <p className='text-base font-medium text-gray-800'>
            David Oladunni —{' '}
              <span className='text-gray-600'>Project Manager</span>
            </p>
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
                Winners Baptist Church recognizes that lacking an online
                presence limits its ability to reach and engage with the
                community effectively. To overcome this, the church has
                developed a website to enhance accessibility, communication, and
                outreach, ensuring it meets the evolving needs of its
                congregation in the digital age.
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
                To overcome the challenges of limited online presence, Winners
                Baptist Church has developed a comprehensive website to enhance
                accessibility, communication, and community engagement. This
                digital platform serves as a central hub for information about
                services, events, and resources, allowing both current members
                and potential visitors to connect with the church more
                effectively. By embracing this digital approach, the church aims
                to strengthen its outreach and fulfill its mission in the modern
                world.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className='w-full'>
          <img src={Djc} alt='site' className='w-full object-cover' />
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

        <div className='w-full bg-emerald-500 pt-16 px-6 sm:px-16'>
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
            Since launching its comprehensive website, Winners Baptist Church
            has experienced significant growth and an enhanced online presence.
            The digital platform has become a central hub for both existing
            members and newcomers, offering easy access to information about
            services, events, and community programs. This increased
            accessibility has led to higher engagement, with more individuals
            participating in church activities and connecting through online
            channels. The website's user-friendly design and regularly updated
            content have also attracted a broader audience, extending the
            church's reach beyond its immediate locality. Overall, the church's
            investment in its online presence has strengthened community bonds
            and facilitated spiritual growth among its congregation.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default WinnersBC;
