import React, { useState } from 'react';
import { Navigation } from '../molecules';
import { Footer, Hero, Developments, Team, About, ObraPrivada, ObraPublica, Comments, Proyectos, Maquinaria } from '../organisms';

type ViewType = 'landing' | 'obra-privada' | 'obra-publica' | 'maquinaria' | 'proyectos';

interface SelectedProject {
  category: string;
  project: string;
}

const MainLayout: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);

  const handleViewChange = (view: ViewType, section?: string, project?: SelectedProject) => {
    setCurrentView(view);
    
    if (project) {
      setSelectedProject(project);
    } else {
      setSelectedProject(null);
    }
    
    if (section) {
      // Scroll to specific section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when changing views
      window.scrollTo(0, 0);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'obra-privada':
        return <ObraPrivada onBack={() => handleViewChange('landing')} selectedProject={selectedProject} />;
      case 'obra-publica':
        return <ObraPublica onBack={() => handleViewChange('landing')} selectedProject={selectedProject} />;
      case 'maquinaria':
        return <Maquinaria onBack={() => handleViewChange('landing')} />;
      case 'proyectos':
        return <Proyectos onBack={() => handleViewChange('landing')} />;
      default:
        return (
          <>
            <Hero />
            <Developments onViewChange={handleViewChange} />
            <Team />
            <About />
            <Comments />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onViewChange={handleViewChange} />
      {renderView()}
      <Footer />
    </div>
  );
};

export default MainLayout; 