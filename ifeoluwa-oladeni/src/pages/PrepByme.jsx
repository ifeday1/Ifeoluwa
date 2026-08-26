import { Link } from 'react-router-dom';
import Prepbymework from '../assets/prepbymework.jpg';
import PrepbymeWeb from '../assets/prepbyme-web.jpg';
import PrepbymeMobile from '../assets/prepbyme-mobile.jpg';
import Reveal from '../compontents/Reveal';

const meta = [
  { label: 'Client', value: 'Prep Byme' },
  { label: 'Role', value: 'UI/UX Design, Web & Mobile App Design' },
  { label: 'Year', value: '2026' },
  { label: 'Industry', value: 'E-commerce Fulfillment' },
];

const PrepByme = () => {
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
            UI/UX Design · Web · Mobile — 2026
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              Prep Byme
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
            <div className='mt-14 rounded-3xl overflow-hidden border border-card-line'>
              <img
                src={Prepbymework}
                alt='Prep Byme web dashboard and mobile app'
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
            One dashboard for every marketplace.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Prep Byme is an inventory and fulfillment dashboard for
            multi-channel e-commerce sellers — tracking stock across Amazon
            (FBA/FBM), eBay, Shopify, and TikTok Shop from one place.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            The web app covers the operational side — inbound, received,
            returns, shipping, warehouse inventory, and admin tools — while a
            companion mobile app gives sellers the same inventory data,
            search, and shipment status on the go.
          </p>
        </div>
      </section>

      <section className='pb-24'>
        <div className='max-w-[1100px] mx-auto px-6 flex flex-col gap-6'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeWeb}
                alt='Prep Byme web dashboard — shipping, returns, and inventory overview'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Web dashboard — shipping, returns & inventory overview
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0 max-w-[420px] mx-auto'>
              <img
                src={PrepbymeMobile}
                alt='Prep Byme mobile app — inventory search'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Mobile app — inventory search on the go
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='py-20 text-center border-t border-white/8'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4'>
          More coming soon
        </span>
        <p className='text-muted text-[15px] max-w-[440px] mx-auto mb-8'>
          This case study is still being written up — process and outcomes
          land here soon.
        </p>
        <Link
          to='/works'
          className='inline-flex items-center gap-2 bg-linear-to-r from-coral to-amber text-[#1A0E06] font-sans text-sm font-semibold px-7 py-[15px] rounded-full transition-transform duration-200 hover:-translate-y-0.5'
        >
          ← Back to all work
        </Link>
      </section>
    </>
  );
};

export default PrepByme;
