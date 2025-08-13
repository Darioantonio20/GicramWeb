import React, { useState, useEffect } from 'react';

interface UseImageLoaderReturn {
  isLoading: boolean;
  hasError: boolean;
  imageRef: React.RefObject<HTMLImageElement | null>;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

const useImageLoader = (src: string): UseImageLoaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(true);
    setHasError(false);

    // If image is already loaded, don't show loading state
    if (imageRef.current?.complete) {
      setIsLoading(false);
    }
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return {
    isLoading,
    hasError,
    imageRef,
    handleImageLoad,
    handleImageError
  };
};

export default useImageLoader;
