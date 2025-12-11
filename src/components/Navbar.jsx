import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

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

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
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
        <div className="flex items-center justify-between h-24 sm:h-28">
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="focus:outline-none"
            >
              <img
                src={scrolled ? "/inversiones_logo_negro.png" : "/inversiones_logo_blanco.png"}
                alt={siteData.name}
                className="h-16 sm:h-20 md:h-24 transition-all duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/institucional"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Institucional
            </Link>
            <Link
              to="/guia-del-inversor"
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Guía del Inversor
            </Link>
            {/* Dropdown Área de Oportunidad */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 flex items-center gap-1 ${
                  scrolled ? 'text-primary-700' : 'text-white'
                }`}
              >
                Área de Oportunidad
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-primary-200 py-2">
                  <Link
                    to="/area-oportunidad/turismo"
                    className="block px-4 py-2 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    Turismo
                  </Link>
                  <Link
                    to="/area-oportunidad/sector-inmobiliario"
                    className="block px-4 py-2 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    Sector Inmobiliario
                  </Link>
                  <Link
                    to="/area-oportunidad/universidades"
                    className="block px-4 py-2 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    Universidades
                  </Link>
                  <Link
                    to="/area-oportunidad/innovacion-tecnologia"
                    className="block px-4 py-2 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    Innovación y Tecnología
                  </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('inversiones')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 ${
                scrolled ? 'text-primary-700' : 'text-white'
              }`}
            >
              Inversiones
            </button>
            <button
              onClick={() => scrollToSection('otros-sectores')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent-500 ${
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
          <Link
            to="/institucional"
            onClick={() => {
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-md"
          >
            Institucional
          </Link>
          <Link
            to="/guia-del-inversor"
            onClick={() => {
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-md"
          >
            Guía del Inversor
          </Link>
          {/* Mobile Dropdown Área de Oportunidad */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-md flex items-center justify-between"
            >
              Área de Oportunidad
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/area-oportunidad/turismo"
                  onClick={() => {
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                    setMobileDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-accent-50 hover:text-accent-600 rounded-md"
                >
                  Turismo
                </Link>
                <Link
                  to="/area-oportunidad/sector-inmobiliario"
                  onClick={() => {
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                    setMobileDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-accent-50 hover:text-accent-600 rounded-md"
                >
                  Sector Inmobiliario
                </Link>
                <Link
                  to="/area-oportunidad/universidades"
                  onClick={() => {
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                    setMobileDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-accent-50 hover:text-accent-600 rounded-md"
                >
                  Universidades
                </Link>
                <Link
                  to="/area-oportunidad/innovacion-tecnologia"
                  onClick={() => {
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                    setMobileDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-accent-50 hover:text-accent-600 rounded-md"
                >
                  Innovación y Tecnología
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              scrollToSection('inversiones');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-md"
          >
            Inversiones
          </button>
          <button
            onClick={() => {
              scrollToSection('otros-sectores');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-md"
          >
            Otros Sectores
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

