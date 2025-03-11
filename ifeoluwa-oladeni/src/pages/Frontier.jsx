import { useState, useRef } from 'react';
import Solarp from '../assets/solarp.jpg';

const Frontier = () => {
  return (
    <>
      <div className=' bg-white'>
        <div className='w-full min-h-screen flex flex-col'>
          {/* Content Section */}
          <div className='px-8 sm:px-75 py-12'>
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-left'>
              FRONTIER SOLAR TECH
            </h1>

            {/* Content Text */}
            <p className='text-lg text-gray-600 mb-8 text-left max-w-2xl'>
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
            </p>
          </div>

          {/* Full-Width Image (No Padding) */}
          <div className='w-full'>
            <img
              src={Solarp}
              alt='Project Preview'
              className='w-full object-cover'
            />
          </div>

          {/* My Roles & Visit Site Section */}
          <div className='px-8 sm:px-16 py-8 text-left'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              My Roles:{' '}
              <span className='text-lg text-gray-600 mb-4'>
                {' '}
                User Research, Product Design
              </span>
            </h2>

            {/* Visit Site */}
            <a
              href='https://frontiersolartechltd.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300'
            >
              Visit Site →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontier;
