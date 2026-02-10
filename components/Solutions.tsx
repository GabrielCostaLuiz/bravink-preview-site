import React from 'react';
import { IMAGES } from '../constants';
import Reveal from './Reveal';

interface SolutionProps {
  image: string;
  title: string;
  desc: string;
  action: string;
}

const SolutionCard: React.FC<SolutionProps> = ({ image, title, desc, action }) => (
  <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-soft dark:shadow-none hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col hover:-translate-y-2 h-full">
    <div className="relative h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/20 dark:bg-slate-950/20 group-hover:bg-primary/0 transition-colors"></div>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h4 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">{title}</h4>
      <p className="text-text-light dark:text-slate-400 mb-8 flex-grow leading-relaxed">{desc}</p>
      <a
        href="#simulador"
        className="inline-flex items-center text-accent font-bold hover:gap-3 transition-all group-hover:text-accent-hover"
      >
        {action} <span className="material-symbols-outlined text-xl ml-1">arrow_forward</span>
      </a>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      image: IMAGES.REAL_ESTATE,
      title: 'Consórcio Imobiliário',
      desc: 'Adquira sua residência premium ou invista em ativos reais com taxas administrativas reduzidas.',
      action: 'Simular Imóvel'
    },
    {
      image: IMAGES.VEHICLE,
      title: 'Consórcio de Veículos',
      desc: 'Troque de frota ou adquira veículos de alto valor com parcelas que cabem no seu planejamento financeiro.',
      action: 'Simular Veículo'
    },
    {
      image: IMAGES.SERVICES,
      title: 'Capital de Giro & Serviços',
      desc: 'Soluções flexíveis para reformas, eventos de alto nível ou injeção de capital estratégica no seu negócio.',
      action: 'Simular Serviço'
    }
  ];

  return (
    <div id="solucoes" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-3">Nossas Operações</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold text-primary dark:text-white mb-6">
              Soluções de Inteligência Financeira
            </h3>
            <p className="text-text-light dark:text-slate-400 text-lg">
              Estratégias sob medida para alavancagem de patrimônio e realização de projetos.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 200} width="100%">
              <SolutionCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;