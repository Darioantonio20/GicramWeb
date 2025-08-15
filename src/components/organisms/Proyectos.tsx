import React, { useState } from 'react';
import { Text, Button } from '../atoms';
import { ProjectModal } from '../molecules';
import { Building2, MapPin, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface Project {
  nombre: string;
  descripcion: string;
  imagenes: string[];
}

interface ProyectosProps {
  onBack: () => void;
}

const Proyectos: React.FC<ProyectosProps> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de los proyectos específicos
  const proyectosData = {
    titulo: "PROYECTOS DESTACADOS",
    descripcion: "Descubre nuestros proyectos más emblemáticos en Tuxtla Gutiérrez, diseñados con los más altos estándares de calidad y arquitectura moderna.",
    proyectos: {
      "Tuxtla Gutiérrez": [
        {
          nombre: "Residencia Country La Cima",
          descripcion: "Residencia privada de alto nivel en exclusivo fraccionamiento con acabados de lujo y diseño arquitectónico moderno",
          imagenes: ["/images/projects/obraPrivada1.jpg", "/images/projects/obraPrivada2.jpg", "/images/projects/obraPrivada3.jpg"]
        },
        {
          nombre: "Proyecto Oficinas Cowork",
          descripcion: "Centro de oficinas compartidas con espacios modernos, funcionales y tecnología de vanguardia para empresas innovadoras",
          imagenes: ["/images/projects/obraPrivada4.jpg", "/images/projects/obraPrivada5.jpg", "/images/projects/obraPrivada6.jpg"]
        }
      ]
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gicram-primary/5 via-white to-gicram-secondary/5">
      {/* Header con botón de volver */}
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
                {proyectosData.titulo}
              </Text>
              <Text variant="body" color="gray" className="text-gicram-secondary-light">
                {proyectosData.descripcion}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Proyectos por ubicación */}
        <div className="space-y-12">
          {Object.entries(proyectosData.proyectos).map(([ciudad, proyectos], index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <MapPin className="w-8 h-8 text-gicram-primary" />
                <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary">
                  {ciudad}
                </Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {proyectos.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gradient-to-br from-gicram-tertiary/10 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gicram-primary/30 group"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-xl flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <Text variant="h3" color="gray" className="text-xl font-semibold text-gicram-secondary group-hover:text-gicram-primary transition-colors duration-300">
                          {project.nombre}
                        </Text>
                      </div>
                    </div>
                    
                    <Text variant="body" color="gray" className="text-gray-600 mb-4 leading-relaxed">
                      {project.descripcion}
                    </Text>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gicram-primary">
                        <ImageIcon className="w-4 h-4" />
                        <Text variant="body" color="gray" className="text-sm">
                          {project.imagenes.length} imagen{project.imagenes.length !== 1 ? 'es' : ''}
                        </Text>
                      </div>
                      
                      <div className="text-gicram-primary group-hover:scale-110 transition-transform duration-300">
                        <Text variant="body" color="gray" className="text-sm font-medium">
                          Ver proyecto
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-gradient-to-br from-gicram-secondary/10 to-gicram-primary/10 rounded-2xl p-8 border border-gicram-secondary/20">
          <div className="text-center">
            <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-6">
              NUESTRA EXPERIENCIA EN PROYECTOS
            </Text>
            <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed">
              Con más de 9 años de experiencia en el sector de la construcción, hemos desarrollado y supervisado proyectos de diversa índole, desde hospitales llave en mano hasta infraestructura carretera e hidráulica, siempre manteniendo los más altos estándares de calidad y profesionalismo.
            </Text>
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

export default Proyectos;
