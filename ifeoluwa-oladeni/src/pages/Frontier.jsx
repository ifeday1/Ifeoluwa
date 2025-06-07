import React from 'react';
import Solarp from '../assets/solarp.jpg';
import Solarf from '../assets/solarf.jpg';
import F1 from '../assets/F1.jpg';
import F2 from '../assets/F2.jpg';
import F3 from '../assets/F3.jpg';
import Fea from '../assets/fea.svg';
import Fea1 from '../assets/fea1.svg';
// import Fea2 from '../assets/fea2.svg';
import Fea3 from '../assets/fea3.svg';
import Fea4 from '../assets/fea4.svg';
import Fea5 from '../assets/fea5.svg';
import Sea from '../assets/sea.svg';
import Sea1 from '../assets/sea1.svg';
import Sea2 from '../assets/sea2.svg';

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

  const challenges = [
    {
      title: 'Home owners',
      color: 'bg-green-300 text-green-900',
      text: 'Many users were interested in solar energy but admitted they didn’t fully understand how it worked, what it would cost, or how to get started. Technical terms like “kilowatt-hour,” “grid-tied,” and “energy offset” were confusing and discouraged further exploration.',
      stat: '7 out of 15 Home owners face this Challenge',
    },
    {
      title: 'Home owners',
      color: 'bg-green-300 text-green-900',
      text: 'Users wanted the ability to compare different types of solar solutions — rooftop, portable, hybrid, etc. They were particularly drawn to features that could help them choose based on their specific needs (e.g., home size, budget, location).',
      stat: '11 out of 15 Home owners face this Challenge',
    },
    {
      title: 'Home owners',
      color: 'bg-green-300 text-green-900',
      text: 'Users were unsure about what steps to take after choosing a system — from installation to maintenance. They preferred having a guided, step-by-step experience.',
      stat: '9 out of 15 Home owners face this Challenge',
    },
    {
      title: 'Business owners',
      color: 'bg-blue-300 text-blue-900',
      text: 'Business owners were concerned about the initial investment and whether it would pay off over time.',
      stat: '7 out of 15 Business owners face this Challenge',
    },
    {
      title: 'Business owners',
      color: 'bg-blue-300 text-blue-900',
      text: 'They needed proof that solutions were reliable and backed by credible certifications or success stories.',
      stat: '11 out of 15 Business owners face this Challenge',
    },
    {
      title: 'Facility managers',
      color: 'bg-pink-400 text-purple-900',
      text: 'They needed assurance that systems would perform consistently and integrate smoothly with existing infrastructure.',
      stat: '7 out of 15 Facility managers face this Challenge',
    },
    {
      title: 'Facility managers',
      color: 'bg-pink-400 text-purple-900',
      text: 'Many felt there was insufficient information about ongoing maintenance and support after installation.',
      stat: '6 out of 15 Facility managers face this Challenge',
    },
    {
      title: 'Facility managers',
      color: 'bg-pink-400 text-purple-900',
      text: 'Managing future expansion or upgrades was a challenge without clear guidance.',
      stat: '9 out of 15 Facility managers face this Challenge',
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
              className='text-4xl md:text-5xl font-semibold text-gray-800 mb-6 text-left capitalize'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Frontier Solar Tech
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
              <h2 className='text-xl font-medium text-gray-800 mb-2'>
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
                As the world’s dependence on traditional energy sources
                continues to grow, so do the consequences — rising electricity
                bills, harmful carbon emissions, and increasing environmental
                strain. Homes, businesses, and industries alike are feeling the
                pressure. Many struggle with inefficient energy use, unreliable
                power supply, and limited access to sustainable alternatives.
                The need for change is urgent, but the path forward isn’t always
                clear.
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
                I tackled this challenge by designing a user-friendly platform
                that makes clean energy easy to understand and use. Through
                clear layouts, simple navigation, and engaging visuals, I helped
                users explore solar solutions, track energy savings, and make
                confident decisions. By focusing on a seamless user experience,
                I turned complex technology into an accessible tool — helping
                more people take control of their energy, save money, and choose
                a greener future.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <section className='bg-[#FFFCF2] py-12 px-4 md:px-10'>
          <h2 className='text-2xl md:text-4xl pl-0 md:pl-10 font-semibold mb-12'>
            Challenges faced by home owners, <br />
            business owners and facility managers
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {challenges.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-lg p-6 shadow-md'
              >
                <span
                  className={`inline-block px-3 py-1 rounded font-semibold text-sm mb-4 ${item.color}`}
                >
                  {item.title}
                </span>
                <p className='text-black text-base mb-4'>{item.text}</p>
                <p className='text-rose-500 text-sm font-medium'>{item.stat}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-white px-4 py-12 max-w-4xl mx-auto text-[#111]'>
          {/* Intro Paragraph */}
          <p className='text-base md:text-lg mb-6'>
            After analyzing the user interviews, I realized that building a
            solar website wasn't just about showcasing products — it had to
            solve four key challenges: making solar information easy to
            understand, building user trust, simplifying cost estimation, and
            guiding users based on their needs (homeowners, businesses, or
            facility managers).
          </p>
          <p className='text-base md:text-lg mb-12'>
            While these needs could have made the experience complex, I
            simplified them through clear content structure, personalized user
            flows, and trust-building elements — all while keeping the technical
            accuracy and user confidence intact.
          </p>

          {/* Heading */}
          <h2 className='text-2xl md:text-3xl font-semibold mb-8'>
            Different users and their goals
          </h2>

          {/* Homeowners */}
          <div className='mb-6'>
            <h3 className='text-xl font-medium mb-2'>🏠 Homeowners</h3>
            <p className='text-base leading-relaxed'>
              Homeowners want to cut electricity costs, reduce their carbon
              footprint, and power their homes with ease. But the technical
              details of solar can be overwhelming. Frontier Solar Tech
              simplifies the journey — helping them explore, understand, and
              choose the right solar solution without confusion.
            </p>
          </div>

          {/* Business Owners */}
          <div className='mb-6'>
            <h3 className='text-xl font-medium mb-2'>🏢 Business Owners</h3>
            <p className='text-base leading-relaxed'>
              Business owners are looking for reliable, cost-effective energy
              systems that boost their bottom line and show environmental
              responsibility. They want quick access to information, solid ROI,
              and a trusted provider. Frontier Solar Tech delivers that with
              clear solutions and tools tailored to business needs.
            </p>
          </div>

          {/* Facility Managers */}
          <div>
            <h3 className='text-xl font-medium mb-2'>🛠 Facility Managers</h3>
            <p className='text-base leading-relaxed'>
              Facility managers oversee energy efficiency on a larger scale.
              They want systems that are dependable, easy to maintain, and
              scalable. Frontier Solar Tech supports them with detailed specs,
              seamless integration options, and expert guidance every step of
              the way.
            </p>
          </div>
        </section>

        <div className='bg-[#FFFCF2] min-h-screen px-4 py-8 space-y-12'>
          {/* Features section image */}
          <section className='max-w-6xl mx-auto'>
            <img
              src={Fea}
              alt='Feature highlights'
              className='w-full rounded-xl shadow-md'
            />
          </section>

          {/* Testimonials section image */}
          <section className='max-w-6xl mx-auto'>
            <img
              src={Fea1}
              alt='Testimonials'
              className='w-full rounded-xl shadow-md'
            />
          </section>

          {/* Product card and hero split image */}

          <section className='max-w-6xl mx-auto'>
            <img
              src={Fea3}
              alt='Hero section text'
              className='w-full h-full object-cover rounded-xl shadow-md'
            />
          </section>

          {/* Articles section image */}
          <section className='max-w-6xl mx-auto'>
            <img
              src={Fea4}
              alt='Articles, tips and reviews'
              className='w-full rounded-xl shadow-md'
            />
          </section>

          {/* Multiple solar options image */}
          <section className='max-w-6xl mx-auto'>
            <img
              src={Fea5}
              alt='Multiple ways to go solar'
              className='w-full rounded-xl shadow-md'
            />
          </section>
        </div>

        <section className='bg-white px-4 py-12 max-w-4xl mx-auto text-[#111]'>
          <h2 className='text-2xl md:text-4xl pl-0 md:pl-0 font-semibold mb-12'>
            Making item search easy for users.
          </h2>
          {/* Intro Paragraph */}
          <p className='text-base md:text-lg mb-6'>
            One thing was clear from the start — users didn’t want to spend
            forever looking for what they needed. Whether they were a homeowner
            exploring solar panels or a business owner searching for scalable
            solutions, the process of finding the right product had to be quick,
            clear, and frustration-free. So, I focused on simplifying the search
            experience. I grouped items into familiar categories, added filters
            based on real user needs (like energy capacity, budget, or property
            type), and made sure the most relevant options surfaced first. The
            goal was simple: help users find the right solution in just a few
            clicks — no guesswork, no overwhelm.
          </p>
        </section>

        <div className='flex flex-col lg:flex-row gap-4 p-4 bg-[#E6FAEB]'>
          {/* Left Side Image (Main Mobile Shop View) */}
          <div className='flex-1'>
            <img
              src={Sea}
              alt='Mobile shop view'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>

          {/* Right Side: Two stacked images */}
          <div className='flex-1 flex flex-col gap-4'>
            <img
              src={Sea1}
              alt='Shop grid top view'
              className='w-full h-auto rounded-lg shadow-md'
            />
            <img
              src={Sea2}
              alt='Shop grid bottom view'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
        </div>

        <div className='w-full'>
          <img src={Solarf} alt='site' className='w-full object-cover' />
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
              <span className='text-green-500 text-xl'></span>
              <p className='text-lg text-gray-700'>
                🔍 47% increase in users finding and exploring the right solar
                product through improved filtering and categorization
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
                Higher user confidence, measured through feedback forms that
                showed a 40% increase in users reporting the website was “easy
                to understand” and “helpful in making a decision”
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'></span>
              <p className='text-lg text-gray-700'>
                📊 3x more engagement on informational pages like “How It Works”
                and “Compare Solar Types”
              </p>
            </motion.li>
            <motion.li className='flex items-start gap-2'>
              <span className='text-green-500 text-xl'></span>
              <p className='text-lg text-gray-700'>
                📞 25% rise in quote requests within the first month — driven by
                stronger trust signals and a guided user journey
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
