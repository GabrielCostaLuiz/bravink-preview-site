import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleNavigation = (e: React.MouseEvent, page: string, hash?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 pt-24 pb-12 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <span 
              className="font-display font-bold text-3xl text-primary dark:text-white tracking-tight block cursor-pointer"
              onClick={(e) => handleNavigation(e, 'home')}
            >
              BRAVINK<span className="text-accent">.</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Liderança e transparência no mercado de crédito e consórcios. Realizamos o planejamento patrimonial com excelência técnica e solidez.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-all">
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-all">
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary dark:text-white font-bold mb-8 uppercase text-xs tracking-widest">Soluções</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#detalhes-solucoes" onClick={(e) => handleNavigation(e, 'home', 'detalhes-solucoes')} className="hover:text-accent transition-colors">Home Equity</a></li>
              <li><a href="#detalhes-solucoes" onClick={(e) => handleNavigation(e, 'home', 'detalhes-solucoes')} className="hover:text-accent transition-colors">Consórcio Imobiliário</a></li>
              <li><a href="#detalhes-solucoes" onClick={(e) => handleNavigation(e, 'home', 'detalhes-solucoes')} className="hover:text-accent transition-colors">Crédito PJ</a></li>
              <li><a href="#detalhes-solucoes" onClick={(e) => handleNavigation(e, 'home', 'detalhes-solucoes')} className="hover:text-accent transition-colors">Òrigo Energia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary dark:text-white font-bold mb-8 uppercase text-xs tracking-widest">Empresa</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#sobre" onClick={(e) => handleNavigation(e, 'home', 'sobre')} className="hover:text-accent transition-colors">Sobre a Bravink</a></li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-accent transition-colors text-left">
                  Política de Privacidade
                </button>
              </li>
              <li>
                 <button onClick={() => onNavigate('terms')} className="hover:text-accent transition-colors text-left">
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary dark:text-white font-bold mb-8 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent">location_on</span>
                <span>Av. Batel, 1550 - Batel<br />Curitiba - PR</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent">call</span>
                <span>(41) 3333-3333</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent">mail</span>
                <span>contato@bravink.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Safe Footer Area */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
               <p>© 2024 Bravink Soluções Financeiras.</p>
               <p>CNPJ: 00.000.000/0001-00</p>
            </div>
            
            <div className="flex items-center gap-6">
              <span>Parceiro Estratégico:</span>
              <span className="text-primary dark:text-white text-sm tracking-normal">SERVOPA 65 ANOS</span>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-[10px] text-slate-300 dark:text-slate-600 leading-normal max-w-4xl">
             <p>A Bravink atua como correspondente bancário e representante autorizada de administradoras de consórcio fiscalizadas pelo Banco Central do Brasil. Não solicitamos depósitos em contas de pessoas físicas.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
