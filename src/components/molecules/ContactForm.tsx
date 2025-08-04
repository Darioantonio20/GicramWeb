import React, { useState } from 'react';
import { Button, Input } from '../atoms';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit?.(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre completo"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name}
          required
        />
        <Input
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="tel"
          label="Teléfono"
          value={formData.phone}
          onChange={handleChange('phone')}
          error={errors.phone}
          required
        />
        <Input
          label="Empresa (opcional)"
          value={formData.company}
          onChange={handleChange('company')}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.message}
          onChange={handleChange('message')}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:border-yellow-500"
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message}</p>
        )}
      </div>
      
      <Button className="w-full">
        Enviar Mensaje
      </Button>
    </form>
  );
};

export default ContactForm; 