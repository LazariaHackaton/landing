import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ModulesSection from './components/ModulesSection';
import ImpactSection from './components/ImpactSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import TeamProfilesSection from './components/TeamProfilesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ModulesSection />
        <ImpactSection />
        <TechnologySection />
        <TeamSection />
        <TeamProfilesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;