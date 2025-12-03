import { useState, useEffect } from 'react';
import { siteData } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1
              className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                scrolled ? 'text-primary-800' : 'text-white'
              }`}
            >
              {siteData.name}
            </h1>
            <p
              className={`text-xs sm:text-sm transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-white/90'
              }`}
            >
              {siteData.subtitle}
            </p>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('tecnologia')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection('turismo')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Turismo
            </button>
            <button
              onClick={() => scrollToSection('inversiones')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Inversiones
            </button>
            <button
              onClick={() => scrollToSection('universidades')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Universidades
            </button>
            <button
              onClick={() => scrollToSection('otros-sectores')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Otros Sectores
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white/98 backdrop-blur-lg border-t border-primary-200 shadow-lg"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <button
            onClick={() => {
              scrollToSection('hero');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              scrollToSection('tecnologia');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Tecnología
          </button>
          <button
            onClick={() => {
              scrollToSection('turismo');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Turismo
          </button>
          <button
            onClick={() => {
              scrollToSection('inversiones');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Inversiones
          </button>
          <button
            onClick={() => {
              scrollToSection('universidades');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Universidades
          </button>
          <button
            onClick={() => {
              scrollToSection('otros-sectores');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md"
          >
            Otros Sectores
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

