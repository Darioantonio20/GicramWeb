import React from 'react';
import { Text, FloatingImages } from '../atoms';

const Hero: React.FC = () => {
  // Imágenes flotantes del CircularGallery - más imágenes para mejor visibilidad
  const floatingImages = [
    {
      image: `https://i.ibb.co/Y7TC7Y6y/Captura-de-pantalla-2025-08-12-a-la-s-1-46-03-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/M5Cz4cLb/Captura-de-pantalla-2025-08-12-a-la-s-1-46-34-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/WWkZ8TL8/Captura-de-pantalla-2025-08-12-a-la-s-1-46-42-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/Y7kyp8hT/Captura-de-pantalla-2025-08-12-a-la-s-1-46-53-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/0jjGR06d/Captura-de-pantalla-2025-08-12-a-la-s-1-47-01-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/HDByKCDn/Captura-de-pantalla-2025-08-12-a-la-s-1-47-14-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/fGkbqQWt/Captura-de-pantalla-2025-08-12-a-la-s-1-47-26-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/tpgnGRHJ/Captura-de-pantalla-2025-08-12-a-la-s-1-47-43-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/Mk0hhwFY/Captura-de-pantalla-2025-08-12-a-la-s-1-47-55-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/6RhC1zH9/Captura-de-pantalla-2025-08-12-a-la-s-2-00-27-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/zWzyx9pr/Captura-de-pantalla-2025-08-12-a-la-s-2-00-37-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/nqsj9NWN/Captura-de-pantalla-2025-08-12-a-la-s-2-00-58-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/F4nMNh30/Captura-de-pantalla-2025-08-12-a-la-s-2-01-21-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/r2HNfKKD/Captura-de-pantalla-2025-08-12-a-la-s-2-01-28-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/gZ8sLQ29/Captura-de-pantalla-2025-08-12-a-la-s-2-01-47-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/BHL02C19/Captura-de-pantalla-2025-08-12-a-la-s-2-02-30-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/vvBjkDbF/Captura-de-pantalla-2025-08-12-a-la-s-2-02-39-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/Xf2Pbtv4/Captura-de-pantalla-2025-08-12-a-la-s-2-03-27-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/ZphwP1N3/Captura-de-pantalla-2025-08-12-a-la-s-2-04-21-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/b5vJJy6x/Captura-de-pantalla-2025-08-12-a-la-s-2-05-40-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/mF425RmX/Captura-de-pantalla-2025-08-12-a-la-s-2-05-48-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/4wzkSNbY/Captura-de-pantalla-2025-08-12-a-la-s-2-06-35-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/Q3CJqbXk/Captura-de-pantalla-2025-08-12-a-la-s-2-06-10-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/YKpVyfm/Captura-de-pantalla-2025-08-12-a-la-s-2-03-43-p-m.png`,
      text: "",
    },
    {
      image: `https://i.ibb.co/Xf2Pbtv4/Captura-de-pantalla-2025-08-12-a-la-s-2-03-27-p-m.png`,
      text: "",
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Floating Images Background - sin capa adicional */}
      <FloatingImages images={floatingImages} />
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-12 min-h-[80vh] flex flex-col justify-center">
          <div className="space-y-10">
            {/* Main Headline - sin badge */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Text variant="h1" color="white" className="mb-8 leading-tight font-black text-5xl lg:text-6xl">
                  Soluciones de Construcción
                  <br />
                  <span className="text-[#E4412E] font-extrabold bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-[#E4412E] bg-clip-text text-transparent">
                    de Primera Calidad
                  </span>
                </Text>
               
              </div>
            </div>
          </div>
          
          {/* Sin botón de cotización */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 