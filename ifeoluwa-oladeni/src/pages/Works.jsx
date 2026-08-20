import { useState } from 'react';
import { Link } from 'react-router-dom';
import Frontwork from '../assets/frontwork.png';
import Bia from '../assets/bia.png';
import Clickwork from '../assets/clickwork.png';
import Crowdwork from '../assets/crowdwork.png';
import Prepbymework from '../assets/prepbymework.jpg';
import Reveal from '../compontents/Reveal';

const FILTERS = [
  'All',
  'UI/UX Design',
  'Branding',
  'Web Development',
  'Mobile Design',
];

const projects = [
  {
    title: 'Prep Byme',
    year: 2026,
    img: Prepbymework,
    path: '/works/prepbyme',
    tags: ['UI/UX Design', 'Web Development', 'Mobile Design'],
    description:
      'Multi-channel inventory and fulfillment dashboard for e-commerce sellers — inbound, returns, and shipping tracked across web and mobile.',
  },
  {
    title: 'IgnitePro Community',
    year: 2025,
    img: Bia,
    path: '/works/ignitepro',
    tags: ['UI/UX Design', 'Web Development'],
    description:
      'A community platform for founders and young leaders — event listings, pitch tracks, and a member hub, designed and built end-to-end.',
  },
  {
    title: 'Click Cart',
    year: 2024,
    img: Clickwork,
    path: '/works/clickcart',
    tags: ['Branding', 'UI/UX Design'],
    description:
      'Mobile-first shopping experience for an e-commerce brand — brand identity, UX research, and a checkout flow built for speed and trust.',
  },
  {
    title: 'Crowd Carry',
    year: 2024,
    img: Crowdwork,
    path: '/works/crowdcarry',
    tags: ['UI/UX Design'],
    description:
      'Power-bank sharing app concept — waitlist landing page and core product UI for an on-the-go charging network.',
  },
  {
    title: 'Frontier Solar Tech',
    year: 2022,
    img: Frontwork,
    path: '/works/frontier',
    tags: ['Branding', 'UI/UX Design', 'Web Development'],
    description:
      'Brand identity, marketing site, and a guided quote flow for a solar installer, designed and built end-to-end.',
    highlight: '+25% quote requests in month one',
  },
];

const Works = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(active));

  return (
    <>
      <section className='max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-12'>
        <div className='inline-flex items-center gap-2 border border-white/16 rounded-full px-3.5 py-2 font-mono text-[11px] text-muted mb-6'>
          <span className='status-dot' />
          <span>Available for new projects</span>
        </div>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral'>
          Selected Work — 2022–2026
        </span>
        <Reveal>
          <h1 className='font-display text-[clamp(38px,6vw,64px)] font-semibold mt-5 max-w-[640px]'>
            Products designed with love.
          </h1>
        </Reveal>

        <div className='flex gap-2.5 flex-wrap mt-8'>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`font-mono text-[11px] tracking-wide uppercase rounded-full px-4.5 py-2.5 transition-colors duration-200 ${
                active === filter
                  ? 'bg-coral border border-coral text-[#1A0E06]'
                  : 'border border-white/16 text-muted hover:text-ivory hover:border-ivory/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto px-6 md:px-10 pb-28'>
        <div className='flex flex-col divide-y divide-white/8'>
          {filtered.map((project, index) => {
            const flip = index % 2 === 1;
            return (
              <Reveal
                key={project.title}
                className='py-14 first:pt-0 last:pb-0'
              >
                <Link
                  to={project.path}
                  className='group grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16 items-center'
                >
                  <div
                    className={`rounded-2xl overflow-hidden border border-card-line aspect-4/3 relative ${
                      flip ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    <span className='absolute top-4 right-4 bg-ink/70 backdrop-blur-md border border-white/16 rounded-full px-3.5 py-1.5 font-mono text-[11px]'>
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <span className='font-mono text-sm font-semibold text-coral'>
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(filtered.length).padStart(2, '0')}
                    </span>
                    <h3 className='font-display text-[clamp(26px,3vw,36px)] font-semibold mt-3 group-hover:text-coral-soft transition-colors duration-200'>
                      {project.title}
                    </h3>
                    <p className='text-[15px] text-muted leading-[1.7] mt-4 max-w-[440px]'>
                      {project.description}
                    </p>

                    {project.highlight && (
                      <div className='inline-flex items-center gap-2 mt-5 border border-coral/30 bg-coral/10 rounded-full px-4 py-2 font-mono text-[11px] text-coral-soft'>
                        {project.highlight}
                      </div>
                    )}

                    <div className='flex flex-wrap gap-2 mt-6'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='font-mono text-[11px] tracking-wider uppercase text-muted border border-white/16 rounded-full px-3.5 py-2'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='inline-flex items-center gap-2 mt-7 text-sm font-semibold text-ivory border-b border-white/16 pb-1 group-hover:border-coral group-hover:text-coral-soft transition-colors duration-200'>
                      View case study →
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className='text-center pb-28 px-6'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral'>
          Get in touch
        </span>
        <h2 className='font-display text-[clamp(30px,4.5vw,46px)] font-semibold mt-4'>
          Have a project in mind?
        </h2>
        <Link
          to='/contact'
          className='inline-flex items-center gap-2 mt-8 bg-linear-to-r from-coral to-amber text-[#1A0E06] font-sans text-sm font-semibold px-7 py-[15px] rounded-full transition-transform duration-200 hover:-translate-y-0.5'
        >
          Let&rsquo;s talk →
        </Link>
      </section>
    </>
  );
};

export default Works;
