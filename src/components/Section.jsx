const Section = ({ id, title, description, image, isEven }) => {
  return (
    <section
      id={id}
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-white border-t border-primary-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 leading-tight">
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
    </section>
  );
};

export default Section;

