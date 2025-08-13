import React, { useState, useRef, useEffect } from 'react';
import { Text } from '../atoms';
import { ChevronDown, X, Menu } from 'lucide-react';
import logoGicram from '../../assets/images/gicramLogo2.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('Inicio');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { 
      name: 'Inicio', 
      href: '#home',
      hasDropdown: false
    },
    { 
      name: 'Servicios', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Construcción',
          items: [
            'Construcción Residencial',
            'Construcción Comercial',
            'Remodelación',
            'Mantenimiento'
          ]
        },
        {
          title: 'Desarrollo',
          items: [
            'Desarrollo Inmobiliario',
            'Proyectos Urbanos',
            'Planificación',
            'Consultoría'
          ]
        },
        {
          title: 'Financiamiento',
          items: [
            'Crédito Infonavit',
            'Crédito Hipotecario',
            'Crédito Fovissste',
            'Asesoría Financiera'
          ]
        }
      ]
    },
    { 
      name: 'Desarrollos', 
      href: '#developments',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Tapachula',
          items: [
            'Rinconada del Carmen Nicte',
            'Rinconada del Carmen Copán',
            'Rinconada del Carmen Tikal',
            'Casas Duplex Akishino'
          ]
        },
        {
          title: 'Tuxtla Gutiérrez',
          items: [
            'Rincón del Carmen Casas Duplex',
            'Rincón del Carmen Casa 2 Niveles'
          ]
        }
      ]
    },
    { 
      name: 'Nosotros', 
      href: '#about',
      hasDropdown: false
    },
    { 
      name: 'Contacto', 
      href: '#contact',
      hasDropdown: false
    }
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
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoGicram} 
              alt="GICRAM DESARROLLADOR INMOBILIARIO"
              className="h-12 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block" ref={dropdownRef}>
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => item.hasDropdown ? toggleDropdown(item.name) : handleSmoothScroll(item.href, item.name)}
                    className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 min-w-[100px] justify-center ${
                      activeItem === item.name 
                        ? 'text-white bg-red-600 shadow-md' 
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Text 
                      variant="body" 
                      color={activeItem === item.name ? "white" : "gray"}
                      className="font-medium text-sm"
                    >
                      {item.name}
                    </Text>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-xl shadow-2xl border border-gray-100 py-6 z-50">
                      <div className="grid grid-cols-3 gap-6 px-6">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-3">
                            <Text variant="xs" color="gray" className="font-bold text-gray-800 text-xs uppercase tracking-wider border-b border-gray-200 pb-2">
                              {section.title}
                            </Text>
                            <ul className="space-y-2">
                              {section.items.map((subItem, itemIndex) => (
                                <li key={itemIndex}>
                                  <button
                                    onClick={() => handleSmoothScroll('#developments', subItem)}
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 group w-full text-left"
                                  >
                                    <div className="w-1.5 h-1.5 border-2 border-gray-300 rounded-full group-hover:border-red-600 transition-colors duration-200 flex-shrink-0"></div>
                                    <span className="group-hover:text-red-600 transition-colors duration-200 leading-relaxed">
                                      {subItem}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"></div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none p-2 rounded-lg hover:bg-red-50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <button
                  onClick={() => item.hasDropdown ? toggleDropdown(item.name) : handleSmoothScroll(item.href, item.name)}
                  className={`relative block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-between ${
                    activeItem === item.name 
                      ? 'text-white bg-red-600 shadow-md' 
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Text 
                    variant="body" 
                    color={activeItem === item.name ? "white" : "gray"}
                    className="font-medium"
                  >
                    {item.name}
                  </Text>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="mt-2 ml-4 bg-gray-50 rounded-lg p-4 space-y-4">
                    {item.dropdownItems?.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-2">
                        <Text variant="xs" color="gray" className="font-bold text-gray-800 text-sm uppercase tracking-wide border-b border-gray-200 pb-1">
                          {section.title}
                        </Text>
                        <ul className="space-y-1">
                          {section.items.map((subItem, itemIndex) => (
                            <li key={itemIndex}>
                              <button
                                onClick={() => handleSmoothScroll('#developments', subItem)}
                                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 group pl-2 py-1"
                              >
                                <div className="w-1.5 h-1.5 border-2 border-gray-300 rounded-full group-hover:border-red-600 transition-colors duration-200"></div>
                                <span className="group-hover:text-red-600 transition-colors duration-200">
                                  {subItem}
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 