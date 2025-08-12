import React from 'react';
import { Navigation } from '../molecules';
import { Hero, About, Services, Projects, Equipment, CompanyInfo, Contact, Footer } from '../organisms';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Equipment />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 