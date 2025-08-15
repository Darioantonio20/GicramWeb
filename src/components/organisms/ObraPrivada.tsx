import React, { useState } from 'react';
import { Text, Button } from '../atoms';
import { ProjectModal } from '../molecules';
import { ArrowLeft, Image, MapPin, Building2 } from 'lucide-react';
import CreditOptions from './CreditOptions';

interface ObraPrivadaProps {
  onBack: () => void;
  selectedProject?: {
    category: string;
    project: string;
  } | null;
}

interface Project {
  nombre: string;
  descripcion: string;
  imagenes: string[];
}

const ObraPrivada: React.FC<ObraPrivadaProps> = ({ onBack, selectedProject }) => {
  const [selectedProjectData, setSelectedProjectData] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de Obra Privada directamente en el componente
  const obraPrivadaData = {
    titulo: "OBRA PRIVADA (fotografías y Renders)",
    descripcion: "En Gicram contribuimos al éxito de nuestros clientes manteniendo un interés constante por establecer alianzas comerciales de largo plazo, asegurando altos estándares de calidad y la generación de soluciones técnico-económicas de alto valor agregado.",
    proyectos: {
      "Guadalajara": [
        {
          nombre: "Centro Histórico",
          descripcion: "Proyecto de restauración y modernización en el corazón histórico de Guadalajara, preservando la arquitectura colonial",
          imagenes: ["/images/projects/obraPrivada7.jpg", "/images/projects/obraPrivada8.jpg"]
        },
        {
          nombre: "Las Américas",
          descripcion: "Desarrollo comercial y residencial en la zona de Las Américas, con espacios versátiles y diseño contemporáneo",
          imagenes: ["/images/projects/obraPrivada9.jpg", "/images/projects/obraPrivada10.jpg", "/images/projects/obraPrivada11.jpg"]
        },
        {
          nombre: "Vallarta",
          descripcion: "Proyecto turístico y residencial en la zona de Vallarta, con vistas panorámicas y amenidades de primer nivel",
          imagenes: ["/images/projects/obraPrivada12.jpg", "/images/projects/obraPrivada13.jpg"]
        },
        {
          nombre: "Tlaquepaque",
          descripcion: "Centro cultural y comercial en Tlaquepaque, fusionando tradición artesanal con arquitectura moderna",
          imagenes: ["/images/projects/obraPrivada14.jpg", "/images/projects/obraPrivada15.jpg", "/images/projects/obraPrivada16.jpg"]
        }
      ],
      "Veracruz": [
        {
          nombre: "Puerto Comercial",
          descripcion: "Desarrollo portuario y comercial en Veracruz, con infraestructura moderna para el comercio internacional",
          imagenes: ["/images/projects/obraPrivada17.jpg", "/images/projects/obraPrivada18.jpg"]
        }
      ],
      "Estado de México": [
        {
          nombre: "Ecatepec",
          descripcion: "Complejo residencial y comercial en Ecatepec, diseñado para familias modernas con espacios funcionales",
          imagenes: ["/images/projects/obraPrivada19.jpg", "/images/projects/obraPrivada20.jpg", "/images/projects/obraPrivada21.jpg"]
        },
        {
          nombre: "Coacalco",
          descripcion: "Desarrollo urbano en Coacalco con enfoque en sustentabilidad y calidad de vida para sus residentes",
          imagenes: ["/images/projects/obraPrivada22.jpg", "/images/projects/obraPrivada23.jpg"]
        },
        {
          nombre: "Cuautitlán Izcalli",
          descripcion: "Proyecto de vivienda social y equipamiento urbano en Cuautitlán Izcalli, priorizando la accesibilidad",
          imagenes: ["/images/projects/obraPrivada24.jpg", "/images/projects/obraPrivada25.jpg", "/images/projects/obraPrivada26.jpg"]
        }
      ],
      "Ciudad de México": [
        {
          nombre: "La Villa",
          descripcion: "Centro religioso y cultural en La Villa, con espacios para peregrinaciones y eventos masivos",
          imagenes: ["/images/projects/obraPrivada27.jpg", "/images/projects/obraPrivada28.jpg"]
        },
        {
          nombre: "Berlín",
          descripcion: "Desarrollo residencial de lujo en la colonia Berlín, con arquitectura contemporánea y amenidades exclusivas",
          imagenes: ["/images/projects/obraPrivada29.jpg", "/images/projects/obraPrivada30.jpg", "/images/projects/obraPrivada31.jpg"]
        },
        {
          nombre: "Zaragoza",
          descripcion: "Complejo comercial y de servicios en Zaragoza, diseñado para satisfacer las necesidades de la comunidad local",
          imagenes: ["/images/projects/obraPrivada32.jpg", "/images/projects/obraPrivada33.jpg"]
        },
        {
          nombre: "Ermita Iztapalapa",
          descripcion: "Proyecto de vivienda social en Ermita Iztapalapa, con espacios comunitarios y áreas recreativas",
          imagenes: ["/images/projects/obraPrivada34.jpg", "/images/projects/obraPrivada35.jpg", "/images/projects/obraPrivada36.jpg"]
        }
      ]
    }
  };

  // Buscar el proyecto específico si se seleccionó desde el navbar
  const findSelectedProject = () => {
    if (!selectedProject) return null;
    
    // Buscar en todos los proyectos de todas las ciudades
    for (const [ciudad, proyectos] of Object.entries(obraPrivadaData.proyectos)) {
      if (ciudad === selectedProject.category) {
        const project = proyectos.find(proj => proj.nombre === selectedProject.project);
        if (project) {
          return project;
        }
      }
    }
    
    return null;
  };

  const specificProject = findSelectedProject();
  
  const handleProjectClick = (project: Project) => {
    setSelectedProjectData(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectData(null);
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
                {specificProject ? specificProject.nombre : obraPrivadaData.titulo}
              </Text>
              <Text variant="body" color="gray" className="text-gicram-secondary-light">
                {specificProject ? specificProject.descripcion : obraPrivadaData.descripcion}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Si hay un proyecto específico seleccionado, mostrar solo ese proyecto */}
        {specificProject ? (
          <div className="space-y-12">
            {/* Proyecto específico */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Text variant="h2" color="gray" className="text-3xl font-bold text-gicram-secondary mb-2">
                    {specificProject.nombre}
                  </Text>
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    {specificProject.descripcion}
                  </Text>
                </div>
              </div>
              
              {/* Imágenes del proyecto */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specificProject.imagenes.map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gicram-primary/30 group"
                    onClick={() => handleProjectClick(specificProject)}
                  >
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <Image className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <Text variant="body" color="gray" className="text-sm text-gray-600">
                        Imagen {index + 1}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Descripción general */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
              <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light text-center leading-relaxed">
                {obraPrivadaData.descripcion}
              </Text>
            </div>

            {/* Proyectos por ubicación - SOLO cuando NO hay proyecto específico */}
            <div className="space-y-12">
              {Object.entries(obraPrivadaData.proyectos).map(([ciudad, proyectos], index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-6 h-6 text-gicram-primary" />
                    <Text variant="h2" color="gray" className="text-2xl font-bold text-gicram-secondary">
                      {ciudad}
                    </Text>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proyectos.map((project, projectIndex) => (
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
          </>
        )}
        <div className="mt-12">
          <CreditOptions />
        </div>
      </div>

      {/* Modal de imágenes */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProjectData}
      />
    </div>
  );
};

export default ObraPrivada;
