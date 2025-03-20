import React from 'react';
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
import WinnersBC from './pages/WinnersBC';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/frontier' element={<Frontier />} />
          <Route path='/works/crowdcarry' element={<CrowdCarry />} />
          <Route path='/works/clickcart' element={<ClickCart />} />
          <Route path='/works/winnersbc' element={<WinnersBC />} />
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
