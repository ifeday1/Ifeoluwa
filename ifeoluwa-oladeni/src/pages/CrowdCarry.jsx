import React from 'react';
import Crowdcarry1 from '../assets/crowdcarry1.jpg';
import Chome from '../assets/Chome.jpg';
import Cabout from '../assets/Cabout.jpg';
import Ccontact from '../assets/Ccontact.jpg';
import Cstart from '../assets/Cstart.jpg';
import Demo from '../assets/demo.png';
import Demo1 from '../assets/demo1.png';
import Demo2 from '../assets/demo2.png';



import { motion } from 'framer-motion';

const images = [Demo, Demo1, Demo2];

const CrowdCarry = () => {
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
              Crowd Carry
            </motion.h1>

            {/* Content Text */}
            <motion.p
              className='text-lg text-gray-600 mb-8 text-left max-w-2xl'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              CrowdCarry provides self-charging rental power bank stations that
              make it easy for people to charge their phones on the go, whether
              they're in a mall, airport, event, or café. It’s designed for
              convenience, so you can grab a power bank when you need it and
              return it when you're done. But it’s more than just about staying
              charged. CrowdCarry is focused on using smart, accessible tech to
              make everyday life easier and more connected, not just in Nigeria,
              but in cities around the world.
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
              {/* <motion.a
                href='https://frontiersolartechltd.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Site →
              </motion.a> */}
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
              src={Crowdcarry1}
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
            <p className='text-2xl font-semibold text-gray-800'>
              Energy Solutions Industry
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
                In today’s fast-moving world, staying connected isn’t a luxury —
                it’s a necessity. But for many people, especially in busy
                cities, phone batteries don’t last as long as the day demands.
                Imagine rushing to a meeting, trying to confirm a ride, or
                needing to make a quick transfer — and your phone dies. No
                socket in sight, no power bank on hand. This is a daily
                frustration for countless Nigerians who rely on their phones for
                everything from communication to digital payments. The lack of
                convenient, on-the-go charging options doesn’t just cause
                inconvenience — it disrupts work, plans, and access to essential
                services.
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
                That’s where CrowdCarry comes in. We’ve built a network of
                self-charging power bank stations across major cities, so anyone
                can rent a power bank on the go — no more getting stuck with a
                dead phone when it matters most. Instead of buying an expensive
                power bank or searching for a socket, users simply grab, charge,
                and return. To make the experience even smoother, we designed a
                user-friendly website that lets people explore our services,
                locate nearby stations, and rent a power bank in just a few
                clicks. It’s affordable, convenient, and built for the pace of
                real life. ⚡📱
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className='w-full'>
          <img src={Cstart} alt='site' className='w-full object-cover' />
        </div>
        <div className='max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed'>
          <h1 className='text-2xl md:text-3xl font-semibold mb-4'>
            Designing for Convenience: The UX Process Behind CrowdCarry
          </h1>

          <p className='mb-6'>
            After analyzing the user interviews, I realized that building a
            solar website wasn’t just about showcasing products — it had to
            solve four key challenges: making solar information easy to
            understand, building user trust, simplifying cost estimation, and
            guiding users based on their needs (homeowners, businesses, or
            facility managers).
          </p>

          <p className='mb-6'>
            When I joined the CrowdCarry project, I knew this wasn’t just
            another tech platform — it was a real-world solution to a real-world
            problem: helping people stay powered, connected, and stress-free
            while on the move. So, my goal was simple: design a website that
            makes renting a power bank feel as quick and easy as unlocking your
            phone.
          </p>

          <p className='mb-6'>Here’s how I approached it:</p>

          <h2 className='text-xl font-semibold mt-8 mb-2'>
            1. Understanding the Users
          </h2>
          <p className='mb-4'>
            I started with the people. I interviewed 10 everyday commuters, 4
            event attendees, and 3 small business owners who regularly deal with
            dead phone batteries while out and about. These conversations
            uncovered real frustrations:
          </p>
          <ul className='list-disc list-inside mb-4 space-y-1'>
            <li>"I never carry a power bank — they’re bulky."</li>
            <li>"I don’t know where to charge when I’m out."</li>
            <li>"It needs to be quick, or I won’t bother."</li>
          </ul>
          <p className='mb-6'>
            This helped me shape two core personas:
            <br />
            • The On-the-Go Commuter who needs speed and simplicity
            <br />• The Urban Explorer who values convenience and affordability
          </p>

          <h2 className='text-xl font-semibold mt-8 mb-2'>
            2. Mapping the Journey
          </h2>
          <p className='mb-4'>
            Next, I mapped out the user journey from the moment someone realizes
            they need a charge — all the way to renting and returning a power
            bank.
          </p>
          <p className='mb-2'>I asked:</p>
          <ul className='list-disc list-inside mb-4 space-y-1'>
            <li>Where are they when this need hits?</li>
            <li>How fast can they access the website?</li>
            <li>What decisions do they have to make before renting?</li>
          </ul>
          <p className='mb-6'>
            This led to designing a frictionless path:
            <br />
            Find a station → Check availability → Rent → Charge → Return
          </p>

          <h2 className='text-xl font-semibold mt-8 mb-2'>
            3. Wire-framing with Purpose
          </h2>
          <p className='mb-4'>
            With clarity on the flow, I created low-fidelity wireframes focusing
            on three key goals:
          </p>
          <ul className='list-disc list-inside mb-4 space-y-1'>
            <li>Speed: Users can find a rental station within seconds</li>
            <li>Trust: Clear pricing, usage terms, and safety info upfront</li>
            <li>
              Simplicity: One main CTA per screen, no clutter, no confusion
            </li>
          </ul>
          <p className='mb-6'>
            Every screen served one function, so users wouldn’t have to think
            twice.
          </p>

          <h2 className='text-xl font-semibold mt-8 mb-2'>
            4. Designing for Real-World Use
          </h2>
          <p className='mb-4'>
            I then moved to high-fidelity prototypes. The design used:
          </p>
          <ul className='list-disc list-inside mb-4 space-y-1'>
            <li>Bold visuals to catch attention in outdoor light</li>
            <li>Map integration to locate nearby stations</li>
            <li>Quick-scan QR instructions to make renting effortless</li>
          </ul>
          <p>
            Color choices were guided by urgency and energy — bright, vibrant
            tones that matched the electric, on-the-go vibe of the brand.
          </p>
        </div>

        <section className='px-4 py-10 bg-amber-100 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-orange-600 mb-8 max-w-3xl mx-auto'>
            Demonstrating How our power bank works with Stakeholders and users
          </h2>

          <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
            {images.map((src, index) => (
              <div
                key={index}
                className='rounded-xl overflow-hidden shadow-md max-w-sm w-full'
              >
                <img
                  src={src}
                  alt={`Demonstration ${index + 1}`}
                  className='w-full h-auto object-cover'
                />
              </div>
            ))}
          </div>
        </section>

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
            The launch of the CrowdCarry website transformed how users
            interacted with the brand — turning a promising idea into a
            seamless, accessible experience people could rely on. By combining
            user insight with strategic design, we achieved real-world results
            that mattered. 🚀 Key Outcomes: 33% increase in successful rentals
            within the first two weeks of launch 41% faster user journey from
            landing to renting, thanks to simplified flows and instant access to
            station maps Over 5,000 users engaged with the platform in the first
            month, with an average session time of 2.4 minutes, showing strong
            interest and retention 25% drop in user inquiries, indicating
            clearer communication and improved self-service through the site
            
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default CrowdCarry;
