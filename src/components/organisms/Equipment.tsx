import React from 'react';
import { ConstructionIcon, TrophyIcon, BuildingIcon } from '../atoms';

const Equipment: React.FC = () => {
  const equipment = [
    {
      category: 'EXCAVADORAS Y RETROEXCAVADORAS',
      items: [
        '1 Retroexcavadora CAT420D',
        '1 Retroexcavadora CAT416E',
        '1 Excavadora CAT320C'
      ]
    },
    {
      category: 'EQUIPOS DE COMPACTACIÓN',
      items: [
        '1 Motoconformadora CAT12H',
        '1 Vibrocompactador Dynapac 12 Ton',
        '1 Rodillo Wacker 1200Kg',
        '1 Rodillo New Holland 7 Ton',
        '6 Bailarinas'
      ]
    },
    {
      category: 'EQUIPOS DE CONSTRUCCIÓN',
      items: [
        '8 Revolvedoras',
        '1 Martillo retroexcavadora'
      ]
    },
    {
      category: 'VEHÍCULOS',
      items: [
        '1 Camión 3 Ton F350 Súper Duty',
        '3 Nissan P300',
        '1 Mitsubishi L200 4x4',
        '1 Vehículo compacto'
      ]
    }
  ];

  return (
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
            EQUIPOS Y MAQUINARIA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Flota de Maquinaria
            <br />
            <span className="text-[#E4412E]">Profesional</span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-white/90 leading-relaxed">
            Contamos con una amplia flota de maquinaria y equipos de construcción de primera calidad, 
            respaldados por marcas líderes como CAT, Dynapac y New Holland para garantizar la excelencia en cada proyecto.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {equipment.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[#E4412E] to-[#6D3434]' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[#6D3434] to-[#E4412E]' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[#E4412E] to-[#6D3434]' :
                  'bg-gradient-to-br from-[#6D3434] to-[#E4412E]'
                }`}>
                  {index % 4 === 0 ? <ConstructionIcon size="xl" className="text-white" /> :
                   index % 4 === 1 ? <TrophyIcon size="xl" className="text-white" /> :
                   index % 4 === 2 ? <BuildingIcon size="xl" className="text-white" /> :
                   <ConstructionIcon size="xl" className="text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-[#E4412E] rounded-full mr-3"></span>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Garantía de Calidad</h3>
            <p className="text-white/90 leading-relaxed max-w-4xl mx-auto">
              Todos nuestros equipos cuentan con mantenimiento preventivo regular y están operados por personal 
              altamente capacitado. Ofrecemos servicios de renta con operador calificado para garantizar la 
              máxima eficiencia y seguridad en sus proyectos de construcción.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg">
            <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
            Maquinaria disponible para renta con operador
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
