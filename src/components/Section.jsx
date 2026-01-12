import { Link } from 'react-router-dom';

const Section = ({ id, title, description, image, isEven, link }) => {
  // Si no hay link, no hacer clickeable
  const content = (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className={isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl cursor-pointer group">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-all duration-300"></div>
          </div>
        </div>

        {/* Content */}
        <div className={isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight group-hover:text-primary-600 transition-colors">
              {title}
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent-500"></div>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white ${link ? 'cursor-pointer' : ''}`}
    >
      {link ? (
        <Link to={link} className="block group">
          {content}
        </Link>
      ) : (
        content
      )}
    </section>
  );
};

export default Section;

