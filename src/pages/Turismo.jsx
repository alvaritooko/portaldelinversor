import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Turismo = () => {
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
            backgroundImage: "url(https://res.cloudinary.com/dyybobphi/image/upload/v1765495399/turismo_nautico_inversiones_home_acwpdd.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Turismo y Turismo Náutico
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Oportunidades de inversión en el río Paraná y desarrollo turístico sostenible
          </p>
        </div>
      </section>

      {/* Módulo 1: Introducción estratégica */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-1 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
                  Introducción Estratégica
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Posadas se posiciona como un destino estratégico para inversiones en turismo, 
                  aprovechando su ubicación privilegiada sobre el río Paraná y su potencial como 
                  centro de desarrollo turístico regional.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  El río Paraná representa un activo económico y turístico de gran valor, 
                  ofreciendo oportunidades únicas para inversiones privadas que impulsen el 
                  desarrollo sostenible del sector turístico en la ciudad.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  El enfoque se centra en promover inversiones privadas que generen valor 
                  económico, social y ambiental, contribuyendo al crecimiento del turismo 
                  como sector estratégico para Posadas.
                </p>
              </div>
            </div>

            {/* Placeholder para imagen o contenido adicional */}
            <div className="order-2 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-primary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-primary-400 text-sm italic">
                    [Contenedor para imagen o contenido visual]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenedores interactivos debajo */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-primary-50 border-l-4 border-accent-600 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Información Ampliada
              </h3>
              <div className="text-gray-600 italic text-sm">
                [Contenedor para contenido ampliado sobre estrategia turística, 
                datos del sector, proyecciones y análisis de mercado]
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Documentación y Recursos
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a plan estratégico de turismo]
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a documento PDF con información detallada]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 2: Turismo Náutico en el río Paraná */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Placeholder para imagen */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-primary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-primary-400 text-sm italic">
                    [Contenedor para imagen o contenido visual]
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
                  Turismo Náutico en el río Paraná
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  El turismo náutico en Posadas abarca una amplia gama de actividades y servicios 
                  que aprovechan el potencial del río Paraná. Este sector incluye marinas, 
                  guarderías náuticas, paseos fluviales, deportes acuáticos y servicios 
                  complementarios que generan oportunidades de inversión diversas.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Las ventajas competitivas de Posadas frente a otras ciudades ribereñas se 
                  fundamentan en su ubicación estratégica, la calidad de sus aguas, la 
                  infraestructura existente y el marco normativo que favorece el desarrollo 
                  de emprendimientos turísticos náuticos.
                </p>
              </div>
            </div>
          </div>

          {/* Contenedores interactivos debajo */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Descripción Técnica
              </h3>
              <div className="text-gray-600 italic text-sm">
                [Contenedor para información técnica sobre condiciones del río, 
                normativas náuticas, especificaciones de infraestructura, 
                requisitos técnicos y consideraciones ambientales]
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Recursos Adicionales
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a mapa interactivo del río Paraná]
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a normativa náutica y regulaciones]
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a video institucional o material audiovisual]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 3: Tipos de oportunidades de inversión */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight mb-6">
              Tipos de Oportunidades de Inversión
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
              Diversas opciones para capitalizar el potencial turístico náutico de Posadas
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Infraestructura náutica */}
            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-4">
                Infraestructura Náutica
              </h3>
              <p className="text-base text-primary-600 mb-4 leading-relaxed">
                Inversión en marinas, guarderías náuticas, muelles, rampas de lanzamiento 
                y espacios de amarre que faciliten el acceso y uso del río Paraná.
              </p>
              
              {/* Bloque interactivo vacío */}
              <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                <div className="text-sm text-gray-500 italic">
                  [Contenedor para detalles específicos: tipos de infraestructura, 
                  ubicaciones estratégicas, inversión estimada, rentabilidad]
                </div>
              </div>

              {/* Área para enlaces externos */}
              <div className="mt-4 pt-4 border-t border-primary-200">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline text-sm flex items-center"
                >
                  <span className="mr-2">→</span>
                  [Enlace a información sobre infraestructura náutica]
                </a>
              </div>
            </div>

            {/* Servicios turísticos */}
            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-4">
                Servicios Turísticos
              </h3>
              <p className="text-base text-primary-600 mb-4 leading-relaxed">
                Desarrollo de paseos fluviales, alquiler de embarcaciones, guías turísticos 
                náuticos, servicios de pesca deportiva y actividades recreativas acuáticas.
              </p>
              
              {/* Bloque interactivo vacío */}
              <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                <div className="text-sm text-gray-500 italic">
                  [Contenedor para detalles específicos: tipos de servicios, 
                  modelos de negocio, mercado objetivo, requisitos operativos]
                </div>
              </div>

              {/* Área para enlaces externos */}
              <div className="mt-4 pt-4 border-t border-primary-200">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline text-sm flex items-center"
                >
                  <span className="mr-2">→</span>
                  [Enlace a información sobre servicios turísticos]
                </a>
              </div>
            </div>

            {/* Emprendimientos mixtos */}
            <div className="bg-white border-l-4 border-accent-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-4">
                Emprendimientos Mixtos
              </h3>
              <p className="text-base text-primary-600 mb-4 leading-relaxed">
                Proyectos que combinan turismo náutico con gastronomía, recreación, 
                alojamiento y entretenimiento, creando experiencias integrales para visitantes.
              </p>
              
              {/* Bloque interactivo vacío */}
              <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                <div className="text-sm text-gray-500 italic">
                  [Contenedor para detalles específicos: modelos de negocio mixtos, 
                  sinergias entre servicios, casos de éxito, potencial de desarrollo]
                </div>
              </div>

              {/* Área para enlaces externos */}
              <div className="mt-4 pt-4 border-t border-primary-200">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline text-sm flex items-center"
                >
                  <span className="mr-2">→</span>
                  [Enlace a información sobre emprendimientos mixtos]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 4: Paso a paso para el inversionista */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight mb-6">
              Paso a Paso para el Inversionista
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-3xl mx-auto">
              Flujo simple y claro para guiar el proceso de inversión en turismo náutico
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Paso 1 */}
              <div className="bg-white border-l-4 border-primary-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-3">
                      Identificación de Oportunidad
                    </h3>
                    <p className="text-base text-primary-600 mb-4 leading-relaxed">
                      Reconocimiento de la oportunidad de inversión, análisis inicial 
                      del mercado y evaluación del potencial del proyecto.
                    </p>
                    <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                      <div className="text-sm text-gray-500 italic">
                        [Contenedor para contenido: herramientas de análisis, 
                        criterios de evaluación, estudios de mercado disponibles]
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                      >
                        <span className="mr-2">→</span>
                        [Enlace a recursos de identificación de oportunidades]
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="bg-white border-l-4 border-primary-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-3">
                      Análisis del Proyecto
                    </h3>
                    <p className="text-base text-primary-600 mb-4 leading-relaxed">
                      Estudio técnico, económico y financiero del proyecto, evaluación 
                      de viabilidad y definición del modelo de negocio.
                    </p>
                    <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                      <div className="text-sm text-gray-500 italic">
                        [Contenedor para contenido: metodologías de análisis, 
                        plantillas de evaluación, criterios de viabilidad]
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                      >
                        <span className="mr-2">→</span>
                        [Enlace a herramientas de análisis de proyectos]
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="bg-white border-l-4 border-primary-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-3">
                      Marco Normativo y Permisos
                    </h3>
                    <p className="text-base text-primary-600 mb-4 leading-relaxed">
                      Revisión del marco normativo aplicable, identificación de permisos 
                      necesarios y cumplimiento de regulaciones ambientales y náuticas.
                    </p>
                    <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                      <div className="text-sm text-gray-500 italic">
                        [Contenedor para contenido: normativas vigentes, 
                        guía de permisos, requisitos legales, plazos estimados]
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                      >
                        <span className="mr-2">→</span>
                        [Enlace a normativas y formularios de permisos]
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="bg-white border-l-4 border-primary-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-3">
                      Acompañamiento Institucional
                    </h3>
                    <p className="text-base text-primary-600 mb-4 leading-relaxed">
                      Apoyo y seguimiento por parte de las instituciones públicas, 
                      facilitación de trámites y conexión con actores clave del sector.
                    </p>
                    <div className="bg-primary-50 border border-primary-200 p-4 rounded mt-4">
                      <div className="text-sm text-gray-500 italic">
                        [Contenedor para contenido: servicios de acompañamiento, 
                        puntos de contacto, programas de apoyo, beneficios institucionales]
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                      >
                        <span className="mr-2">→</span>
                        [Enlace a contacto y documentación de acompañamiento]
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 5: Conexión y próximos pasos */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-1 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
                  Conexión y Próximos Pasos
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
                <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  La Municipalidad de Posadas invita a inversores interesados en el sector 
                  turístico náutico a conocer los proyectos activos y las oportunidades en 
                  desarrollo, facilitando el contacto y el acceso a información relevante 
                  para la toma de decisiones.
                </p>
              </div>
            </div>

            {/* Placeholder para imagen o contenido adicional */}
            <div className="order-2 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-primary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-primary-400 text-sm italic">
                    [Contenedor para imagen o contenido visual]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenedores interactivos debajo */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-primary-50 border-l-4 border-accent-600 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Contacto y Agenda
              </h3>
              <div className="text-gray-600 italic text-sm mb-4">
                [Ventana interactiva para formulario de contacto, solicitud de reunión, 
                agenda de consultas o sistema de contacto directo]
              </div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                >
                  Solicitar reunión
                </a>
                <a
                  href="#"
                  className="inline-block ml-4 bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                >
                  Contactar por email
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Recursos y Enlaces
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a agenda de reuniones y eventos]
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a portafolio de proyectos disponibles]
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline flex items-center text-sm"
                >
                  <span className="mr-2">→</span>
                  [Enlace a casos de éxito y referencias]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Turismo;
