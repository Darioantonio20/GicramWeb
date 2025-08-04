import React from 'react';
import { Navigation } from '../molecules';
import { Hero, Services, Contact, Footer } from '../organisms';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 