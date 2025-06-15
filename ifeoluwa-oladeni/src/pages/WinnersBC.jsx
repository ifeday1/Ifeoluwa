import React from 'react';
import Wbc from '../assets/wbc.jpg';
import Djc from '../assets/djc.jpg';
import Cstart from '../assets/Cstart.jpg';
import Win from '../assets/win.png';
import Win1 from '../assets/win1.png';
import Win2 from '../assets/win2.png';
import Face from '../assets/Face.png';
import You from '../assets/you.png';

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

        <section className='w-full bg-white py-16 px-4 md:px-12 text-gray-800'>
          {/* Section: Understanding the Brand */}
          <div className='max-w-6xl mx-auto space-y-8'>
            <div>
              <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                Designing a Website that Connects Faith and Community
              </h2>
              <p className='text-base md:text-lg mb-4'>
                Before a single wireframe was drawn or color palette chosen, we
                needed clarity on one thing: What do members and visitors truly
                need from a church website? Winners Baptist Church is not just a
                building where people gather on Sundays — it’s a living,
                breathing community where faith is nurtured, lives are
                supported, and relationships are built. The website had to
                reflect this reality. We didn’t just want to make a pretty site;
                we wanted to build something functional, welcoming, and deeply
                intentional — a place that offered spiritual resources, answered
                real questions, and encouraged connection throughout the week.
                For new visitors, it had to feel approachable and informative.
                For members, it needed to be a reliable space to find everything
                they needed — from sermon replays to event updates. This goal
                became our compass: Build a digital home for the church family —
                not just a flyer for the church.
              </p>
            </div>

            <section className='w-full bg-[#FFFDEE] py-16 px-4 md:px-12'>
              <div className='max-w-6xl mx-auto'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-12'>
                  Listening to the users
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {/* Card 1 - Visitors */}
                  <div className='bg-white p-6 rounded-md shadow-sm'>
                    <div className='inline-block bg-[#94F59E] text-black text-sm font-medium px-3 py-1 rounded-sm mb-4'>
                      For Visitors
                    </div>
                    <p className='text-gray-800 text-base'>
                      The most important thing was clarity. They wanted quick
                      answers:
                    </p>
                    <ul className='list-disc list-inside mt-2 text-gray-700 space-y-1'>
                      <li>What time is service?</li>
                      <li>Where is the church located?</li>
                    </ul>
                    <p className='mt-2 text-gray-800'>
                      They also wanted to feel confident they’d be welcomed — so
                      warm, inclusive language and inviting visuals mattered.
                    </p>
                  </div>

                  {/* Card 2 - Long-Time Members */}
                  <div className='bg-white p-6 rounded-md shadow-sm'>
                    <div className='inline-block bg-[#94F59E] text-black text-sm font-medium px-3 py-1 rounded-sm mb-4'>
                      For Long-Time Members
                    </div>
                    <p className='text-gray-800 text-base'>
                      Many expressed frustration about missing church events or
                      not knowing where to find resources. They wanted:
                    </p>
                    <ul className='list-disc list-inside mt-2 text-gray-700 space-y-1'>
                      <li>Easy access to sermon replays.</li>
                      <li>
                        A central place to see upcoming programs and ministry
                        activities.
                      </li>
                      <li>
                        Notifications or reminders about important events.
                      </li>
                    </ul>
                  </div>

                  {/* Card 3 - Youth */}
                  <div className='bg-white p-6 rounded-md shadow-sm'>
                    <div className='inline-block bg-[#94F59E] text-black text-sm font-medium px-3 py-1 rounded-sm mb-4'>
                      For the Youth
                    </div>
                    <p className='text-gray-800 text-base'>
                      The youth wanted to see themselves reflected on the
                      platform. They asked for a space that:
                    </p>
                    <ul className='list-disc list-inside mt-2 text-gray-700 space-y-1'>
                      <li>Showcased youth-led initiatives and programs.</li>
                      <li>Encouraged their peers to get involved.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Summary */}
            <p className='mt-8 text-base md:text-lg'>
              These conversations shaped every part of the UX process — from the
              sitemap to copywriting tone, image selection to backend structure.
              Ultimately, it reminded us that the church website wasn’t about
              pages and pixels — it was about people.
            </p>
          </div>
        </section>

        <section className='bg-[#EFE2FF] relative overflow-hidden'>
          <div className='w-full'>
            <img
              src={Win}
              alt='Second'
              className='w-full h-auto object-cover scale-110'
            />
          </div>
        </section>

        <section className='w-full bg-white py-12 px-4'>
          <div className='flex flex-col md:flex-row gap-6 max-w-6xl mx-auto'>
            {/* First Image */}
            <img
              src={Win1}
              alt='Win1'
              className='w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md'
            />

            {/* Second Image */}
            <img
              src={Win2}
              alt='Win2'
              className='w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md'
            />
          </div>
        </section>

        <section className='bg-[#F2F8FC] py-16 px-4'>
          <div className='max-w-6xl mx-auto text-center'>
            {/* Heading */}
            <h2 className='text-3xl md:text-4xl font-bold text-[#003087] mb-2'>
              Worship with us
            </h2>
            <p className='text-gray-600 mb-10'>
              Can’t make it to church? <br className='md:hidden' /> Join us
              online
            </p>

            {/* Cards */}
            <div className='flex flex-col md:flex-row justify-center gap-6'>
              {/* YouTube Card */}
              <div className='bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2'>
                <img
                  src={You}
                  alt='Worship via YouTube'
                  className='w-full h-72 object-cover'
                />
                <div className='p-6'>
                  <p className='text-gray-800 text-lg mb-4'>
                    Join our worship service via <strong>YouTube</strong>
                  </p>
                  <a
                    href='#'
                    className='text-[#003087] font-bold hover:underline'
                  >
                    Click here to join &gt;
                  </a>
                </div>
              </div>

              {/* Facebook Live Card */}
              <div className='bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2'>
                <img
                  src={Face}
                  alt='Worship via Facebook Live'
                  className='w-full h-72 object-cover'
                />
                <div className='p-6'>
                  <p className='text-gray-800 text-lg mb-4'>
                    Join our worship service via <br />
                    <strong>Facebook Live (Video and audio)</strong>
                  </p>
                  <a
                    href='#'
                    className='text-[#003087] font-bold hover:underline'
                  >
                    Click here to join &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
