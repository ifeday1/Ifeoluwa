import { Link } from 'react-router-dom';
import Crowdcarry1 from '../assets/crowdcarry1.jpg';
import Chome from '../assets/Chome.jpg';
import Demo from '../assets/demo.png';
import Cstart from '../assets/Cstart.jpg';
import Reveal from '../components/Reveal';

const meta = [
  { label: 'Client', value: 'Crowd Carry' },
  { label: 'Role', value: 'Product Design, UI/UX Design' },
  { label: 'Year', value: '2024' },
  { label: 'Industry', value: 'Consumer Tech' },
];

const features = [
  { img: Chome, caption: 'The charging station — rent, charge, return' },
  { img: Demo, caption: 'Demoing the power bank with partners and stakeholders' },
  { img: Cstart, caption: 'Stop buying. Start renting — the core pitch' },
];

const outcomes = [
  { num: '+33%', desc: 'Increase in successful rentals within the first two weeks of launch.' },
  { num: '−41%', desc: 'Faster user journey from landing to renting, with instant access to station maps.' },
  { num: '5,000+', desc: 'Users engaged in the first month, averaging a 2.4-minute session.' },
  { num: '−25%', desc: 'Drop in user inquiries — clearer self-service through the site.' },
];

const CrowdCarry = () => {
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
            Product Design · UI/UX Design — 2024
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              Crowd Carry
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
            <div className='mt-11 rounded-3xl overflow-hidden border border-card-line'>
              <img
                src={Crowdcarry1}
                alt='Crowd Carry homepage'
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
            A power bank, wherever you need one.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Crowd Carry is a self-charging power bank rental network — grab
            one at a mall, airport, event, or café, and return it wherever
            suits you. I designed the product as part of an 8-person team,
            covering the site that gets someone from &ldquo;my phone is
            dying&rdquo; to a fully charged battery in a few taps.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Challenge
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                A dead phone battery isn&rsquo;t just an inconvenience —
                it disrupts work, payments, and plans. Most people had no
                good option in the moment: no socket in sight, and an
                expensive power bank isn&rsquo;t something you carry
                everywhere just in case.
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
          <p className='text-[17px] leading-[1.8] text-muted mb-6'>
            I interviewed 17 people who regularly deal with dead batteries
            on the move — 10 everyday commuters, 4 event attendees, and 3
            small business owners. Three complaints kept coming up:
          </p>
          <ul className='space-y-2 mb-9 text-muted text-[15.5px] leading-[1.7]'>
            <li>&ldquo;I never carry a power bank — they&rsquo;re bulky.&rdquo;</li>
            <li>&ldquo;I don&rsquo;t know where to charge when I&rsquo;m out.&rdquo;</li>
            <li>&ldquo;It needs to be quick, or I won&rsquo;t bother.&rdquo;</li>
          </ul>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
            <Reveal>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The problem
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  Two personas fell out of the research — the On-the-Go
                  Commuter, who needs speed and simplicity, and the Urban
                  Explorer, who values convenience and affordability. Both
                  needed to trust the service before they&rsquo;d bother
                  using it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className='h-full bg-card border border-card-line rounded-2xl p-8'>
                <h3 className='font-display text-lg font-semibold mb-3.5'>
                  The approach
                </h3>
                <p className='text-muted text-[15.5px] leading-[1.75] m-0'>
                  I mapped the journey end to end — find a station, check
                  availability, rent, charge, return — then wireframed
                  around three goals: speed, trust (clear pricing and terms
                  up front), and one CTA per screen.
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
            Built to be found fast, outdoors.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mt-6'>
            The high-fidelity design leaned on bold visuals that hold up in
            outdoor light, map integration to locate nearby stations, and
            quick-scan QR instructions so renting takes seconds, not
            minutes.
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
            The site turned a promising idea into something people could
            actually rely on in the moment their phone died.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {outcomes.map((outcome) => (
              <div
                key={outcome.num}
                className='bg-card border border-card-line rounded-2xl p-7'
              >
                <div className='font-display text-[30px] font-semibold text-coral-soft'>
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
          to='/works/frontier'
          className='font-display text-[clamp(32px,5vw,50px)] font-semibold inline-block transition-colors duration-200 hover:text-coral-soft'
        >
          Frontier Solar Tech →
        </Link>
      </section>
    </>
  );
};

export default CrowdCarry;
