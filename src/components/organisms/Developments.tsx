import React from 'react';
import { Text } from '../atoms';

interface DevelopmentsProps {
  onViewChange: (view: 'obra-privada' | 'obra-publica') => void;
}

const Developments: React.FC<DevelopmentsProps> = ({ onViewChange }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gicram-tertiary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
            DESARROLLOS
          </Text>
        </div>

        {/* Tipos de obras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Obras Públicas */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Text variant="h3" color="white" className="text-3xl">🏛️</Text>
              </div>
              <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-4">
                OBRAS PÚBLICAS
              </Text>
              <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-6">
                Proyectos de infraestructura y desarrollo urbano que benefician a la comunidad, construidos con los más altos estándares de calidad y cumplimiento de normativas.
              </Text>
              <button
                onClick={() => onViewChange('obra-publica')}
                className="bg-gradient-to-r from-gicram-secondary to-gicram-secondary-light hover:from-gicram-secondary-light hover:to-gicram-secondary text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Ver más
              </button>
            </div>
          </div>

          {/* Obras Privadas */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Text variant="h3" color="white" className="text-3xl">🏠</Text>
              </div>
              <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-4">
                OBRAS PRIVADAS
              </Text>
              <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-6">
                Desarrollos residenciales y comerciales diseñados para superar las expectativas de nuestros clientes, ofreciendo espacios habitacionales de alta plusvalía.
              </Text>
              <button
                onClick={() => onViewChange('obra-privada')}
                className="bg-gradient-to-r from-gicram-primary to-gicram-primary-light hover:from-gicram-primary-light hover:to-gicram-primary text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Texto especial */}
        <div className="text-center mt-12">
          <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed italic">
            "En los últimos años nuestro equipo ha ocupado cargos gerenciales de Alta Dirección y de Alta Responsabilidad Técnica a través de superintendencias de obra, Representaciones Técnicas, Residencias de Obra y como Directores Responsables de Obra en diversas empresas de las que formo parte y/o mantuvo sociedad."
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Developments;
