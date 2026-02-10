import React from 'react';
import { IMAGES } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%" direction="right">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-slate-800 transition-colors duration-300">
                <img
                  src={IMAGES.CONSULTANT}
                  alt="Modern Office Consultant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-48 bg-accent/20 rounded-full blur-2xl z-0"></div>
            </div>
          </Reveal>
          
          <div className="space-y-8">
            <Reveal>
              <div>
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Autoridade no Mercado
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white leading-tight">
                  Excelência em Consultoria <br />
                  <span className="text-accent italic">Patrimonial.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6 text-lg text-text-light dark:text-slate-400 leading-relaxed">
                <p>
                  A <span className="font-bold text-primary dark:text-white">Bravink</span> consolidou-se como referência nacional ao unir a expertise dos maiores players do mercado financeiro com um atendimento verdadeiramente consultivo.
                </p>
                <p>
                  Como parceiros estratégicos de instituições líderes e da <span className="font-bold text-primary dark:text-white">Servopa (com mais de 65 anos de tradição)</span>, oferecemos segurança institucional e agilidade operacional para quem busca solidez em seus investimentos.
                </p>
                <p>
                  Nossa missão é desenhar a rota mais eficiente para sua conquista, priorizando o seu capital através de uma análise técnica rigorosa e personalizada.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-4xl font-display font-bold text-primary dark:text-white mb-1">65+</p>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest">Anos de Histórico</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-primary dark:text-white mb-1">TOP 3</p>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest">Ranking Nacional</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;