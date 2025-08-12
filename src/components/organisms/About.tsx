import React from 'react';
import { TimeIcon, TrophyIcon, BuildingIcon, ShieldIcon, ConstructionIcon } from '../atoms';

const About: React.FC = () => {
  return (
    <>
      {/* ANTECEDENTES Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-[#6D3434] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#E4412E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6D3434]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E4412E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 border border-white/20 shadow-lg">
              <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
              ANTECEDENTES
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Nuestra Historia
              <br />
              <span className="text-[#E4412E]">GICRAM</span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
              <div className="space-y-8 text-lg text-white/90 leading-relaxed">
                <p>
                  <strong className="text-[#E4412E]">GICRAM CONSTRUCCIONES S.A DE C.V</strong> se constituye en el estado de Chiapas el día 16 de junio del 2016, con Registro Federal de Contribuyentes <strong className="text-[#E4412E]">GCO160630UI6</strong>, Registro Patronal ante el IMSS No. <strong className="text-[#E4412E]">A6534317107</strong>.
                </p>
                
                <p>
                  Desde el año 2008 el equipo técnico y administrativo de Gicram ha participado y tenido la experiencia de liderar proyectos y obras de gran relevancia en distintas especialidades.
                </p>
                
                <p>
                  En los últimos años nuestro equipo ha ocupado cargos gerenciales de alta dirección y de alta responsabilidad técnica a través de superintendencias de obra, representaciones Técnicas, Residencias de obras y Directores Responsables de Obra en diversas empresas de las que formó parte y/o mantuvo alguna sociedad.
                </p>
                
                <p>
                  En <strong className="text-[#E4412E]">GICRAM</strong> nos hemos especializado en proyectos de construcción, consolidándonos como una empresa seria y responsable con profesionistas altamente calificados y una infraestructura que nos permite ofrecer servicios de calidad a nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACERCA DE NOSOTROS Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-[#E4412E]/5 relative overflow-hidden">
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
              ACERCA DE NOSOTROS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
              Inmobiliaria Mexicana
              <br />
              <span className="bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-slate-700 bg-clip-text text-transparent">
                con Compromiso Social
              </span>
            </h2>
            
            <p className="max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
              GICRAM es una inmobiliaria mexicana con el fiel compromiso de dar soluciones integrales a las necesidades de vivienda. 
              Trabajamos regidos bajo valores encaminados a otorgarles a nuestros clientes el acceso a mejores estándares de vida y a realizar inversiones de alta plusvalía.
            </p>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Misión */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrophyIcon size="lg" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">MISIÓN</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Reconocer y traducir las necesidades reales y aspiraciones de nuestros clientes para desarrollar espacios habitacionales que superen sus expectativas y les aseguren una excelente inversión a mediano y largo plazo.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BuildingIcon size="lg" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">VISIÓN</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Ser el mayor constructor y desarrollador inmobiliario del sur de México, reconocido por escalar el nivel de vida de nuestros clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldIcon size="lg" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">VALORES</h3>
              </div>
              <div className="space-y-3 text-slate-700 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                  <strong>COMPROMISO:</strong> Materiales y métodos que garanticen plusvalía
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                  <strong>PASIÓN:</strong> Atención determinada con conocimiento y corazón
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                  <strong>INNOVACIÓN:</strong> Desafiamos lo convencional del sector
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                  <strong>DISRUPTIVOS:</strong> Generamos cambios en nuestro modelo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-[#6D3434]/5 relative overflow-hidden">
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
              EXPERIENCIA
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
              9 Años de Experiencia
              <br />
              <span className="bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-slate-700 bg-clip-text text-transparent">
                en Construcción
              </span>
            </h2>
          </div>

          {/* Experience Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TimeIcon size="xl" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Experiencia Pública</h3>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Desde el año 2009 ha liderado proyectos de infraestructura con contratos de obra pública en:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    <strong>SCT</strong>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    <strong>CONAGUA</strong>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    <strong>INIFECH</strong>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    <strong>SINFRA</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrophyIcon size="xl" className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Servicios Especializados</h3>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  En <strong className="text-[#6D3434]">GICRAM Construcciones</strong>, nos dedicamos a:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    Todo tipo de obra Civil
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    Proyectos ejecutivos arquitectónicos
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    Supervisión de obra y presupuestos
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    Desarrollos Inmobiliarios
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-2"></span>
                    Renta de Maquinaria y Equipo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICIOS QUE OFERTAMOS */}
          <div className="bg-gradient-to-br from-[#6D3434]/10 to-[#E4412E]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#6D3434]/20 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">SERVICIOS QUE OFERTAMOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BuildingIcon size="lg" className="text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">EDIFICACIONES Y CONSTRUCCIONES OBRA CIVIL</h4>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ConstructionIcon size="lg" className="text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">ARRENDAMIENTO DE MAQUINARIA Y EQUIPO INDUSTRIAL</h4>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4412E] to-[#6D3434] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldIcon size="lg" className="text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">REPARACIÓN Y MANTENIMIENTO DE EDIFICIOS</h4>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6D3434] to-[#E4412E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrophyIcon size="lg" className="text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">MAQUINARIA PARA LA CONSTRUCCIÓN</h4>
              </div>
            </div>
          </div>

          {/* PRINCIPALES CLIENTES */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">PRINCIPALES CLIENTES</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'GRUPO NACER GLOBAL',
                'ICEL UNIVERSIDAD',
                'CENTRO SCT CHIAPAS',
                'INFONAVIT',
                'ISSSTE',
                'UNIVERSIDAD DEL DESARROLLO PROFESIONAL SC (UNIDEP)',
                'INSTITUTO EL DISEÑADOR DE LA MODA, SC',
                'LAMAR MEXICANA AC',
                'UNIVER',
                'UNIVERSIDAD EDUCATIVA DE ECATEPEC',
                'CENTRO DE APRENDIZAJE MONTEVIDEO SC'
              ].map((cliente, index) => (
                <div key={index} className="bg-gradient-to-r from-[#E4412E]/10 to-[#6D3434]/10 rounded-xl p-4 border border-[#E4412E]/20 text-center">
                  <span className="text-sm font-medium text-slate-700">{cliente}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
