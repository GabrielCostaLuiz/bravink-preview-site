import React from 'react';
import { IMAGES } from '../constants';
import Reveal from './Reveal';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-950 pb-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%" overflowHidden={false}>
          <div className="bg-primary dark:bg-slate-950 rounded-3xl shadow-2xl relative group hover:shadow-accent/20 transition-all duration-500 border border-transparent dark:border-slate-800">
              {/* Background pattern/glow */}
              <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none rounded-3xl overflow-hidden"></div>
              <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 p-8 md:p-12 lg:p-16">
                  
                  {/* Content Side */}
                  <div className="max-w-xl">
                      <Reveal delay={200} direction="left">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                            Chegou até aqui e <br />
                            <span className="text-white/60">ainda está com dúvida?</span>
                        </h2>
                      </Reveal>
                      <Reveal delay={400} direction="left">
                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                            Não deixe para depois. Nossa equipe de especialistas está pronta para analisar seu perfil e desenhar o melhor cenário financeiro para você.
                        </p>
                      </Reveal>
                      
                      <Reveal delay={600} direction="up">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://wa.me/5541999999999" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-center transition-all shadow-lg shadow-accent/20 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Falar com especialista
                            </a>
                            <a 
                                href="#simulador" 
                                className="px-8 py-4 rounded-xl bg-[#e3dcd3] hover:bg-white text-primary font-bold text-center transition-all hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Faça uma simulação
                            </a>
                        </div>
                      </Reveal>
                  </div>

                  {/* Image Side - Styled to match the reference */}
                  <div className="hidden lg:block relative h-full min-h-[400px]">
                      <Reveal delay={400} direction="right" className="h-full" overflowHidden={false}>
                        <div className="absolute inset-0 flex items-end justify-center lg:justify-end translate-y-16 translate-x-8">
                            {/* Using the consultant image but masked/positioned to look like the cutout */}
                            <img 
                                src={IMAGES.CONSULTANT} 
                                alt="Especialista Bravink" 
                                className="h-[130%] w-auto object-cover object-top mask-image-gradient transition-transform duration-700 group-hover:scale-105"
                                style={{ 
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                }}
                            />
                        </div>
                      </Reveal>
                  </div>
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CallToAction;