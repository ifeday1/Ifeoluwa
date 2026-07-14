import { useState } from 'react';
import { Link } from 'react-router-dom';
import Frontwork from '../assets/frontwork.png';
import Bia from '../assets/bia.png';
import Clickwork from '../assets/clickwork.png';
import Incogwork from '../assets/incogwork.png';
import Winnerswork from '../assets/winnerswork.png';
import Crowdwork from '../assets/crowdwork.png';
import Gamerwork from '../assets/gamerwork.png';
import Reveal from '../compontents/Reveal';

const FILTERS = ['All', 'UI/UX Design', 'Branding', 'Web Development'];

const projects = [
  {
    title: 'Frontier Solar Tech',
    year: 2022,
    img: Frontwork,
    path: '/works/frontier',
    tags: ['Branding', 'UI/UX Design', 'Web Development'],
    peek: 'Marketing site + quote flow for a solar installer, designed and built end-to-end.',
  },
  {
    title: 'IgnitePro Community',
    year: 2025,
    img: Bia,
    path: '/works/ignitepro',
    tags: ['UI/UX Design', 'Web Development'],
    peek: 'A community platform for founders — events, pitch tracks, and a member hub.',
  },
  {
    title: 'Click Cart',
    year: 2024,
    img: Clickwork,
    path: '/works/clickcart',
    tags: ['Branding', 'UI/UX Design'],
    peek: 'Mobile-first shopping app — from brand identity through to checkout flow.',
  },
  {
    title: 'Incognito Tech Solutions',
    year: 2024,
    img: Incogwork,
    path: '/works/incognito',
    tags: ['UI/UX Design'],
    peek: 'B2B software studio site — positioning, structure, and a cleaner IA.',
  },
  {
    title: 'Winners Baptist Church',
    year: 2024,
    img: Winnerswork,
    path: '/works/winnersbc',
    tags: ['UI/UX Design', 'Web Development'],
    peek: 'Church website — service times, sermons, and a simple giving flow.',
  },
  {
    title: 'Crowd Carry',
    year: 2024,
    img: Crowdwork,
    path: '/works/crowdcarry',
    tags: ['UI/UX Design'],
    peek: 'Power-bank sharing app concept — waitlist landing and product UI.',
  },
  {
    title: 'Gamer',
    year: 2022,
    img: Gamerwork,
    path: '/works/gamer',
    tags: ['UI/UX Design', 'Web Development'],
    peek: 'A gaming news & reviews platform — keeping enthusiasts on top of the industry.',
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
          Selected Work — 2022–2025
        </span>
        <Reveal>
          <h1 className='font-display text-[clamp(38px,6vw,64px)] font-semibold mt-5 max-w-[640px]'>
            Every project, at a glance.
          </h1>
        </Reveal>
        <p className='mt-5 max-w-[460px] text-muted text-base leading-[1.7]'>
          Hover any project to see what it&rsquo;s about. Click through for the
          full case study.
        </p>

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.06}>
              <Link
                to={project.path}
                className='group block rounded-2xl overflow-hidden bg-card border border-card-line transition-all duration-300 hover:-translate-y-1.5 hover:border-coral'
              >
                <div className='aspect-video overflow-hidden relative'>
                  <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <span className='absolute top-4 right-4 bg-ink/70 backdrop-blur-md border border-white/16 rounded-full px-3.5 py-1.5 font-mono text-[11px]'>
                    {project.year}
                  </span>
                  <div className='absolute inset-0 bg-linear-to-t from-ink/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5'>
                    <span className='text-[13px] text-ivory leading-relaxed'>
                      {project.peek}
                    </span>
                  </div>
                </div>
                <div className='p-6 flex justify-between items-start gap-4'>
                  <div>
                    <div className='font-display text-lg font-semibold mb-2.5'>
                      {project.title}
                    </div>
                    <div className='flex flex-wrap gap-x-1.5 gap-y-1 font-mono text-[10px] uppercase tracking-wide text-muted-2'>
                      {project.tags.map((tag, i) => (
                        <span key={tag}>
                          {tag}
                          {i < project.tags.length - 1 && ' ·'}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='w-9 h-9 rounded-full border border-white/16 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-coral group-hover:border-coral group-hover:rotate-45'>
                    →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
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
