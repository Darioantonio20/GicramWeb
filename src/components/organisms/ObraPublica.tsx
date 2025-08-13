import React from 'react';
import { Text } from '../atoms';
import { ArrowLeft } from 'lucide-react';
import obraPublicaData from '../../data/obraPublica.json';

interface ObraPublicaProps {
  onBack: () => void;
}

const ObraPublica: React.FC<ObraPublicaProps> = ({ onBack }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de regreso */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gicram-primary hover:text-gicram-primary-light transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </button>
        </div>

        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
            {obraPublicaData.titulo}
          </Text>
          <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed">
            {obraPublicaData.descripcion}
          </Text>
          <Text variant="body" color="gray" className="text-base sm:text-lg text-gicram-secondary-light max-w-5xl mx-auto leading-relaxed mt-4">
            {obraPublicaData.descripcionAdicional}
          </Text>
        </div>

        {/* Categorías de obras */}
        <div className="space-y-8 mb-16">
          {obraPublicaData.categorias.map((categoria, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gicram-tertiary">
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-xl flex items-center justify-center shadow-lg">
                    <Text variant="h4" color="white" className="text-lg font-bold">🏗️</Text>
                  </div>
                  <div>
                    <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary">
                      {categoria.titulo}
                    </Text>
                    <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light">
                      {categoria.descripcion}
                    </Text>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {categoria.proyectos.map((proyecto, proyectoIndex) => (
                  <div key={proyectoIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gicram-primary/5 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gicram-primary rounded-full mt-2 flex-shrink-0"></div>
                    <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                      {proyecto}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gicram-tertiary">
          <div className="text-center">
            <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-6">
              {obraPublicaData.experiencia.titulo}
            </Text>
            <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-8">
              {obraPublicaData.experiencia.descripcion}
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {obraPublicaData.experiencia.valores.map((valor, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Text variant="h4" color="white" className="text-lg font-bold">{valor.icono}</Text>
                  </div>
                  <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-2">{valor.titulo}</Text>
                  <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light">
                    {valor.descripcion}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObraPublica;
