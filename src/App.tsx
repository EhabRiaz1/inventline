import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Logistics from './components/Logistics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyNavbar from './components/StickyNavbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StickyNavbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="logistics">
          <Logistics />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;