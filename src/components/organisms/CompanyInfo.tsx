import React from 'react';
import { PhoneIcon, EmailIcon, LocationIcon, BuildingIcon, ShieldIcon, TrophyIcon } from '../atoms';

const CompanyInfo: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-[#6D3434]/10 relative overflow-hidden">
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
            INFORMACIÓN CORPORATIVA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Datos Generales
            <br />
            <span className="bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-slate-700 bg-clip-text text-transparent">
              GICRAM
            </span>
          </h2>
        </div>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Company Details */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BuildingIcon size="xl" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Información Legal</h3>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold">Razón Social:</span>
                  <span className="text-[#6D3434] font-medium">GICRAM CONSTRUCCIONES SA DE CV</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold">Director General:</span>
                  <span className="text-[#6D3434] font-medium">RENE G. TRESPALACIOS TORRES</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold">RFC:</span>
                  <span className="text-[#6D3434] font-medium">GCO160630UI6</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold">REPSE:</span>
                  <span className="text-[#6D3434] font-medium">FOLIO 155699</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">Ciudad:</span>
                  <span className="text-[#6D3434] font-medium">TUXTLA GUTIÉRREZ, CHIAPAS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <PhoneIcon size="xl" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Información de Contacto</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E4412E]/10 rounded-xl flex items-center justify-center">
                    <PhoneIcon size="lg" className="text-[#E4412E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Teléfono Oficina</p>
                    <p className="text-[#6D3434] font-medium">961 11 29990</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E4412E]/10 rounded-xl flex items-center justify-center">
                    <EmailIcon size="lg" className="text-[#E4412E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Correo Electrónico</p>
                    <p className="text-[#6D3434] font-medium">trespalaciost@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E4412E]/10 rounded-xl flex items-center justify-center mt-1">
                    <LocationIcon size="lg" className="text-[#E4412E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Ubicación</p>
                    <div className="text-[#6D3434] font-medium text-sm">
                      CARRETERA INT. Km. 1078 NUM. 353<br />
                      COL. PLAN DE AYALA CP. 29020<br />
                      TUXTLA GUTIÉRREZ, CHIAPAS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="bg-gradient-to-br from-[#6D3434]/10 to-[#E4412E]/10 backdrop-blur-sm rounded-3xl p-12 border border-[#6D3434]/20 shadow-xl">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Nuestros Valores Corporativos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldIcon size="lg" className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">COMPROMISO</h4>
              <p className="text-slate-600 text-sm">
                Materiales y métodos que garanticen plusvalía y armonicen con la conservación del medio ambiente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrophyIcon size="lg" className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">PASIÓN</h4>
              <p className="text-slate-600 text-sm">
                Atención determinada con conocimiento y corazón en cada proyecto que emprendemos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BuildingIcon size="lg" className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">INNOVACIÓN</h4>
              <p className="text-slate-600 text-sm">
                Nuestro esquema de trabajo, servicio y diseño desafían lo convencional del sector.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldIcon size="lg" className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">DISRUPTIVOS</h4>
              <p className="text-slate-600 text-sm">
                Consistente búsqueda de cambios en nuestro modelo de negocio inmobiliario.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E4412E]/10 to-[#6D3434]/10 backdrop-blur-sm rounded-full text-[#6D3434] text-sm font-semibold border border-[#E4412E]/20 shadow-lg">
            <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
            Empresa certificada y comprometida con la excelencia
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
