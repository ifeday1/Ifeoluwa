import React from 'react';
import Incog from '../assets/incog.jpg';
import Mision from '../assets/mision.jpg';
import IHome from '../assets/IHome.jpg';
import IAboutus from '../assets/IAboutus.jpg';
// import Iportflio from '../assets/Iportflio.jpg';
import Iservice from '../assets/Iservice.jpg';
import Ilogo from '../assets/ilogo.svg';
import Dis from '../assets/dis.svg';

import { motion } from 'framer-motion';

const Incognito = () => {
  return (
    <>
      <div className=' bg-white'>
        <div className='w-full min-h-screen flex flex-col'>
          <motion.div
            className='px-10 sm:px-75 py-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className='text-4xl md:text-5xl font-semibold text-gray-800 mb-6 text-left '
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
              In a world where digital presence shapes success, Incognito
              Technologies stands as the quiet force behind impactful business
              transformations. They don’t just build software — they create
              digital experiences that solve real problems and unlock new
              opportunities. From startups launching their first product to
              enterprises streamlining operations, Incognito blends sleek
              design, smart strategy, and powerful tech into solutions that
              drive growth. Their expertise spans intuitive interfaces, robust
              backend systems, and data-driven tools — all crafted to bring
              clarity and results. At the core, Incognito is more than a service
              provider; they’re a trusted partner helping businesses navigate
              the digital age with confidence and purpose.
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
              src={Ilogo}
              alt='logo'
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
            <p className='text-2xl font-semibold text-gray-800 mb-6'>
              Technology
            </p>
            <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
              Contributors
            </h3>
            <p className='text-base font-medium text-gray-800'>
              James Oboraruvwe—{' '}
              <span className='text-gray-600'>Software Developer</span>
            </p>
            <p className='text-base font-medium text-gray-800'>
              Ebubechukwu Uwadia —{' '}
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
            src={Mision}
            alt='Crowd'
            className='w-full h-auto object-cover'
          />
        </motion.div>

        <section className='bg-white px-4 py-12 max-w-4xl mx-auto text-[#111]'>
          {/* Heading */}
          <h2 className='text-2xl md:text-3xl font-semibold mb-8'>
            Turning complex ideas into intuitive digital experiences
          </h2>
          {/* Intro Paragraph */}

          <p className='text-base md:text-lg mb-6'>
            When tasked with creating the website for Incognito Technologies,
            the goal was clear: build a digital front door that reflects the
            company’s expertise while engaging potential clients with clarity
            and confidence. The challenge wasn’t just about aesthetics — it was
            about crafting a user experience that communicates trust, tells a
            compelling story, and makes action easy.
          </p>
        </section>

        <div>
          <motion.div>
            <img
              src={Incog}
              alt='Crowd'
              className='w-full h-auto object-cover'
            />
          </motion.div>
        </div>

        <section className='w-full bg-white py-16 px-4 md:px-12 text-gray-800'>
          {/* Section: Understanding the Brand */}
          <div className='max-w-6xl mx-auto space-y-8'>
            <div>
              <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                Understanding the Brand and the User
              </h2>
              <p className='text-base md:text-lg mb-4'>
                Every successful UX project starts with listening — and that’s
                exactly how we approached the redesign of Incognito
                Technologies’ website. The goal was to create something more
                than a digital brochure. The website had to speak for the brand,
                build trust instantly, and convert curious visitors into real
                business leads.
              </p>
              <p className='text-base md:text-lg'>
                To do that, I first had to understand two sides of the story:
              </p>

              {/* Side-by-side buttons */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                <div className='bg-[#EAE2F8] py-3 px-4 rounded-md text-center'>
                  What Incognito stands for,
                </div>
                <div className='bg-[#D9F2EC] py-3 px-4 rounded-md text-center'>
                  Who their ideal users are and what they need.
                </div>
              </div>
            </div>

            {/* Internal Discovery */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
              <div>
                <h3 className='text-xl font-semibold mb-3'>
                  🔍 Internal Discovery
                </h3>
                <p className='mb-3'>
                  I began with a series of discovery workshops and stakeholder
                  interviews. I asked open-ended questions to uncover their
                  story:
                </p>
                <ul className='list-disc list-inside space-y-1 mb-4'>
                  <li>What’s the unique value Incognito brings to clients?</li>
                  <li>What does a successful client journey look like?</li>
                  <li>
                    What kind of impression do they want visitors to leave with?
                  </li>
                </ul>
                <p>
                  From these sessions, it became clear that Incognito wasn’t
                  just a tech vendor — they positioned themselves as strategic
                  partners, using creativity and code to solve business
                  challenges. They were bold but not boastful, professional but
                  not rigid. This guided not only tone and layout but the entire
                  UX tone and hierarchy.
                </p>
              </div>

              {/* Image */}
              <div className='rounded-lg overflow-hidden'>
                <img
                  src={Dis}
                  alt='Discovery'
                  className='w-full h-auto object-cover rounded-lg shadow'
                />
              </div>
            </div>

            {/* Voice of the User */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>
                Listening to the Voice of the User
              </h3>
              <p>
                To build a website that truly speaks to Incognito Technologies’
                audience, I started by talking directly with five professionals
                who closely match their ideal client profile:
              </p>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>2 startup founders navigating the early growth phase</li>
                <li>2 mid-level managers in fast-paced tech startups</li>
                <li>1 product lead from a larger enterprise organization</li>
              </ul>
              <p>
                These conversations uncovered not just needs, but specific
                emotional drivers and pain points.
              </p>
            </div>

            {/* User Quotes */}
            <div className='mt-8'>
              <h3 className='text-xl font-semibold mb-6'>
                What they said — and what it meant
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Card 1 */}
                <div className='bg-[#EAE2F8] p-5 rounded-md shadow-sm'>
                  <p className='font-medium text-[#3D348B] mb-2'>
                    "Show me proof you’ve done this before."
                  </p>
                  <p className='text-sm'>
                    This insight revealed a strong need for credibility and
                    validation. Users didn’t just want to know what Incognito
                    Technologies does — they wanted to see clear examples of
                    results and past work. Case studies, testimonials and real
                    client logos were essential to building trust.
                  </p>
                </div>

                {/* Card 2 */}
                <div className='bg-[#FFF7D6] p-5 rounded-md shadow-sm'>
                  <p className='font-medium text-[#BC6C25] mb-2'>
                    "Don’t make me work to figure out what you do."
                  </p>
                  <p className='text-sm'>
                    Clarity was key. The homepage had to immediately communicate
                    who Incognito is, what they offer and how they’re different
                    — without jargon. Users preferred simplified language, clean
                    layouts, and a focus on benefits rather than technicalities.
                  </p>
                </div>

                {/* Card 3 */}
                <div className='bg-[#D9F2EC] p-5 rounded-md shadow-sm'>
                  <p className='font-medium text-[#2A9D8F] mb-2'>
                    "Let me get in touch without filling 12 fields."
                  </p>
                  <p className='text-sm'>
                    For busy professionals, time is everything. A long or
                    complicated contact process was a major turnoff. Users
                    wanted quick ways to engage — through a short contact form,
                    integrated live chat, or even direct WhatsApp and email
                    links.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className='mt-8 text-base md:text-lg'>
              These responses helped shape the foundation of the website’s UX —
              focusing on speed, trust, and clarity to reduce friction and make
              the experience feel effortless for potential clients.
            </p>
          </div>
        </section>

        <div className='w-full bg-purple-300 pt-16 px-6 sm:px-16'>
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
              src={IHome}
              alt='Project 1'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={IAboutus}
              alt='Project 2'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={Iservice}
              alt='Project 3'
              className='w-full sm:w-1/3 object-cover rounded-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* <div className='w-full'>
          <img src={Iportflio} alt='site' className='w-full object-cover' />
        </div> */}

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
            Enhanced User Engagement: The intuitive and interactive design
            elements encourage users to explore the site more thoroughly,
            increasing the time spent on each page and reducing bounce rates.
            This heightened engagement often leads to higher conversion rates.
            Improved User Satisfaction: By focusing on user experience (UX)
            principles, the website offers seamless navigation and
            accessibility, resulting in higher user satisfaction and repeat
            visits. Business Growth: The combination of increased user
            engagement and satisfaction contributes to business growth, as
            satisfied users are more likely to become loyal customers and
            advocates for the brand.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Incognito;
