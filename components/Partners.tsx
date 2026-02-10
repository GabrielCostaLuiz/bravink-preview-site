import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-8 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
            Parceiros Estratégicos
          </span>
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-8 md:gap-16 flex-1">
            <span className="font-display font-bold text-xl text-primary dark:text-white flex items-center">
              SERVOPA
              <span className="text-[10px] align-top bg-accent/10 text-accent px-2 py-0.5 rounded ml-1">
                65 ANOS
              </span>
            </span>
            <span className="font-bold text-lg text-primary dark:text-white tracking-tighter">Itaú</span>
            <span className="font-bold text-lg text-primary dark:text-white tracking-tighter">Santander</span>
            <span className="font-bold text-lg text-primary dark:text-white tracking-tighter">Bradesco</span>
            <span className="font-bold text-lg text-primary dark:text-white tracking-tighter">Òrigo Energia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
