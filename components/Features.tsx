import React from 'react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'savings',
      title: 'Economia Real',
      desc: 'Custos significativamente menores que o financiamento bancário, preservando seu capital.'
    },
    {
      icon: 'payments',
      title: 'Poder de Compra',
      desc: 'A carta de crédito garante o poder de compra à vista, permitindo melhores negociações.'
    },
    {
      icon: 'tune',
      title: 'Flexibilidade',
      desc: 'Planos modulares com prazos e parcelas que se ajustam perfeitamente ao seu orçamento.'
    },
    {
      icon: 'verified',
      title: 'Parceria de Peso',
      desc: 'A segurança total da Servopa e dos maiores bancos para garantir sua tranquilidade.'
    }
  ];

  return (
    <section id="consorcio" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal width="100%">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              A Revolução do Crédito
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
              O bem que você sempre sonhou, com a parcela que você nunca imaginou.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Na Bravink, transformamos sonhos em realidade com planejamento inteligente. Oferecemos taxas competitivas e uma assessoria personalizada para que você conquiste seu imóvel ou veículo sem os juros abusivos dos financiamentos tradicionais.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 150} width="100%">
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30 group h-full"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-accent text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal width="100%" delay={600}>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center gap-3 group hover:scale-105"
            >
              Falar com Consultor
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;