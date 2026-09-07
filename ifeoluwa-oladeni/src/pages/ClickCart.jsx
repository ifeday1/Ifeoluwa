import { Link } from 'react-router-dom';
import Click from '../assets/click.jpg';
import Clickcartlogo from '../assets/clickcartlogo.png';
import Clickcartlogo1 from '../assets/clickcartlogo1.jpg';
import Clickuser from '../assets/clickuser.png';
import H1 from '../assets/h1.png';
import C1 from '../assets/C1.png';
import iPhone from '../assets/iPhone1.png';
import Reveal from '../components/Reveal';
import ColourPallete from '../components/ColourPallete';

const meta = [
  { label: 'Client', value: 'Click Cart' },
  { label: 'Role', value: 'UI/UX Design, UX Research, Brand Identity' },
  { label: 'Year', value: '2024' },
  { label: 'Industry', value: 'Ecommerce' },
];

const features = [
  { img: H1, caption: 'Simple, secure onboarding — Google & Facebook sign-in' },
  { img: C1, caption: 'Cart screen — fast edits without breaking the shopping flow' },
  { img: iPhone, caption: 'Account, orders, and settings' },
];

const outcomes = [
  { num: '−50%', desc: 'Reduction in checkout time, creating a smoother path to purchase.' },
  { num: '+28%', desc: 'Increase in completed orders in the first month post-launch.' },
  { num: '4.6/5', desc: 'Customer satisfaction score, with common praise for ease of use and speed.' },
];

const ClickCart = () => {
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
            UI/UX Design · Branding · UX Research — 2024
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              Click Cart
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
            <span>Tola Adedeji — Software Developer</span>
          </div>

          <Reveal>
            <div className='mt-11 rounded-3xl overflow-hidden border border-card-line bg-card'>
              <img
                src={Click}
                alt='Click Cart splash and login screens'
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
            An e-commerce platform built on speed and trust.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Click Cart is a mobile-first e-commerce platform that helps
            businesses stand up a clean, professional storefront and manage
            sales without friction — while giving shoppers a fast,
            trustworthy checkout experience.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Challenge
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                Shoppers were struggling to find relevant products and
                complete purchases — leading to abandoned carts and lost
                revenue. Slow page loads, a confusing checkout, and limited
                payment options were compounding the problem at every step.
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
                  Discovery and checkout were both leaking users — people
                  couldn&rsquo;t find what they wanted quickly, and the ones
                  who did often abandoned the cart before paying.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The approach
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  Personalized product recommendations and a streamlined
                  category structure to fix discovery, paired with
                  Google/Facebook sign-in, smart validation, and flexible
                  payment options to get checkout under a minute.
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
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold'>
            Brand identity, built for a storefront.
          </h2>
        </div>

        <div className='max-w-[1000px] mx-auto px-6 space-y-6'>
          <Reveal>
            <div className='rounded-2xl overflow-hidden border border-card-line bg-card p-8 md:p-10 flex flex-wrap items-center gap-8'>
              <img src={Clickcartlogo} alt='Click Cart logo, primary' className='h-16 md:h-20' loading='lazy' />
              <img src={Clickcartlogo1} alt='Click Cart logo, alternate' className='h-16 md:h-20' loading='lazy' />
            </div>
          </Reveal>

          <Reveal>
            <div className='rounded-2xl overflow-hidden border border-card-line bg-card'>
              <ColourPallete />
            </div>
          </Reveal>

          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={Clickuser}
                alt='Click Cart user flow, from splash screen to payment'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Mapping the flow from browse to checkout
              </figcaption>
            </figure>
          </Reveal>

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
            Click Cart made shopping faster and more trustworthy end to
            end — from a quick social sign-in through to a checkout most
            people could finish in under a minute.
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
          to='/works/crowdcarry'
          className='font-display text-[clamp(32px,5vw,50px)] font-semibold inline-block transition-colors duration-200 hover:text-coral-soft'
        >
          Crowd Carry →
        </Link>
      </section>
    </>
  );
};

export default ClickCart;
