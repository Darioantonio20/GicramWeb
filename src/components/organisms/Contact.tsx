import React from 'react';
import { Text } from '../atoms';
import { ContactForm } from '../molecules';

const Contact: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Aquí se enviaría el formulario a un backend
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Text variant="h2" className="mb-6">
              Contáctanos
            </Text>
            <Text variant="body" color="secondary" className="mb-8">
              ¿Tienes un proyecto en mente? Nuestro equipo está listo para ayudarte 
              a encontrar la maquinaria perfecta para tu proyecto.
            </Text>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <Text variant="h4" className="mb-1">
                    Teléfono
                  </Text>
                  <Text variant="body" color="secondary">
                    +52 (55) 1234-5678
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <Text variant="h4" className="mb-1">
                    Email
                  </Text>
                  <Text variant="body" color="secondary">
                    info@gicram.com
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <Text variant="h4" className="mb-1">
                    Dirección
                  </Text>
                  <Text variant="body" color="secondary">
                    Av. Industrial 123<br />
                    Col. Industrial<br />
                    Ciudad de México, CDMX
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕒</span>
                </div>
                <div>
                  <Text variant="h4" className="mb-1">
                    Horarios
                  </Text>
                  <Text variant="body" color="secondary">
                    Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 9:00 AM - 2:00 PM<br />
                    Emergencias: 24/7
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <Text variant="h3" className="mb-6">
              Solicita una Cotización
            </Text>
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 