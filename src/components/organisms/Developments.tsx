import React from 'react';
import { Text } from '../atoms';

const Developments: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gicram-tertiary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
            DESARROLLOS
          </Text>
        </div>

        {/* División en Obras Públicas y Obras Privadas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Obras Públicas */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Text variant="h3" color="white" className="text-3xl font-bold">🏛️</Text>
              </div>
              <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-6">
                OBRAS PÚBLICAS
              </Text>
              <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-6">
                Proyectos de infraestructura y desarrollo urbano que benefician a la comunidad, 
                construidos con los más altos estándares de calidad y cumplimiento de normativas.
              </Text>
              <div className="inline-block bg-gradient-to-r from-gicram-primary to-gicram-primary-light text-white px-6 py-3 rounded-full font-bold text-lg">
                EN DESARROLLO
              </div>
            </div>
          </div>

          {/* Obras Privadas */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Text variant="h3" color="white" className="text-3xl font-bold">🏠</Text>
              </div>
              <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-6">
                OBRAS PRIVADAS
              </Text>
              <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-6">
                Desarrollos residenciales y comerciales diseñados para superar las expectativas de nuestros clientes, 
                ofreciendo espacios habitacionales de alta plusvalía.
              </Text>
              <div className="inline-block bg-gradient-to-r from-gicram-secondary to-gicram-secondary-light text-white px-6 py-3 rounded-full font-bold text-lg">
                PROYECTOS ACTIVOS
              </div>
            </div>
          </div>
        </div>

        {/* Proyectos Específicos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Text variant="h3" color="gray" className="text-3xl sm:text-4xl font-bold text-gicram-secondary mb-6">
              PROYECTOS DESTACADOS
            </Text>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Tapachula - Vendido */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Text variant="h3" color="white" className="text-2xl font-bold">🏠</Text>
                </div>
                <Text variant="h4" color="gray" className="text-xl lg:text-2xl font-bold text-gicram-secondary mb-4">
                  En Tapachula
                </Text>
                <Text variant="h4" color="gray" className="text-lg lg:text-xl font-bold text-gicram-primary mb-4">
                  RINCONADA DEL CARMEN NICTE
                </Text>
                <Text variant="body" color="gray" className="text-base text-gicram-secondary-light mb-4">
                  Vivienda Gris, fotos con familia
                </Text>
                <div className="inline-block bg-gradient-to-r from-gicram-primary to-gicram-primary-light text-white px-4 py-2 rounded-full font-bold text-base">
                  VENDIDO
                </div>
              </div>
            </div>

            {/* Tuxtla Gutiérrez - En Proceso */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Text variant="h3" color="white" className="text-2xl font-bold">🏗️</Text>
                </div>
                <Text variant="h4" color="gray" className="text-xl lg:text-2xl font-bold text-gicram-secondary mb-4">
                  En Tuxtla Gutiérrez
                </Text>
                <Text variant="h4" color="gray" className="text-lg lg:text-xl font-bold text-gicram-primary mb-4">
                  PROYECTO EN PROCESO
                </Text>
                <Text variant="body" color="gray" className="text-base text-gicram-secondary-light mb-4">
                  Próximamente más información
                </Text>
                <div className="inline-block bg-gradient-to-r from-gicram-secondary to-gicram-secondary-light text-white px-4 py-2 rounded-full font-bold text-base">
                  EN PROCESO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto especial */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light leading-relaxed">
              Cada desarrollo de GICRAM está diseñado pensando en la calidad de vida de nuestros clientes, 
              ofreciendo espacios habitacionales que superan las expectativas y aseguran una excelente 
              inversión a mediano y largo plazo.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developments;
