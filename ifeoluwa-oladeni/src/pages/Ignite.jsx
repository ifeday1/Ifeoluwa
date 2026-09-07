import { Link } from 'react-router-dom';
import Bia from '../assets/bia.jpg';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S4 from '../assets/s4.jpg';
import Pitch1 from '../assets/pitch1.png';
import Test from '../assets/test.jpg';
import Reveal from '../components/Reveal';

const meta = [
  { label: 'Client', value: 'IgnitePro Community' },
  { label: 'Role', value: 'UI/UX Design, Web Development' },
  { label: 'Year', value: '2025' },
  { label: 'Industry', value: 'Human Capital Development' },
];

const features = [
  { img: S1, caption: 'Vision, mission, and community culture' },
  { img: S2, caption: 'Career coaching and mentorship programs' },
  { img: S4, caption: 'Past events, kept current by the IgnitePro team' },
  { img: Pitch1, caption: 'Pitch competition — prize structure and FAQ' },
];

const Ignite = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto px-6 md:px-10 pt-8'>
        <Link
          to='/works'
          className='inline-flex items-center gap-2 text-[13px] text-muted hover:text-coral-soft transition-colors duration-200'
        >
          ← Back to all work
        </Link>
      </div>

      <section className='pt-9'>
        <div className='max-w-[1200px] mx-auto px-6 md:px-10'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral'>
            UI/UX Design · Web Development — 2025
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              IgnitePro Community
            </h1>
          </Reveal>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-13 py-8 border-t border-b border-white/8'>
            {meta.map((item) => (
              <div key={item.label}>
                <div className='font-mono text-[10.5px] tracking-widest uppercase text-muted-2 mb-2'>
                  {item.label}
                </div>
                <div className='text-[15px]'>{item.value}</div>
              </div>
            ))}
          </div>

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 font-mono text-[12px] text-muted-2'>
            <span>Oghosa Igbinomwanhia — Copywriter</span>
            <span>Sola Akinola — Project Manager</span>
            <a
              href='https://igniteprocommunity.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-coral hover:text-coral-soft transition-colors duration-200'
            >
              Visit Site →
            </a>
          </div>

          <Reveal>
            <div className='mt-11 rounded-3xl overflow-hidden border border-card-line'>
              <img
                src={Bia}
                alt='IgnitePro Community homepage'
                className='w-full h-auto object-cover'
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Brief
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            A digital home for young people building a career.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            IgnitePro Community is a youth-focused NGO helping students,
            graduates, and young professionals build the skills and
            confidence to succeed — through structured programs, workshops,
            and mentorship. My job was to give that work a website worth
            trusting on first visit.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Challenge
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                The site was being built from the ground up, with no existing
                traffic or reputation to lean on. It had to boost visibility
                for programs and events, make registration simple and fast,
                hold up on mobile, structure content so nothing got lost —
                and above all, earn a first-time visitor&rsquo;s trust before
                asking them to sign up for anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Research
          </span>
          <p className='text-[17px] leading-[1.8] text-muted mb-9'>
            Before any screens, I ran one-on-one conversations with ten
            people inside IgnitePro&rsquo;s actual target audience — five
            students, three recent graduates, and two early-career
            professionals — to find out what would actually make them trust
            and use the site.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
            <Reveal>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The problem
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  Stock imagery and generic copy weren&rsquo;t going to
                  convince a first-time visitor this community was real.
                  Trust had to be designed for, not assumed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The approach
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  Authentic event photography instead of stock images, short
                  registration forms with instant confirmation, and a voice
                  developed with a content strategist so the copy felt
                  reliable, not corporate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6 mb-10'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Solution
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Mobile-first, and easy for the team to keep current.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Since most visitors are on their phones, every screen was
            designed mobile-first. The site was built in React so the
            IgnitePro team can publish new events and update program
            content themselves, without needing me for every change.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 space-y-6'>
          {features.map((feature, index) => (
            <Reveal key={feature.caption} delay={(index % 3) * 0.06}>
              <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
                <img
                  src={feature.img}
                  alt={feature.caption}
                  className='w-full h-auto'
                  loading='lazy'
                />
                <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                  {feature.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Outcome
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            What shipped.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-9'>
            The site became the central hub for IgnitePro&rsquo;s programs —
            drawing 1,800 visits in its first few weeks, with visitors able
            to find programs, register, and get answers without confusion.
          </p>

          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={Test}
                alt='Member testimonials from the IgnitePro Community site'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Real member testimonials, live on the site
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='py-24 text-center border-t border-white/8'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4'>
          Next Project
        </span>
        <Link
          to='/works/clickcart'
          className='font-display text-[clamp(32px,5vw,50px)] font-semibold inline-block transition-colors duration-200 hover:text-coral-soft'
        >
          Click Cart →
        </Link>
      </section>
    </>
  );
};

export default Ignite;
