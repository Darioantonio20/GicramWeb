import React, { useState } from 'react';
import { Navigation } from '../molecules';
import { Footer, Hero, CreditOptions, Developments, Team, About, ObraPrivada, ObraPublica } from '../organisms';

type ViewType = 'landing' | 'obra-privada' | 'obra-publica';

const MainLayout: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'obra-privada':
        return <ObraPrivada onBack={() => handleViewChange('landing')} />;
      case 'obra-publica':
        return <ObraPublica onBack={() => handleViewChange('landing')} />;
      default:
        return (
          <>
            <Hero />
            <CreditOptions />
            <Developments onViewChange={handleViewChange} />
            <Team />
            <About />
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