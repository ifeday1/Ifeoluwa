import { Link } from 'react-router-dom';
import Prepbymework from '../assets/prepbymework.jpg';
import PrepbymeWeb from '../assets/prepbyme-web.jpg';
import PrepbymeInventory from '../assets/prepbyme-inventory.jpg';
import PrepbymeTicket from '../assets/prepbyme-ticket.jpg';
import PrepbymeReports from '../assets/prepbyme-reports.jpg';
import PrepbymeWarehouse from '../assets/prepbyme-warehouse.jpg';
import PrepbymePicking from '../assets/prepbyme-picking.jpg';
import PrepbymeParking from '../assets/prepbyme-parking.jpg';
import MobileEmpty from '../assets/prepbyme-m-empty.jpg';
import MobileDashboard from '../assets/prepbyme-m-dashboard.jpg';
import MobileProduct from '../assets/prepbyme-m-product.jpg';
import MobileAddEntry from '../assets/prepbyme-m-add-entry.jpg';
import MobileAddStep1 from '../assets/prepbyme-m-add-step1.jpg';
import MobileAddReview from '../assets/prepbyme-m-add-review.jpg';
import MobileInbound from '../assets/prepbyme-m-inbound.jpg';
import MobileTracking from '../assets/prepbyme-m-tracking.jpg';
import MobileReceipt from '../assets/prepbyme-m-receipt.jpg';
import MobileShipping from '../assets/prepbyme-m-shipping.jpg';
import MobileLabel from '../assets/prepbyme-m-label.jpg';
import MobileShare from '../assets/prepbyme-m-share.jpg';
import Reveal from '../components/Reveal';

const meta = [
  { label: 'Client', value: 'Prep Byme' },
  { label: 'Role', value: 'Product Design, User Research, Web & Mobile UI' },
  { label: 'Year', value: '2026' },
  { label: 'Industry', value: 'Logistics / E-commerce Fulfilment' },
];

const personas = [
  {
    title: 'Client',
    desc: 'Sellers using Prep Byme’s warehousing and fulfilment service, who need full visibility into their stock across every sales channel without relying on spreadsheets or messaging someone to ask.',
  },
  {
    title: 'Operations team / Admin',
    desc: 'The internal team managing warehousing, fulfilment, and support. They needed a way to resolve client issues and manage stock movement without it living in scattered emails and WhatsApp threads.',
  },
  {
    title: 'Warehouse staff',
    desc: 'The people physically receiving, prepping, and packing stock. They needed a simple, task-first view of what’s arrived and what’s next, not the admin tools built for ops and clients.',
  },
];

const outcomes = [
  { num: '500+', desc: 'Clients live and actively using the platform.' },
  { num: '−90%', desc: 'Fulfilment time cut: a process that used to take hours now takes minutes.' },
];

const mobileFlows = [
  {
    num: '01',
    title: 'Stock at a glance',
    text: 'The dashboard opens on the same five numbers as the web app: total, inbound, received, returns, and shipped. Main and box inventory sit behind one toggle, and FBA / FBM is a filter right under search, so the split that fixed reconciliation on web carries straight over to mobile. A new account never lands on a blank table; the empty state points straight to adding the first product.',
    screens: [
      { img: MobileEmpty, alt: 'Empty dashboard prompting the client to add their first product', caption: 'Empty state' },
      { img: MobileDashboard, alt: 'Dashboard listing products with All, FBA, and FBM filters', caption: 'Inventory, filtered by FBA / FBM' },
      { img: MobileProduct, alt: 'Product details with stock counts, prep services, and activity', caption: 'Product details' },
    ],
  },
  {
    num: '02',
    title: 'Adding a product in three steps',
    text: 'Clients can look a product up by ASIN, scan its barcode with the camera, or enter it manually. The form is split into short steps with a progress bar, and prep services like FNSKU labelling, polybag, bubblewrap, and hazmat are single taps. A review card at the end shows everything before it goes into inventory.',
    screens: [
      { img: MobileAddEntry, alt: 'Add product screen with ASIN lookup and manual entry', caption: 'ASIN lookup or manual entry' },
      { img: MobileAddStep1, alt: 'Add product step one with camera capture, product name, URL, and SKU', caption: 'Step 1: photo and basic info' },
      { img: MobileAddReview, alt: 'Add product final step with labelling, packing options, and review', caption: 'Step 3: prep services and review' },
    ],
  },
  {
    num: '03',
    title: 'Inbound, tracked to the warehouse door',
    text: 'Each inbound order shows exactly how many units were sent, how many are left, and how many have been received. Tracking goes one step past the carrier: the timeline ends at “Received by Warehouse”, and the carrier’s proof of delivery sits one tap away, linked back to its order.',
    screens: [
      { img: MobileInbound, alt: 'Inbound order with original, left, and received counts per item', caption: 'Inbound order' },
      { img: MobileTracking, alt: 'Tracking timeline from label created to received by warehouse', caption: 'Delivery history' },
      { img: MobileReceipt, alt: 'Carrier proof of delivery with signature, linked to its order', caption: 'Carrier receipt' },
    ],
  },
  {
    num: '04',
    title: 'Shipping labels, without the desktop',
    text: 'While Prep Byme generates a shipping label, the order says so plainly instead of sitting in an unexplained “processing” state. Once the label is ready, clients can print it, download the PDF, or share it through the native share sheet.',
    screens: [
      { img: MobileShipping, alt: 'Shipping order awaiting a label from Prep Byme', caption: 'Awaiting shipping label' },
      { img: MobileLabel, alt: 'Shipping label preview with print, download, and share actions', caption: 'Shipping label' },
      { img: MobileShare, alt: 'Share sheet for the shipping label PDF', caption: 'Share or print' },
    ],
  },
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
            Product Design · Web & Mobile UI · 2026
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

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 font-mono text-[12px] text-muted-2'>
            <span>Olamide Sodeinde, Developer</span>
            <span>Samuel Ayomide, Project Manager</span>
            <a
              href='https://prepby.me/'
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
            About
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            One dashboard for every marketplace.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Prep Byme is a UK-based warehousing and fulfilment company,
            helping e-commerce sellers store, prep, and fulfil orders across
            Amazon, eBay, Shopify, and TikTok. Prep Byme handles the physical
            side of the operation, warehousing and prep, while its
            platform gives clients and internal staff visibility and control
            over stock, fulfilment, and support.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Problem
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                Behind every smooth delivery was a mess of spreadsheets.
                Prep Byme&rsquo;s clients were selling across Amazon, eBay,
                Shopify, and TikTok at the same time, with no single place
                to see what was actually happening to their stock, and
                neither, really, did Prep Byme&rsquo;s own team. Stock was
                tracked manually across every channel, there was no
                visibility into FBA vs. FBM stock, reconciliation was
                entirely manual, returns were routinely missed, and there
                was no real fulfilment flow or ticketing system to track
                issues when they came up. The cost wasn&rsquo;t just time:
                every hour lost to manual reconciliation and every missed
                return was money leaking out of a fast-growing business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6 mb-10'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Solution
          </span>
          <p className='text-[17px] leading-[1.8] text-muted'>
            I designed a platform that gives Prep Byme&rsquo;s clients a
            single, clear view of their stock across every channel and
            warehouse stage, and gives Prep Byme&rsquo;s internal team the
            tools to actually run the operation, not just react to it. The
            platform separates FBA and FBM stock into distinct views,
            automates reconciliation, and includes a built-in ticketing
            system so issues are tracked, owned, and resolved without ever
            leaving the platform. A companion mobile app carries the same
            model into clients&rsquo; pockets.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeWeb}
                alt='Prep Byme web dashboard: shipping, returns, and inventory overview'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                The Prep Byme dashboard
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06}>
            <figure className='mt-6 rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymePicking}
                alt='Generating a picking list directly from a shipping order'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Picking lists generated straight from a shipping order
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Research
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Understanding the client&rsquo;s needs.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            I researched to understand the real pain points behind the
            day-to-day. The research was aimed at getting a clear picture of
            the problem from the client&rsquo;s point of view, not just how
            leadership saw it. I ran calls with two existing clients about
            their experience, what they dreaded, and what workarounds
            they&rsquo;d built for themselves, and worked closely with Andrei,
            the CEO, and the Operations Manager to understand how the
            business ran internally.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            The gap between the two was the real insight. Leadership saw
            Prep Byme as a warehousing and prep service. Clients experienced
            it as a black box: no reliable way to know what was in stock,
            what stage it was at, or who to go to when something broke. That
            gap became the design brief: this wasn&rsquo;t about making prep
            faster, it was about making the whole operation visible and
            accountable.
          </p>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[1000px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Different users, different goals
          </span>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {personas.map((p, index) => (
              <Reveal key={p.title} delay={(index % 3) * 0.06}>
                <div className='h-full bg-card border border-card-line rounded-2xl p-7'>
                  <h3 className='font-display text-lg font-semibold mb-3'>
                    {p.title}
                  </h3>
                  <p className='text-muted text-[14.5px] leading-[1.7] m-0'>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <figure className='mt-6 rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeWarehouse}
                alt='Warehouse inventory search: total stock and boxes across every client'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Warehouse inventory, searchable by racking number
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Approach
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            A clear, unified stock and fulfilment flow.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Before opening any design tool, I mapped the end-to-end flow,
            from a client&rsquo;s stock arriving at the warehouse, through
            storage and fulfilment across each sales channel, to how a
            return or issue would get raised and resolved. The goal was one
            simple promise: a client should be able to see the full status
            of anything (where it&rsquo;s stored, which channel it belongs
            to, what stage it&rsquo;s at) without leaving one screen.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            From that flow, I moved into wireframes, iterating over a few
            rounds and checking key screens back against the friction points
            the two clients had described, before locking the design and
            moving into build.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeInventory}
                alt='Prep Byme inventory table: every SKU status in one screen'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Every SKU&rsquo;s status, in one screen
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Solving the FBA vs. FBM problem.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            The clearest decision I made was splitting FBA and FBM stock
            into two distinct views instead of merging them. Clients had
            independently described conflating the two in their
            spreadsheets as the single biggest source of confusion: not
            knowing whether a unit sat in Amazon&rsquo;s warehouse or Prep
            Byme&rsquo;s was the root of most reconciliation errors.
            Structurally separating them in the dashboard removed that
            ambiguity for good.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeParking}
                alt='Client inventory table, with FBA/FBM tracked as its own Parking Type column'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                FBA / FBM tracked at the SKU level, not just the totals
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Reports, so admins see all the transactions.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Visibility couldn&rsquo;t stop at a single client&rsquo;s stock.
            Prep Byme&rsquo;s own team needed to see what was happening
            across every client and warehouse at once: shipped, inbound,
            and received units, split by FBA and FBM, trending over time,
            without having to piece it together from separate screens.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeReports}
                alt='Reports view: shipped, inbound, and received units, broken out by FBA and FBM'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                Every report broken out by FBA and FBM, not just totals
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            A built-in ticketing system.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Instead of leaving issue resolution to email or WhatsApp, I
            designed a ticketing system directly into the core flow.
            Clients raise a ticket against a specific stock item or
            shipment, and an admin resolves it from inside the same
            system, so every issue is tracked, owned, and closed in one
            place.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mb-9'>
          <Reveal>
            <figure className='rounded-2xl overflow-hidden border border-card-line bg-card m-0'>
              <img
                src={PrepbymeTicket}
                alt='Prep Byme ticketing system: a raised ticket with its full activity thread'
                className='w-full h-auto'
                loading='lazy'
              />
              <figcaption className='px-5 py-3.5 font-mono text-[11px] tracking-wide uppercase text-muted-2 border-t border-card-line'>
                A ticket, tracked from raised to resolved
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className='max-w-[760px] mx-auto px-6'>
          <Reveal>
            <div className='border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                What changed after testing
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                The first version of the ticket form asked for everything
                up front (item, channel, warehouse, issue type) before a
                client could submit it. Testing with the two clients showed
                that friction alone was enough to send people straight back
                to WhatsApp. I cut it down to the one thing that actually
                mattered in the moment (what stock, what&rsquo;s wrong)
                and left the rest for an admin to fill in while resolving
                it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='py-20 border-t border-white/8'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Mobile App
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            The whole operation, in a client&rsquo;s pocket.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Sellers don&rsquo;t only check stock from a desk. The mobile app
            covers the jobs clients do most (checking inventory, adding
            products, following inbound deliveries, and handling shipping
            labels) using the same stock model, numbers, and FBA / FBM
            split as the web dashboard, so nothing needs relearning between
            the two.
          </p>
        </div>

        <div className='max-w-[1000px] mx-auto px-6'>
          {mobileFlows.map((flow) => (
            <div key={flow.num} className='mt-18'>
              <div className='max-w-[760px] mx-auto'>
                <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-muted-2 block mb-3'>
                  {flow.num}
                </span>
                <h3 className='font-display text-[clamp(21px,2.4vw,26px)] font-semibold mb-4'>
                  {flow.title}
                </h3>
                <p className='text-[16px] leading-[1.8] text-muted'>
                  {flow.text}
                </p>
              </div>

              <div className='mt-9 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-[280px] sm:max-w-none mx-auto'>
                {flow.screens.map((screen, index) => (
                  <Reveal key={screen.caption} delay={index * 0.06}>
                    <figure className='m-0'>
                      <div className='rounded-[28px] overflow-hidden border border-card-line bg-card p-1.5'>
                        <img
                          src={screen.img}
                          alt={screen.alt}
                          width={780}
                          height={1748}
                          className='w-full h-auto rounded-[22px]'
                          loading='lazy'
                        />
                      </div>
                      <figcaption className='mt-3.5 text-center font-mono text-[11px] tracking-wide uppercase text-muted-2'>
                        {screen.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
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
            Prep Byme&rsquo;s platform is live and in active use. Clients no
            longer rely on spreadsheets to track stock across channels, and
            every issue now gets tracked to resolution inside the platform
            instead of scattered across email and WhatsApp.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9'>
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

          <div className='border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
            <p className='text-[16.5px] leading-[1.75] text-ivory m-0'>
              &ldquo;Ifeoluwa, thank you so much for this flow, a clear,
              clean UI. It&rsquo;s deeply impacted the business.&rdquo;
            </p>
            <div className='mt-5 font-mono text-[11px] text-muted-2'>
              Andrei, CEO, Prep Byme
            </div>
          </div>
        </div>
      </section>

      <section className='pb-24'>
        <div className='max-w-[760px] mx-auto px-6'>
          <p className='text-[17px] leading-[1.8] text-muted italic'>
            Designing for an operation like this taught me that the
            interface isn&rsquo;t really the product; the trust it builds
            is. Every screen here exists to answer a question before
            someone has to ask it.
          </p>
        </div>
      </section>

      <section className='py-24 text-center border-t border-white/8'>
        <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-4'>
          Next Project
        </span>
        <Link
          to='/works/alphalli'
          className='font-display text-[clamp(32px,5vw,50px)] font-semibold inline-block transition-colors duration-200 hover:text-coral-soft'
        >
          Alphalli →
        </Link>
      </section>
    </>
  );
};

export default PrepByme;
