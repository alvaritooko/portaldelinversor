import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Inversiones = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Cerrar modal con tecla ESC y prevenir scroll del body
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Guía para Invertir en Inmobiliaria en Posadas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
            Una guía paso a paso para tomar decisiones informadas en el mercado inmobiliario de Posadas, Misiones.
          </p>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Dirección General de Turismo e Inversiones, Municipalidad de Posadas
          </p>
        </div>
      </section>

      {/* Body - Contenido completo */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Módulo 1 – ¿Por qué invertir en inmobiliaria? */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">¿Por qué invertir en inmobiliaria?</h2>
            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Beneficios clave</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Patrimonio tangible que conserva y aumenta su valor en el tiempo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Generación de ingresos pasivos mediante alquiler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Protección ante la inflación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Diversificación del portafolio de inversiones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Posibilidad de apalancamiento financiero</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Perfil del inversor</h3>
                <p className="text-primary-600 mb-4">
                  Esta guía está dirigida a inversores que buscan información clara y herramientas prácticas para evaluar oportunidades inmobiliarias en Posadas.
                </p>
                <p className="text-primary-600">
                  No se requieren conocimientos técnicos previos. El contenido está estructurado para ser accesible tanto para inversores principiantes como para aquellos con experiencia intermedia.
                </p>
              </div>
            </div>
          </section>

          {/* Módulo 2 – Paso 1: Seleccionar la zona */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Paso 1: Seleccionar la zona</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-3xl">
              La elección de la zona es fundamental. Una buena ubicación puede determinar el éxito de la inversión a largo plazo.
            </p>
            
            {/* Instrucciones para usar el mapa */}
            <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">Cómo buscar información catastral</h3>
              <p className="text-primary-600 mb-3">
                Ingresar al siguiente enlace. Encontrarás una ventana a la izquierda con los apartados donde podés ingresar los datos catastrales de la ciudad de Posadas, como también la posibilidad de utilizar el plano con un click y desplazarte por cada zona de la ciudad explorando las diferentes secciones y barrios de forma independiente:
              </p>
              <ul className="space-y-2 text-primary-600 ml-4">
                <li className="flex items-start">
                  <span className="mr-2 text-accent-500">•</span>
                  <span><strong>Departamento:</strong> 4 - Capital</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent-500">•</span>
                  <span><strong>Municipio:</strong> 59 - Posadas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent-500">•</span>
                  <span>Luego, según la zona de Posadas: <strong>Sección</strong>, <strong>Chacra</strong>, <strong>Manzana</strong> y <strong>Parcela</strong></span>
                </li>
              </ul>
            </div>

            {/* Ventana horizontal para imagen clickeable */}
            <div className="mb-12">
              <a 
                href="https://www.mapa.catastro.misiones.gov.ar/mapaCatastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768429269/inversiones_catastro_plano_secciones_m8pkre.png"
                    alt="Plano de secciones y catastro de Posadas"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Criterios de análisis urbano</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Accesibilidad y conectividad vial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Proximidad a servicios esenciales (educación, salud, comercio)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Infraestructura existente y planificada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Calidad del entorno urbano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Seguridad y mantenimiento del área</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Variables económicas y sociales</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Dinámica demográfica del barrio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Nivel socioeconómico predominante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Tendencia de precios y valorización histórica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Oferta y demanda de propiedades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Proyectos públicos y privados en desarrollo</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Módulo 3 – Barrios de Posadas */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Barrios de Posadas</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-3xl">
              Análisis por barrio con indicadores clave para la toma de decisiones. La información se actualiza periódicamente.
            </p>
            
            {/* Instrucciones para usar el mapa de barrios */}
            <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">Cómo buscar información de los barrios</h3>
              <p className="text-primary-600 mb-3">
                Ingresar a la ventana. En la parte izquierda tendrás varios botones de búsqueda. Darle clic a los cuadrados superpuestos y seleccionar por chacras y barrios, los cuales se resaltarán según la zona.
              </p>
              <p className="text-primary-600">
                También tiene la posibilidad de desplazarse libremente con el mouse y explorar el mapa interactivo.
              </p>
            </div>
            
            {/* Ventana horizontal para imagen clickeable */}
            <div className="mb-12">
              <a 
                href="https://umap.openstreetmap.fr/es/map/barrios-y-chacras-de-posadas_1269561#13/-27.3882/-55.9657"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768430861/inversiones_barrios_de_posadas_u6iaj0.png"
                    alt="Mapa de barrios de Posadas"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
            
            {/* Estructura reutilizable por barrio */}
            <div className="space-y-16">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Barrio Centro</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Zonificación</p>
                    <p className="text-primary-700">[Zona comercial y residencial]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Accesibilidad</p>
                    <p className="text-primary-700">[Alta - conectividad central]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Servicios</p>
                    <p className="text-primary-700">[Completos - zona consolidada]</p>
                  </div>
                </div>
                <p className="text-primary-600">
                  [Descripción del barrio, características principales, tendencias de desarrollo y oportunidades de inversión identificadas.]
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Barrio Villa Blosset</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Zonificación</p>
                    <p className="text-primary-700">[Zona residencial]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Accesibilidad</p>
                    <p className="text-primary-700">[Media - vías principales]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Servicios</p>
                    <p className="text-primary-700">[En desarrollo]</p>
                  </div>
                </div>
                <p className="text-primary-600">
                  [Descripción del barrio, características principales, tendencias de desarrollo y oportunidades de inversión identificadas.]
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Barrio Itaembé Guazú</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Zonificación</p>
                    <p className="text-primary-700">[Zona residencial y mixta]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Accesibilidad</p>
                    <p className="text-primary-700">[Buena - en expansión]</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 mb-1">Servicios</p>
                    <p className="text-primary-700">[En crecimiento]</p>
                  </div>
                </div>
                <p className="text-primary-600">
                  [Descripción del barrio, características principales, tendencias de desarrollo y oportunidades de inversión identificadas.]
                </p>
              </div>
            </div>
          </section>

          {/* Módulo 4 – Indicadores urbanísticos */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Indicadores urbanísticos</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-3xl">
              Los indicadores urbanísticos definen qué se puede construir en cada zona. Es fundamental conocerlos antes de adquirir un terreno o planificar un proyecto.
            </p>
            
            {/* Instrucciones para buscar indicadores urbanísticos */}
            <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">Cómo buscar los indicadores urbanísticos paso a paso</h3>
              <ol className="space-y-3 text-primary-600 ml-4 list-decimal">
                <li>Hacer click en la imagen para ingresar al GIS</li>
                <li>Una vez abierto, del lado derecho tenemos un panel con categorías por secciones de Posadas</li>
                <li>Seleccionamos la sección, se pintará la zona de Posadas con esa sección</li>
                <li>Acercamos con el scroll del mouse o la pantalla del celular hasta posicionarnos sobre la parcela específica</li>
                <li>Le damos click a la parcela y se abrirá una ventana con los datos catastrales y la opción de ver el indicador urbanístico descargable con toda la información</li>
              </ol>
            </div>
            
            {/* Ventana horizontal para imagen clickeable */}
            <div className="mb-12">
              <a 
                href="https://posadas.gov.ar/planurbano/mapamuni/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768432230/inversiones_indicadores_urbanisticos_vwhzln.png"
                    alt="Indicadores urbanísticos de Posadas"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">FOS - Factor de Ocupación del Suelo</h3>
                <p className="text-primary-600 mb-4">
                  Porcentaje del terreno que puede ser ocupado por la construcción en planta baja.
                </p>
                <p className="text-sm text-primary-500">
                  <strong>Ejemplo:</strong> FOS 0.6 significa que se puede construir sobre el 60% del terreno.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">FOT - Factor de Ocupación Total</h3>
                <p className="text-primary-600 mb-4">
                  Relación entre la superficie total construible y la superficie del terreno.
                </p>
                <p className="text-sm text-primary-500">
                  <strong>Ejemplo:</strong> FOT 1.2 permite construir 120 m² por cada 100 m² de terreno.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Altura máxima</h3>
                <p className="text-primary-600 mb-4">
                  Cantidad de pisos o metros permitidos según la zonificación.
                </p>
                <p className="text-sm text-primary-500">
                  Varía según la zona: desde PB + 1 hasta edificios en altura.
                </p>
              </div>
            </div>

            {/* Título y subtítulo para ejemplos de indicadores urbanísticos */}
            <div className="mt-12 mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">Ejemplos de Indicadores Urbanísticos</h3>
              <p className="text-lg text-primary-600 max-w-3xl">
                A continuación se presentan ejemplos visuales de cómo se aplican los indicadores urbanísticos en diferentes zonas de Posadas.
              </p>
            </div>

            {/* Ventanas verticales rectangulares con ejemplos de indicadores urbanísticos */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <button
                onClick={() => openModal('https://res.cloudinary.com/dyybobphi/image/upload/v1768432773/inversiones_ejemplo_indicador_urbanistico3_wy2lo4.png')}
                className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full h-96 bg-gray-100 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768432773/inversiones_ejemplo_indicador_urbanistico3_wy2lo4.png"
                    alt="Ejemplo de indicador urbanístico 3"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </button>

              <button
                onClick={() => openModal('https://res.cloudinary.com/dyybobphi/image/upload/v1768432772/inversiones_ejemplo_indicador_urbanistico2_uv8rv6.png')}
                className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full h-96 bg-gray-100 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768432772/inversiones_ejemplo_indicador_urbanistico2_uv8rv6.png"
                    alt="Ejemplo de indicador urbanístico 2"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </button>

              <button
                onClick={() => openModal('https://res.cloudinary.com/dyybobphi/image/upload/v1768432772/inversiones_ejemplo_indicador_urbanistico1_tvfwco.png')}
                className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer focus:outline-none"
              >
                <div className="w-full h-96 bg-gray-100 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768432772/inversiones_ejemplo_indicador_urbanistico1_tvfwco.png"
                    alt="Ejemplo de indicador urbanístico 1"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </button>
            </div>

            {/* Modal/Lightbox para mostrar imagen en tamaño completo */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                onClick={closeModal}
              >
                <div className="relative max-w-7xl max-h-full">
                  <button
                    onClick={closeModal}
                    className="absolute -top-10 right-0 text-white hover:text-accent-500 transition-colors text-2xl font-bold focus:outline-none"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                  <img
                    src={selectedImage}
                    alt="Vista ampliada"
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Zonificación</h3>
              <p className="text-primary-600 mb-4">
                La zonificación clasifica el territorio según el uso permitido:
              </p>
              <ul className="space-y-2 text-primary-600">
                <li className="flex items-start">
                  <span className="mr-3 text-accent-500">•</span>
                  <span><strong>Residencial:</strong> Viviendas unifamiliares y multifamiliares</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-500">•</span>
                  <span><strong>Comercial:</strong> Actividades comerciales y de servicios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-500">•</span>
                  <span><strong>Mixta:</strong> Combinación de usos residenciales y comerciales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-500">•</span>
                  <span><strong>Industrial:</strong> Actividades productivas e industriales</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-accent-50 p-6 rounded-lg border-l-4 border-accent-500">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">¿Qué permiten y qué limitan?</h3>
              <p className="text-primary-600 mb-3">
                Estos indicadores determinan la densidad de construcción posible, el tipo de proyecto viable y, en consecuencia, el potencial de rentabilidad.
              </p>
              <p className="text-primary-600">
                Es recomendable consultar el Código de Ordenamiento Urbano de Posadas y verificar la zonificación específica del terreno antes de realizar cualquier inversión.
              </p>
            </div>
          </section>

          {/* Módulo 5 – Tipos de inversión */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Tipos de inversión</h2>
            <p className="text-lg text-primary-600 mb-12 max-w-3xl">
              Diferentes estrategias según el perfil del inversor, el capital disponible y los objetivos de rentabilidad.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-primary-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Lote</h3>
                <p className="text-primary-600 mb-4">
                  Adquisición de terreno para valorización a mediano o largo plazo, o como insumo para desarrollo futuro.
                </p>
                <ul className="space-y-2 text-sm text-primary-600">
                  <li>• Menor inversión inicial</li>
                  <li>• Menor mantenimiento</li>
                  <li>• Rentabilidad a largo plazo</li>
                  <li>• Requiere análisis de zonificación</li>
                </ul>
              </div>

              <div className="border border-primary-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Vivienda</h3>
                <p className="text-primary-600 mb-4">
                  Compra de propiedad terminada para uso propio, alquiler o reventa.
                </p>
                <ul className="space-y-2 text-sm text-primary-600">
                  <li>• Inversión inmediata en activo tangible</li>
                  <li>• Posibilidad de generar renta</li>
                  <li>• Requiere mantenimiento</li>
                  <li>• Liquidez relativa</li>
                </ul>
              </div>

              <div className="border border-primary-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Desarrollo</h3>
                <p className="text-primary-600 mb-4">
                  Construcción de obra nueva o remodelación para venta o alquiler.
                </p>
                <ul className="space-y-2 text-sm text-primary-600">
                  <li>• Mayor potencial de rentabilidad</li>
                  <li>• Requiere conocimiento técnico</li>
                  <li>• Mayor riesgo y capital</li>
                  <li>• Plazos de ejecución</li>
                </ul>
              </div>

              <div className="border border-primary-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Renta</h3>
                <p className="text-primary-600 mb-4">
                  Adquisición de propiedad para generar ingresos mediante alquiler.
                </p>
                <ul className="space-y-2 text-sm text-primary-600">
                  <li>• Ingresos recurrentes</li>
                  <li>• Valorización del activo</li>
                  <li>• Gestión de inquilinos</li>
                  <li>• Mantenimiento continuo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Módulo 6 – Paso 2: Proyecto y factibilidad */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Paso 2: Proyecto y factibilidad</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-3xl">
              Una vez seleccionada la zona, es necesario evaluar la viabilidad técnica, económica y legal del proyecto.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Análisis técnico</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Estado del terreno y topografía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Servicios disponibles (agua, luz, gas, cloacas)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Factibilidad de construcción según normativa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Requerimientos de infraestructura</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Costos</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Adquisición del terreno o propiedad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Costos de construcción o remodelación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Honorarios profesionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Gastos administrativos y legales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Reserva para imprevistos (10-15%)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Riesgos</h3>
                <ul className="space-y-3 text-primary-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Variaciones en costos de construcción</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Cambios normativos o de zonificación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Fluctuaciones del mercado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent-500">•</span>
                    <span>Plazos de ejecución</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Módulo 7 – Carpeta de obra */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Carpeta de obra</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">¿Qué es?</h3>
              <p className="text-lg text-primary-600 max-w-3xl">
                La carpeta de obra es el conjunto de documentación técnica y legal necesaria para obtener el permiso de construcción. Es un requisito obligatorio para iniciar cualquier obra en Posadas.
              </p>
            </div>

            {/* Ventana horizontal para imagen clickeable */}
            <div className="mb-12">
              <a 
                href="https://posadas.gestiondeobrasprivadas.com.ar/autogestion/web/site/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dyybobphi/image/upload/v1768434055/inversiones_carpetas_obra_posadas_gov_f8qdhb.png"
                    alt="Carpetas de obra - Posadas"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Documentación necesaria</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-800 mb-3">Documentación del terreno</h4>
                  <ul className="space-y-2 text-primary-600">
                    <li>• Título de propiedad</li>
                    <li>• Plano de mensura</li>
                    <li>• Certificado de dominio</li>
                    <li>• Informe de inhibiciones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-3">Documentación técnica</h4>
                  <ul className="space-y-2 text-primary-600">
                    <li>• Proyecto arquitectónico</li>
                    <li>• Cálculo estructural</li>
                    <li>• Instalaciones (sanitarias, eléctricas, gas)</li>
                    <li>• Plano de obra</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Flujo paso a paso</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Preparación de documentación</h4>
                    <p className="text-primary-600">Reunir toda la documentación requerida según el tipo de obra.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Presentación</h4>
                    <p className="text-primary-600">Solicitar turno y presentar la carpeta en la Dirección de Obras Privadas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Revisión</h4>
                    <p className="text-primary-600">Evaluación técnica y legal por parte de la municipalidad.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Aprobación</h4>
                    <p className="text-primary-600">Una vez aprobada, se otorga el permiso de construcción.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Módulo 8 – Imágenes, planos y referencias */}
          <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">Imágenes, planos y referencias</h2>
            <p className="text-lg text-primary-600 mb-12 max-w-3xl">
              Material de apoyo visual y documentación complementaria para la toma de decisiones.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Imágenes</h3>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <p className="text-primary-500">[Espacio para galería de imágenes]</p>
                  <p className="text-sm text-primary-400 mt-2">Fotografías de referencias, proyectos similares, ubicaciones</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Planos</h3>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <p className="text-primary-500">[Espacio para planos y documentos]</p>
                  <p className="text-sm text-primary-400 mt-2">Planos de zonificación, mapas de barrios, planos de referencia</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Enlaces externos</h3>
              <div className="bg-primary-50 p-6 rounded-lg">
                <ul className="space-y-3 text-primary-600">
                  <li>
                    <strong className="text-primary-800">Código de Ordenamiento Urbano:</strong>{' '}
                    <a 
                      href="https://posadas.gov.ar/planurbano/normativas-vigentes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:text-accent-700 underline"
                    >
                      Normativas Vigentes
                    </a>
                  </li>
                  <li>
                    <strong className="text-primary-800">Dirección de Obras Privadas:</strong>{' '}
                    <a 
                      href="https://posadas.gov.ar/planurbano/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:text-accent-700 underline"
                    >
                      Plan Urbano Ambiental
                    </a>
                  </li>
                  <li>
                    <strong className="text-primary-800">Mapa interactivo de zonificación:</strong>{' '}
                    <a 
                      href="https://posadas.gov.ar/planurbano/mapoteca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:text-accent-700 underline"
                    >
                      Mapoteca
                    </a>
                  </li>
                  <li>
                    <strong className="text-primary-800">Registro de la Propiedad:</strong>{' '}
                    <a 
                      href="https://rpi.misiones.gob.ar/formularios/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:text-accent-700 underline"
                    >
                      Formularios
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cierre */}
          <section className="border-t border-primary-200 pt-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Inversión informada, decisiones acertadas</h2>
              <p className="text-lg text-primary-600 mb-8">
                Esta guía es una herramienta de apoyo para la toma de decisiones. Se recomienda siempre consultar con profesionales (arquitectos, escribanos, contadores) y verificar la información específica de cada proyecto.
              </p>
              <p className="text-primary-600 mb-8">
                La Dirección General de Turismo e Inversiones de la Municipalidad de Posadas está disponible para brindar información complementaria y acompañar a los inversores en sus consultas.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-primary-700 font-semibold mb-2">¿Necesitas más información?</p>
                <p className="text-primary-600">Contacta con la Dirección General de Turismo e Inversiones</p>
                <p className="text-primary-600">Municipalidad de Posadas, Misiones, Argentina</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inversiones;

