import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Universidades = () => {
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
            backgroundImage: "url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>
        {/* Hero vacío - se puede agregar contenido aquí más adelante */}
      </section>
      {/* Body en blanco */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenido vacío - se puede agregar contenido aquí más adelante */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Universidades;

