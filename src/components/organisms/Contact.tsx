import React from 'react';
import { Text, PhoneIcon, EmailIcon, LocationIcon, ClockIcon, ConstructionIcon } from '../atoms';
import { ContactForm } from '../molecules';

const Contact: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Aquí se enviaría el formulario a un backend
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#6D3434]/5 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-full h-full construction-grid"></div>
        </div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#E4412E]/5 rounded-full animate-construction-float">
          <ConstructionIcon size="xl" className="text-[#E4412E]/20 mx-auto mt-8" />
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#6D3434]/5 rounded-full animate-construction-float animation-delay-2000">
          <ConstructionIcon size="lg" className="text-[#6D3434]/20 mx-auto mt-6" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#E4412E]/5 rounded-full animate-construction-float animation-delay-1000">
          <ConstructionIcon size="xl" className="text-[#E4412E]/20 mx-auto mt-10" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-[#6D3434]/5 rounded-full animate-construction-float animation-delay-3000">
          <ConstructionIcon size="lg" className="text-[#6D3434]/20 mx-auto mt-7" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-[#E4412E]/10 backdrop-blur-sm rounded-full text-[#6D3434] text-sm font-semibold mb-8 border border-[#E4412E]/20 shadow-lg">
                <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
                Contáctanos
              </div>
              
              <Text variant="h2" className="mb-8 text-slate-800">
                ¿Tienes un proyecto en mente?
              </Text>
              
              <Text variant="body" color="secondary" className="text-lg leading-relaxed text-slate-600">
                Nuestro equipo está listo para ayudarte a encontrar la solución perfecta para tu proyecto. 
                Contáctanos y te responderemos en menos de 24 horas.
              </Text>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-[#6D3434] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-construction-pulse">
                  <PhoneIcon size="lg" className="text-white" />
                </div>
                <div>
                  <Text variant="h4" className="mb-2 font-bold text-slate-800">
                    Teléfono
                  </Text>
                  <Text variant="body" color="secondary" className="text-lg text-slate-600">
                    +52 (55) 1234-5678
                  </Text>
                  <Text variant="caption" color="gray" className="text-gray-500">
                    Línea directa 24/7
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-[#E4412E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-construction-pulse">
                  <EmailIcon size="lg" className="text-white" />
                </div>
                <div>
                  <Text variant="h4" className="mb-2 font-bold text-slate-800">
                    Email
                  </Text>
                  <Text variant="body" color="secondary" className="text-lg text-slate-600">
                    info@gicram.com
                  </Text>
                  <Text variant="caption" color="gray" className="text-gray-500">
                    Respuesta en 2 horas
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-[#6D3434] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-construction-pulse">
                  <LocationIcon size="lg" className="text-white" />
                </div>
                <div>
                  <Text variant="h4" className="mb-2 font-bold text-slate-800">
                    Dirección
                  </Text>
                  <Text variant="body" color="secondary" className="text-lg text-slate-600">
                    Av. Industrial 123<br />
                    Col. Industrial<br />
                    Ciudad de México, CDMX
                  </Text>
                  <Text variant="caption" color="gray" className="text-gray-500">
                    Visítanos en horario laboral
                  </Text>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-[#E4412E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-construction-pulse">
                  <ClockIcon size="lg" className="text-white" />
                </div>
                <div>
                  <Text variant="h4" className="mb-2 font-bold text-slate-800">
                    Horarios
                  </Text>
                  <Text variant="body" color="secondary" className="text-lg text-slate-600">
                    Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 9:00 AM - 2:00 PM<br />
                    Emergencias: 24/7
                  </Text>
                  <Text variant="caption" color="gray" className="text-gray-500">
                    Servicio de emergencia disponible
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden border border-gray-200">
            {/* Elegant Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E4412E]/5 rounded-lg opacity-30 transform rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6D3434]/5 rounded-lg opacity-30 transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#E4412E]/10 rounded-lg opacity-20 animate-machinery-vibrate"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">
                  <ConstructionIcon size="xl" className="text-[#E4412E] mx-auto" />
                </div>
                <Text variant="h3" className="mb-4 text-slate-800">
                  Solicita una Cotización
                </Text>
                <Text variant="body" color="secondary" className="text-slate-600">
                  Completa el formulario y te contactaremos en menos de 24 horas
                </Text>
              </div>
              
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 