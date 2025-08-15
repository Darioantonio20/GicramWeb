import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  onViewChange: (view: 'landing' | 'obra-privada' | 'obra-publica' | 'maquinaria' | 'proyectos', section?: string, project?: { category: string; project: string }) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isObraPublicaDropdownOpen, setIsObraPublicaDropdownOpen] = useState(false);
  const [isObraPrivadaDropdownOpen, setIsObraPrivadaDropdownOpen] = useState(false);
  const [selectedObraPublicaCategory, setSelectedObraPublicaCategory] = useState<string | null>(null);
  const [selectedObraPrivadaCategory, setSelectedObraPrivadaCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const obraPublicaDropdownRef = useRef<HTMLDivElement>(null);
  const obraPrivadaDropdownRef = useRef<HTMLDivElement>(null);

  const viviendaProjects = {
    "En Tapachula": [
      "RINCONADA DEL CARMEN NICTE",
      "RINCONADA DEL CARMEN COPÀN", 
      "RINCONADA DEL CARMEN TIKAL",
      "CASAS DUPLEX AKISHINO"
    ],
    "En Tuxtla Gutiérrez": [
      "RINCON DEL CARMEN CASAS DUPLEX",
      "RINCON DEL CARMEN CASA 2 NIVELES"
    ]
  };

  // Datos de Obra Privada
  const obraPrivadaData = {
    "Tuxtla Gutiérrez": [
      "Residencia Country La Cima",
      "Proyecto Oficinas Cowork"
    ],
    "Guadalajara": [
      "Centro Histórico",
      "Las Américas",
      "Vallarta",
      "Tlaquepaque"
    ],
    "Veracruz": [],
    "Estado de México": [
      "Ecatepec",
      "Coacalco",
      "Cuautitlán Izcalli"
    ],
    "Ciudad de México": [
      "La Villa",
      "Berlín",
      "Zaragoza",
      "Ermita Iztapalapa"
    ],
    "Aguascalientes": [],
    "Querétaro": [],
    "Culiacán": [],
    "Mexicali": [],
    "Saltillo": [],
    "Chihuahua": []
  };

  // Importar datos del JSON de obra pública
  const obraPublicaData = {
    "Obras Hidráulicas": [
      "Rehabilitación del Sistema de Agua Potable, Obra de captación y red de distribución",
      "Construcción de Sistema de Agua Potable por Gravedad",
      "Construcción de Protección Marginal en tramos dispersos del rio Huehuetán",
      "Sobreelevación del Bordo Camino Margen derecho del Rio Huixtla"
    ],
    "Obras de Saneamiento": [
      "Construcción del sistema de alcantarillado sanitario",
      "Construcción de la red de drenaje con 75 descargas domiciliarias y planta de tratamiento",
      "Rehabilitación de la Planta de Tratamiento en el Municipio de Villa de Allende"
    ],
    "Infraestructura Vial y Carretera": [
      "Reconstrucción de terracerías mediante refinamiento, revestimiento y reconstrucción de obras de drenaje",
      "Conservación de la superficie de Rodamiento",
      "Reconstrucción del Camino Escuintla - El Triunfo",
      "Reconstrucción del Camino Las Salinas - El Bejucal - La Lucha",
      "Trabajos de apoyo parcial inmediato (API)"
    ],
    "Infraestructura Hospitalaria": [
      "Construcción del Hospital General de 20 Camas de Ocosingo",
      "Hospital Básico Comunitario de Simojovel"
    ],
    "Infraestructura Educativa": [
      "Creación de la Unidad Académica (UNICACH)",
      "Remodelación del Centro Deportivo Caña Hueca 2ª etapa",
      "Construcción del Centro de Convivencia Adultos Mayores"
    ],
    "Infraestructura Penitenciaria": [
      "Construcción, mejoramiento o ampliación de centros de readaptación social (CERESO 14 El Amate)",
      "Centro Estatal para la Reinserción Social de Sentenciados No.7"
    ],
    "Infraestructura Comercial": [
      "Construcción del Mercado Público Municipal"
    ],
    "Edificios Públicos": [
      "Construcción del Recinto Fiscalizado",
      "Construcción de Rial Academia de la Lengua Fraylescana y Centro Cultural",
      "Rehabilitación General de Dormitorios del Cuartel General",
      "Ejecución de la Obra Casa Club Mejores Menores",
      "Aeropuerto Internacional Ángel Albino Corzo"
    ]
  };

  const obraPublicaCategories = Object.keys(obraPublicaData);
  const obraPublicaProjects = obraPublicaData;

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (obraPublicaDropdownRef.current && !obraPublicaDropdownRef.current.contains(event.target as Node)) {
        setIsObraPublicaDropdownOpen(false);
      }
      if (obraPrivadaDropdownRef.current && !obraPrivadaDropdownRef.current.contains(event.target as Node)) {
        setIsObraPrivadaDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar menú móvil cuando se navega
  const handleNavigation = (view: 'landing' | 'obra-privada' | 'obra-publica' | 'maquinaria' | 'proyectos', section?: string) => {
    onViewChange(view, section);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsObraPublicaDropdownOpen(false);
    setIsObraPrivadaDropdownOpen(false);
  };

  // Función para alternar el dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleObraPublicaDropdown = () => {
    setIsObraPublicaDropdownOpen(!isObraPublicaDropdownOpen);
    setSelectedObraPublicaCategory(null); // Reset selección al abrir/cerrar
  };

  const toggleObraPrivadaDropdown = () => {
    setIsObraPrivadaDropdownOpen(!isObraPrivadaDropdownOpen);
    setSelectedObraPrivadaCategory(null); // Reset selección al abrir/cerrar
  };

  const handleProjectSelection = (category: string, project: string) => {
    // Navegar a la vista de Obra Pública con el proyecto específico
    onViewChange('obra-publica', undefined, { category, project });
    setIsObraPublicaDropdownOpen(false);
    setSelectedObraPublicaCategory(null);
  };

  const handleObraPrivadaProjectSelection = (city: string, project: string) => {
    // Navegar a la vista de Obra Privada con el proyecto específico
    onViewChange('obra-privada', undefined, { category: city, project });
    setIsObraPrivadaDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-sm relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => handleNavigation('landing', 'home')}
          >
            <img src="/gicramLogo2.png" className="h-16 lg:h-20 w-auto" alt="GICRAM Logo" />
          </a>

          {/* Botón móvil */}
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Inicio */}
            <button
              onClick={() => handleNavigation('landing', 'home')}
              className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
            >
              Inicio
            </button>

            {/* Desarrollos con Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Desarrollos 
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown de Desarrollos (Desktop) */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 border-gray-200 shadow-lg bg-white border rounded-lg z-40 min-w-[600px]">
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Viviendas */}
                      <div>
                        <div className="font-semibold text-gicram-secondary text-lg mb-4">VIVIENDAS</div>
                        {Object.entries(viviendaProjects).map(([ciudad, proyectos], ciudadIndex) => (
                          <div key={ciudadIndex} className="mb-4">
                            <div className="font-medium text-sm text-gicram-secondary mb-2">
                              {ciudad}
                            </div>
                            <ul className="space-y-1">
                              {proyectos.map((proyecto, proyectoIndex) => (
                                <li key={proyectoIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                                  <span>{proyecto}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Obra Pública */}
            <div className="relative" ref={obraPublicaDropdownRef}>
              <button 
                onClick={toggleObraPublicaDropdown}
                className="flex items-center px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Obra Pública
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isObraPublicaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown de Obra Pública (Desktop) */}
              {isObraPublicaDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 border-gray-200 shadow-lg bg-white border rounded-lg z-40 min-w-[600px]">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-8">
                      {/* Categorías */}
                      <div>
                        <div className="font-semibold text-gicram-secondary text-lg mb-4">CATEGORÍAS</div>
                        <ul className="space-y-3">
                          {obraPublicaCategories.map((category, index) => (
                            <li key={index}>
                              <button
                                onClick={() => setSelectedObraPublicaCategory(category)}
                                className="flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
                              >
                                {category}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${selectedObraPublicaCategory === category ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {selectedObraPublicaCategory === category && (
                                <div className="ml-4 space-y-2">
                                  <div className="font-semibold text-gicram-secondary text-sm px-4 py-2">PROYECTOS</div>
                                  {obraPublicaProjects[category as keyof typeof obraPublicaProjects]?.map((proyecto, projIndex) => (
                                    <div key={projIndex} className="ml-4">
                                      <button
                                        onClick={() => handleProjectSelection(category, proyecto)}
                                        className="text-xs text-gray-600 hover:text-gicram-primary transition-colors duration-200 text-left px-4 py-2 rounded hover:bg-gray-50 w-full"
                                      >
                                        <div className="flex items-center space-x-2">
                                          <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                                          <span>{proyecto}</span>
                                        </div>
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Obra Privada con Dropdown */}
            <div className="relative" ref={obraPrivadaDropdownRef}>
              <button 
                onClick={toggleObraPrivadaDropdown}
                className="flex items-center px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Obra Privada
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isObraPrivadaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown de Obra Privada (Desktop) */}
              {isObraPrivadaDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 border-gray-200 shadow-lg bg-white border rounded-lg z-40 min-w-[600px]">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-8">
                      {/* Proyectos por Ciudad */}
                      <div>
                        <div className="font-semibold text-gicram-secondary text-lg mb-4">PROYECTOS POR CIUDAD</div>
                        {Object.entries(obraPrivadaData).map(([ciudad, proyectos], ciudadIndex) => (
                          <div key={ciudadIndex} className="mb-4">
                            <button
                              onClick={() => setSelectedObraPrivadaCategory(ciudad)}
                              className="flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
                            >
                              {ciudad}
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${selectedObraPrivadaCategory === ciudad ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {selectedObraPrivadaCategory === ciudad && (
                              <div className="ml-4 space-y-2">
                                {proyectos.length > 0 ? (
                                  <ul className="space-y-1">
                                    {proyectos.map((proyecto, proyectoIndex) => (
                                      <li key={proyectoIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                                        <button
                                          onClick={() => handleObraPrivadaProjectSelection(ciudad, proyecto)}
                                          className="hover:text-gicram-primary transition-colors duration-200 text-left"
                                        >
                                          {proyecto}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <div className="text-xs text-gray-400 italic ml-4">Sin proyectos específicos</div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Proyectos */}
            <button
              onClick={() => handleNavigation('proyectos')}
              className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
            >
              Proyectos
            </button>

            {/* Maquinaria */}
            <button
              onClick={() => handleNavigation('maquinaria')}
              className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
            >
              Maquinaria
            </button>

            {/* Nosotros */}
            <button
              onClick={() => handleNavigation('landing', 'about')}
              className="px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
            >
              Nosotros
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-3">
              {/* Inicio */}
              <button
                onClick={() => handleNavigation('landing', 'home')}
                className="block w-full text-left py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Inicio
              </button>

              {/* Desarrollos con Dropdown móvil */}
              <div className="space-y-3">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
                >
                  Desarrollos
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown móvil */}
                {isDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    <div className="font-semibold text-gicram-secondary text-sm px-4 py-2">VIVIENDAS</div>
                    {Object.entries(viviendaProjects).map(([ciudad, proyectos], ciudadIndex) => (
                      <div key={ciudadIndex} className="ml-4">
                        <div className="font-medium text-sm text-gicram-secondary mb-2 px-4">
                          {ciudad}
                        </div>
                        <ul className="space-y-1">
                          {proyectos.map((proyecto, proyectoIndex) => (
                            <li key={proyectoIndex} className="text-xs text-gray-600 flex items-center space-x-2 px-4">
                              <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                              <span>{proyecto}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Obra Pública */}
              <div className="space-y-3">
                <button
                  onClick={toggleObraPublicaDropdown}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
                >
                  Obra Pública
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isObraPublicaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown móvil simplificado */}
                {isObraPublicaDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    <div className="font-semibold text-gicram-secondary text-sm px-4 py-2">CATEGORÍAS</div>
                    {obraPublicaCategories.map((category, index) => (
                      <div key={index} className="ml-4">
                        <div className="font-medium text-sm text-gicram-secondary mb-2 px-4 py-2">
                          {category}
                        </div>
                        <div className="ml-4 space-y-1">
                          {obraPublicaProjects[category as keyof typeof obraPublicaProjects]?.map((proyecto, projIndex) => (
                            <div key={projIndex} className="ml-4">
                              <button
                                onClick={() => handleProjectSelection(category, proyecto)}
                                className="text-xs text-gray-600 hover:text-gicram-primary transition-colors duration-200 text-left px-4 py-2 rounded hover:bg-gray-50 w-full"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                                  <span>{proyecto}</span>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Obra Privada con Dropdown móvil */}
              <div className="space-y-3">
                <button
                  onClick={toggleObraPrivadaDropdown}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
                >
                  Obra Privada
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isObraPrivadaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown móvil simplificado */}
                {isObraPrivadaDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    <div className="font-semibold text-gicram-secondary text-sm px-4 py-2">PROYECTOS POR CIUDAD</div>
                    {Object.entries(obraPrivadaData).map(([ciudad, proyectos], ciudadIndex) => (
                      <div key={ciudadIndex} className="ml-4">
                        <div className="font-medium text-sm text-gicram-secondary mb-2 px-4">
                          {ciudad}
                        </div>
                        {proyectos.length > 0 ? (
                          <ul className="space-y-1">
                            {proyectos.map((proyecto, proyectoIndex) => (
                              <li key={proyectoIndex} className="text-xs text-gray-600 flex items-center space-x-2 px-4">
                                <div className="w-1.5 h-1.5 bg-gicram-primary rounded-full"></div>
                                <button
                                  onClick={() => handleObraPrivadaProjectSelection(ciudad, proyecto)}
                                  className="hover:text-gicram-primary transition-colors duration-200 text-left"
                                >
                                  {proyecto}
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-xs text-gray-400 italic px-4">Sin proyectos específicos</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Proyectos */}
              <button
                onClick={() => handleNavigation('proyectos')}
                className="block w-full text-left py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Proyectos
              </button>

              {/* Maquinaria */}
              <button
                onClick={() => handleNavigation('landing', 'maquinaria')}
                className="block w-full text-left py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Maquinaria
              </button>

              {/* Nosotros */}
              <button
                onClick={() => handleNavigation('landing', 'about')}
                className="block w-full text-left py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gicram-primary transition-colors duration-200 font-medium"
              >
                Nosotros
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 