import { Link } from 'react-router-dom';
import Aboutife from '../assets/Aboutife.png';
import Profile from '../assets/profile.png';
import Reveal from '../compontents/Reveal';

const storyBlocks = [
  {
    year: '2015 — The start',
    title: 'Graphic design, first.',
    text: "My interest in technology started with computers I couldn't stop taking apart, mentally if not literally. That curiosity led me into graphic design, where I built a foundation in branding and visual storytelling that still shapes how I think about interfaces today.",
  },
  {
    year: '2018 — The pivot',
    title: 'Learning to build, not just design.',
    text: 'I studied at Aptech Learning Education to sharpen both my design and coding skills — a decision that made the move into product design feel less like a pivot and more like a continuation. Being able to design and build means less gets lost in translation between a file and a finished product.',
  },
];

const storyBlocksAfterQuote = [
  {
    year: '2023 — Present',
    title: 'Fintech, B2B, and real estate.',
    text: "Across projects in these three spaces, I've stayed focused on one thing: interfaces that improve usability enough to actually move the business behind them. Every product I take on gets the same question first — what does this need to do, before it needs to look good.",
  },
  {
    year: 'Off-screen',
    title: 'Drums, football, and a plane ticket.',
    text: "I play the drums, follow football far too closely, and I'm always looking for the next place to visit. Table tennis and a good sneaker rotation round things out.",
    last: true,
  },
];

const interests = [
  { icon: '🥁', label: 'Drumming' },
  { icon: '⚽', label: 'Football' },
  { icon: '🏓', label: 'Table Tennis' },
  { icon: '✈️', label: 'Travel' },
];

const About = () => {
  return (
    <section className='max-w-[1200px] mx-auto px-6 md:px-10 pt-10 md:pt-16'>
      <div className='grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start'>
        {/* Sticky column */}
        <div className='md:sticky md:top-[110px]'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4.5'>
            About
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(34px,4.4vw,50px)] font-semibold leading-[1.05] tracking-tight mb-6'>
              Design started with curiosity — it stuck around for the craft.
            </h1>
          </Reveal>

          <div className='relative'>
            <div className='rounded-[22px] overflow-hidden aspect-4/5 border border-card-line'>
              <img
                src={Aboutife}
                alt='Ifeoluwa Oladeni portrait'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -bottom-4 -right-3 sm:-bottom-7 sm:-right-7 w-[42%] sm:w-[44%] rounded-2xl overflow-hidden border-4 border-ink aspect-square shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]'>
              <img
                src={Profile}
                alt='Ifeoluwa working'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <div className='flex gap-2 flex-wrap mt-13'>
            {['UI / UX Design', 'Front-end Dev', 'Brand Identity'].map((tag) => (
              <span
                key={tag}
                className='font-mono text-[10.5px] tracking-wide uppercase text-muted border border-white/16 rounded-full px-3.5 py-2'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Story column */}
        <div className='pb-16'>
          {storyBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.06}>
              <div
                className={`py-9 ${
                  index === 0 ? 'pt-0' : ''
                } border-b border-white/8`}
              >
                <span className='font-mono text-xs text-coral block mb-3.5'>
                  {block.year}
                </span>
                <h3 className='font-display text-2xl font-semibold mb-4'>
                  {block.title}
                </h3>
                <p className='text-base leading-[1.8] text-muted'>{block.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className='my-5 mb-10 bg-card border border-card-line rounded-[20px] p-9'>
              <p className='font-display text-[22px] font-medium leading-[1.4]'>
                &ldquo;I&rsquo;m not just handing off a Figma file — I&rsquo;m
                building the thing, so what ships is what was actually
                designed.&rdquo;
              </p>
            </div>
          </Reveal>

          {storyBlocksAfterQuote.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.06}>
              <div
                className={`py-9 ${
                  block.last ? 'border-b-0' : 'border-b border-white/8'
                }`}
              >
                <span className='font-mono text-xs text-coral block mb-3.5'>
                  {block.year}
                </span>
                <h3 className='font-display text-2xl font-semibold mb-4'>
                  {block.title}
                </h3>
                <p className='text-base leading-[1.8] text-muted'>{block.text}</p>
              </div>
            </Reveal>
          ))}

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-11 pb-15'>
            {interests.map((interest, index) => (
              <Reveal key={interest.label} delay={index * 0.06}>
                <div className='h-full text-center bg-card border border-card-line rounded-2xl px-4.5 py-5.5 transition-all duration-300 hover:-translate-y-1 hover:border-coral'>
                  <div className='text-[22px] mb-2.5'>{interest.icon}</div>
                  <span className='font-mono text-[11px] tracking-wide uppercase text-muted'>
                    {interest.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className='text-center pb-28'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral'>
          Get in touch
        </span>
        <h2 className='font-display text-[clamp(30px,4.5vw,46px)] font-semibold mt-4'>
          Let&rsquo;s build something worth using.
        </h2>
        <Link
          to='/contact'
          className='inline-flex items-center gap-2 mt-8 bg-linear-to-r from-coral to-amber text-[#1A0E06] font-sans text-sm font-semibold px-7 py-[15px] rounded-full transition-transform duration-200 hover:-translate-y-0.5'
        >
          Say hello →
        </Link>
      </div>
    </section>
  );
};

export default About;
