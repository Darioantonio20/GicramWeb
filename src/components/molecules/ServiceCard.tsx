import React from 'react';
import { Card, Text, Button, ShieldIcon } from '../atoms';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  features: string[];
  price?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  price,
  className = '',
}) => {
  return (
    <Card hover className={`text-center relative overflow-hidden ${className}`}>
      {/* Elegant Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-black/5 rounded-lg opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 rounded-lg opacity-30 transform -rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 rounded-lg opacity-20 animate-machinery-vibrate"></div>
      
      <div className="relative">
        <div className="mb-8">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300 animate-construction-pulse">
            <div className="text-white">
              {icon}
            </div>
          </div>
          
          <Text variant="h4" className="mb-3 font-bold text-black">
            {title}
          </Text>
          
          <Text variant="body" color="secondary" className="mb-8 leading-relaxed text-gray-600">
            {description}
          </Text>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center group">
              <div className="w-3 h-3 bg-black rounded-full mr-4 group-hover:scale-125 transition-transform duration-200 animate-construction-pulse"></div>
              <Text variant="caption" color="secondary" className="text-sm text-gray-600">
                {feature}
              </Text>
            </div>
          ))}
        </div>

        {price && (
          <div className="mb-8 p-4 bg-black/5 rounded-xl border border-gray-200">
            <Text variant="h3" className="font-bold mb-1 text-black">
              {price}
            </Text>
            <Text variant="caption" color="gray" className="text-xs text-gray-500">
              por día
            </Text>
          </div>
        )}

        <Button 
          variant="outline" 
          className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-black text-black hover:bg-black hover:text-white"
        >
          <ShieldIcon size="sm" className="mr-2" />
          Solicitar Cotización
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard; 