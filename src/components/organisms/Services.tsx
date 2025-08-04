import React from 'react';
import { Text, ExcavatorIcon, ConstructionIcon, BulldozerIcon, CraneIcon, LoaderIcon, CompactorIcon, SearchIcon, PhoneIcon } from '../atoms';
import { ServiceCard } from '../molecules';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Excavadoras',
      description: 'Excavadoras de diferentes tamaños para todo tipo de proyectos de excavación.',
      icon: <ExcavatorIcon size="lg" className="text-black" />,
      features: ['Capacidad: 1.5 - 35 toneladas', 'Operador incluido', 'Mantenimiento incluido'],
      price: '$2,500'
    },
    {
      title: 'Retroexcavadoras',
      description: 'Ideal para trabajos de excavación y carga en espacios reducidos.',
      icon: <ConstructionIcon size="lg" className="text-black" />,
      features: ['Versátil y maniobrable', 'Ideal para zanjas', 'Operador experimentado'],
      price: '$1,800'
    },
    {
      title: 'Bulldozers',
      description: 'Potentes bulldozers para nivelación y movimiento de tierra.',
      icon: <BulldozerIcon size="lg" className="text-black" />,
      features: ['Alta potencia', 'Nivelación precisa', 'Trabajo en terrenos difíciles'],
      price: '$3,200'
    },
    {
      title: 'Grúas',
      description: 'Grúas móviles para elevación y transporte de materiales pesados.',
      icon: <CraneIcon size="lg" className="text-black" />,
      features: ['Capacidad: 25 - 100 toneladas', 'Certificación vigente', 'Inspección diaria'],
      price: '$4,500'
    },
    {
      title: 'Cargadores',
      description: 'Cargadores frontales para carga y transporte de materiales.',
      icon: <LoaderIcon size="lg" className="text-black" />,
      features: ['Carga rápida', 'Manejo de materiales', 'Alta eficiencia'],
      price: '$2,200'
    },
    {
      title: 'Compactadores',
      description: 'Compactadores para compactación de suelos y asfalto.',
      icon: <CompactorIcon size="lg" className="text-black" />,
      features: ['Compactación uniforme', 'Vibración ajustable', 'Control de calidad'],
      price: '$1,500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-full h-full construction-grid"></div>
        </div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-black/5 rounded-full animate-construction-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-black/5 rounded-full animate-construction-float animation-delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-black/5 rounded-full animate-construction-float animation-delay-2000"></div>
        <div className="absolute bottom-48 right-20 w-28 h-28 bg-black/5 rounded-full animate-construction-float animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-black/5 rounded-full animate-construction-float animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-black/5 rounded-full animate-construction-float animation-delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-black/10 backdrop-blur-sm rounded-full text-black text-sm font-semibold mb-8 border border-black/20 shadow-lg">
            <span className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></span>
            Nuestros Servicios
          </div>
          
          <Text variant="h2" className="mb-8 text-black">
            Maquinaria Pesada
            <br />
            <span className="text-black font-black">de Primera Calidad</span>
          </Text>
          
          <Text variant="body" color="secondary" className="max-w-3xl mx-auto text-lg text-gray-600">
            Contamos con una amplia flota de maquinaria pesada moderna y bien mantenida. 
            Todas nuestras máquinas cuentan con operadores certificados y mantenimiento preventivo.
          </Text>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                price={service.price}
                className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 bg-white border border-gray-200"
              />
            </div>
          ))}
        </div>

        {/* CTA Section with Black & White Theme */}
        <div className="text-center">
          <div className="bg-black rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-lg opacity-20 animate-construction-pulse transform rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-lg opacity-20 animate-construction-pulse animation-delay-1000 transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-lg opacity-30 animate-machinery-vibrate"></div>
            
            <div className="relative">
              <div className="text-4xl mb-4">
                <ConstructionIcon size="xl" className="text-white mx-auto" />
              </div>
              <Text variant="h3" color="white" className="mb-6">
                ¿Necesitas algo específico?
              </Text>
              
              <Text variant="body" color="white" className="mb-8 text-lg opacity-90">
                Si no encuentras la maquinaria que necesitas, contáctanos. 
                Tenemos conexiones con otros proveedores para satisfacer todas tus necesidades.
              </Text>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <SearchIcon size="md" className="mr-2" />
                  Consultar Disponibilidad
                </button>
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center">
                  <PhoneIcon size="md" className="mr-2" />
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 