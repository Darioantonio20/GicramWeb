import React from 'react';
import { Button, Text, Aurora, PhoneIcon, ShieldIcon, WrenchIcon, ZapIcon } from '../atoms';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FCFF66", "#E7D508", "#8B6809"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.0}
        />
      </div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-12">
            <div className="space-y-10">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-8 py-4 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-base font-semibold mb-10 border border-yellow-500/30 shadow-2xl">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"></span>
                Líder en Renta de Maquinaria Pesada
              </div>
              
              {/* Main Headline */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <Text variant="h1" color="white" className="mb-8 leading-tight font-black text-5xl lg:text-6xl">
                    Maquinaria Pesada
                    <br />
                    <span className="text-yellow-400 font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                      de Primera Calidad
                    </span>
                  </Text>
                  
                  <Text variant="body" color="gray" className="mb-10 text-xl leading-relaxed max-w-3xl text-gray-300 font-medium">
                    GICRAM es su socio estratégico en proyectos de construcción. Ofrecemos la flota más moderna 
                    de maquinaria pesada con operadores certificados y mantenimiento preventivo incluido.
                  </Text>
                </div>
              </div>
            </div>
            
            {/* Professional CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-10 py-4 flex items-center"
              >
                Solicitar Cotización
                <PhoneIcon size="md" className="ml-2 text-current" />
              </Button>
            </div>
          </div>
          
          {/* Professional Machinery Showcase */}
          <div className="relative">
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-700 transform hover:scale-105 transition-all duration-500">
              {/* Professional Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-yellow-400 rounded-full animate-pulse"></div>
              
              <div className="text-center space-y-8">
                {/* Professional Construction Machinery Image */}
                <div className="relative mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Flota de Maquinaria Pesada de Construcción"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  {/* Professional badge on image */}
                  <div className="absolute bottom-4 left-4 bg-yellow-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-black font-bold text-sm">
                    Flota Profesional
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Text variant="h3" color="white" className="mb-4 font-bold">
                    Flota Empresarial
                  </Text>
                  <Text variant="body" color="gray" className="text-gray-300 leading-relaxed">
                    Excavadoras • Retroexcavadoras • Bulldozers • Grúas • Cargadores • Compactadores
                  </Text>
                </div>
                
                {/* Professional Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <span className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold border border-yellow-500/30 flex items-center">
                    <ShieldIcon size="sm" className="mr-2" />
                    Operadores Certificados
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold border border-yellow-500/30 flex items-center">
                    <WrenchIcon size="sm" className="mr-2" />
                    Mantenimiento Incluido
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold border border-yellow-500/30 flex items-center">
                    <ZapIcon size="sm" className="mr-2" />
                    Entrega Inmediata
                  </span>
                </div>
              </div>
            </div>
            
            {/* Professional Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-500/20 rounded-lg opacity-60 animate-pulse transform rotate-45 border border-yellow-500/30"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-yellow-400/20 rounded-lg opacity-60 animate-pulse transform -rotate-45 border border-yellow-400/30"></div>
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-yellow-500/20 rounded-lg opacity-60 animate-pulse transform rotate-12 border border-yellow-500/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 