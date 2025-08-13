import React from 'react';
import { Text } from '../atoms';
import { Target, Eye, Heart, Zap, TrendingUp, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gicram-primary/20 to-gicram-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gicram-secondary/20 to-gicram-secondary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-gicram-primary/10 to-gicram-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
            SOBRE GICRAM
          </Text>
        </div>

        {/* Descripción Principal */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gicram-tertiary/20 relative overflow-hidden">
            <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary leading-relaxed text-center mb-6">
              GICRAM es una inmobiliaria mexicana con el fiel compromiso de dar soluciones integrales a las necesidades de vivienda.
            </Text>
            <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary leading-relaxed text-center">
              Trabajamos regidos bajo valores encaminados a otorgarle a nuestros clientes el acceso a mejores estándares de vida y a realizar inversiones de alta plusvalía.
            </Text>
          </div>
        </div>

        {/* Visión y Misión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Tarjeta de Visión */}
          <div className="bg-gradient-to-br from-gicram-primary/10 to-gicram-primary-light/10 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gicram-primary/20">
            <div className="w-20 h-20 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-4">VISIÓN</Text>
            <Text variant="body" color="gray" className="text-gicram-secondary-light leading-relaxed">Ser el mayor desarrollador inmobiliario del sur de México, reconocido por escalar el nivel de vida de nuestros clientes.</Text>
          </div>
          
          {/* Tarjeta de Misión */}
          <div className="bg-gradient-to-br from-gicram-secondary/10 to-gicram-secondary-light/10 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gicram-secondary/20">
            <div className="w-20 h-20 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-4">MISIÓN</Text>
            <Text variant="body" color="gray" className="text-gicram-secondary-light leading-relaxed">Reconocer y traducir las necesidades reales y aspiracionales de nuestros clientes para desarrollar espacios habitacionales que superen sus expectativas y les aseguren una excelente inversión a mediano y largo plazo.</Text>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Text variant="h3" color="gray" className="text-3xl sm:text-4xl font-bold text-gicram-secondary mb-4">VALORES</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Compromiso */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gicram-tertiary">
              <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-3">COMPROMISO</Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                Desarrollamos productos con materiales y métodos de construcción que garanticen una plusvalía en la inversión de nuestros clientes y que armonicen con la conservación del medio ambiente.
              </Text>
            </div>

            {/* Pasión */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gicram-tertiary">
              <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-3">PASIÓN</Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                Atendemos y cubrimos necesidades reales de nuestros clientes con gran determinación, entregando todo nuestro conocimiento, capacidad y corazón en cada proyecto que emprendemos.
              </Text>
            </div>

            {/* Innovación */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gicram-tertiary">
              <div className="w-16 h-16 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-3">INNOVACIÓN</Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                Nuestro esquema de trabajo, servicio y diseño de producto desafían lo convencional en el sector.
              </Text>
            </div>

            {/* Disruptivos */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gicram-tertiary">
              <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-3">DISRUPTIVOS</Text>
              <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                Consistentemente buscamos generar enormes cambios en nuestro modelo de negocio inmobiliario.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
