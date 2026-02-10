import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

type SimulatorType = 'imoveis' | 'veiculos' | 'pesados' | 'servicos';

const Simulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SimulatorType>('imoveis');
  const [value, setValue] = useState<number>(350000);
  const [months, setMonths] = useState<number>(180);

  // Defaults based on type
  useEffect(() => {
    switch (activeTab) {
      case 'imoveis':
        setValue(350000);
        setMonths(180);
        break;
      case 'veiculos':
        setValue(80000);
        setMonths(80);
        break;
      case 'pesados':
        setValue(250000);
        setMonths(100);
        break;
      case 'servicos':
        setValue(30000);
        setMonths(36);
        break;
    }
  }, [activeTab]);

  // Constraints
  const minVal = 50000;
  const maxVal = 2000000;
  const minMonths = 12;
  const maxMonths = 240;

  // Calculation Logic (matches HTML static visual: Value / Months)
  // In a real scenario, this would include fees.
  // Visual requirement: 350,000 / 180 = 1,944.44
  const monthlyInstallment = value / months;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    setValue(newVal);
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonths = Number(e.target.value);
    setMonths(newMonths);
  };

  return (
    <section id="simulador" className="py-24 bg-surface-light dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Planejamento Inteligente
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-6">
              Simule seus sonhos com a Bravink
            </h2>
            <p className="text-text-light dark:text-slate-400 text-lg">
              Personalize sua jornada para a conquista do patrimônio com taxas exclusivas.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <Reveal width="100%" delay={200}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-float dark:shadow-none border border-border-light dark:border-slate-800 overflow-hidden transition-colors duration-300">
              
              {/* Mobile Selection (Select Input) */}
              <div className="md:hidden p-6 border-b border-border-light dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <label htmlFor="simulator-type" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Selecione o tipo de consórcio
                  </label>
                  <div className="relative">
                      <select
                          id="simulator-type"
                          value={activeTab}
                          onChange={(e) => setActiveTab(e.target.value as SimulatorType)}
                          className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white font-bold text-lg py-4 pl-6 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent shadow-sm"
                      >
                          <option value="imoveis">Imóveis</option>
                          <option value="veiculos">Veículos</option>
                          <option value="pesados">Pesados</option>
                          <option value="servicos">Serviços/Energia</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary dark:text-white">
                          <span className="material-symbols-outlined">expand_more</span>
                      </div>
                  </div>
              </div>

              {/* Desktop Tabs */}
              <div className="hidden md:flex border-b border-border-light dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
                <button
                  onClick={() => setActiveTab('imoveis')}
                  className={`flex-1 py-6 px-4 flex items-center justify-center gap-3 border-b-2 transition-all ${
                    activeTab === 'imoveis'
                      ? 'border-accent bg-white dark:bg-slate-800 font-bold text-primary dark:text-white'
                      : 'border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 text-text-light dark:text-slate-400 font-semibold'
                  }`}
                >
                  <span className={`material-symbols-outlined ${activeTab === 'imoveis' ? 'text-accent' : ''}`}>home</span>
                  <span className="whitespace-nowrap text-sm uppercase tracking-wider">Imóveis</span>
                </button>
                <button
                  onClick={() => setActiveTab('veiculos')}
                  className={`flex-1 py-6 px-4 flex items-center justify-center gap-3 border-b-2 transition-all ${
                    activeTab === 'veiculos'
                      ? 'border-accent bg-white dark:bg-slate-800 font-bold text-primary dark:text-white'
                      : 'border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 text-text-light dark:text-slate-400 font-semibold'
                  }`}
                >
                  <span className={`material-symbols-outlined ${activeTab === 'veiculos' ? 'text-accent' : ''}`}>directions_car</span>
                  <span className="whitespace-nowrap text-sm uppercase tracking-wider">Veículos</span>
                </button>
                <button
                  onClick={() => setActiveTab('pesados')}
                  className={`flex-1 py-6 px-4 flex items-center justify-center gap-3 border-b-2 transition-all ${
                    activeTab === 'pesados'
                      ? 'border-accent bg-white dark:bg-slate-800 font-bold text-primary dark:text-white'
                      : 'border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 text-text-light dark:text-slate-400 font-semibold'
                  }`}
                >
                  <span className={`material-symbols-outlined ${activeTab === 'pesados' ? 'text-accent' : ''}`}>local_shipping</span>
                  <span className="whitespace-nowrap text-sm uppercase tracking-wider">Pesados</span>
                </button>
                <button
                  onClick={() => setActiveTab('servicos')}
                  className={`flex-1 py-6 px-4 flex items-center justify-center gap-3 border-b-2 transition-all ${
                    activeTab === 'servicos'
                      ? 'border-accent bg-white dark:bg-slate-800 font-bold text-primary dark:text-white'
                      : 'border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 text-text-light dark:text-slate-400 font-semibold'
                  }`}
                >
                  <span className={`material-symbols-outlined ${activeTab === 'servicos' ? 'text-accent' : ''}`}>bolt</span>
                  <span className="whitespace-nowrap text-sm uppercase tracking-wider">Serviços/Energia</span>
                </button>
              </div>

              <div className="grid lg:grid-cols-12 gap-0">
                {/* Controls */}
                <div className="lg:col-span-7 p-8 lg:p-14 space-y-12">
                  
                  {/* Value Slider */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest mb-2 block">
                          Valor do Bem
                        </label>
                        <p className="text-xs text-slate-400">Qual o valor total do crédito desejado?</p>
                      </div>
                      <div className="relative w-full">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/60 dark:text-white/60 font-bold text-xl">R$</span>
                        <input
                          className="w-full pl-16 pr-6 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 focus:border-accent dark:focus:border-accent focus:ring-0 font-display text-3xl font-bold text-primary dark:text-white bg-slate-50 dark:bg-slate-800 transition-all"
                          type="text"
                          value={formatCurrency(value)}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="relative pt-2 px-2">
                      <input
                        type="range"
                        min={minVal}
                        max={maxVal}
                        step={10000}
                        value={value}
                        onChange={handleValueChange}
                        className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <span>Min R$ 50k</span>
                        <span>Max R$ 2M+</span>
                      </div>
                    </div>
                  </div>

                  {/* Term Slider */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest mb-2 block">
                          Prazo Desejado
                        </label>
                        <p className="text-xs text-slate-400">Em quanto tempo deseja pagar?</p>
                      </div>
                      <div className="relative w-full">
                        <input
                          className="w-full pl-6 pr-24 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 focus:border-accent dark:focus:border-accent focus:ring-0 font-display text-3xl font-bold text-primary dark:text-white bg-slate-50 dark:bg-slate-800 transition-all"
                          type="text"
                          value={months}
                          readOnly
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/40 dark:text-white/40 font-bold text-sm tracking-widest uppercase">meses</span>
                      </div>
                    </div>
                    <div className="relative pt-2 px-2">
                      <input
                        type="range"
                        min={minMonths}
                        max={maxMonths}
                        step={12}
                        value={months}
                        onChange={handleMonthsChange}
                        className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <span>12 Meses</span>
                        <span>240 Meses</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 p-5 bg-accent/5 rounded-2xl border border-accent/10">
                      <span className="material-symbols-outlined text-accent text-3xl">verified_user</span>
                      <p className="text-sm text-text-light dark:text-slate-400">
                        Simulação baseada nas melhores taxas do mercado. Atendimento personalizado para grupos exclusivos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-5 bg-primary dark:bg-slate-800 p-8 lg:p-14 flex flex-col justify-between text-white relative border-l border-white/5">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <span className="material-symbols-outlined text-9xl">analytics</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">
                      Resultado Estimado
                    </h3>
                    <div className="space-y-8">
                      <div className="pb-8 border-b border-white/10">
                        <span className="text-white/50 text-xs uppercase font-bold tracking-widest block mb-2">
                          Parcela Mensal
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-accent">R$</span>
                          <span className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                            {formatCurrency(monthlyInstallment)}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-2">
                            Taxa Adm.
                          </span>
                          <span className="text-xl font-bold text-white">
                            0,10% <span className="text-[10px] text-white/30 font-normal uppercase">/mês</span>
                          </span>
                        </div>
                        <div>
                          <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-2">
                            Fundo Reserva
                          </span>
                          <span className="text-xl font-bold text-white">
                            0,02% <span className="text-[10px] text-white/30 font-normal uppercase">/mês</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 space-y-4">
                    <a
                      href="https://wa.me/5541999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 rounded-2xl bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
                    >
                      Solicitar Atendimento
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                    <a
                      href="https://wa.me/5541999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 rounded-2xl border border-white/20 hover:bg-white/5 text-white font-bold text-lg transition-all bg-transparent text-center block"
                    >
                      Ver Tabela Completa
                    </a>
                    <p className="text-[9px] text-center text-white/30 uppercase tracking-[0.2em] mt-8">
                      Simulação baseada nas taxas do Consórcio Servopa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Simulator;