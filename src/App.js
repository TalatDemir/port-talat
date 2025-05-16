import React, { lazy, Suspense, memo, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import BinaryRain from './components/BinaryRain';
import './styles/global.css';
import './App.css';

// Lazy loading ile sayfaları yükle
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading komponenti
const LoadingScreen = memo(() => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-cyan-400 text-2xl">Yükleniyor...</div>
  </div>
));

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100%',
    filter: 'blur(10px)',
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    x: '-100%',
    filter: 'blur(10px)',
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
};

const PageWrapper = memo(({ children, density }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="page-wrapper will-change-transform"
      style={{ minHeight: '100vh' }}
    >
      <BinaryRain density={density} />
      <div className="page-content">
        {children}
      </div>
    </motion.div>
  );
});

const AnimatedRoutes = memo(() => {
  const location = useLocation();

  const getDensity = (pathname) => {
    // Mobil cihazlar için yoğunluğu artır (%80)
    const isMobile = window.innerWidth <= 768;
    const baseDensity = isMobile ? 0.8 : 1.0;

    switch (pathname) {
      case '/':
      case '/about':
      case '/skills':
      case '/services':
      case '/portfolio':
      case '/contact':
        return baseDensity;
      default:
        return baseDensity;
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper density={getDensity('/')}><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper density={getDensity('/about')}><About /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper density={getDensity('/skills')}><Skills /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper density={getDensity('/services')}><Services /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper density={getDensity('/portfolio')}><Portfolio /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper density={getDensity('/contact')}><Contact /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
});

const App = memo(() => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <main className="min-h-screen pt-16">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
});

export default App;
