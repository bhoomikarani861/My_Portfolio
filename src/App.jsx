import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ExperienceStats from './components/ExperienceStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import ThemeCustomizer from './components/ThemeCustomizer';
import AIChatbot from './components/AIChatbot';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-dark-bg min-h-screen">
      <CustomCursor />
      <BackgroundEffect />
      <ThemeCustomizer />
      <AIChatbot />
      
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <ExperienceStats />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
