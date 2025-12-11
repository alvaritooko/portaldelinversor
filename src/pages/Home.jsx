import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { siteData } from '../data';

const Home = () => {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {siteData.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          image={section.image}
          isEven={index % 2 === 1}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Home;

