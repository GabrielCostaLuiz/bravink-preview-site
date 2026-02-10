import React from 'react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Empresário",
      text: "A assessoria da Bravink foi fundamental para a aquisição da nova sede da minha empresa. A estratégia de lances embutidos preservou meu caixa.",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      role: "Médica",
      text: "Eu não tinha tempo para burocracia. A equipe cuidou de tudo, desde a escolha do grupo até a contemplação rápida do meu veículo.",
      rating: 5
    },
    {
      name: "Carlos Edu. Silva",
      role: "Investidor",
      text: "Uso o consórcio como ferramenta de alavancagem patrimonial. O retorno sobre o investimento superou minhas expectativas com a Òrigo.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Quem confia recomenda
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white">
              Histórias de Sucesso
            </h2>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150} width="100%">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default h-full">
                <div className="flex text-accent mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </div>
                <p className="text-text-light dark:text-slate-300 italic mb-6 leading-relaxed">"{item.text}"</p>
                <div>
                  <p className="font-bold text-primary dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;