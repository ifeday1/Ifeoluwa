# Ifeoluwa Oladeni — Portfolio

Personal portfolio of Ifeoluwa Oladeni, a Lagos-based product designer who codes. The site showcases UI/UX, brand identity, and frontend development work through detailed case studies.

## Case studies

| Project | Year | Focus |
| --- | --- | --- |
| [Prep Byme](src/pages/PrepByme.jsx) | 2026 | Multi-channel inventory and fulfillment dashboard for e-commerce sellers (web + mobile) |
| [IgnitePro Community](src/pages/Ignite.jsx) | 2025 | Community platform for founders — events, pitch tracks, member hub |
| [Click Cart](src/pages/ClickCart.jsx) | 2024 | Mobile-first shopping app, from brand identity to checkout |
| [Crowd Carry](src/pages/CrowdCarry.jsx) | 2024 | Power-bank sharing app concept — waitlist landing and product UI |
| [Frontier Solar Tech](src/pages/Frontier.jsx) | 2022 | Marketing site and quote flow for a solar installer |

## Tech stack

- [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- [React Router 7](https://reactrouter.com/) for client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for animation
- [react-icons](https://react-icons.github.io/react-icons/) and [lucide-react](https://lucide.dev/) for icons

## Project structure

```
src/
├── App.jsx          # Routes and global layout (navbar, cursor, grain, footer)
├── pages/           # Home, Works, About, Contact, and one page per case study
├── components/      # Shared UI: Navbar, Footer, Reveal, Magnetic, CountUp, Marquee, Cursor, ...
├── assets/          # Project screenshots and photography
└── index.css        # Tailwind setup and theme tokens
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/works` | Work index |
| `/works/prepbyme` | Prep Byme case study |
| `/works/ignitepro` | IgnitePro case study |
| `/works/clickcart` | Click Cart case study |
| `/works/crowdcarry` | Crowd Carry case study |
| `/works/frontier` | Frontier Solar Tech case study |
| `/about` | About |
| `/contact` | Contact |

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/). `netlify.toml` and `public/_redirects` rewrite every path to `index.html` so client-side routes work on refresh.

## Contact

- Email: oladeniifeoluwa123@gmail.com
- [LinkedIn](https://www.linkedin.com/in/ifeoluwa-oladeni/) · [Behance](https://www.behance.net/oladeniifeoluwa) · [Dribbble](https://dribbble.com/ifeday) · [Medium](https://medium.com/@oladeniifeoluwa123)
