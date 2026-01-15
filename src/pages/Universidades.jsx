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
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Posadas como Polo Universitario y de Inversión
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Un destino estratégico para inversiones universitarias y desarrollo educativo
          </p>
          <Link
            to="/inversiones"
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Ver oportunidades de inversión
          </Link>
        </div>
      </section>

      {/* Módulo: Ecosistema Universitario */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Ecosistema Universitario
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Posadas concentra una oferta académica diversa que atrae estudiantes de toda la región
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary-800 mb-4">
                  Universidades Públicas y Privadas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La ciudad cuenta con instituciones de educación superior reconocidas a nivel nacional, 
                  ofreciendo carreras estratégicas en áreas como ingeniería, ciencias de la salud, 
                  ciencias sociales, derecho y administración.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este ecosistema académico genera una demanda constante de servicios, alojamiento 
                  y espacios de desarrollo, creando oportunidades de inversión sostenibles a largo plazo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-200">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">
                    +15.000
                  </div>
                  <div className="text-sm text-gray-600">Estudiantes activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">
                    +50
                  </div>
                  <div className="text-sm text-gray-600">Carreras disponibles</div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Carreras Estratégicas
                </h4>
                <ul className="space-y-2 text-gray-700">
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

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
                }}
              ></div>
            </div>
          </div>

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
      <section className="py-16 sm:py-20 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Impacto Económico del Estudiante
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              La presencia estudiantil genera un flujo económico constante que beneficia múltiples sectores
            </p>
            <Link
              to="/area-oportunidad/universidades"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Explorar sectores beneficiados
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Alquileres</div>
              <p className="text-gray-600 text-sm mb-4">
                Demanda constante de viviendas y habitaciones para estudiantes
              </p>
              <div className="text-2xl font-semibold text-primary-800">
                Alto impacto
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Gastronomía</div>
              <p className="text-gray-600 text-sm mb-4">
                Restaurantes, cafeterías y servicios de comida rápida
              </p>
              <div className="text-2xl font-semibold text-primary-800">
                Alto impacto
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Transporte</div>
              <p className="text-gray-600 text-sm mb-4">
                Movilidad urbana, taxis y servicios de transporte compartido
              </p>
              <div className="text-2xl font-semibold text-primary-800">
                Medio impacto
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 mb-2">Comercio</div>
              <p className="text-gray-600 text-sm mb-4">
                Librerías, tecnología, vestimenta y servicios personales
              </p>
              <div className="text-2xl font-semibold text-primary-800">
                Medio impacto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo: Oportunidades de Inversión */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Oportunidades de Inversión
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diversas opciones para capitalizar el ecosistema universitario de Posadas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/inversiones"
              className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent-600"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                Alquiler Estudiantil
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Inversión en propiedades para alquiler a estudiantes, con alta demanda y rentabilidad estable
              </p>
            </Link>

            <Link
              to="/inversiones"
              className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent-600"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                Compra de Propiedades
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Adquisición de inmuebles en zonas cercanas a universidades con potencial de revalorización
              </p>
            </Link>

            <Link
              to="/inversiones"
              className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent-600"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                Alojamiento Temporario
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Desarrollo de hostales, residencias estudiantiles y alojamientos de corta estadía
              </p>
            </Link>

            <Link
              to="/inversiones"
              className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent-600"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                Servicios y Comercios
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Inversión en locales comerciales, servicios educativos y negocios orientados al público estudiantil
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo: Posadas como Ciudad para Vivir y Estudiar */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1449824913935-9a10b0e46613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">
              Posadas como Ciudad para Vivir y Estudiar
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Posadas ofrece una calidad de vida excepcional que la convierte en un destino ideal 
              para estudiantes y sus familias. La ciudad combina conectividad, seguridad y un 
              ambiente propicio para el desarrollo académico y personal.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  Calidad de Vida
                </h3>
                <p className="text-gray-700 text-sm">
                  Espacios verdes, costanera, actividades culturales y recreativas que enriquecen la experiencia estudiantil
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  Conectividad
                </h3>
                <p className="text-gray-700 text-sm">
                  Acceso a servicios de internet, transporte público eficiente y proximidad a centros educativos
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  Seguridad
                </h3>
                <p className="text-gray-700 text-sm">
                  Ambiente seguro que brinda tranquilidad a estudiantes y familias, con servicios de seguridad y apoyo institucional
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-200">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                Beneficios para Estudiantes y Familias
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Costo de vida accesible comparado con otras ciudades universitarias</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Proximidad entre viviendas y centros educativos</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Red de apoyo estudiantil y servicios de bienestar</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Oportunidades laborales y de práctica profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo final: Información y Datos */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary-50 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
                Información y Datos
              </h2>
              <p className="text-lg text-gray-600">
                Acceso a estadísticas, informes y fuentes oficiales sobre el ecosistema universitario
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-6">
                Enlaces y Recursos
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline flex items-center"
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
                    className="text-accent-600 hover:text-accent-700 underline flex items-center"
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
                    className="text-accent-600 hover:text-accent-700 underline flex items-center"
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
                    className="text-accent-600 hover:text-accent-700 underline flex items-center"
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
