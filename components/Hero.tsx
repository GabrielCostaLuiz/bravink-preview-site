import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[89vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.HERO_BG}
          alt="Bravink Premium Office"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent text-xs font-extrabold tracking-widest uppercase mb-6 border border-accent/30 backdrop-blur-sm">
              Exclusividade e Performance
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Crédito Inteligente e Consórcio de <span className="text-accent italic">Quem Entende.</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            A Bravink conecta você aos maiores bancos do Brasil para Home Equity, Financiamentos e a economia real da Òrigo Energia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2 hover:scale-105"
            >
              Falar com Especialista
            </a>
            <a
              href="#simulador"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105"
            >
              Simular Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;