import { Link } from 'react-router-dom';
import {
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaInstagram,
  FaMedium,
} from 'react-icons/fa6';
import Ifehero from '../assets/Ife (40).jpg';
import Aboutife from '../assets/IFE.png';
import Frontwork from '../assets/frontwork.png';
import Bia from '../assets/bia.png';
import Clickwork from '../assets/clickwork.png';
import Incogwork from '../assets/incogwork.png';
import Reveal from '../compontents/Reveal';
import Magnetic from '../compontents/Magnetic';
import CountUp from '../compontents/CountUp';
import CopyEmailButton from '../compontents/CopyEmailButton';
import Marquee from '../compontents/Marquee';

const email = 'oladeniifeoluwa123@gmail.com';

const roles = [
  { label: 'UI/UX Design' },
  { label: 'Brand Identity' },
  { label: 'Frontend Development' },
];

const stats = [
  { target: 3, suffix: '+', label: 'Years in practice' },
  { target: 7, suffix: '', label: 'Shipped products' },
  { target: 12, suffix: '+', label: 'Happy clients' },
];

const services = [
  {
    num: '01',
    title: 'UI/UX Design',
    text: 'Interfaces shaped around how people actually use a product, not just how it looks in a deck.',
  },
  {
    num: '02',
    title: 'Brand Identity',
    text: 'Logo, type, and color systems built to hold up across a whole product, not just a homepage.',
  },
  {
    num: '03',
    title: 'Frontend Development',
    text: 'I build what I design myself in React, so nothing gets lost between the file and the browser.',
  },
];

const featuredWork = [
  {
    title: 'Frontier Solar Tech',
    year: 2022,
    img: Frontwork,
    path: '/works/frontier',
    tags: ['Branding', 'UI/UX', 'Web Dev'],
    peek: 'Marketing site + quote flow for a solar installer, built end-to-end.',
  },
  {
    title: 'IgnitePro Community',
    year: 2025,
    img: Bia,
    path: '/works/ignitepro',
    tags: ['UI/UX Design', 'Web Dev'],
    peek: 'A community platform for founders — events, pitch tracks, and a member hub.',
  },
  {
    title: 'Click Cart',
    year: 2024,
    img: Clickwork,
    path: '/works/clickcart',
    tags: ['Brand Identity', 'UX Research'],
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
];

const testimonials = [
  {
    quote:
      "Ifeoluwa didn't just hand us a Figma file — he built it, and it looked exactly like what we agreed on. That almost never happens.",
    name: 'Adaeze Nwosu',
    role: 'Founder, Frontier Solar Tech',
  },
  {
    quote:
      'Fast, communicative, and genuinely good taste. Our conversion on the quote flow improved almost immediately after launch.',
    name: 'Tunde Bakare',
    role: 'Product Lead, IgnitePro',
  },
  {
    quote:
      'He asks the right questions before touching a single pixel. That process saved us weeks of rework down the line.',
    name: 'Chiamaka Eze',
    role: 'Ops Director, Incognito Tech',
  },
];

const socials = [
  {
    name: 'Behance',
    icon: <FaBehance />,
    url: 'https://www.behance.net/oladeniifeoluwa',
  },
  {
    name: 'Dribbble',
    icon: <FaDribbble />,
    url: 'https://dribbble.com/ifeday',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/ifeoluwa-oladeni/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/i_sticks1',
  },
  {
    name: 'Medium',
    icon: <FaMedium />,
    url: 'https://medium.com/@oladeniifeoluwa123',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className='pt-16 pb-14'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <div className='inline-flex items-center gap-2 border border-white/16 rounded-full px-3.5 py-2 font-mono text-[11px] text-muted mb-6'>
            <span className='status-dot' />
            <span>Available for new projects</span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-12 md:gap-14 items-center'>
            <div>
              <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral'>
                Lagos, Nigeria
              </span>
              <Reveal className='mt-4'>
                <h1 className='font-display text-[38px] sm:text-5xl lg:text-[72px] font-semibold leading-[1.02] tracking-tight'>
                  Great products are <span className='text-coral'>rare.</span> I
                  build the ones people{' '}
                  <span className='text-coral'>keep</span>
                </h1>
              </Reveal>
              <p className='mt-7 max-w-[480px] text-[17px] leading-[1.7] text-muted'>
                I&rsquo;m Ifeoluwa. Product and UI/UX design is where I spend
                most of my time but I also shape brand identity from scratch,
                and I write the front-end code myself when a project needs to
                ship, not just look finished.
              </p>

              <div className='flex gap-2.5 flex-wrap mt-6'>
                {roles.map((role) => (
                  <span
                    key={role.label}
                    className='font-mono text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-full border border-white/16 text-muted'
                  >
                    {role.label}
                  </span>
                ))}
              </div>

              <div className='flex gap-3.5 flex-wrap mt-10'>
                <Magnetic>
                  <Link
                    to='/works'
                    className='inline-flex items-center gap-2 bg-linear-to-r from-coral to-amber text-[#1A0E06] font-sans text-sm font-semibold px-7 py-[15px] rounded-full transition-transform duration-200 hover:-translate-y-0.5'
                  >
                    Explore my work →
                  </Link>
                </Magnetic>
                <Link
                  to='/contact'
                  className='inline-flex items-center gap-2 border border-white/16 text-ivory font-sans text-sm font-semibold px-7 py-[15px] rounded-full transition-colors duration-200 hover:border-coral hover:text-coral-soft'
                >
                  Start a project
                </Link>
              </div>

              <div className='flex gap-14 flex-wrap mt-20 pt-8 border-t border-white/8'>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className='font-display text-[26px] font-semibold'>
                      <CountUp target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className='font-mono text-[11px] tracking-[0.08em] uppercase text-muted-2 mt-1.5'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative overflow-hidden'>
              <div className='absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full -top-16 -right-10 blur-md -z-10 bg-[radial-gradient(circle,rgba(255,106,61,0.35),transparent_70%)]' />
              <div className='rounded-3xl overflow-hidden border border-card-line aspect-4/5'>
                <img
                  src={Ifehero}
                  alt='Portrait of Ifeoluwa Oladeni'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={roles.map((r) => r.label)} />

      {/* About strip */}
      <section className='py-24'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <Reveal>
            <div className='bg-surface border border-white/8 rounded-[28px] p-8 md:p-14 grid grid-cols-1 md:grid-cols-[0.9fr_1.3fr] gap-10 md:gap-12 items-center'>
              <div className='rounded-2xl overflow-hidden aspect-square'>
                <img
                  src={Aboutife}
                  alt='Ifeoluwa at work'
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4'>
                  A little about me
                </span>
                <p className='text-lg leading-[1.7] text-muted'>
                  <strong className='text-ivory font-semibold'>
                    I am a designer who also codes
                  </strong>{' '}
                  — I design products that connect with users and move the
                  metrics behind them, then build the front end myself with
                  frontend development, so nothing gets lost between the file
                  and the browser. My background in branding still shows up in
                  how I think about type and spacing.
                </p>
                <div className='flex gap-2.5 flex-wrap mt-6'>
                  {[
                    'UI / UX Design',
                    'Front-end Dev',
                    'Brand Identity',
                    'UX Research',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className='font-mono text-[11px] tracking-wider uppercase text-muted border border-white/16 rounded-full px-4 py-2'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className='pb-24'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <Reveal>
            <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-3.5'>
              What I Do
            </span>
            <h2 className='font-display text-[clamp(30px,3.8vw,46px)] font-semibold mb-12'>
              Design, branding, and the build.
            </h2>
          </Reveal>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className='h-full bg-card border border-card-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-coral'>
                  <div className='font-display text-sm font-semibold text-coral mb-6'>
                    {service.num}
                  </div>
                  <h3 className='text-lg font-semibold mb-3'>{service.title}</h3>
                  <p className='text-[14.5px] text-muted leading-[1.65]'>
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className='pb-24'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <Reveal className='flex justify-between items-end gap-6 flex-wrap mb-12'>
            <div>
              <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-3.5'>
                Selected Work
              </span>
              <h2 className='font-display text-[clamp(30px,3.8vw,46px)] font-semibold'>
                Recent projects.
              </h2>
            </div>
            <Link
              to='/works'
              className='text-sm text-ivory flex items-center gap-2 border-b border-white/16 pb-1 hover:border-coral hover:text-coral-soft transition-colors duration-200'
            >
              View all work →
            </Link>
          </Reveal>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {featuredWork.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 0.08}>
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
                    <div className='absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5'>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className='pb-24'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <Reveal className='mb-12'>
            <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-3.5'>
              Testimonials
            </span>
            <h2 className='font-display text-[clamp(30px,3.8vw,46px)] font-semibold'>
              What clients say.
            </h2>
          </Reveal>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {testimonials.map((t, index) => (
              <Reveal key={t.name} delay={index * 0.08}>
                <div className='h-full flex flex-col gap-5 bg-card border border-card-line rounded-2xl p-8'>
                  <p className='text-[15.5px] leading-[1.75] text-ivory'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className='mt-auto'>
                    <div className='text-[13.5px] font-semibold'>{t.name}</div>
                    <div className='font-mono text-[11px] text-muted-2 mt-0.5'>
                      {t.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='pb-24'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <Reveal>
            <div className='relative overflow-hidden text-center rounded-[32px] border border-white/8 px-6 sm:px-14 py-16 bg-[linear-gradient(120deg,#201A16,#15171D_60%)]'>
              <div className='absolute w-[280px] h-[280px] rounded-full -top-24 -left-16 bg-[radial-gradient(circle,rgba(255,106,61,0.3),transparent_70%)]' />
              <div className='relative'>
                <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
                  Get in touch
                </span>
                <h2 className='font-display text-[clamp(34px,5.4vw,60px)] font-semibold max-w-[760px] mx-auto mb-10'>
                  Want to take your project to the next level? Contact me
                </h2>
                <div className='max-w-[480px] mx-auto flex items-center justify-between border border-white/16 rounded-full pl-6 pr-2 py-2 bg-ink/50'>
                  <span className='font-mono text-[13px]'>{email}</span>
                  <CopyEmailButton email={email} />
                </div>
                <div className='flex gap-7 flex-wrap justify-center text-[13px] mt-10'>
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted hover:text-coral-soft transition-colors duration-200'
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
