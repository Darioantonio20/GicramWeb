import React from 'react';
import { Text } from '../atoms';
import { ArrowLeft } from 'lucide-react';
import obraPrivadaData from '../../data/obraPrivada.json';

interface ObraPrivadaProps {
  onBack: () => void;
}

const ObraPrivada: React.FC<ObraPrivadaProps> = ({ onBack }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gicram-tertiary to-white">
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
            {obraPrivadaData.titulo}
          </Text>
          <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed">
            {obraPrivadaData.descripcion}
          </Text>
        </div>

        {/* Proyectos por ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {obraPrivadaData.proyectos.map((ubicacion, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Text variant="h4" color="white" className="text-lg font-bold">🏠</Text>
                </div>
                <Text variant="h4" color="gray" className="text-xl font-bold text-gicram-secondary mb-4">
                  {ubicacion.ubicacion}
                </Text>
                {ubicacion.proyectos.length > 0 ? (
                  <ul className="space-y-2">
                    {ubicacion.proyectos.map((proyecto, proyectoIndex) => (
                      <li key={proyectoIndex}>
                        <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light">
                          • {proyecto}
                        </Text>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light italic">
                    Proyectos en desarrollo
                  </Text>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gicram-tertiary">
          <div className="text-center">
            <Text variant="h3" color="gray" className="text-2xl lg:text-3xl font-bold text-gicram-secondary mb-6">
              {obraPrivadaData.compromiso.titulo}
            </Text>
            <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light leading-relaxed mb-6">
              {obraPrivadaData.compromiso.descripcion}
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {obraPrivadaData.compromiso.valores.map((valor, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-xl flex items-center justify-center mx-auto mb-3">
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

export default ObraPrivada;
