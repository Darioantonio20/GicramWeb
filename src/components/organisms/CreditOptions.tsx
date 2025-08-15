import React from 'react';
import { Text, OptimizedImage } from '../atoms';
import imgCreditoInfonavit from '../../assets/images/imgCreditoInfonavit.png';
import imgCreditoHipotecario from '../../assets/images/imgCreditoHipotecario.png';
import imgCreditoFovissste from '../../assets/images/imgCreditoFovissste.png';

const CreditOptions: React.FC = () => {
  // Funciones para manejar los clics en las tarjetas de crédito
  const handleInfonavitClick = () => {
    window.open('https://www.infonavit.org.mx/', '_blank');
  };

  const handleHipotecarioClick = () => {
    window.open('https://phpapps.condusef.gob.mx/condusefhipotecario/index.php', '_blank');
  };

  const handleFovisssteClick = () => {
    window.open('https://www.gob.mx/fovissste', '_blank');
  };

  return (
    <section id="credits" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
            OPCIONES DE CRÉDITO
          </Text>
          <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed">
            El equipo de ventas de Gicram Construcciones te asesorará en el trámite de tu crédito sin costo alguno y te presentará la extensa gama de modelos crediticios que se ofrecen en el mercado. Si no eres derechohabiente del Infonavit u otra institución de vivienda, puedes pedir un crédito hipotecario. Nosotros te brindamos la asesoría que necesitas y te ayudamos con el trámite.
          </Text>
        </div>

        {/* Opciones de crédito */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Crédito Infonavit */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary cursor-pointer group"
            onClick={handleInfonavitClick}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden border border-gicram-tertiary group-hover:border-gicram-primary transition-colors duration-300">
                <OptimizedImage 
                  src={imgCreditoInfonavit}
                  alt="Crédito Infonavit"
                  className="w-full h-full object-contain p-2"
                  spinnerSize="md"
                  spinnerVariant="primary"
                  fallbackText="Error al cargar logo Infonavit"
                />
              </div>
              <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-4 group-hover:text-gicram-primary transition-colors duration-300">
                CRÉDITO INFONAVIT
              </Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light group-hover:text-gicram-primary transition-colors duration-300">
                Haz clic para ir a la página oficial
              </Text>
            </div>
          </div>

          {/* Crédito Hipotecario */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary cursor-pointer group"
            onClick={handleHipotecarioClick}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden border border-gicram-tertiary group-hover:border-gicram-primary transition-colors duration-300">
                <OptimizedImage 
                  src={imgCreditoHipotecario}
                  alt="Crédito Hipotecario"
                  className="w-full h-full object-contain p-2"
                  spinnerSize="md"
                  spinnerVariant="secondary"
                  fallbackText="Error al cargar logo Hipotecario"
                />
              </div>
              <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-4 group-hover:text-gicram-primary transition-colors duration-300">
                CRÉDITO HIPOTECARIO
              </Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light group-hover:text-gicram-primary transition-colors duration-300">
                Haz clic para ir a la página oficial
              </Text>
            </div>
          </div>

          {/* Crédito Fovissste */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary cursor-pointer group"
            onClick={handleFovisssteClick}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden border border-gicram-tertiary group-hover:border-gicram-primary transition-colors duration-300">
                <OptimizedImage 
                  src={imgCreditoFovissste}
                  alt="Crédito Fovissste"
                  className="w-full h-full object-contain p-2"
                  spinnerSize="md"
                  spinnerVariant="primary"
                  fallbackText="Error al cargar logo Fovissste"
                />
              </div>
              <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-4 group-hover:text-gicram-primary transition-colors duration-300">
                CRÉDITO FOVISSSTE
              </Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light group-hover:text-gicram-primary transition-colors duration-300">
                Haz clic para ir a la página oficial
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditOptions;
