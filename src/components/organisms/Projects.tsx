import React, { useState } from 'react';
import { BuildingIcon, HomeIcon, TrophyIcon } from '../atoms';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'habitacionales' | 'obra-privada' | 'obra-publica'>('habitacionales');

  const tabs = [
    { id: 'habitacionales', label: 'DESARROLLOS HABITACIONALES', icon: HomeIcon },
    { id: 'obra-privada', label: 'OBRA PRIVADA', icon: BuildingIcon },
    { id: 'obra-publica', label: 'OBRA PÚBLICA', icon: TrophyIcon }
  ];

  const habitacionales = [
    {
      nombre: 'Rinconada del Carmen Tuxtla Gutiérrez',
      detalles: [
        'Casas Cuádruples de 60 m² (24 unidades)',
        'Casas de 2 Niveles 108 m² (08 unidades)'
      ]
    },
    {
      nombre: 'Casas Duplex Akishino Tapachula',
      detalles: [
        'Casas Cuádruples de 58 m² (16 unidades)'
      ]
    },
    {
      nombre: 'Rincón del Carmen Copan Tapachula',
      detalles: [
        'Casas de 1 Nivel 90 m² (14 unidades)'
      ]
    },
    {
      nombre: 'Rincón del Carmen Tikal Tapachula',
      detalles: [
        'Casas de 1 Nivel 60 m² (25 unidades)'
      ]
    }
  ];

  const obraPrivada = [
    {
      cliente: 'Nacer Global',
      proyecto: 'Proyecto Arquitectónico, Construcción y Adecuaciones de Espacios de Centros Multifuncionales de Ciencias de La Salud. Consistentes en Fisioterapia, Enfermería, Nutrición y Psicología.',
      ubicacion: 'Tlalpan, Ciudad de México.'
    },
    {
      cliente: 'Universidad Educativa de Ecatepec',
      proyecto: 'Proyecto Arquitectónico, Construcción y Adecuaciones de Espacios de Aulas y Laboratorios.',
      ubicacion: 'Ecatepec, Estado de México.'
    },
    {
      cliente: 'Persona física',
      proyecto: 'Proyecto Arquitectónico, ingenierías y Construcción de Residencia en Country Residencial La Cima.',
      ubicacion: 'Tuxtla Gutiérrez, Chiapas.'
    },
    {
      cliente: 'Persona física',
      proyecto: 'Proyecto Arquitectónico e ingenierías. Centro de Oficinas Cowork, en Plaza Vía Park.',
      ubicacion: 'Tuxtla Gutiérrez, Chiapas.'
    },
    {
      cliente: 'Universidad Educativa de Ecatepec',
      proyecto: 'Proyecto Arquitectónico, Construcción y Adecuaciones de laboratorios de Robótica.',
      ubicacion: 'Ecatepec, Estado de México.'
    },
    {
      cliente: 'Centro de Aprendizaje Montevideo SC',
      proyecto: 'Proyecto Arquitectónico, Construcción y Adecuaciones de Ciencias de La Salud.',
      ubicacion: 'Acapulco, Guerrero.'
    },
    {
      cliente: 'ICEL Universidad SC',
      proyecto: 'Proyecto Arquitectónico, Construcción y Adecuaciones de Espacios de Centros Multifuncionales de Ciencias de La Salud. Consistentes en Fisioterapia, Enfermería, Nutrición y Psicología.',
      ubicacion: 'Coacalco, Estado de México.'
    },
    {
      cliente: 'UNIVER',
      proyecto: 'Construcción y Adecuaciones de Espacios de Centros educativos Multifuncionales.',
      ubicacion: 'Univer Centro Histórico, Guadalajara, Jalisco.'
    },
    {
      cliente: 'Universidad del Desarrollo Profesional SC (UNIDEP)',
      proyecto: 'Construcción de Aulas y Biblioteca.',
      ubicacion: 'Mexicali, Baja California.'
    }
  ];

  const obraPublica = [
    {
      cliente: 'Gobierno del Estado de Chiapas',
      obra: 'HOSPITAL BÁSICO COMUNITARIO DE SIMOJOVEL',
      detalles: 'Construcción del Hospital Básico Comunitario de Simojovel',
      ubicacion: 'Simojovel de Allende, del municipio de Simojovel, Chiapas.'
    },
    {
      cliente: 'Gobierno del Estado de Chiapas',
      obra: 'Construcción, mejoramiento o ampliación de centros de readaptación social',
      detalles: 'Mejoramiento o ampliación (cereso 14 el amate), consistente en: construcción de 500.00 mts lineales de barda de concreto armado de 4.00 mts. de altura, 300.00 mts. lineales de barda de concreto armado de 3.00 mts. de altura (ambos en acabado aparente), 05 (cinco) portones corredizos ubicados en las áreas donde se localizan los rondines vehiculares y sobre el rondín de custodios puertas de paso con mirillas de control, 02 torres de vigilancia de 8.00 mts. de altura que contengan preparaciones para instalaciones hidro-sanitarias',
      ubicacion: 'Lázaro Cárdenas, del municipio de Cintalapa, Chis.'
    },
    {
      cliente: 'Gobierno del Estado de Chiapas',
      obra: 'REHABILITACIÓN DE SISTEMA DE AGUA POTABLE',
      detalles: 'Obra de captación y red de distribución',
      ubicacion: 'Municipio de Tonalá, Chiapas.'
    },
    {
      cliente: 'INIFECH',
      obra: 'CREACIÓN DE LA UNIDAD ACADÉMICA (UNICACH)',
      detalles: 'Construcción de edificio 1 y 2 de 3 niveles, módulo de escaleras y obra exterior.',
      ubicacion: 'Palenque, chis.'
    },
    {
      cliente: 'Gobierno del Estado de Chiapas',
      obra: 'HOSPITAL GENERAL DE 20 CAMAS DE OCOSINGO',
      detalles: 'ELABORACION DE PROYECTOS EJECUTIVOS, OBRA Y EQUIPAMIENTO MEDICO Y MOBILIARIO.',
      ubicacion: 'Ocosingo, chis.'
    },
    {
      cliente: 'Gobierno del Estado de Chiapas',
      obra: 'Mercado público municipal (construcción)',
      detalles: 'Naves: nave 1, nave2, nave 3, instalación sanitaria (naves), instalación de gas (interior de naves), servicios sanitarios y administración; obra exterior: estacionamiento, cisterna de 100 m3, tanque elevado, instalación hidrosanitaria, instalación sanitaria, banquetas y guarniciones, concentración de medidores; instalación eléctrica (media tensión); patio maniobras, acceso y área de concreto; área de carga y descarga, piso perimetral; instalación de gas (red exterior); canales; plataforma (naves), plataforma (estacionamiento)',
      ubicacion: 'La Trinitaria, CHIAPAS.'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'habitacionales':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {habitacionales.map((proyecto, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <HomeIcon size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">{proyecto.nombre}</h4>
                </div>
                <div className="space-y-3">
                  {proyecto.detalles.map((detalle, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                      <span className="text-slate-700">{detalle}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'obra-privada':
        return (
          <div className="space-y-8">
            {obraPrivada.map((proyecto, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BuildingIcon size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#6D3434] mb-2">{proyecto.cliente}</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Proyecto:</strong> {proyecto.proyecto}
                  </p>
                  <p className="text-slate-600">
                    <strong>Ubicación:</strong> {proyecto.ubicacion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'obra-publica':
        return (
          <div className="space-y-8">
            {obraPublica.map((proyecto, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <TrophyIcon size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#E4412E] mb-2">{proyecto.cliente}</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Obra:</strong> {proyecto.obra}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Detalles:</strong> {proyecto.detalles}
                  </p>
                  <p className="text-slate-600">
                    <strong>Ubicación:</strong> {proyecto.ubicacion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-[#E4412E]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E4412E]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#6D3434]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E4412E]/10 to-[#6D3434]/10 backdrop-blur-sm rounded-full text-[#6D3434] text-sm font-semibold mb-8 border border-[#E4412E]/20 shadow-lg">
            <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
            EXPERIENCIA GICRAM
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Nuestros Proyectos
            <br />
            <span className="bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-slate-700 bg-clip-text text-transparent">
              y Experiencia
            </span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
            Más de 15 años de experiencia en proyectos de infraestructura, desarrollos habitacionales y obra pública 
            que demuestran nuestro compromiso con la excelencia y la calidad.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#E4412E] to-[#6D3434] text-white shadow-2xl shadow-[#E4412E]/30'
                    : 'bg-white/80 text-slate-700 hover:bg-[#E4412E]/10 hover:text-[#E4412E] border border-white/40 shadow-lg'
                }`}
              >
                <IconComponent size="md" className="mr-3" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {renderContent()}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E4412E]/10 to-[#6D3434]/10 backdrop-blur-sm rounded-full text-[#6D3434] text-sm font-semibold border border-[#E4412E]/20 shadow-lg">
            <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
            Experiencia comprobada en más de 50 proyectos
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
