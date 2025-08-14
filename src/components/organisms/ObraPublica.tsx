import React, { useState } from 'react';
import { Text, Button } from '../atoms';
import { ProjectModal } from '../molecules';
import { ArrowLeft, Image, MapPin, Building2, Droplets, Wrench, Route, HeartPulse, GraduationCap, Shield, ShoppingCart } from 'lucide-react';
import obraPublicaData from '../../data/obraPublica.json';

interface ObraPublicaProps {
  onBack: () => void;
}

interface Project {
  nombre: string;
  descripcion: string;
  imagenes: string[];
}

interface Category {
  titulo: string;
  descripcion: string;
  icono: string;
  proyectos: Project[];
}

const ObraPublica: React.FC<ObraPublicaProps> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'droplets': <Droplets className="w-8 h-8 text-white" />,
      'wrench': <Wrench className="w-8 h-8 text-white" />,
      'road': <Route className="w-8 h-8 text-white" />,
      'heart-pulse': <HeartPulse className="w-8 h-8 text-white" />,
      'graduation-cap': <GraduationCap className="w-8 h-8 text-white" />,
      'shield': <Shield className="w-8 h-8 text-white" />,
      'shopping-cart': <ShoppingCart className="w-8 h-8 text-white" />,
      'building-2': <Building2 className="w-8 h-8 text-white" />
    };
    return iconMap[iconName] || <Building2 className="w-8 h-8 text-white" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex items-center space-x-2 px-4 py-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </Button>
            <div>
              <Text variant="h1" color="gray" className="text-3xl font-bold text-gicram-secondary">
                {obraPublicaData.titulo}
              </Text>
              <Text variant="body" color="gray" className="text-gicram-secondary-light">
                {obraPublicaData.descripcion}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Descripción adicional */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
          <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light text-center leading-relaxed">
            {obraPublicaData.descripcionAdicional}
          </Text>
        </div>

        {/* Categorías de obras */}
        <div className="space-y-12">
          {obraPublicaData.categorias.map((categoria: Category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-2xl flex items-center justify-center">
                  {getIconComponent(categoria.icono)}
                </div>
                <div>
                  <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-2">
                    {categoria.titulo}
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {categoria.descripcion}
                  </Text>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.proyectos.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gicram-secondary/30 group"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Text variant="h4" color="gray" className="font-semibold text-gicram-secondary group-hover:text-gicram-secondary transition-colors duration-300">
                          {project.nombre}
                        </Text>
                      </div>
                    </div>
                    
                    <Text variant="body" color="gray" className="text-gray-600 mb-4 leading-relaxed">
                      {project.descripcion}
                    </Text>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gicram-secondary">
                        <Image className="w-4 h-4" />
                        <Text variant="xs" color="gray" className="text-sm">
                          {project.imagenes.length} imagen{project.imagenes.length !== 1 ? 'es' : ''}
                        </Text>
                      </div>
                      
                      <div className="text-gicram-secondary group-hover:scale-110 transition-transform duration-300">
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experiencia */}
        <div className="mt-16 bg-gradient-to-br from-gicram-secondary/10 to-gicram-secondary-light/10 rounded-2xl p-8 border border-gicram-secondary/20">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-6 text-center">
            {obraPublicaData.experiencia.titulo}
          </Text>
          
          <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light text-center mb-8 max-w-4xl mx-auto leading-relaxed">
            {obraPublicaData.experiencia.descripcion}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {obraPublicaData.experiencia.valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-gicram-secondary to-gicram-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {getIconComponent(valor.icono)}
                </div>
                <Text variant="h4" color="gray" className="font-bold text-gicram-secondary mb-2">
                  {valor.titulo}
                </Text>
                <Text variant="body" color="gray" className="text-gicram-secondary-light">
                  {valor.descripcion}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Datos Generales */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-8 text-center">
            {obraPublicaData.datosGenerales.titulo}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gicram-primary" />
                <div>
                  <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                    Razón Social
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {obraPublicaData.datosGenerales.informacion.razonSocial}
                  </Text>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gicram-primary" />
                <div>
                  <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                    Ubicación
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {obraPublicaData.datosGenerales.informacion.ubicacion}
                  </Text>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gicram-primary" />
                <div>
                  <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                    Director General
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {obraPublicaData.datosGenerales.informacion.directorGeneral}
                  </Text>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gicram-primary" />
                <div>
                  <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                    Ciudad
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {obraPublicaData.datosGenerales.informacion.ciudad}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipos y Maquinaria */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-8 text-center">
            {obraPublicaData.equiposMaquinaria.titulo}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {obraPublicaData.equiposMaquinaria.equipos.map((equipo, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gicram-secondary/5 transition-colors duration-300">
                <Text variant="body" color="gray" className="font-medium text-gicram-secondary">
                  {equipo}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Principales Clientes */}
        <div className="mt-16 bg-gradient-to-br from-gicram-primary/10 to-gicram-primary-light/10 rounded-2xl p-8 border border-gicram-primary/20">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-8 text-center">
            {obraPublicaData.principalesClientes.titulo}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {obraPublicaData.principalesClientes.clientes.map((cliente, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
                <Text variant="body" color="gray" className="font-medium text-gicram-secondary">
                  {cliente}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de imágenes */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default ObraPublica;
