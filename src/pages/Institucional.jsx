import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Institucional = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero con imagen de muestra */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dyybobphi/image/upload/v1764704340/imagen_favoritos_andres_guacurari1_jt3zdo.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>
        {/* Hero vacío - se puede agregar contenido aquí más adelante */}
      </section>
      {/* Body con contenido institucional */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary-800 mb-8">Presentación Institucional</h1>
            
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              El Portal del Inversor es una plataforma digital desarrollada por la Dirección de Inversiones de la Municipalidad de Posadas, con el objetivo de fortalecer la transparencia, facilitar el acceso a información estratégica y promover el crecimiento económico de la ciudad. Esta herramienta integra en un único espacio digital proyectos públicos y privados, datos confiables y oportunidades concretas para quienes buscan invertir en Posadas.
            </p>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Misión del Portal</h2>
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              Brindar información clara, actualizada y accesible que permita orientar decisiones de inversión, potenciar el desarrollo urbano y económico, y consolidar a Posadas como un destino estratégico para los negocios.
            </p>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Objetivos</h2>
            <ul className="list-disc list-inside text-lg text-primary-600 mb-8 space-y-3 leading-relaxed">
              <li>Atraer inversiones locales, nacionales e internacionales.</li>
              <li>Centralizar en un solo lugar información relevante para el inversor.</li>
              <li>Promover proyectos inmobiliarios, comerciales y de infraestructura.</li>
              <li>Facilitar la articulación entre el sector público y privado.</li>
              <li>Impulsar la transparencia y la previsibilidad en los procesos de inversión.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">A quién está dirigido</h2>
            <p className="text-lg text-primary-600 mb-4 leading-relaxed">
              El portal fue diseñado para ser una herramienta práctica y útil para:
            </p>
            <ul className="list-disc list-inside text-lg text-primary-600 mb-8 space-y-3 leading-relaxed">
              <li>Inversores privados.</li>
              <li>Desarrolladores inmobiliarios.</li>
              <li>Empresarios y comerciantes.</li>
              <li>Emprendedores y pymes.</li>
              <li>Cámaras empresariales y profesionales.</li>
              <li>Organismos públicos vinculados al desarrollo económico.</li>
              <li>Ciudadanos interesados en el crecimiento de la ciudad.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Qué ofrece el portal</h2>
            <p className="text-lg text-primary-600 mb-4 leading-relaxed">
              El Portal del Inversor reúne contenidos y herramientas especialmente diseñadas para la toma de decisiones:
            </p>
            <ul className="list-disc list-inside text-lg text-primary-600 mb-8 space-y-3 leading-relaxed">
              <li>Mapa de Oportunidades de Inversión, con zonas estratégicas y potencial de desarrollo.</li>
              <li>Proyectos inmobiliarios destacados, tanto públicos como privados.</li>
              <li>Información económica, demográfica y territorial relevante para inversores.</li>
              <li>Indicadores del mercado inmobiliario y del ecosistema productivo local.</li>
              <li>Agenda de eventos, programas y actividades de la Dirección de Inversiones.</li>
              <li>Acompañamiento institucional personalizado para consultas y gestiones vinculadas a proyectos de inversión.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Actualización y transparencia</h2>
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              La información del portal es actualizada de manera periódica en coordinación con distintas áreas municipales y entidades asociadas, garantizando datos verificados y confiables. La plataforma se consolida como una herramienta transparente, orientada a ofrecer previsibilidad al inversor y facilitar la toma de decisiones.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Institucional;

