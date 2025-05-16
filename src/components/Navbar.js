import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/about', label: 'Hakkımda' },
    { path: '/skills', label: 'Yeteneklerim' },
    { path: '/services', label: 'Neler Yapabilirim' },
    { path: '/portfolio', label: 'Projelerim' },
    { path: '/contact', label: 'İletişim' }
  ];

  // Scroll yönetimi - performans için throttle eklendi
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    if (visible !== isVisible) {
      setVisible(isVisible);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Mobil menü açıkken scroll'u engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo ve Profil */}
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Talat Demir"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                Talat Demir
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'bg-white/10 text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - Sola alındı */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-white/5 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ana menüyü aç</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Sola alındı */}
        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } fixed inset-y-0 left-0 w-64 bg-black/95 backdrop-blur-xl transform transition-all duration-300 ease-in-out md:hidden h-screen overflow-y-auto z-50`}
        >
          {/* Menü kapatma butonu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-white/5 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="px-4 py-6 space-y-6 mt-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-white/10 text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;