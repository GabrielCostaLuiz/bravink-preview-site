import React from 'react';
import Reveal from './Reveal';

const FeaturedPlans: React.FC = () => {
  return (
    <section className="py-24 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Oportunidades em Destaque
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white mb-6">
              Planos mais escolhidos
            </h2>
            <p className="text-text-light dark:text-slate-400 text-lg">
              Condições exclusivas negociadas diretamente com nossos parceiros.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan A */}
          <Reveal delay={200} width="100%">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border-light dark:border-slate-800 shadow-float dark:shadow-none hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-10 shadow-lg">
                MAIS VENDIDO
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined">home_work</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary dark:text-white text-xl">Imóvel Premium</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Crédito de R$ 300.000,00</p>
                </div>
              </div>
              
              <div className="py-6 border-y border-slate-100 dark:border-slate-800 mb-6 space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Parcelas a partir de</span>
                   <span className="text-2xl font-bold text-primary dark:text-white">R$ 1.950<span className="text-sm text-slate-400 font-normal">,00</span></span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Prazo sugerido</span>
                   <span className="text-sm font-bold text-primary dark:text-white">180 meses</span>
                </div>
              </div>

              <a href="#simulador" className="block w-full py-4 rounded-xl bg-primary text-white font-bold text-center hover:bg-accent transition-colors hover:shadow-lg">
                Simular este Plano
              </a>
            </div>
          </Reveal>

          {/* Plan B */}
          <Reveal delay={400} width="100%">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border-light dark:border-slate-800 shadow-float dark:shadow-none hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group h-full">
               <div className="absolute top-0 right-0 bg-primary dark:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-10 shadow-lg">
                AUTO
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary dark:text-white text-xl">Veículo Seleção</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Crédito de R$ 60.000,00</p>
                </div>
              </div>
              
              <div className="py-6 border-y border-slate-100 dark:border-slate-800 mb-6 space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Parcelas a partir de</span>
                   <span className="text-2xl font-bold text-primary dark:text-white">R$ 890<span className="text-sm text-slate-400 font-normal">,00</span></span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Prazo sugerido</span>
                   <span className="text-sm font-bold text-primary dark:text-white">80 meses</span>
                </div>
              </div>

              <a href="#simulador" className="block w-full py-4 rounded-xl bg-white dark:bg-transparent border border-primary dark:border-white text-primary dark:text-white font-bold text-center hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors hover:shadow-lg">
                Simular este Plano
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlans;