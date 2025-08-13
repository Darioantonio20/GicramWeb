import React, { useState, useRef, useEffect } from 'react';
import { Text } from '../atoms';
import { ChevronDown, X, Menu } from 'lucide-react';
import logoGicram from '../../assets/images/gicramLogo2.png';

type ViewType = 'landing' | 'obra-privada' | 'obra-publica';

interface NavigationProps {
  onViewChange: (view: ViewType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('Inicio');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { 
      name: 'Inicio', 
      href: '#home',
      hasDropdown: false,
      action: () => onViewChange('landing')
    },
    { 
      name: 'Desarrollos', 
      href: '#developments',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'OBRA PRIVADA',
          description: 'Desarrollos residenciales y comerciales',
          action: () => onViewChange('obra-privada')
        },
        {
          title: 'OBRA PÚBLICA',
          description: 'Infraestructura y proyectos gubernamentales',
          action: () => onViewChange('obra-publica')
        }
      ]
    },
    { 
      name: 'Nosotros', 
      href: '#about',
      hasDropdown: false,
      action: () => onViewChange('landing')
    },
    { 
      name: 'Contacto', 
      href: '#contact',
      hasDropdown: false,
      action: () => onViewChange('landing')
    }
  ];

  // Filtramos "Desarrollos" para mobile
  const mobileMenuItems = menuItems.filter(item => item.name !== 'Desarrollos');

  const handleItemClick = (item: any) => {
    if (item.action) {
      item.action();
    }
    setActiveItem(item.name);
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
            <button
              onClick={() => onViewChange('landing')}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={logoGicram} 
                alt="GICRAM DESARROLLADOR INMOBILIARIO"
                className="h-12 lg:h-16 w-auto"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block" ref={dropdownRef}>
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => item.hasDropdown ? toggleDropdown(item.name) : handleItemClick(item)}
                    className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 min-w-[100px] justify-center ${
                      activeItem === item.name 
                        ? 'text-white bg-gicram-primary shadow-md' 
                        : 'text-gray-700 hover:text-gicram-primary hover:bg-gicram-primary/10'
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
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 py-6 z-50">
                      <div className="space-y-4 px-6">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="group">
                            <button
                              onClick={() => {
                                handleItemClick({ name: section.title, action: section.action });
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left p-4 rounded-lg hover:bg-gicram-primary/5 transition-all duration-300 border border-transparent hover:border-gicram-primary/20"
                            >
                              <Text variant="xs" color="gray" className="font-bold text-gicram-secondary text-sm uppercase tracking-wider mb-2 group-hover:text-gicram-primary transition-colors duration-300">
                                {section.title}
                              </Text>
                              <Text variant="body" color="gray" className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {section.description}
                              </Text>
                            </button>
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
              className="text-gray-700 hover:text-gicram-primary focus:outline-none p-2 rounded-lg hover:bg-gicram-primary/10 transition-all duration-300"
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
            {mobileMenuItems.map((item, index) => (
              <div key={item.name}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`relative block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center justify-between ${
                    activeItem === item.name 
                      ? 'text-white bg-gicram-primary shadow-md' 
                      : 'text-gray-700 hover:text-gicram-primary hover:bg-gicram-primary/10'
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
                </button>
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