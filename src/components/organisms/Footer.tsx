import React from 'react';
import { Text } from '../atoms';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Construction, Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  // Datos generales de la empresa
  const datosGenerales = {
    razonSocial: "GICRAM CONSTRUCCIONES SA DE CV",
    ciudad: "TUXTLA GUTIERREZ, CHIAPAS",
    ubicacion: "CARRETERA INT. Km. 1078 NUM. 353, COL. PLAN DE AYALA CP. 29020",
    telefono: "+529612230369",
    repse: "FOLIO 155699",
    correo: "admongicram@gmail.com"
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gicram-dark to-gicram-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-gicram-primary mr-3" />
              <Text variant="h3" color="white" className="text-2xl font-bold">
                GICRAM
              </Text>
            </div>
            <Text variant="body" color="white" className="text-gicram-tertiary mb-4 leading-relaxed">
              Desarrollador inmobiliario comprometido con ofrecer soluciones integrales de vivienda, 
              superando expectativas y asegurando inversiones de alta plusvalía.
            </Text>
            <div className="flex space-x-4">
              <a href="#" className="text-gicram-tertiary hover:text-gicram-primary transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gicram-tertiary hover:text-gicram-primary transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gicram-tertiary hover:text-gicram-primary transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Información de Contacto */}
          <div>
            <Text variant="h4" color="white" className="text-lg font-bold mb-4 text-gicram-primary">
              Contacto
            </Text>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gicram-primary" />
                <Text variant="body" color="white" className="text-gicram-tertiary">
                  {datosGenerales.telefono}
                </Text>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gicram-primary" />
                <Text variant="body" color="white" className="text-gicram-tertiary">
                  {datosGenerales.correo}
                </Text>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gicram-primary" />
                <Text variant="body" color="white" className="text-gicram-tertiary">
                  {datosGenerales.ciudad}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-8 pt-8 border-t border-gicram-secondary-light/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Text variant="body" color="white" className="font-semibold text-gicram-primary">
                Razón Social
              </Text>
              <Text variant="body" color="white" className="text-gicram-tertiary text-sm">
                {datosGenerales.razonSocial}
              </Text>
            </div>
            
            <div className="space-y-2">
              <Text variant="body" color="white" className="font-semibold text-gicram-primary">
                Ubicación
              </Text>
              <Text variant="body" color="white" className="text-gicram-tertiary text-sm">
                {datosGenerales.ubicacion}
              </Text>
            </div>
            
            <div className="space-y-2">
              <Text variant="body" color="white" className="font-semibold text-gicram-primary">
                REPSE
              </Text>
              <Text variant="body" color="white" className="text-gicram-tertiary text-sm">
                {datosGenerales.repse}
              </Text>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gicram-secondary-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text variant="body" color="white" className="text-gicram-tertiary text-sm">
              © 2025 GICRAM. Todos los derechos reservados.
            </Text>
            <div className="flex items-center mt-4 md:mt-0">
              <Construction className="w-4 h-4 mr-2 text-gicram-primary" />
              <Text variant="body" color="white" className="text-gicram-tertiary text-sm">
                Desarrollado con pasión por la excelencia
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 