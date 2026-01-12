import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';

const Presentacion = () => {
  // Array de imágenes para el carrusel
  const [carouselImages] = useState([
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/1_nplmz7.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/2_noew7v.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/3_muialg.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/4_zoalfw.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/5_ijluof.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/6_zsvnii.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/7_clrzoo.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241614/8_t8liym.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/9_bsoecd.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/10_bwj0oq.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/11_k4itye.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/12_xhlfsu.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241615/13_yvjlxr.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241616/14_cgniwd.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241616/15_yf1eqg.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241616/16_az5fud.jpg",
    "https://res.cloudinary.com/dyybobphi/image/upload/v1768241616/17_zjsvrh.jpg",
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero con carrusel de imágenes */}
      <HeroCarousel images={carouselImages} />
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

export default Presentacion;

