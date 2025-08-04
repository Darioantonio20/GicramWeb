import React, { useState } from 'react';
import { Button, Text } from '../atoms';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Inicio');

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Maquinaria', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleSmoothScroll = (href: string, itemName: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Text variant="h2" color="yellow" className="font-black tracking-widest text-yellow-400 hover:text-yellow-300 transition-all duration-500 text-3xl lg:text-4xl">
              GICRAM
            </Text>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-16 flex items-baseline space-x-12">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href, item.name)}
                  className={`relative px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-700 overflow-hidden ${
                    activeItem === item.name 
                      ? 'text-yellow-400 bg-yellow-500/20 shadow-2xl shadow-yellow-500/30' 
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active state glow effect */}
                  {activeItem === item.name && (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/30 to-yellow-400/20 rounded-2xl animate-pulse"></span>
                      <span className="absolute inset-0 bg-yellow-400/10 rounded-2xl animate-ping"></span>
                      <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl blur-sm opacity-75 animate-pulse"></span>
                    </>
                  )}
                  
                  {/* Hover effect (only when not active) */}
                  {activeItem !== item.name && (
                    <>
                      <span className="absolute inset-0 bg-yellow-500/15 scale-0 hover:scale-100 transition-transform duration-500 rounded-2xl"></span>
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-500 hover:w-full transform origin-left rounded-full"></span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 transition-all duration-500 bg-yellow-500 hover:bg-yellow-600 text-black font-black border-2 border-yellow-500 hover:border-yellow-400 px-10 py-4 text-lg rounded-2xl"
            >
              <span className="relative z-10">Cotizar Ahora</span>
              <span className="absolute inset-0 bg-yellow-400/30 rounded-2xl scale-0 hover:scale-100 transition-transform duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none focus:text-yellow-400 p-4 rounded-2xl hover:bg-yellow-500/15 transition-all duration-500 relative group"
            >
              {/* Animated hamburger */}
              <div className="relative w-8 h-8">
                <span className={`absolute left-0 w-8 h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'rotate-45 top-4' : 'top-2'}`}></span>
                <span className={`absolute left-0 w-8 h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'top-4'}`}></span>
                <span className={`absolute left-0 w-8 h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? '-rotate-45 top-4' : 'top-6'}`}></span>
              </div>
              <span className="absolute inset-0 bg-yellow-500/25 scale-0 group-active:scale-100 transition-transform duration-200 rounded-2xl"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-3xl border-t border-yellow-500/30 shadow-2xl animate-in slide-in-from-top-2 duration-500">
          <div className="px-8 py-8 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.href, item.name)}
                className={`relative block w-full text-left px-8 py-5 rounded-2xl text-xl font-bold transition-all duration-500 overflow-hidden ${
                  activeItem === item.name 
                    ? 'text-yellow-400 bg-yellow-500/20 shadow-2xl shadow-yellow-500/30' 
                    : 'text-gray-200 hover:text-yellow-400 hover:bg-yellow-500/15'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active state glow effect */}
                {activeItem === item.name && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/30 to-yellow-400/20 rounded-2xl animate-pulse"></span>
                    <span className="absolute inset-0 bg-yellow-400/10 rounded-2xl animate-ping"></span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl blur-sm opacity-75 animate-pulse"></span>
                  </>
                )}
                
                {/* Hover effect (only when not active) */}
                {activeItem !== item.name && (
                  <span className="absolute inset-0 bg-yellow-500/15 scale-0 hover:scale-100 transition-transform duration-500 rounded-2xl"></span>
                )}
              </button>
            ))}
            <div className="pt-8 animate-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: '800ms' }}>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-500 bg-yellow-500 hover:bg-yellow-600 text-black font-black border-2 border-yellow-500 hover:border-yellow-400 px-10 py-5 text-xl rounded-2xl"
              >
                <span className="relative z-10">Cotizar Ahora</span>
                <span className="absolute inset-0 bg-yellow-400/30 rounded-2xl scale-0 hover:scale-100 transition-transform duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 