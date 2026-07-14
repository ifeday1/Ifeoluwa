import {
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaInstagram,
  FaMedium,
} from 'react-icons/fa6';
import Reveal from '../compontents/Reveal';
import CopyEmailButton from '../compontents/CopyEmailButton';

const email = 'oladeniifeoluwa123@gmail.com';

const socials = [
  { name: 'Behance', icon: <FaBehance />, url: 'https://www.behance.net/oladeniifeoluwa' },
  { name: 'Dribbble', icon: <FaDribbble />, url: 'https://dribbble.com/ifeday' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ifeoluwa-oladeni/' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/i_sticks1' },
  { name: 'Medium', icon: <FaMedium />, url: 'https://medium.com/@oladeniifeoluwa123' },
];

const Contact = () => {
  return (
    <main className='flex-1 flex items-center py-12 min-h-[calc(100vh-84px-90px)]'>
      <div className='max-w-[1200px] w-full mx-auto px-6 md:px-10'>
        <Reveal className='max-w-[640px] mx-auto text-center'>
          <div className='relative overflow-hidden rounded-4xl border border-white/8 px-6 sm:px-12 py-14 sm:py-[70px] bg-[linear-gradient(120deg,#201A16,#15171D_60%)]'>
            <div className='absolute w-[280px] h-[280px] rounded-full -top-[90px] -left-[70px] bg-[radial-gradient(circle,rgba(255,106,61,0.3),transparent_70%)]' />

            <div className='relative'>
              <div className='inline-flex items-center gap-2 border border-white/16 rounded-full px-3.5 py-2 font-mono text-[11px] text-muted mb-6.5'>
                <span className='status-dot' />
                <span>Available for new projects</span>
              </div>

              <span className='font-mono text-[11px] tracking-[0.16em] uppercase text-coral block mb-5'>
                Get in touch
              </span>
              <h1 className='font-display text-[clamp(34px,5.5vw,52px)] font-semibold'>
                Let&rsquo;s collaborate.
              </h1>
              <p className='mt-5 text-muted text-base leading-[1.7]'>
                Write me an email and I&rsquo;ll respond as soon as possible —
                usually within a day.
              </p>

              <div className='mt-11 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 border border-white/16 rounded-3xl sm:rounded-full p-5 sm:pl-6.5 sm:pr-2 sm:py-2 bg-ink/50'>
                <span className='font-mono text-[13px] break-all'>{email}</span>
                <CopyEmailButton email={email} className='sm:shrink-0' />
              </div>

              <div className='flex items-center gap-4 my-11 text-muted-2 text-[13px] font-mono'>
                <span className='flex-1 h-px bg-white/8' />
                or find me here
                <span className='flex-1 h-px bg-white/8' />
              </div>

              <div className='flex gap-3 flex-wrap justify-center'>
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-[13px] text-muted border border-white/16 rounded-full px-5.5 py-3 transition-colors duration-200 hover:text-coral-soft hover:border-coral'
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Contact;
