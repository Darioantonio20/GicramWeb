import React from 'react';
import { Card, Text, Button } from '../atoms';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
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
    <Card hover className={`text-center ${className}`}>
      <div className="mb-6">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <Text variant="h4" className="mb-2">
          {title}
        </Text>
        <Text variant="body" color="secondary" className="mb-6">
          {description}
        </Text>
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
            <Text variant="caption" color="secondary">
              {feature}
            </Text>
          </div>
        ))}
      </div>

      {price && (
        <div className="mb-6">
          <Text variant="h3" color="yellow" className="font-bold">
            {price}
          </Text>
          <Text variant="caption" color="gray">
            por día
          </Text>
        </div>
      )}

      <Button variant="outline" className="w-full">
        Solicitar Cotización
      </Button>
    </Card>
  );
};

export default ServiceCard; 