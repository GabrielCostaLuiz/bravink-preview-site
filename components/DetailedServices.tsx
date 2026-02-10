import React, { useState } from 'react';
import Reveal from './Reveal';

const DetailedServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "home-equity",
      title: "Home Equity (CGI)",
      subtitle: "Crédito com Garantia de Imóvel",
      description: "O Home Equity é a modalidade de crédito mais inteligente para quem possui imóvel próprio. Ao oferecer sua propriedade como garantia, você acessa taxas de juros drasticamente menores que o empréstimo pessoal ou cartão de crédito, com prazos estendidos de pagamento.",
      benefits: [
        "Taxas a partir de 1.09% ao mês + IPCA",
        "Prazos de até 240 meses para pagar",
        "Uso livre do recurso (reformar, investir, viajar)",
        "Não precisa vender o imóvel para levantar capital"
      ]
    },
    {
      id: "consorcio",
      title: "Consórcio Imobiliário",
      subtitle: "Planejamento e Investimento",
      description: "A ferramenta ideal para alavancagem patrimonial. Sem juros, apenas taxa de administração. Você planeja a compra do seu imóvel residencial, comercial ou de veraneio de forma estratégica, podendo usar o FGTS para lances ou amortização.",
      benefits: [
        "Sem juros (apenas taxa administrativa)",
        "Possibilidade de Lances Embutidos (usar parte da carta)",
        "Poder de compra à vista na contemplação",
        "Fiscalizado pelo Banco Central"
      ]
    },
    {
      id: "credito-pj",
      title: "Crédito PJ",
      subtitle: "Capital de Giro e Investimento",
      description: "Soluções financeiras robustas para empresas que buscam expansão, fluxo de caixa ou aquisição de maquinário. Analisamos o balanço da sua empresa para estruturar a operação de crédito mais adequada ao seu momento.",
      benefits: [
        "Capital de Giro com carência",
        "Financiamento de máquinas e equipamentos",
        "Antecipação de recebíveis estruturada",
        "Atendimento consultivo para melhor enquadramento"
      ]
    },
    {
      id: "origo",
      title: "Òrigo Energia",
      subtitle: "Energia Solar por Assinatura",
      description: "Economize na conta de luz sem gastar um centavo com obras ou painéis solares. Através do modelo de fazendas solares compartilhadas, você recebe os créditos de energia limpa direto na sua conta da distribuidora.",
      benefits: [
        "Sem investimento inicial (Zero Obras)",
        "Desconto garantido na conta de luz",
        "Sustentabilidade e Energia 100% Limpa",
        "Contratação 100% Digital"
      ]
    }
  ];

  return (
    <section id="detalhes-solucoes" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Saiba Mais
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white mb-6">
              Nossas Soluções em Detalhes
            </h2>
            <p className="text-text-light dark:text-slate-400 text-lg">
              Entenda como cada produto financeiro da Bravink pode impulsionar seus objetivos.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 100} width="100%" direction="left">
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex justify-between items-center group ${
                    activeTab === idx
                      ? 'bg-primary dark:bg-slate-800 text-white shadow-lg'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="font-bold text-lg">{service.title}</span>
                  <span className={`material-symbols-outlined transition-transform ${activeTab === idx ? 'text-accent translate-x-1' : 'opacity-0 group-hover:opacity-50'}`}>
                    chevron_right
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <Reveal width="100%" direction="up">
              <div className="bg-surface-light dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 h-full relative overflow-hidden transition-colors duration-300">
                 {/* Decorative Element */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full pointer-events-none"></div>

                {/* Added key={activeTab} to trigger the animation on tab change */}
                <div className="relative z-10 animate-fade-in" key={activeTab}>
                  <span className="inline-block py-1 px-3 rounded-md bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                    {services[activeTab].subtitle}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    {services[activeTab].description}
                  </p>

                  <div className="mb-10">
                    <h4 className="font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-accent">stars</span>
                      Principais Benefícios
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {services[activeTab].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-accent text-lg mt-0.5">check_circle</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <a
                      href="https://wa.me/5541999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-center transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                    >
                      Falar com Especialista
                    </a>
                    <a
                      href="#simulador"
                      className="px-8 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-white text-primary dark:text-white font-bold text-center transition-all"
                    >
                      Simular Agora
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;