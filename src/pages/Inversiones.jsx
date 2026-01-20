import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Inversiones = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dyybobphi/image/upload/v1764704340/imagen_favoritos_andres_guacurari1_jt3zdo.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Inversiones
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
        </div>
      </section>

      {/* Módulo 1: Desarrollo Residencial Premium */}
      <section className="py-20 sm:py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-primary-100">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent-500/10 rounded-full">
                    <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">Desarrollo Inmobiliario</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
                    Residencial Los Alamos
                  </h2>
                  <div className="w-20 h-1 bg-accent-500"></div>
                  <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-semibold text-primary-700">Sector:</span>
                    <span className="text-sm text-primary-600 ml-2">Residencial Premium</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                  alt="Lorem ipsum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 2: Centro Comercial y Empresarial */}
      <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                  alt="Lorem ipsum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-primary-100">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent-500/10 rounded-full">
                    <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">Comercial</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
                    Centro Empresarial Posadas
                  </h2>
                  <div className="w-20 h-1 bg-accent-500"></div>
                  <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-semibold text-primary-700">Sector:</span>
                    <span className="text-sm text-primary-600 ml-2">Comercial y Empresarial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 3: Tecnología e Innovación */}
      <section className="py-20 sm:py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-primary-100">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent-500/10 rounded-full">
                    <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">Tecnología</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
                    Parque Tecnológico Misiones
                  </h2>
                  <div className="w-20 h-1 bg-accent-500"></div>
                  <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-semibold text-primary-700">Sector:</span>
                    <span className="text-sm text-primary-600 ml-2">Tecnología e Innovación</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Lorem ipsum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 4: Turismo y Hotelería */}
      <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Lorem ipsum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-primary-100">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent-500/10 rounded-full">
                    <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">Turismo</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
                    Complejo Turístico Costanera
                  </h2>
                  <div className="w-20 h-1 bg-accent-500"></div>
                  <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-semibold text-primary-700">Sector:</span>
                    <span className="text-sm text-primary-600 ml-2">Turismo y Hotelería</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 5: Infraestructura y Logística */}
      <section className="py-20 sm:py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-primary-100">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent-500/10 rounded-full">
                    <span className="text-accent-600 font-semibold text-sm uppercase tracking-wide">Infraestructura</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
                    Terminal Logística Posadas
                  </h2>
                  <div className="w-20 h-1 bg-accent-500"></div>
                  <p className="text-lg sm:text-xl text-primary-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-semibold text-primary-700">Sector:</span>
                    <span className="text-sm text-primary-600 ml-2">Logística e Infraestructura</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Lorem ipsum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inversiones;
