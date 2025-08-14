import React from 'react';
import { Building2, Home, GraduationCap, HeartPulse, Wrench, Shield, ShoppingCart } from 'lucide-react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  type?: 'building' | 'home' | 'education' | 'health' | 'infrastructure' | 'security' | 'commercial';
  title?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  type = 'building',
  title = 'Proyecto GICRAM',
  className = ''
}) => {
  const getIcon = () => {
    const iconMap = {
      building: Building2,
      home: Home,
      education: GraduationCap,
      health: HeartPulse,
      infrastructure: Wrench,
      security: Shield,
      commercial: ShoppingCart
    };
    const IconComponent = iconMap[type];
    return <IconComponent className="w-16 h-16 text-white" />;
  };

  const getBackgroundColor = () => {
    const colorMap = {
      building: 'from-gicram-primary to-gicram-primary-light',
      home: 'from-gicram-secondary to-gicram-secondary-light',
      education: 'from-blue-500 to-blue-600',
      health: 'from-red-500 to-red-600',
      infrastructure: 'from-green-500 to-green-600',
      security: 'from-purple-500 to-purple-600',
      commercial: 'from-orange-500 to-orange-600'
    };
    return colorMap[type];
  };

  return (
    <div
      className={`bg-gradient-to-br ${getBackgroundColor()} rounded-lg flex flex-col items-center justify-center text-white ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {getIcon()}
      <div className="text-center mt-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <div className="text-sm opacity-80">GICRAM Construcciones</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
