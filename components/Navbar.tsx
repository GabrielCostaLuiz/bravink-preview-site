import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, target: string, hash?: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open
    
    if (target === 'home') {
      onNavigate('home');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (currentPage === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
       onNavigate(target);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-border-light dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="font-display font-bold text-2xl text-primary dark:text-white tracking-tight transition-colors">
              BRAVINK<span className="text-accent">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-sm font-semibold text-primary dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleNavClick(e, 'home', 'sobre')}
              className="text-sm font-semibold text-primary dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              Sobre Nós
            </a>
            <a 
              href="#consorcio" 
              onClick={(e) => handleNavClick(e, 'home', 'consorcio')}
              className="text-sm font-semibold text-primary dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              Consórcio
            </a>
            <a 
              href="#simulador" 
              onClick={(e) => handleNavClick(e, 'home', 'simulador')}
              className="text-sm font-semibold text-primary dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              Simulador
            </a>
            
            {/* Theme Toggle Desktop */}
            <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
            >
                <span className="material-symbols-outlined">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
            </button>

            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-primary dark:bg-accent text-white font-bold text-sm hover:bg-accent dark:hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/20"
            >
              Falar com Especialista
            </a>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Mobile */}
            <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
                <span className="material-symbols-outlined">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary dark:text-white p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-border-light dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="block px-3 py-3 text-base font-semibold text-primary dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Início</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, 'home', 'sobre')} className="block px-3 py-3 text-base font-semibold text-primary dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Sobre Nós</a>
            <a href="#consorcio" onClick={(e) => handleNavClick(e, 'home', 'consorcio')} className="block px-3 py-3 text-base font-semibold text-primary dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Consórcio</a>
            <a href="#simulador" onClick={(e) => handleNavClick(e, 'home', 'simulador')} className="block px-3 py-3 text-base font-semibold text-primary dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Simulador</a>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" className="block px-3 py-3 mt-4 text-center rounded-xl bg-primary dark:bg-accent text-white font-bold">
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
