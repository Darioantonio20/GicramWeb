import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react';

interface FloatingImagesProps {
  images: Array<{
    image: string;
    text: string;
  }>;
}

// Componente de imagen individual optimizado
const FloatingImage = memo(({ 
  imageData, 
  index, 
  gridConfig, 
  onLoad, 
  onError 
}: {
  imageData: { image: string; text: string };
  index: number;
  gridConfig: { cols: number; rows: number; sizePercent: number; minSize: number };
  onLoad: () => void;
  onError: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Calcular posición y tamaño una sola vez
  const { position, size, rotation, delay } = useMemo(() => {
    const { cols: gridCols, rows: gridRows, sizePercent, minSize } = gridConfig;
    
    const col = index % gridCols;
    const row = Math.floor(index / gridCols);
    
    const colWidth = 100 / gridCols;
    const rowHeight = 100 / gridRows;
    
    const baseX = col * colWidth;
    const baseY = row * rowHeight;
    
    // Variación aleatoria determinística basada en el índice
    const randomX = (Math.sin(index * 1.5) * 0.1) * colWidth;
    const randomY = (Math.cos(index * 2.3) * 0.1) * rowHeight;
    
    const x = baseX + randomX + (colWidth * 0.15);
    const y = baseY + randomY + (rowHeight * 0.15);
    
    const baseSize = Math.max(
      Math.min(colWidth * sizePercent, rowHeight * sizePercent),
      minSize / 100
    );
    
    const sizeVariants = [0.85, 0.95, 1.0, 1.05, 1.15];
    const size = baseSize * sizeVariants[index % sizeVariants.length];
    
    const rotation = (Math.sin(index * 3.7) * 6); // Rotación determinística
    const delay = (index * 0.3) % 2; // Delay determinístico
    
    return { position: { x, y }, size, rotation, delay };
  }, [index, gridConfig]);

  // Aplicar estilos una sola vez
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.cssText = `
        width: ${size}%;
        height: ${size}%;
        left: ${position.x}%;
        top: ${position.y}%;
        transform: rotate(${rotation}deg);
        animation-delay: ${delay}s;
        opacity: 0.75;
        z-index: 10;
        --rotation: ${rotation}deg;
        --delay: ${delay}s;
      `;
    }
  }, [position, size, rotation, delay]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    setHasError(true);
    onError();
  }, [onError]);

  return (
    <div 
      ref={elementRef}
      className="floating-image absolute rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000"
    >
      {!isLoaded && !hasError && (
        <div className="loading-spinner">
          <div className="spinner-container">
            <div className="spinner-ring"></div>
            <div className="spinner-text">Cargando...</div>
          </div>
        </div>
      )}
      
      <img
        src={imageData.image.replace('?grayscale', '')}
        alt={imageData.text}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy" // Lazy loading nativo
      />
    </div>
  );
});

FloatingImage.displayName = 'FloatingImage';

const FloatingImages: React.FC<FloatingImagesProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Detectar tamaño de pantalla con debounce
  useEffect(() => {
    let timeoutId: number;
    
    const updateScreenSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width < 768) {
          setScreenSize('mobile');
        } else if (width < 1024) {
          setScreenSize('tablet');
        } else {
          setScreenSize('desktop');
        }
      }, 100); // Debounce de 100ms
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  // Configuración de cuadrícula memoizada
  const gridConfig = useMemo(() => {
    switch (screenSize) {
      case 'mobile':
        return { cols: 4, rows: 6, sizePercent: 0.75, minSize: 110 };
      case 'tablet':
        return { cols: 4, rows: 6, sizePercent: 0.8, minSize: 130 };
      case 'desktop':
      default:
        return { cols: 5, rows: 5, sizePercent: 0.85, minSize: 160 };
    }
  }, [screenSize]);

  // Calcular número total de imágenes a mostrar
  const totalImages = useMemo(() => {
    return Math.min(images.length, gridConfig.cols * gridConfig.rows);
  }, [images.length, gridConfig]);

  // Callbacks optimizados
  const handleImageLoad = useCallback(() => {
    // Callback para manejar carga exitosa si es necesario en el futuro
  }, []);

  const handleImageError = useCallback(() => {
    // Callback para manejar errores si es necesario en el futuro
  }, []);

  // Limpiar contadores cuando cambien las imágenes
  useEffect(() => {
    // setLoadedImages(0); // Eliminado
    // setErrorImages(0); // Eliminado
  }, [images]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(109, 52, 52, 0.02) 0%, rgba(228, 65, 46, 0.02) 100%)'
      }}
    >
      {/* Renderizar solo las imágenes necesarias */}
      {images.slice(0, totalImages).map((imageData, index) => (
        <FloatingImage
          key={`${imageData.image}-${index}`}
          imageData={imageData}
          index={index}
          gridConfig={gridConfig}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ))}
      
      {/* CSS optimizado */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(var(--rotation));
            }
            25% {
              transform: translateY(-8px) rotate(calc(var(--rotation) + 0.5deg));
            }
            50% {
              transform: translateY(-4px) rotate(calc(var(--rotation) - 0.3deg));
            }
            75% {
              transform: translateY(-6px) rotate(calc(var(--rotation) + 0.3deg));
            }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .floating-image {
            animation: float 15s ease-in-out infinite;
            animation-delay: var(--delay);
            will-change: transform; /* Optimización de GPU */
          }
          
          .loading-spinner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(109, 52, 52, 0.1);
            backdrop-filter: blur(2px);
          }
          
          .spinner-container {
            text-align: center;
          }
          
          .spinner-ring {
            width: 35px;
            height: 35px;
            border: 3px solid rgba(228, 65, 46, 0.3);
            border-top: 3px solid #E4412E;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 8px;
          }
          
          .spinner-text {
            color: #6D3434;
            font-size: 11px;
            font-weight: 500;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          }
          
          /* Responsive adjustments */
          @media (max-width: 767px) {
            .spinner-ring {
              width: 30px;
              height: 30px;
              border-width: 2px;
            }
            
            .spinner-text {
              font-size: 9px;
            }
          }
          
          /* Optimizaciones de rendimiento */
          .floating-image {
            contain: layout style paint; /* Contención CSS */
            backface-visibility: hidden; /* Optimización 3D */
            perspective: 1000px;
          }
        `
      }} />
    </div>
  );
};

export default memo(FloatingImages);
