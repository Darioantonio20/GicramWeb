import React from 'react';
import { CircularGallery } from '../molecules';
import { LightbulbIcon, BuildingIcon, HomeIcon } from '../atoms';

const Services: React.FC = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Construcción"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Remodelación"
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Mantenimiento"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Consultoría"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Supervisión"
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Proyectos"
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-[#6D3434]/10 relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Professional Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#6D3434]/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#6D3434]/5 to-transparent"></div>
          
          {/* Elegant Geometric Shapes */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#E4412E]/3 to-[#6D3434]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-bl from-[#6D3434]/3 to-[#E4412E]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-40 w-80 h-80 bg-gradient-to-tr from-[#6D3434]/2 to-[#E4412E]/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-48 right-20 w-56 h-56 bg-gradient-to-tl from-[#6D3434]/3 to-[#E4412E]/3 rounded-full blur-3xl"></div>
          
          {/* Professional Lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#E4412E]/20 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#6D3434]/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#E4412E]/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#6D3434]/20 to-transparent"></div>
          
          {/* Subtle Dots Pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E4412E]/10 to-[#6D3434]/10 backdrop-blur-sm rounded-full text-[#6D3434] text-sm font-semibold mb-8 border border-[#E4412E]/20 shadow-lg tracking-wide">
              <span className="w-3 h-3 bg-[#E4412E] rounded-full mr-3 animate-pulse"></span>
              NUESTROS SERVICIOS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 tracking-tight leading-tight">
              Galería de Proyectos
              <br />
              <span className="bg-gradient-to-r from-[#E4412E] via-[#6D3434] to-slate-700 bg-clip-text text-transparent font-extrabold">
                GICRAM
              </span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed font-medium tracking-wide">
              Explora nuestra galería interactiva de proyectos y servicios de construcción con la más alta calidad y profesionalismo.
            </p>
          </div>

          {/* Circular Gallery Container with Professional Styling */}
          <div className="relative">
            {/* Gallery Background Card */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl -m-8"></div>
            
            {/* Gallery */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px] p-8">
              <CircularGallery 
                items={galleryItems}
                bend={2}
                textColor="#000000"
                borderRadius={0.1}
                font="bold 24px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                scrollSpeed={1.5}
                scrollEase={0.08}
              />
            </div>
          </div>

          {/* Professional Instructions */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-100 to-[#6D3434]/10 rounded-2xl border border-slate-200/50 shadow-lg">
              <LightbulbIcon size="md" className="text-[#E4412E] mr-3" />
              <p className="text-slate-700 text-sm font-semibold tracking-wide uppercase">
                Usa la rueda del mouse o desliza para navegar por la galería
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPCIONES DE CRÉDITO Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0">
          {/* Left Half - Public Works */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#6D3434] via-[#6D3434] to-[#6D3434]"></div>
          {/* Right Half - Private Works */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#E4412E] via-[#E4412E] to-[#E4412E]"></div>
          
          {/* Center Divider */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent transform -translate-x-1/2"></div>
          
          {/* Subtle Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-8 border border-white/30 shadow-lg tracking-widest uppercase">
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              OPCIONES DE CRÉDITO
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              Asesoría Crediticia
              <br />
              <span className="text-white font-extrabold">Sin Costo</span>
            </h2>
            
            <p className="max-w-4xl mx-auto text-lg text-white/90 leading-relaxed font-medium tracking-wide">
              El equipo de ventas de Gicram Construcciones te asesorará en el trámite de tu crédito sin costo alguno y te presentará la extensa gama de modelos crediticios que se ofrecen en el mercado.
            </p>
          </div>

          {/* Two Halves Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Left Half - Obras Públicas */}
            <div className="relative p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-8 backdrop-blur-sm border border-white/30">
                  <BuildingIcon size="xl" className="text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                  Obras Públicas
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-medium tracking-wide">
                  Si no eres derechohabiente del Infonavit u otra institución de vivienda, puedes pedir un crédito hipotecario. Nosotros te brindamos la asesoría que necesitas y te ayudamos con el trámite.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Créditos hipotecarios tradicionales
                  </div>
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Asesoría personalizada
                  </div>
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Tramitación completa
                  </div>
                </div>
              </div>
            </div>

            {/* Right Half - Obras Privadas */}
            <div className="relative p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-8 backdrop-blur-sm border border-white/30">
                  <HomeIcon size="xl" className="text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                  Obras Privadas
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-medium tracking-wide">
                  Para proyectos residenciales, comerciales e industriales. Te ayudamos a encontrar la mejor opción crediticia que se adapte a tus necesidades y capacidad de pago.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Créditos para desarrollo inmobiliario
                  </div>
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Financiamiento empresarial
                  </div>
                  <div className="flex items-center text-white/80 font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Soluciones a medida
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold border border-white/30 shadow-lg tracking-wide uppercase">
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              Asesoría gratuita disponible
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 