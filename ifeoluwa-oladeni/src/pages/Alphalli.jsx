/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import AlphalliHero from '../assets/alphalli-hero.jpg';
import MobileHome from '../assets/alphalli-m-home.jpg';
import MobileOnboarding from '../assets/alphalli-m-onboarding.jpg';
import MobileOnboarding2 from '../assets/alphalli-m-onboarding-2.jpg';
import MobileOnboarding3 from '../assets/alphalli-m-onboarding-3.jpg';
import MobileLogin from '../assets/alphalli-m-login.jpg';
import MobileSignup from '../assets/alphalli-m-signup.jpg';
import MobileForgotPassword from '../assets/alphalli-m-forgot-password.jpg';
import MobileWishlist from '../assets/alphalli-m-wishlist.jpg';
import MobileProduct from '../assets/alphalli-m-product.jpg';
import MobileMeasureUpload from '../assets/alphalli-m-measure-upload.jpg';
import MobileMeasureForm from '../assets/alphalli-m-measure-form.jpg';
import WireOnboarding from '../assets/alphalli-wf-onboarding.jpg';
import WireLogin from '../assets/alphalli-wf-login.jpg';
import WireVerifyCode from '../assets/alphalli-wf-verify-code.jpg';
import WireResetDone from '../assets/alphalli-wf-reset-done.jpg';
import WireProduct from '../assets/alphalli-wf-product.jpg';
import WireMeasurement from '../assets/alphalli-wf-measurement.jpg';
import WireCheckout from '../assets/alphalli-wf-checkout.jpg';
import WirePromo from '../assets/alphalli-wf-promo.jpg';
import WireOrderConfirmed from '../assets/alphalli-wf-order-confirmed.jpg';
import Reveal from '../components/Reveal';

/*
 * Screens are listed in the order they appear on the page. An entry only
 * renders once it has an `img`, so the rest can be added one at a time:
 * drop the export in src/assets/, import it above, and set `img` on the
 * matching entry. Entries still waiting on an export are `img: null`.
 */

const meta = [
  { label: 'Client', value: 'Alphalli' },
  { label: 'Role', value: 'Product Design, User Research, Mobile UI/UX' },
  { label: 'Year', value: '2025' },
  { label: 'Industry', value: 'Fashion / E-commerce' },
];

const personas = [
  {
    title: 'Buyer in Nigeria',
    desc: 'Knows their measurements, has a tailor, and is shopping for a design rather than a fit. Wants the measurement step to take fifteen seconds and not ask questions they have already answered elsewhere.',
  },
  {
    title: 'Diaspora buyer',
    desc: 'Buying native wear for an occasion, often from thousands of miles away. Has never been formally measured, is nervous about fit, and needs a path through the measurement step that does not require knowing their own body in numbers.',
  },
  {
    title: 'Designer / maker',
    desc: 'Lists the garments and cuts them. Needs measurements to arrive attached to the order, in a usable unit, before work starts — not gathered afterwards over WhatsApp.',
  },
];

const solutionScreens = [
  {
    img: MobileHome,
    alt: 'Alphalli home screen: greeting, promotional banner, category row, and product grid',
    caption: 'Home, opening on the category row',
  },
  {
    img: MobileMeasureForm,
    alt: 'Take Measurement screen with five measurement fields and Save & Continue',
    caption: 'Measurements taken inside the purchase',
  },
];

const measurementScreens = [
  {
    img: MobileMeasureUpload,
    alt: 'Take Measurement screen, upload photo state, with the 2MB limit stated on the dropzone',
    caption: 'Upload a photo',
  },
  {
    img: MobileMeasureForm,
    alt: 'Take Measurement screen, fill form state, showing chest, waist, hip, length, and inseam',
    caption: 'Or fill in five fields',
  },
];

const categoryScreens = [
  {
    img: MobileHome,
    alt: 'Category row reading Agbada, Kente, Ankara, Isiagu, Kaftan above the product grid',
    caption: 'Categories named the way buyers name them',
  },
  {
    img: null,
    alt: 'Filter sheet with category checkboxes and Apply Filter',
    caption: 'The filter sheet that narrows them',
  },
];

const priceScreens = [
  {
    img: MobileProduct,
    alt: 'Product details with price, quantity stepper, and an add-to-cart button carrying the price',
    caption: 'The price, on the button',
  },
  {
    img: null,
    alt: 'My Cart with item selection, subtotal, delivery, and total',
    caption: 'Subtotal, delivery, total',
  },
  {
    img: null,
    alt: 'Checkout card with shipping, payment, promo code, and place order',
    caption: 'Shipping, payment, promo',
  },
];

const onboardingCopy = [
  {
    head: 'Step into Africa’s rich heritage',
    sub: 'Browse unique native outfits crafted by talented African designers, all in one place.',
  },
  {
    head: 'Every piece tells a story',
    sub: 'Learn about each designer, the fabrics they use, and the cultural origins behind your outfits.',
  },
  {
    head: 'From cart to culture in just a click.',
    sub: 'Save favorites, take custom measurements, and check out securely — wherever you are in the world.',
  },
];

const flows = [
  {
    num: '01',
    title: 'Onboarding that argues, rather than explains',
    text: 'Three screens, and not one of them explains how to use the app. They make the case for why buying this way is different — heritage, then the maker, then the practical promise. The third screen does the most work: it names the measurement step and addresses the diaspora buyer directly, before either becomes a surprise.',
    quotes: onboardingCopy,
    screens: [
      {
        img: MobileOnboarding,
        alt: 'Onboarding screen one: Step into Africa’s rich heritage',
        caption: 'Heritage first',
      },
      {
        img: MobileOnboarding2,
        alt: 'Onboarding screen two: Every piece tells a story',
        caption: 'Then the maker',
      },
      {
        img: MobileOnboarding3,
        alt: 'Onboarding screen three: From cart to culture in just a click',
        caption: 'Then the promise',
      },
    ],
  },
  {
    num: '02',
    title: 'Getting in without losing the buyer',
    text: 'Account creation offers email or Google, with a skip available throughout onboarding. Nobody is asked to commit to an account before they have seen a single garment — the sign-up screen sits after the case has been made, not in front of it.',
    screens: [
      {
        img: MobileLogin,
        alt: 'Login screen offering email or Google sign-in',
        caption: 'Log in, or skip',
      },
      {
        img: MobileSignup,
        alt: 'Sign-up form with terms checkbox',
        caption: 'Sign up, with terms',
      },
      {
        img: MobileForgotPassword,
        alt: 'Forgot password recovery screen',
        caption: 'Password recovery',
      },
    ],
  },
  {
    num: '03',
    title: 'Browsing, saving, and narrowing',
    text: 'Home opens on a greeting and the category row, with a promotional banner above the grid. The wishlist carries the same product card as the grid so a saved garment looks identical wherever it appears, and the filter sheet narrows by category before the buyer commits to scrolling.',
    screens: [
      {
        img: MobileWishlist,
        alt: 'Wishlist showing saved garments in the same product card as the grid',
        caption: 'Saved, in the same card',
      },
      {
        img: null,
        alt: 'Category filter sheet',
        caption: 'Narrowed by category',
      },
    ],
  },
  {
    num: '04',
    title: 'Paying, and knowing the order landed',
    text: 'Checkout collects shipping and payment in one card with the total pinned in view, and a promo field that closes the loop on the home banner. Confirmation does not simply congratulate — it offers Track your order first and Continue Shopping second, because on a made-to-order garment the buyer’s next question is when, not what else.',
    screens: [
      { img: null, alt: 'Card details and place order', caption: 'Card details' },
      { img: null, alt: 'Coupon entry state', caption: 'Promo code' },
      {
        img: null,
        alt: 'Order confirmed, offering track order or continue shopping',
        caption: 'Order confirmed',
      },
    ],
  },
];

const nextUp = [
  {
    title: 'A measurement profile',
    text: 'Right now the buyer submits measurements per order. Saving them to the account turns a five-field form into a single confirmation on every future purchase — measure once, reuse for life — and gives returning buyers a reason to check out in the app rather than message a designer directly. It also makes room for a unit toggle, so a buyer reading figures off a tailor’s note in inches never has to convert anything by hand.',
  },
  {
    title: 'Two ways to filter, not one',
    text: 'Agbada, kaftan and isiagu are garments; kente and ankara are cloths. Splitting the filter into those two axes lets a buyer ask for a kente agbada directly instead of picking whichever label the designer happened to file it under, and gives search something structured to work against as the catalogue grows.',
  },
  {
    title: 'Payment rails built for the market',
    text: 'Card covers the diaspora buyer well. Adding Paystack or Flutterwave and bank transfer alongside it means a designer in Lagos is paid the way Nigerian businesses are actually paid, which matters more with every seller the marketplace adds.',
  },
];

const wireframes = [
  { img: WireOnboarding, alt: 'Onboarding wireframe', caption: 'Onboarding' },
  { img: WireLogin, alt: 'Login wireframe', caption: 'Login' },
  {
    img: WireVerifyCode,
    alt: 'Forgot password wireframe, entering the emailed code',
    caption: 'Verify code',
  },
  {
    img: WireResetDone,
    alt: 'Password reset success sheet wireframe',
    caption: 'Password reset',
  },
  { img: WireProduct, alt: 'Product details wireframe', caption: 'Product details' },
  {
    img: WireMeasurement,
    alt: 'Take Measurement wireframe, Upload photo state',
    caption: 'Take measurement',
  },
  {
    img: WireCheckout,
    alt: 'Checkout wireframe with PayPal and credit card options',
    caption: 'Checkout',
  },
  { img: WirePromo, alt: 'Checkout wireframe with promo code open', caption: 'Promo code' },
  {
    img: WireOrderConfirmed,
    alt: 'Order confirmed wireframe',
    caption: 'Order confirmed',
  },
];

const outcomes = [
  { num: '45%', desc: 'Increase in product trust.' },
  { num: '60%', desc: 'Wishlist-to-purchase conversion.' },
  { num: '35%', desc: 'Reduction in checkout friction.' },
  { num: '3k+', desc: 'Users on the platform.' },
];

/* A row of phone screenshots. Entries without an `img` are skipped. */
const PhoneRow = ({ screens }) => {
  const shown = screens.filter((screen) => screen.img);
  if (!shown.length) return null;

  const cols =
    shown.length === 1
      ? 'sm:max-w-[220px]'
      : shown.length === 2
        ? 'sm:grid-cols-2 sm:max-w-[460px]'
        : 'sm:grid-cols-3 sm:max-w-[700px]';

  return (
    <div
      className={`grid grid-cols-1 gap-8 sm:gap-6 max-w-[220px] mx-auto ${cols}`}
    >
      {shown.map((screen, index) => (
        <Reveal key={screen.caption} delay={index * 0.06}>
          <figure className='m-0'>
            <div className='rounded-[28px] overflow-hidden border border-card-line bg-card p-1.5'>
              <img
                src={screen.img}
                alt={screen.alt}
                width={780}
                height={1748}
                className='w-full aspect-[780/1748] object-contain rounded-[22px]'
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
  );
};

const Alphalli = () => {
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
            Product Design · Mobile UI/UX — 2025
          </span>
          <Reveal>
            <h1 className='font-display text-[clamp(38px,6vw,66px)] font-semibold mt-5 max-w-[820px]'>
              Alphalli
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
                src={AlphalliHero}
                alt='Alphalli onboarding screen on an iPhone 16 Pro'
                className='w-full aspect-video object-cover'
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
            Clothes that are made, not stocked.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Alphalli is a marketplace for African native wear — agbada,
            kaftan and isiagu, cut from kente, ankara and other traditional
            cloth by named designers. Buyers browse and order in the app;
            the garment is then made to their measurements by the designer
            who listed it. Alphalli handles discovery, measurement and
            payment, while the making stays with the maker.
          </p>

          <Reveal>
            <div className='mt-11 border border-card-line border-l-4 border-l-coral rounded-xl px-7 py-6.5 bg-card'>
              <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-coral block mb-2.5'>
                The Problem
              </span>
              <p className='text-muted text-[15px] leading-[1.7] m-0'>
                A size dropdown is a Western garment assumption.
                Ready-to-wear is graded — a manufacturer cuts a run of
                mediums and you pick the one nearest your body. Nigerian
                native wear is not made that way: an agbada is cut for one
                person, by one tailor, from measurements taken by hand, and
                the garment starts after the order rather than before it.
                That single fact breaks the standard e-commerce pattern in
                three places at once. There is no stock to show as in or
                out, no size chart to link to, and the moment of purchase is
                not the end of the conversation between buyer and maker but
                the beginning of it. Most marketplaces in this category
                paper over the gap: they list S/M/L, take the money, then
                chase the buyer over WhatsApp for measurements afterwards.
                Clothes eventually arrive, but the buyer has no idea whether
                anything will fit until it does or doesn&rsquo;t, and the
                maker begins every order by doing admin.
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
            I designed a mobile marketplace that treats measurement as part
            of the purchase rather than an afterthought to it. Buyers browse
            by garment and cloth using the names the category actually uses,
            submit their measurements inside the checkout flow — by
            uploading a photo or filling five fields — and pay in naira with
            the total visible at every step. Onboarding does the work of
            explaining why buying this way is different, so the measurement
            step arrives as something the buyer was told about rather than a
            surprise at the till.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6'>
          <PhoneRow screens={solutionScreens} />
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Research
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Two buyers, one garment.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            The audience split cleanly in two, and that split turned out to
            be the whole design problem. A buyer in Lagos has almost
            certainly been measured by a tailor in the last year and can
            read the numbers straight off a note in their phone. A buyer in
            the diaspora, shopping for a wedding, has never been measured in
            their life and does not know what an inseam is. Both want the
            same garment. Only one of them can fill in a form about their
            body.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            That is why the app&rsquo;s third onboarding screen says
            &ldquo;wherever you are in the world&rdquo; — the diaspora buyer
            is not an edge case here, they are a primary one, and the
            measurement step had to be designed so that neither buyer is the
            one it was not built for.
          </p>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[1000px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Different buyers, different needs
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
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Approach
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Argue the structure in grey first.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Before touching colour, I mapped the end-to-end journey: splash,
            onboarding, account, browse, product, measurement, cart,
            checkout, confirmation. The question that shaped the map was
            where measurement should sit — before the cart, inside checkout,
            or after payment — because that placement decides whether the
            app feels like a shop or a form.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            I built the whole flow as wireframes first, then layered the
            high-fidelity pass on top of the same structure. Settling the
            skeleton in low fidelity meant the measurement step could be
            moved and argued about while it was still cheap to move.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-7 max-w-[460px] sm:max-w-[600px] mx-auto'>
            {wireframes.map((screen, index) => (
              <Reveal key={screen.caption} delay={(index % 3) * 0.06}>
                <figure className='m-0'>
                  <div className='rounded-[22px] overflow-hidden border border-card-line bg-card p-1'>
                    <img
                      src={screen.img}
                      alt={screen.alt}
                      width={604}
                      height={1400}
                      className='w-full aspect-[604/1400] object-contain bg-white rounded-[18px]'
                      loading='lazy'
                    />
                  </div>
                  <figcaption className='mt-3 text-center font-mono text-[10.5px] tracking-wide uppercase text-muted-2'>
                    {screen.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className='mt-7 text-center font-mono text-[11px] tracking-wide uppercase text-muted-2'>
            Wireframes, from onboarding to order confirmed
          </p>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Two ways to be measured.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            The measurement screen offers a choice before it offers a field:
            Upload photo or Fill Form, with a progress bar above both so the
            step reads as part of the purchase rather than a detour out of
            it.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            The form path serves the buyer who already knows their numbers —
            chest, waist, hip, length and inseam, each pre-filled with a
            plausible value so they are correcting a figure rather than
            facing an empty box. The upload path serves the buyer who does
            not: send a photo and let the maker work it out, with the 2MB
            ceiling stated before the upload rather than after it fails. The
            screen&rsquo;s own promise is the honest version of the
            decision: &ldquo;Submit your measurements for a perfect fit or
            choose standard sizes.&rdquo; Nobody has to know their body in
            numbers to buy a shirt.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <PhoneRow screens={measurementScreens} />
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Browsing by garment and cloth, not department.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            The category row reads Agbada · Kente · Ankara · Isiagu ·
            Kaftan. No menswear, no womenswear, no tops and bottoms. That is
            how the category is actually spoken about — a buyer does not
            want outerwear, they want an agbada; they do not want printed
            cotton, they want ankara.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Using the real names does two jobs at once. Search behaves the
            way people think, and the buyer learns within one screen that
            the app knows what it is selling. It also gives the provenance
            promise somewhere to live: a garment filed under isiagu rather
            than under shirts has a natural place to carry who made it, what
            the cloth is, and where the pattern comes from.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <PhoneRow screens={categoryScreens} />
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            Key Decision
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            The price lives on the button.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-4.5'>
            Every figure in the flow is a naira amount with no conversion
            and no rounding, and the add-to-cart control carries the price
            in its own label: Add to Cart — ₦70,000. On a purchase where the
            total is the main source of hesitation, putting the number on
            the button means the buyer is never one tap away from a figure
            they have not already seen.
          </p>
          <p className='text-[17px] leading-[1.8] text-muted'>
            The basket adds up in front of them rather than behind them —
            subtotal ₦80,000, delivery ₦5,000, total ₦85,000 — with delivery
            as its own line instead of a surprise at the end. Checkout
            carries a promo code field so the 20% banner on the home screen
            is actually redeemable, which is a loop a surprising number of
            flows leave open.
          </p>
        </div>
        <div className='max-w-[1000px] mx-auto px-6 mt-9'>
          <PhoneRow screens={priceScreens} />
        </div>
      </section>

      <section className='py-20 border-t border-white/8'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Flow
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            From heritage to a garment being cut.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted'>
            Eighteen screens, built twice — once in wireframe, once in high
            fidelity. These are the four moments that carry the argument.
          </p>
        </div>

        <div className='max-w-[1000px] mx-auto px-6'>
          {flows.map((flow) => (
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

                {flow.quotes && (
                  <div className='mt-7 space-y-5'>
                    {flow.quotes.map((quote) => (
                      <div
                        key={quote.head}
                        className='border-l-2 border-coral/40 pl-5'
                      >
                        <div className='font-display text-[17px] font-semibold'>
                          {quote.head}
                        </div>
                        <p className='text-muted text-[14.5px] leading-[1.7] mt-1.5 m-0'>
                          {quote.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className='mt-9'>
                <PhoneRow screens={flow.screens} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            What&rsquo;s next
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            Where the product goes from here.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-9'>
            Measurement was the decision this release was built around. Each
            of these follows from it, and each becomes more valuable as the
            catalogue and the seller base grow.
          </p>
          <div className='space-y-6'>
            {nextUp.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.06}>
                <div className='bg-card border border-card-line rounded-2xl p-7'>
                  <h3 className='font-display text-lg font-semibold mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-muted text-[15px] leading-[1.75] m-0'>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='pb-20'>
        <div className='max-w-[760px] mx-auto px-6'>
          <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
            The Outcome
          </span>
          <h2 className='font-display text-[clamp(26px,3.4vw,38px)] font-semibold mb-6.5'>
            What shipped.
          </h2>
          <p className='text-[17px] leading-[1.8] text-muted mb-9'>
            The final design delivers a refined, user-friendly marketplace
            experience that makes discovering and purchasing authentic
            African fashion seamless and engaging — all within a visually
            rich, intuitive interface.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {outcomes.map((outcome) => (
              <div
                key={outcome.num + outcome.desc}
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

      <section className='pb-24'>
        <div className='max-w-[760px] mx-auto px-6'>
          <p className='text-[17px] leading-[1.8] text-muted italic'>
            Designing for made-to-order taught me that the hardest part was
            never the catalogue — it was asking someone for their body
            measurements in the middle of a shopping trip, and making that
            feel like care rather than paperwork.
          </p>
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

export default Alphalli;
