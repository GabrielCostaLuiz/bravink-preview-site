import React from 'react';
import { IMAGES } from '../constants';

const Energy: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={IMAGES.SOLAR}
                alt="Energia Solar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-xs hidden lg:block border border-slate-100 dark:border-slate-700">
              <p className="text-accent font-bold text-3xl mb-1">30%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Economia Média Mensal</p>
            </div>
          </div>
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Inovação e Sustentabilidade
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-8 leading-tight">
              Òrigo Energia: Economia Inteligente
            </h2>
            <p className="text-lg text-text-light dark:text-slate-400 mb-10 leading-relaxed">
              Reduza custos operacionais sem a necessidade de investimentos em infraestrutura. Tecnologia e sustentabilidade unidas para o seu negócio ou residência.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center text-primary dark:text-slate-200 font-semibold">
                <span className="material-symbols-outlined text-accent mr-4 bg-accent/10 p-2 rounded-full">task_alt</span>
                <span>Sem custo de adesão ou taxas de instalação</span>
              </li>
              <li className="flex items-center text-primary dark:text-slate-200 font-semibold">
                <span className="material-symbols-outlined text-accent mr-4 bg-accent/10 p-2 rounded-full">task_alt</span>
                <span>Economia imediata na sua conta mensal</span>
              </li>
              <li className="flex items-center text-primary dark:text-slate-200 font-semibold">
                <span className="material-symbols-outlined text-accent mr-4 bg-accent/10 p-2 rounded-full">task_alt</span>
                <span>Contratação digital e desburocratizada</span>
              </li>
            </ul>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-primary dark:bg-accent text-white font-bold text-lg hover:bg-accent dark:hover:bg-accent-hover transition-all shadow-xl"
            >
              Solicitar Adesão
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
