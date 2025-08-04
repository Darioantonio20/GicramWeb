import React from 'react';
import { Text } from '../atoms';
import { ServiceCard } from '../molecules';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Excavadoras',
      description: 'Excavadoras de diferentes tamaños para todo tipo de proyectos de excavación.',
      icon: '🚜',
      features: ['Capacidad: 1.5 - 35 toneladas', 'Operador incluido', 'Mantenimiento incluido'],
      price: '$2,500'
    },
    {
      title: 'Retroexcavadoras',
      description: 'Ideal para trabajos de excavación y carga en espacios reducidos.',
      icon: '🏗️',
      features: ['Versátil y maniobrable', 'Ideal para zanjas', 'Operador experimentado'],
      price: '$1,800'
    },
    {
      title: 'Bulldozers',
      description: 'Potentes bulldozers para nivelación y movimiento de tierra.',
      icon: '⚡',
      features: ['Alta potencia', 'Nivelación precisa', 'Trabajo en terrenos difíciles'],
      price: '$3,200'
    },
    {
      title: 'Grúas',
      description: 'Grúas móviles para elevación y transporte de materiales pesados.',
      icon: '🏗️',
      features: ['Capacidad: 25 - 100 toneladas', 'Certificación vigente', 'Inspección diaria'],
      price: '$4,500'
    },
    {
      title: 'Cargadores',
      description: 'Cargadores frontales para carga y transporte de materiales.',
      icon: '📦',
      features: ['Carga rápida', 'Manejo de materiales', 'Alta eficiencia'],
      price: '$2,200'
    },
    {
      title: 'Compactadores',
      description: 'Compactadores para compactación de suelos y asfalto.',
      icon: '🔨',
      features: ['Compactación uniforme', 'Vibración ajustable', 'Control de calidad'],
      price: '$1,500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="h2" className="mb-4">
            Nuestra Maquinaria
          </Text>
          <Text variant="body" color="secondary" className="max-w-3xl mx-auto">
            Contamos con una amplia flota de maquinaria pesada moderna y bien mantenida. 
            Todas nuestras máquinas cuentan con operadores certificados y mantenimiento preventivo.
          </Text>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              price={service.price}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Text variant="h3" className="mb-4">
              ¿Necesitas algo específico?
            </Text>
            <Text variant="body" color="secondary" className="mb-6">
              Si no encuentras la maquinaria que necesitas, contáctanos. 
              Tenemos conexiones con otros proveedores para satisfacer todas tus necesidades.
            </Text>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 