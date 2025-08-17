import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon'; // ✅ new import

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
