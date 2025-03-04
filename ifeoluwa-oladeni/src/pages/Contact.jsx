import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegCopy, FaArrowDown } from 'react-icons/fa';
import { FaBehance, FaDribbble, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'oladeniifeoluwa123@gmail.com';

  const socialLinks = [
    {
      name: 'Behance',
      icon: <FaBehance />,
      url: 'https://www.behance.net/',
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
    },
    {
      name: 'Dribbble',
      icon: <FaDribbble />,
      url: 'https://dribbble.com/',
      bg: 'bg-pink-600',
      hover: 'hover:bg-pink-700',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/',
      bg: 'bg-blue-800',
      hover: 'hover:bg-blue-900',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/',
      bg: 'bg-gradient-to-r from-pink-500 to-yellow-500',
      hover: 'hover:opacity-80',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const boxes = ['Box One', 'Box Two', 'Box Three', 'Box Four'];

  return (
    <>
      <div className='flex items-center justify-center min-h-screen px-6 py-16'>
        <motion.div
          className='relative w-full max-w-7xl p-16 md:p-24 text-center rounded-3xl shadow-2xl flex flex-col justify-between min-h-[70vh]'
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(56,189,248,0.2) 50%, rgba(17,24,39,1) 100%)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <motion.h2
              className='text-4xl md:text-6xl font-bold text-white'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let’s Collaborate 🤝
            </motion.h2>
            <motion.p
              className='mt-4 text-gray-300 text-lg md:text-xl'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Write me an email and I will respond as soon as possible
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-6 md:p-8 rounded-lg mt-12 shadow-lg max-w-2xl mx-auto border border-gray-600 w-full'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className='text-gray-300 font-medium text-lg md:text-xl break-all'>
                {email}
              </span>
              <motion.button
                onClick={handleCopy}
                className='flex items-center gap-2 px-5 py-3 text-lg md:text-xl font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all mt-4 sm:mt-0'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaRegCopy /> {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </motion.div>
          </div>

          <div className='mt-auto'>
            <motion.p
              className='mt-12 text-gray-300 text-lg md:text-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Or contact me on social media
            </motion.p>

            <motion.div
              className='mt-4 flex justify-center'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <FaArrowDown className='text-white text-4xl animate-bounce' />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Buttons */}
      <div className='mt-8 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-3 px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-lg shadow-md transition-all ${social.bg} ${social.hover}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {social.icon} {social.name}
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default Contact;
