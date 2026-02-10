import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Simulator from './components/Simulator';
import Solutions from './components/Solutions';
import DetailedServices from './components/DetailedServices';
import FeaturedPlans from './components/FeaturedPlans';
import Testimonials from './components/Testimonials';
import Energy from './components/Energy';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

type PageType = 'home' | 'privacy' | 'terms';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-slate-950 transition-colors duration-300">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Partners />
            <About />
            <Features />
            <Stats />
            <Simulator />
            <FeaturedPlans />
            <Solutions />
            <DetailedServices />
            <Energy />
            <Testimonials />
            <FAQ />
            <CallToAction />
          </>
        )}
        
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfUse />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
