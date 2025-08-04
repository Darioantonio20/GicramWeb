import React from 'react';
import { Button, Text } from '../atoms';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Text variant="h1" color="white" className="mb-6">
              Maquinaria Pesada
              <br />
              <span className="text-yellow-200">de Calidad</span>
            </Text>
            
            <Text variant="body" color="white" className="mb-8 text-lg">
              GICRAM te ofrece la mejor flota de maquinaria pesada para tus proyectos de construcción. 
              Excavadoras, retroexcavadoras, bulldozers y más, disponibles para renta.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg">
                Ver Maquinaria
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
                Contactar
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Text variant="h3" color="white" className="font-bold">50+</Text>
                <Text variant="caption" color="white">Máquinas</Text>
              </div>
              <div className="text-center">
                <Text variant="h3" color="white" className="font-bold">100+</Text>
                <Text variant="caption" color="white">Proyectos</Text>
              </div>
              <div className="text-center">
                <Text variant="h3" color="white" className="font-bold">24/7</Text>
                <Text variant="caption" color="white">Soporte</Text>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🚜</div>
                <Text variant="h3" color="white" className="mb-2">
                  Flota Completa
                </Text>
                <Text variant="body" color="white">
                  Excavadoras • Retroexcavadoras • Bulldozers • Grúas
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 