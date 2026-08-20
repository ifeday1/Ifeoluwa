  
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compontents/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './compontents/ScrollToTop';
import Footer from './compontents/Footer';
import Frontier from './pages/Frontier';
import CrowdCarry from './pages/CrowdCarry';
import ClickCart from './pages/ClickCart';
import PrepByme from './pages/PrepByme';
import Scroll from './compontents/Scroll';
import Ignite from './pages/Ignite';
import Cursor from './compontents/Cursor';
import Grain from './compontents/Grain';

const App = () => {
  return (
    <>
      <Router>
        <Cursor />
        <Grain />
        <Scroll />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/frontier' element={<Frontier />} />
          <Route path='/works/ignitepro' element={<Ignite />} />
          <Route path='/works/crowdcarry' element={<CrowdCarry />} />
          <Route path='/works/clickcart' element={<ClickCart />} />
          <Route path='/works/prepbyme' element={<PrepByme />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
};

export default App;
