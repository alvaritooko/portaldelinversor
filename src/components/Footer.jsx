import { siteData } from '../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">{siteData.name}</h3>
            <p className="text-primary-300 text-sm">{siteData.subtitle}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('tecnologia');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Tecnología
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('turismo');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Turismo
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('inversiones');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Inversiones
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-sm text-primary-300">
              Gobierno de Posadas
            </p>
            <p className="text-sm text-primary-300 mt-2">
              Misiones, Argentina
            </p>
          </div>
        </div>
        <div className="border-t border-primary-800 pt-10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-400 mb-4 sm:mb-0">
            © {new Date().getFullYear()} {siteData.name}. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-primary-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
          >
            Volver arriba
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

