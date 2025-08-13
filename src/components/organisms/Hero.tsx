import React from 'react';
import ImgBanner from '../../assets/images/imgBanner.jpeg';
import ImgBannerTablet from '../../assets/images/imgBannerTablet.jpeg';
import ImgBannerMobile from '../../assets/images/imgBannerMobile.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gicram-dark to-gicram-secondary flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo promocional optimizada - Desktop */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <img 
          src={ImgBanner} 
          alt="GICRAM - Desarrollador Inmobiliario" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            objectPosition: 'center',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Imagen de fondo promocional optimizada - Tablet */}
      <div className="absolute inset-0 w-full h-full hidden md:block lg:hidden flex items-center justify-center">
        <img 
          src={ImgBannerTablet} 
          alt="GICRAM - Desarrollador Inmobiliario" 
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            objectPosition: 'center',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Imagen de fondo promocional optimizada - Mobile */}
      <div className="absolute inset-0 w-full h-full md:hidden flex items-center justify-center">
        <img 
          src={ImgBannerMobile} 
          alt="GICRAM - Desarrollador Inmobiliario" 
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            objectPosition: 'center',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
