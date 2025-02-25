import React from 'react';
import Aboutife from '../assets/Aboutife.png';
import { motion } from 'framer-motion';
import Profile from '../assets/Profile.png';
import Profile1 from '../assets/Profile1.png';
import Profile2 from '../assets/Profile2.png';

const images = [Profile, Profile1, Profile2];

const animationVariants = [
  { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
  { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, rotate: -10 }, animate: { opacity: 1, rotate: 0 } },
];

const About = () => {
  return (
    <>
      <motion.div
        className='flex justify-center items-center md:p-17 p-10'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }} // Slightly increased size
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={Aboutife}
          alt='Ifeoluwa Image'
          className='w-full max-w-3xl rounded-lg shadow-lg'
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <motion.div
        className='flex justify-center items-center p-6 text-white'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className='max-w-3xl text-center space-y-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className='text-3xl font-bold'>My Story</h2>
          <p className='text-lg leading-relaxed text-gray-300'>
            My passion for technology and design started at a young age when I
            was drawn to computers, constantly exploring and experimenting with
            new ideas. This curiosity led me to graphic design in 2015, where I
            developed skills in branding and visual storytelling. Over time, I
            expanded my expertise, working on diverse projects that shaped my
            creative approach.
          </p>
          <p className='text-lg leading-relaxed text-gray-300'>
            Driven by a thirst for knowledge and a desire to create impactful
            digital experiences, I pursued further education at Aptech Learning
            Education, where I enhanced my design and coding skills. This
            learning journey made my transition into product design seamless,
            allowing me to bridge the gap between aesthetics and functionality.
          </p>
          <p className='text-lg leading-relaxed text-gray-300'>
            In addition to my expertise in UX/UI design, I am also a frontend
            developer, bringing designs to life with clean, efficient, and
            responsive code. My ability to design and develop ensures a holistic
            approach to building digital products, allowing for seamless
            collaboration between design and development teams.
          </p>
          <p className='text-lg leading-relaxed text-gray-300'>
            With experience across Fintech, B2B, and Real Estate, I specialize
            in crafting user-centered solutions that enhance experiences,
            improve usability, and drive business growth. Whether it's designing
            intuitive interfaces or writing scalable frontend code, I am
            committed to creating digital products that are both beautiful and
            functional.
          </p>
          <p className='text-lg leading-relaxed text-gray-300'>
            I am passionate about solving real-world problems through design and
            technology, continuously learning, and pushing boundaries to build
            innovative, user-friendly experiences.
          </p>
        </motion.div>
      </motion.div>

      <div className='flex items-center justify-center text-white'>
        <motion.div
          className='text-center max-w-3xl text-lg leading-relaxed'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl font-bold text-gray-600 mb-4'>
            While not Designing...
          </h2>
          <p className='text-gray-300'>
            I play the drums and I also love playing football and table tennis.
            I like exploring new things, fashion, and I enjoy traveling.
          </p>
        </motion.div>
      </div>

      <div className='min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10'>
        <div className='flex flex-wrap md:flex-nowrap gap-6 md:gap-10 justify-center items-center w-full max-w-6xl'>
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[400px] rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-105'
              initial={animationVariants[index].initial}
              whileInView={animationVariants[index].animate}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
