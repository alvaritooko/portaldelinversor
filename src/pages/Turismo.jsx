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

      <Footer />
    </div>
  );
};

export default Turismo;
