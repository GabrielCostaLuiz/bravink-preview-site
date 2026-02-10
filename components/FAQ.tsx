import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-primary dark:text-white transition-colors">{question}</span>
        <span className={`material-symbols-outlined text-primary dark:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const questions = [
    {
      question: "Como dou um lance?",
      answer: "O lance pode ser ofertado mensalmente através do nosso aplicativo ou área do cliente. Você pode usar recursos próprios ou parte da própria carta de crédito (lance embutido) para aumentar suas chances de contemplação."
    },
    {
      question: "Posso usar meu FGTS?",
      answer: "Sim! Para consórcios imobiliários residenciais, você pode utilizar seu FGTS tanto para ofertar lances quanto para complementar o valor da carta de crédito ou amortizar parcelas, seguindo as regras da Caixa Econômica Federal."
    },
    {
      question: "E se eu atrasar uma parcela?",
      answer: "Caso haja imprevistos, você continua participando do grupo, mas não poderá participar do sorteio ou dar lances no mês em atraso. Nossa equipe entrará em contato para buscar a melhor negociação e regularizar sua situação."
    },
    {
      question: "Qual a garantia da entrega do bem?",
      answer: "O sistema de consórcios é regulado e fiscalizado pelo Banco Central do Brasil. A Bravink opera com administradoras de primeira linha (como a Servopa, com 65 anos), garantindo total segurança e liquidez para sua carta de crédito."
    }
  ];

  return (
    <section className="py-24 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          {questions.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
