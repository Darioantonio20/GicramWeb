import React from 'react';
import { Text } from '../atoms';
import { CheckCircle, Zap, Target } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gicram-primary/20 to-gicram-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gicram-secondary/20 to-gicram-secondary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-gicram-primary/10 to-gicram-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título con línea decorativa */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <Text variant="h2" color="gray" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gicram-secondary mb-4 relative z-10">
              EQUIPO DE TRABAJO
            </Text>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-gicram-primary to-gicram-primary-light rounded-full"></div>
          </div>
          <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
            Profesionales comprometidos con la excelencia
          </Text>
        </div>

        {/* Contenido principal con efecto glassmorphism */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-xl sm:shadow-2xl border border-gicram-tertiary/20 relative overflow-hidden">
            {/* Elementos decorativos internos */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gicram-primary/20 to-gicram-primary-light/20 rounded-2xl blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-gicram-secondary/20 to-gicram-secondary-light/20 rounded-2xl blur-xl"></div>
            
            <div className="relative z-10">
              <Text variant="body" color="gray" className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gicram-secondary leading-relaxed text-center font-medium">
                En Gicram Construcciones contamos con un equipo de trabajo capaz, dinámico y con la más amplia experiencia en la construcción, supervisión, administración y desarrollo de proyectos. En nuestro equipo contamos con la firma de Directores Responsables de Obra (DRO) y Representantes Técnicos (RTEC), Debidamente registrados, quienes avalan en todo momento la correcta ejecución de nuestros trabajos, actuando con estricto apego a los reglamentos de construcción, asegurando una buena ejecución y rectitud profesional en cada proyecto emprendido.
              </Text>
            </div>

            {/* Badges informativos */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gicram-primary/10 to-gicram-primary-light/10 px-3 sm:px-4 py-2 rounded-full border border-gicram-primary/20">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gicram-primary rounded-full"></div>
                <Text variant="body" color="gray" className="text-xs sm:text-sm font-medium text-gicram-primary">DRO Certificados</Text>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gicram-secondary/10 to-gicram-secondary-light/10 px-3 sm:px-4 py-2 rounded-full border border-gicram-secondary/20">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gicram-secondary rounded-full"></div>
                <Text variant="body" color="gray" className="text-xs sm:text-sm font-medium text-gicram-secondary">RTEC Registrados</Text>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gicram-tertiary-dark/10 to-gicram-tertiary/10 px-3 sm:px-4 py-2 rounded-full border border-gicram-tertiary-dark/20">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gicram-tertiary-dark rounded-full"></div>
                <Text variant="body" color="gray" className="text-xs sm:text-sm font-medium text-gicram-tertiary-dark">Normativas Vigentes</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de estadísticas con iconos de Lucide */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          <div className="text-center group">
            <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <CheckCircle className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
            </div>
            <Text variant="h4" color="gray" className="text-base sm:text-lg font-bold text-gicram-secondary mb-2">Certificaciones</Text>
            <Text variant="body" color="gray" className="text-sm sm:text-base text-gicram-secondary-light px-2">DRO y RTEC debidamente registrados</Text>
          </div>
          <div className="text-center group">
            <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
            </div>
            <Text variant="h4" color="gray" className="text-base sm:text-lg font-bold text-gicram-secondary mb-2">Experiencia</Text>
            <Text variant="body" color="gray" className="text-sm sm:text-base text-gicram-secondary-light px-2">Amplia trayectoria en construcción</Text>
          </div>
          <div className="text-center group sm:col-span-2 lg:col-span-1">
            <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
            </div>
            <Text variant="h4" color="gray" className="text-base sm:text-lg font-bold text-gicram-secondary mb-2">Calidad</Text>
            <Text variant="body" color="gray" className="text-sm sm:text-base text-gicram-secondary-light px-2">Cumplimiento de reglamentos vigentes</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
