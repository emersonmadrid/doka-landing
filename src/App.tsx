import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Guarantees } from './components/sections/Guarantees';
import { ContactCTA } from './components/sections/ContactCTA';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-alabaster text-ink font-sans antialiased">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Landing Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with 4 Pillars Ticker */}
        <Hero />

        {/* 3. The 4 Specialized Services from Flyer */}
        <Services />

        {/* 4. Curated Works & Projects Gallery */}
        <Projects />

        {/* 5. Guarantees & Technical Visit Commitment */}
        <Guarantees />

        {/* 6. Direct High-Conversion Call to Action */}
        <ContactCTA />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
