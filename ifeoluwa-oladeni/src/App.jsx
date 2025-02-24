import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compontents/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './compontents/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
};

export default App;
