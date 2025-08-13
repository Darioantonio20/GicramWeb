import React from 'react';
import Spinner from './Spinner';
import useImageLoader from '../../hooks/useImageLoader';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  spinnerVariant?: 'primary' | 'secondary' | 'white';
  fallbackText?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  spinnerSize = 'md',
  spinnerVariant = 'primary',
  fallbackText = 'Error al cargar la imagen',
  onLoad,
  onError
}) => {
  const { isLoading, hasError, imageRef, handleImageLoad, handleImageError } = useImageLoader(src);

  const handleLoad = () => {
    handleImageLoad();
    onLoad?.();
  };

  const handleError = () => {
    handleImageError();
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <div className="text-center p-4">
          <div className="text-gray-500 text-sm mb-2">⚠️</div>
          <div className="text-gray-600 text-xs">{fallbackText}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Spinner de carga */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <Spinner size={spinnerSize} variant={spinnerVariant} />
        </div>
      )}
      
      {/* Imagen */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage;
