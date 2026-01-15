import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Universidades = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero institucional */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Posadas como Polo Universitario y de Inversión
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Un destino estratégico para inversiones universitarias y desarrollo educativo
          </p>
        </div>
      </section>

      {/* Módulo: Ecosistema Universitario */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-1 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
                  Ecosistema Universitario
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Posadas concentra una oferta académica diversa que atrae estudiantes de toda la región. 
                  La ciudad cuenta con instituciones de educación superior reconocidas a nivel nacional, 
                  ofreciendo carreras estratégicas en áreas como ingeniería, ciencias de la salud, 
                  ciencias sociales, derecho y administración.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Este ecosistema académico genera una demanda constante de servicios, alojamiento 
                  y espacios de desarrollo, creando oportunidades de inversión sostenibles a largo plazo.
                </p>

                {/* Datos destacados */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-200">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">
                      +15.000
                    </div>
                    <div className="text-sm text-primary-600">Estudiantes activos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">
                      +50
                    </div>
                    <div className="text-sm text-primary-600">Carreras disponibles</div>
                  </div>
                </div>

                {/* Carreras estratégicas */}
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">
                    Carreras Estratégicas
                  </h3>
                  <ul className="space-y-2 text-primary-600">
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span>Ingenierías (Civil, Industrial, Sistemas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span>Ciencias de la Salud (Medicina, Enfermería, Kinesiología)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span>Derecho y Ciencias Sociales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span>Administración y Contabilidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-2 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Ecosistema Universitario"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-500/0 hover:bg-primary-500/10 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Enlaces a instituciones */}
          <div className="mt-12 pt-8 border-t border-primary-200">
            <h4 className="text-lg font-semibold text-primary-800 mb-4 text-center">
              Enlaces a Instituciones
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.unam.edu.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700 underline text-sm"
              >
                Universidad Nacional de Misiones
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700 underline text-sm"
              >
                Universidades Privadas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo: Impacto Económico del Estudiante */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight mb-6">
              Impacto Económico del Estudiante
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500 mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl">
              La presencia estudiantil genera un flujo económico constante que beneficia múltiples sectores
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Alquileres</div>
              <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                Demanda constante de viviendas y habitaciones para estudiantes
              </p>
              <div className="text-xl font-semibold text-primary-800">
                Alto impacto
              </div>
            </div>

            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Gastronomía</div>
              <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                Restaurantes, cafeterías y servicios de comida rápida
              </p>
              <div className="text-xl font-semibold text-primary-800">
                Alto impacto
              </div>
            </div>

            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Transporte</div>
              <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                Movilidad urbana, taxis y servicios de transporte compartido
              </p>
              <div className="text-xl font-semibold text-primary-800">
                Medio impacto
              </div>
            </div>

            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Comercio</div>
              <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                Librerías, tecnología, vestimenta y servicios personales
              </p>
              <div className="text-xl font-semibold text-primary-800">
                Medio impacto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo: Oportunidades de Inversión */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight mb-6">
              Oportunidades de Inversión
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500 mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl">
              Diversas opciones para capitalizar el ecosistema universitario de Posadas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Link
              to="/area-oportunidad/sector-inmobiliario"
              className="group bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                Alquiler Estudiantil
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Inversión en propiedades para alquiler a estudiantes, con alta demanda y rentabilidad estable
              </p>
            </Link>

            <Link
              to="/area-oportunidad/sector-inmobiliario"
              className="group bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                Compra de Propiedades
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Adquisición de inmuebles en zonas cercanas a universidades con potencial de revalorización
              </p>
            </Link>

            <Link
              to="/area-oportunidad/sector-inmobiliario"
              className="group bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                Alojamiento Temporario
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Desarrollo de hostales, residencias estudiantiles y alojamientos de corta estadía
              </p>
            </Link>

            <Link
              to="/area-oportunidad/sector-inmobiliario"
              className="group bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                Servicios y Comercios
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Inversión en locales comerciales, servicios educativos y negocios orientados al público estudiantil
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo: Posadas como Ciudad para Vivir y Estudiar */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-9a10b0e46613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Posadas como Ciudad para Vivir y Estudiar"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-500/0 hover:bg-primary-500/10 transition-all duration-300"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
                  Posadas como Ciudad para Vivir y Estudiar
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Posadas ofrece una calidad de vida excepcional que la convierte en un destino ideal 
                  para estudiantes y sus familias. La ciudad combina conectividad, seguridad y un 
                  ambiente propicio para el desarrollo académico y personal.
                </p>

                {/* Beneficios */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-start">
                    <span className="text-accent-600 mr-3 mt-1">✓</span>
                    <span className="text-primary-600 text-sm">Costo de vida accesible comparado con otras ciudades universitarias</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-600 mr-3 mt-1">✓</span>
                    <span className="text-primary-600 text-sm">Proximidad entre viviendas y centros educativos</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-600 mr-3 mt-1">✓</span>
                    <span className="text-primary-600 text-sm">Red de apoyo estudiantil y servicios de bienestar</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent-600 mr-3 mt-1">✓</span>
                    <span className="text-primary-600 text-sm">Oportunidades laborales y de práctica profesional</span>
                  </div>
                </div>

                {/* Características */}
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-primary-200">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Calidad de Vida
                    </h3>
                    <p className="text-primary-600 text-sm">
                      Espacios verdes, costanera, actividades culturales
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Conectividad
                    </h3>
                    <p className="text-primary-600 text-sm">
                      Internet, transporte público eficiente
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Seguridad
                    </h3>
                    <p className="text-primary-600 text-sm">
                      Ambiente seguro y servicios de apoyo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo final: Información y Datos */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight mb-6">
              Información y Datos
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500 mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl">
              Acceso a estadísticas, informes y fuentes oficiales sobre el ecosistema universitario
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-6">
                Enlaces y Recursos
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                  >
                    <span className="mr-2">→</span>
                    Estadísticas de matrícula universitaria
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                  >
                    <span className="mr-2">→</span>
                    Informe de impacto económico del sector educativo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                  >
                    <span className="mr-2">→</span>
                    Guía de inversión en zonas universitarias
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                  >
                    <span className="mr-2">→</span>
                    Datos demográficos y proyecciones estudiantiles
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-md"
              >
                Descargar dossier de inversión
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universidades;
