import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import BinaryRain from './components/BinaryRain';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/global.css';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100%',
    filter: 'blur(10px)',
    transition: { duration: 0.5 }
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: '-100%',
    filter: 'blur(10px)',
    transition: { duration: 0.5 }
  }
};

const PageWrapper = ({ children, density }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="page-wrapper min-h-screen"
    >
      <BinaryRain density={density} />
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Her sayfa için binary rain yoğunluğunu belirle
  const getDensity = (pathname) => {
    switch (pathname) {
      case '/':
        return 1.0; // Ana sayfa - %100 yoğunluk
      case '/about':
        return 0.9; // Hakkımda - %90 yoğunluk
      case '/skills':
        return 0.8; // Yeteneklerim - %80 yoğunluk
      case '/portfolio':
        return 0.7; // Projelerim - %70 yoğunluk
      case '/contact':
        return 0.5; // İletişim - %50 yoğunluk
      default:
        return 1;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper density={getDensity('/')}><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper density={getDensity('/about')}><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper density={getDensity('/skills')}><Skills /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper density={getDensity('/portfolio')}><Portfolio /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper density={getDensity('/contact')}><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
