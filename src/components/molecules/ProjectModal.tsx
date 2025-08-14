import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Text, PlaceholderImage } from '../atoms';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    nombre: string;
    descripcion?: string;
    imagenes: string[];
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset state when modal opens/closes or project changes
  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
      setIsZoomed(false);
      setImageError(false);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const handlePrevious = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? project.imagenes.length - 1 : prev - 1
    );
    setImageError(false);
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => 
      prev === project.imagenes.length - 1 ? 0 : prev + 1
    );
    setImageError(false);
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const resetZoom = () => {
    setIsZoomed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  // Placeholder image component
  const PlaceholderImageComponent = () => (
    <div className="flex items-center justify-center w-full h-64">
      <PlaceholderImage
        width={400}
        height={300}
        type="building"
        title={project.nombre}
        className="w-full h-full"
      />
    </div>
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="relative w-full h-full max-w-7xl max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/90 to-transparent p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Text variant="h3" color="white" className="text-3xl font-bold mb-2">
                {project.nombre}
              </Text>
              <Text variant="body" color="white" className="text-white/90 text-lg">
                {project.descripcion || 'Proyecto de desarrollo inmobiliario'}
              </Text>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center pt-24 pb-32">
          {/* Previous Button */}
          {project.imagenes.length > 1 && (
            <button
              onClick={handlePrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {imageError ? (
              <PlaceholderImageComponent />
            ) : (
              <img
                src={project.imagenes[currentImageIndex]}
                alt={`${project.nombre} - Imagen ${currentImageIndex + 1}`}
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                onClick={handleImageClick}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            )}
          </div>

          {/* Next Button */}
          {project.imagenes.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-8">
          <div className="flex items-center justify-between">
            {/* Image Counter */}
            <div className="flex items-center space-x-6">
              <Text variant="body" color="white" className="text-white/90 text-lg font-semibold">
                {currentImageIndex + 1} de {project.imagenes.length}
              </Text>
              
              {/* Zoom Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                  title={isZoomed ? "Reducir zoom" : "Aumentar zoom"}
                  disabled={imageError}
                >
                  {isZoomed ? (
                    <ZoomOut className="w-5 h-5 text-white" />
                  ) : (
                    <ZoomIn className="w-5 h-5 text-white" />
                  )}
                </button>
                
                {isZoomed && (
                  <button
                    onClick={resetZoom}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                    title="Restablecer zoom"
                  >
                    <RotateCcw className="w-5 h-5 text-white" />
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {project.imagenes.length > 1 && (
              <div className="flex items-center space-x-3">
                {project.imagenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setImageError(false);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Keyboard Instructions */}
        <div className="absolute top-28 right-8 z-10 bg-black/60 rounded-xl p-4 text-white/80 text-sm">
          <div className="font-semibold mb-2">Controles</div>
          <div>← → Navegar</div>
          <div>Click Zoom</div>
          <div>ESC Cerrar</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
