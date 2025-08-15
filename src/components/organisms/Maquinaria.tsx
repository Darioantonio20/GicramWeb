import React from 'react';
import { Text, Button } from '../atoms';
import { Truck, Wrench, HardHat, Cog, Settings, CheckCircle, Clock, Building2, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';

interface MaquinariaProps {
  onBack: () => void;
}

const Maquinaria: React.FC<MaquinariaProps> = ({ onBack }) => {
  const equipos = [
    {
      categoria: "EXCAVACIÓN Y MOVIMIENTO DE TIERRA",
      equipos: [
        "1 Retroexcavadora CAT420D",
        "1 Retroexcavadora CAT416E", 
        "1 Excavadora CAT320C",
        "1 Motoconformadora CAT12H"
      ]
    },
    {
      categoria: "COMPACTACIÓN",
      equipos: [
        "1 Vibrocompactador Dynapac 12 Ton",
        "1 Rodillo Wacker 1200Kg",
        "1 Rodillo New Holland 7 Ton"
      ]
    },
    {
      categoria: "EQUIPOS COMPLEMENTARIOS",
      equipos: [
        "6 Bailarinas",
        "8 Revolvedoras",
        "1 Martillo retroexcavadora"
      ]
    },
    {
      categoria: "TRANSPORTE",
      equipos: [
        "1 Camión 3 Ton F350 Súper Duty",
        "3 Nissan P300",
        "1 Mitsubishi L200 4x4",
        "1 Vehículo compacto"
      ]
    }
  ];

  const servicios = [
    {
      icono: <Truck className="w-8 h-8 text-white" />,
      titulo: "ARRENDAMIENTO DE MAQUINARIA",
      descripcion: "Renta de equipos pesados y especializados para proyectos de construcción de cualquier envergadura."
    },
    {
      icono: <Wrench className="w-8 h-8 text-white" />,
      titulo: "MANTENIMIENTO Y REPARACIÓN",
      descripcion: "Servicios de mantenimiento preventivo y correctivo para maquinaria de construcción."
    },
    {
      icono: <HardHat className="w-8 h-8 text-white" />,
      titulo: "OPERADORES CERTIFICADOS",
      descripcion: "Personal capacitado y certificado para operar toda nuestra flota de maquinaria."
    },
    {
      icono: <Cog className="w-8 h-8 text-white" />,
      titulo: "EQUIPOS INDUSTRIALES",
      descripcion: "Maquinaria especializada para proyectos industriales y de infraestructura."
    }
  ];

  const datosGenerales = {
    razonSocial: "GICRAM CONSTRUCCIONES SA DE CV",
    ciudad: "TUXTLA GUTIERREZ, CHIAPAS",
    ubicacion: "CARRETERA INT. Km. 1078 NUM. 353, COL. PLAN DE AYALA CP. 29020",
    telefono: "+529612230369",
    repse: "FOLIO 155699",
    correo: "admongicram@gmail.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gicram-tertiary via-white to-gicram-primary/5">
      {/* Header con botón de regreso */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título principal */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Text variant="h2" color="gray" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gicram-secondary mb-6">
              MAQUINARIA
            </Text>
            <Text variant="body" color="gray" className="text-lg sm:text-xl text-gicram-secondary-light max-w-4xl mx-auto leading-relaxed">
              Contamos con una amplia flota de maquinaria pesada y equipos especializados para renta, mantenimiento y servicios de construcción. Nuestros equipos están disponibles para proyectos de cualquier escala.
            </Text>
          </div>

          {/* Servicios de Maquinaria */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gicram-tertiary">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {servicio.icono}
                  </div>
                  <Text variant="h4" color="gray" className="text-lg font-bold text-gicram-secondary mb-3">
                    {servicio.titulo}
                  </Text>
                  <Text variant="body" color="gray" className="text-sm text-gicram-secondary-light leading-relaxed">
                    {servicio.descripcion}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          {/* Datos Generales */}
          <div className="mb-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <Text variant="h3" color="gray" className="text-3xl font-bold text-gicram-secondary mb-8 text-center">
              DATOS GENERALES
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      Razón Social
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.razonSocial}
                    </Text>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      Ciudad
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.ciudad}
                    </Text>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      Ubicación
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.ubicacion}
                    </Text>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      Teléfono
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.telefono}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      Correo
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.correo}
                    </Text>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-gicram-primary" />
                  <div>
                    <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                      REPSE
                    </Text>
                    <Text variant="body" color="gray" className="text-gicram-secondary-light">
                      {datosGenerales.repse}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flota de Equipos */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <Text variant="h3" color="gray" className="text-3xl font-bold text-gicram-secondary mb-8 text-center">
              NUESTRA FLOTA DE EQUIPOS
            </Text>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {equipos.map((categoria, index) => (
                <div key={index} className="bg-gradient-to-br from-gicram-primary/5 to-gicram-secondary/5 rounded-xl p-6 border border-gicram-primary/20">
                  <Text variant="h4" color="gray" className="text-xl font-bold text-gicram-secondary mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-gicram-primary" />
                    {categoria.categoria}
                  </Text>
                  <ul className="space-y-2">
                    {categoria.equipos.map((equipo, equipoIndex) => (
                      <li key={equipoIndex} className="text-sm text-gicram-secondary-light flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                        <span>{equipo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-16 bg-gradient-to-br from-gicram-secondary/10 to-gicram-primary/10 rounded-2xl p-8 border border-gicram-secondary/20">
            <div className="text-center">
              <Text variant="h3" color="gray" className="text-2xl font-bold text-gicram-secondary mb-6">
                VENTAJAS DE NUESTROS SERVICIOS
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Settings className="w-6 h-6 text-gicram-primary" />
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    Equipos en excelente estado
                  </Text>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gicram-primary" />
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    Operadores certificados
                  </Text>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-6 h-6 text-gicram-primary" />
                  <Text variant="body" color="gray" className="text-gicram-secondary-light">
                    Disponibilidad inmediata
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maquinaria;
