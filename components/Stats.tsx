import React from 'react';
import Reveal from './Reveal';

const Stats: React.FC = () => {
  const stats = [
    { value: '65+', label: 'Anos de Tradição' },
    { value: '1.5k', label: 'Clientes Atendidos' },
    { value: '130M', label: 'Em Crédito' },
    { value: 'TOP 3', label: 'Ranking Nacional' }
  ];

  return (
    <div className="bg-primary py-16 border-b border-white/10 relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, idx) => (
             <div key={idx} className="p-4">
                <Reveal delay={idx * 100} width="100%">
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-xs text-accent font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </Reveal>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;