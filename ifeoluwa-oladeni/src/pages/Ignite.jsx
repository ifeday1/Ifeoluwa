import React from 'react';
import { motion } from 'framer-motion';
import Acc from '../assets/acc.svg';
import Acc1 from '../assets/acc1.svg';
import Logoa from '../assets/logoa.svg';
import Bia from '../assets/bia.svg';
import S1 from '../assets/S1.png';
import S2 from '../assets/S2.png';
import S3 from '../assets/S3.png';  
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';

const Ignite = () => {
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
              IgnitePro Community
            </motion.h1>

            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              IgnitePro Community is a youth-focused NGO committed to empowering
              students, graduates, and young professionals to succeed in life
              and career. More than just an organization, it's a platform where
              young people can explore their passions, unlock their potential,
              and build a future they’re proud of. Through structured programs,
              hands-on workshops, and mentorship opportunities, IgnitePro helps
              its members develop essential skills — from leadership and
              communication to career readiness and personal growth. The
              community creates a space for learning, connection, and
              transformation, giving young individuals the tools and confidence
              to thrive in a fast-changing world. By focusing on both personal
              and professional development, IgnitePro Community plays a vital
              role in shaping the next generation of leaders — equipping them
              not just to survive, but to stand out and succeed.
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
                  UI /UX design, Web Development
                </motion.span>
              </h2>

              {/* Visit Site */}
              <motion.a
                href='https://igniteprocommunity.org/'
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

          <div className='relative  w-screen h-auto mx-auto '>
            <img
              src={Acc}
              alt='Hero Background'
              className='w-full h-auto object-cover'
            />
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
              <p className='text-2xl font-semibold text-gray-800 mb-6'>2025</p>

              <h3 className='text-lg text-gray-500 uppercase tracking-wide'>
                Industry
              </h3>
              <p className='text-2xl font-semibold text-gray-800'>
                Human Capital Development
              </p>
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
                  Creating the IgnitePro Community website meant building from
                  the ground up — with the goal of helping more young people
                  discover the platform, understand what it offers, and take
                  action easily. The key challenges were: Boosting visibility
                  for programs and events. Making event registration simple and
                  fast. Ensuring mobile users had a smooth experience.
                  Structuring content clearly so users could find what they need
                  without confusion. And most importantly, building trust and
                  credibility through design — especially for first-time
                  visitors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
              >
                <h2 className='text-3xl font-semibold text-gray-800 '>
                  The Solution
                </h2>
                <p className='text-lg text-gray-600'>
                  To solve these challenges, I designed the IgnitePro Community
                  website with a strong focus on clarity, accessibility, and
                  user trust. I structured content around key user needs —
                  making it easy to find programs, events, and community stories
                  within a few clicks. The registration flow was simplified with
                  short forms, clear CTAs, and instant confirmations to reduce
                  drop-offs. Since most users are mobile-first, the site was
                  fully optimized for smaller screens, ensuring a smooth,
                  responsive experience. I introduced highlight sections for
                  upcoming events, testimonials, and success stories to build
                  credibility and inspire new users. A clear visual hierarchy
                  and consistent branding helped make navigation intuitive, even
                  for first-time visitors.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className=' w-full flex justify-center items-center bg-[#5D1AE5] py-20 md:py-48'>
          <img
            src={Logoa}
            alt='Logo'
            className='w-[180px] sm:w-[220px] md:w-[300px] lg:w-[350px] object-contain'
          />
        </div>

        <section className='bg-white px-4 py-12 max-w-4xl mx-auto text-[#111]'>
          {/* Heading */}
          <h2 className='text-2xl md:text-3xl font-semibold mb-8'>
            Bringing IgnitePro to Life
          </h2>
          {/* Intro Paragraph */}

          <p className='text-base md:text-lg mb-6'>
            Designing the IgnitePro Community website meant creating a digital
            space that truly connects with students, graduates, and young
            professionals. I followed a human-centered UX process to ensure
            every design decision aligned with real user needs and goals. To
            better understand the users, I conducted one-on-one conversations
            with 10 people who fell within IgnitePro’s target audience. This
            included: 5 students (both undergraduates and final-year students) 3
            recent graduates (within 1–2 years of graduation) 2 early-career
            professionals (employed or freelancing)
          </p>
        </section>

        <div className='relative  w-screen h-auto mx-auto '>
          <img
            src={Acc1}
            alt='Hero Background'
            className='w-full h-auto object-cover'
          />
        </div>

        <section className='bg-white px-4 py-12 max-w-4xl mx-auto text-[#111]'>
          {/* Heading */}
          <h2 className='text-2xl md:text-3xl font-semibold mb-8'>
            Designing a Website That Builds Trust and Drives Action
          </h2>
          {/* Intro Paragraph */}

          <p className='text-base md:text-lg mb-6'>
            To make the IgnitePro Community platform stand out, the goal was to
            build a website that felt real, trustworthy, and inspiring. Instead
            of using stock images, I showcased authentic photos from past events
            to reflect the energy of the community. Multiple contact options
            were also added to make it easy for users to connect. Working with a
            content strategist, we gave the site a clear and relatable voice —
            one that feels reliable, welcoming, and empowering. After several
            rounds of ideation and testing, we arrived at a clean, focused
            design with strong messaging and CTAs that encourage users to
            explore and register for programs. The site was built with React,
            allowing the IgnitePro team to easily manage events and content.
          </p>
        </section>

        <section className='relative bg-[#f0eaff] pt-5 md:pt-28'>
          <div className='relative max-w-7xl w-full h-auto mx-auto px-4 sm:px-6 lg:px-8'>
            <img
              src={Bia}
              alt='Hero Background'
              className='w-full h-auto object-cover'
            />

            {/* Optional Overlay */}
            {/* <div className='absolute inset-0 bg-black bg-opacity-50'></div> */}
          </div>
        </section>

        <section className='w-full py-12 bg-white'>
          <div className='max-full mx-auto flex flex-col md:flex-row items-center gap-6'>
            {/* Image One */}
            <img
              src={S1}
              alt='First'
              className='w-full md:w-1/2  shadow-md object-cover'
            />

            {/* Image Two */}
            <img
              src={S2}
              alt='Second'
              className='w-full md:w-1/2 shadow-md object-cover'
            />
          </div>
        </section>

        <section className='bg-[#EFE2FF] relative overflow-hidden py-10'>
          <div className='scale-110'>
            <img src={S3} alt='Second' className='w-full object-cover' />
          </div>
        </section>

        <section className='w-full p bg-white'>
          <div className='max-full mx-auto flex flex-col md:flex-row items-center gap-4'>
            {/* Image One */}
            <img
              src={S4}
              alt='First'
              className='w-full md:w-1/2  shadow-md object-cover'
            />

            {/* Image Two */}
            <img
              src={S5}
              alt='Second'
              className='w-full md:w-1/2 shadow-md object-cover'
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Ignite;
