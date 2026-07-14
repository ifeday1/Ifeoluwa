import { Link } from 'react-router-dom';
import Solarp from '../assets/solarp.jpg';
import Solarf from '../assets/solarf.jpg';
import Fea from '../assets/fea.svg';
import Fea1 from '../assets/fea1.svg';
import Fea3 from '../assets/fea3.svg';
import Fea4 from '../assets/fea4.svg';
import Fea5 from '../assets/fea5.svg';
import Sea from '../assets/sea.svg';
import Sea1 from '../assets/sea1.svg';
import Sea2 from '../assets/sea2.svg';
import Reveal from '../compontents/Reveal';

const meta = [
  { label: 'Client', value: 'Frontier Solar Tech' },
  { label: 'Role', value: 'User Research, Product Design' },
  { label: 'Year', value: '2022' },
  { label: 'Industry', value: 'Cleantech' },
];

const features = [
  { img: Fea, caption: 'Homepage — mission, benefits & renewable energy solutions' },
  { img: Fea1, caption: 'Trust signals and testimonials' },
  { img: Fea3, caption: 'Hero section and product card' },
  { img: Fea4, caption: 'Articles, tips & reviews' },
  { img: Fea5, caption: 'Multiple ways to go solar' },
];

const outcomes = [
  {
    num: '47%',
    desc: 'Increase in users finding and exploring the right solar product through improved filtering and categorization.',
  },
  {
    num: '40%',
    desc: 'Increase in users reporting the site was "easy to understand" and helpful in making a decision.',
  },
  {
    num: '25%',
    desc: 'Rise in quote requests within the first month, driven by stronger trust signals and a guided journey.',
  },
];

const Frontier = () => {
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
            Branding · UI/UX · Web Development — 2022
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              Frontier Solar Tech
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

          <Reveal>
            <div className='mt-14 rounded-3xl overflow-hidden border border-card-line aspect-video'>
              <img
                src={Solarp}
                alt='Frontier Solar Tech homepage'
                className='w-full h-full object-cover'
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
            Making clean energy easy to understand.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Frontier Solar Tech is committed to revolutionizing energy
            solutions through solar power, renewable energy, and
            power-saving technologies — helping homes, businesses, and
            industries lower energy costs, reduce carbon footprints, and
            achieve energy independence.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            My role covered user research and product design: understanding
            how homeowners, business owners, and facility managers each
            approach solar differently, then shaping that into a single
            coherent site.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Challenge
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                As reliance on traditional energy sources grows, so do rising
                electricity bills, harmful emissions, and environmental
                strain — yet many people struggle with inefficient energy
                use and limited access to sustainable alternatives, and the
                technical language around solar (&ldquo;kilowatt-hour,&rdquo;
                &ldquo;grid-tied,&rdquo; &ldquo;energy offset&rdquo;) often
                discourages them before they get started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
            <Reveal>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The problem
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  Solar is a considered purchase — buyers compare providers
                  and worry about cost and disruption. The site needed to
                  answer &ldquo;why Frontier&rdquo; in the first screen, not
                  the fifth.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The approach
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  I designed a user-friendly platform that turns complex
                  technology into an accessible tool — clear layouts, simple
                  navigation, and engaging visuals that help users explore
                  solutions and make confident decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[1000px] mx-auto px-6 space-y-6'>
          {features.map((feature, index) => (
            <Reveal key={feature.caption} delay={(index % 3) * 0.06}>
              <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
                <img
                  src={feature.img}
                  alt={feature.caption}
                  className='w-full h-auto'
                />
                <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                  {feature.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Search & Discovery
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Making item search easy for users.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Whether a homeowner exploring solar panels or a business owner
            searching for scalable solutions, the process of finding the
            right product had to be quick and frustration-free. I grouped
            items into familiar categories, added filters based on real
            user needs — energy capacity, budget, property type — and made
            sure the most relevant options surfaced first.
          </p>

          <Reveal>
            <div className='mt-9 grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <div className='rounded-2xl overflow-hidden border border-card-line'>
                <img src={Sea} alt='Mobile shop view' className='w-full h-full object-cover' />
              </div>
              <div className='grid gap-5'>
                <div className='rounded-2xl overflow-hidden border border-card-line'>
                  <img src={Sea1} alt='Shop grid top view' className='w-full h-auto' />
                </div>
                <div className='rounded-2xl overflow-hidden border border-card-line'>
                  <img src={Sea2} alt='Shop grid bottom view' className='w-full h-auto' />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className='rounded-3xl overflow-hidden border border-card-line mx-6 md:mx-10 max-w-[1160px] lg:mx-auto'>
          <img src={Solarf} alt='Frontier Solar Tech full site' className='w-full h-auto' />
        </div>
      </Reveal>

      <section className='py-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Outcome
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            What shipped.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-9'>
            The Frontier Solar Tech website transformed how users explore
            and invest in solar energy — expanding the company&rsquo;s online
            presence and positioning it as a trusted name in renewable
            energy.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            {outcomes.map((outcome) => (
              <div
                key={outcome.num}
                className='bg-card border border-card-line rounded-2xl p-7'
              >
                <div className='font-display text-[34px] font-semibold text-coral-soft'>
                  {outcome.num}
                </div>
                <div className='mt-2.5 text-[13.5px] text-muted leading-[1.6]'>
                  {outcome.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-24 text-center border-t border-white/8'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4'>
          Next Project
        </span>
        <Link
          to='/works/ignitepro'
          className='font-display text-[clamp(32px,5vw,50px)] font-semibold inline-block transition-colors duration-200 hover:text-coral-soft'
        >
          IgnitePro Community →
        </Link>
      </section>
    </>
  );
};

export default Frontier;
