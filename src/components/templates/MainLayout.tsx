import React from 'react';
import { Navigation } from '../molecules';
import { Footer, Hero, CreditOptions, Developments, Team, About } from '../organisms';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CreditOptions />
      <Developments />
      <Team />
      <About />
      <Footer />
    </div>
  );
};

export default MainLayout; 