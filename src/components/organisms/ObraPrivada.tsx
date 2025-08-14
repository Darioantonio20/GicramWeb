import React, { useState } from 'react';
import { Text, Button } from '../atoms';
import { ProjectModal } from '../molecules';
import { ArrowLeft, Image, MapPin, Building2, Home } from 'lucide-react';
import obraPrivadaData from '../../data/obraPrivada.json';

interface ObraPrivadaProps {
  onBack: () => void;
}

interface Project {
  nombre: string;
  descripcion: string;
  imagenes: string[];
}

interface DesarrolloHabitacional {
  nombre: string;
  ubicacion: string;
  detalles: string[];
  imagenes: string[];
}

const ObraPrivada: React.FC<ObraPrivadaProps> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | DesarrolloHabitacional | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project | DesarrolloHabitacional) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
                {obraPrivadaData.titulo}
              </Text>
              <Text variant="body" color="gray" className="text-gicram-secondary-light">
                {obraPrivadaData.descripcion}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Proyectos por ubicación */}
        <div className="space-y-12">
          {obraPrivadaData.proyectos.map((ubicacion, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-gicram-primary" />
                <Text variant="h2" color="gray" className="text-2xl font-bold text-gicram-secondary">
                  {ubicacion.ubicacion}
                </Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ubicacion.proyectos.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gicram-primary/30 group"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Text variant="h4" color="gray" className="font-semibold text-gicram-secondary group-hover:text-gicram-primary transition-colors duration-300">
                          {project.nombre}
                        </Text>
                      </div>
                    </div>
                    
                    <Text variant="body" color="gray" className="text-gray-600 mb-4 leading-relaxed">
                      {project.descripcion}
                    </Text>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gicram-primary">
                        <Image className="w-4 h-4" />
                        <Text variant="xs" color="gray" className="text-sm">
                          {project.imagenes.length} imagen{project.imagenes.length !== 1 ? 'es' : ''}
                        </Text>
                      </div>
                      
                      <div className="text-gicram-primary group-hover:scale-110 transition-transform duration-300">
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desarrollos Habitacionales */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="flex items-center space-x-3 mb-8">
            <Home className="w-8 h-8 text-gicram-primary" />
            <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary">
              {obraPrivadaData.desarrollosHabitacionales.titulo}
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {obraPrivadaData.desarrollosHabitacionales.proyectos.map((desarrollo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gicram-primary/5 to-gicram-primary-light/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gicram-primary/20 hover:border-gicram-primary/40 group"
                onClick={() => handleProjectClick(desarrollo as DesarrolloHabitacional)}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <Text variant="h4" color="gray" className="font-semibold text-gicram-secondary group-hover:text-gicram-primary transition-colors duration-300">
                    {desarrollo.nombre}
                  </Text>
                </div>
                
                <div className="mb-4">
                  <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light mb-2">
                    {desarrollo.ubicacion}
                  </Text>
                  <ul className="space-y-1">
                    {desarrollo.detalles.map((detalle, detalleIndex) => (
                      <li key={detalleIndex} className="text-xs text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-gicram-primary">
                  <Image className="w-4 h-4" />
                  <Text variant="xs" color="gray" className="text-sm">
                    {desarrollo.imagenes.length} imagen{desarrollo.imagenes.length !== 1 ? 'es' : ''}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-6 text-center">
            {obraPrivadaData.servicios.titulo}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {obraPrivadaData.servicios.lista.map((servicio, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gicram-primary/5 transition-colors duration-300">
                <Text variant="body" color="gray" className="font-medium text-gicram-secondary">
                  {servicio}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Compromiso */}
        <div className="mt-16 bg-gradient-to-br from-gicram-primary/10 to-gicram-primary-light/10 rounded-2xl p-8 border border-gicram-primary/20">
          <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-6 text-center">
            {obraPrivadaData.compromiso.titulo}
          </Text>
          
          <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light text-center mb-8 max-w-4xl mx-auto leading-relaxed">
            {obraPrivadaData.compromiso.descripcion}
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {obraPrivadaData.compromiso.valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Text variant="h3" color="white" className="text-2xl">{valor.icono}</Text>
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

export default ObraPrivada;
