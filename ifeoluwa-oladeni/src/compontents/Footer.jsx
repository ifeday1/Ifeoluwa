import { FaBehance, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <div className='grid justify-center'>
        <footer className=' text-white px-6 py-8 md:px-20 max-w-[1200px] '>
          <div className='max-w-8xl mx-auto'>
            {/* Gradient Text */}
            <h2 className='text-left md:text-7xl text-5xl font-semibold'>
              <span className='bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent block'>
                Let's work
              </span>
              <span className='bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent block'>
                together today!
              </span>
            </h2>

            {/* Send a mail section with arrow */}
            <motion.a
              href='mailto:oladeniifeoluwa123@gmail.com'
              className='mt-4 text-gray-400 text-lg flex items-center space-x-2 hover:text-white transition'
              whileHover={{ x: 5 }}
            >
              <span className=' font-semibold'>Send a mail</span>
              <span className='text-xl'>➡️</span>
            </motion.a>

            {/* Divider line */}
            <hr className='my-4 border-gray-700' />

            {/* Footer bottom section */}
            <div className=''>
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <p className='text-gray-500'>
                  @Ifeoluwa Oladeni 2025 - DESIGNED AND DEVELOPED BY ME
                </p>

                {/* Social Icons */}
                <div className='flex space-x-4 mt-4 md:mt-0'>
                  <a
                    href='https://www.behance.net/oladeniifeoluwa'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaBehance size={24} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/ifeoluwa-oladeni/'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href='https://x.com/IfeoluwaOladeni'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaXTwitter size={24} />
                  </a>
                  <a
                    href='mailto:oladeniifeoluwa123@gmail.com'
                    className='text-gray-400 hover:text-white transition'
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
