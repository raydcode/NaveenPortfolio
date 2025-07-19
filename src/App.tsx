import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Campaigns from './components/Campaigns';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AISection from './components/AISection';
import MyWorks from './components/MyWorks';

function App() {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Hero />
      <MyWorks />
      <About />
      <Experience />
      <Skills />
      <Campaigns />
      <AISection />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;