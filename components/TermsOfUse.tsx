import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-surface-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 animate-fade-in-up transition-colors duration-300">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-8 mb-10">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Jurídico
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white">
              Termos de Uso
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400">Vigente a partir de Março de 2024</p>
          </div>

          <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300">
            <h3>1. Aceitação dos Termos</h3>
            <p>
              Ao acessar o site da Bravink e utilizar nossos simuladores, ferramentas e conteúdos, você concorda 
              expressamente com estes Termos de Uso e com nossa Política de Privacidade. Caso não concorde com qualquer 
              parte destes termos, recomendamos que não utilize nossos serviços.
            </p>

            <h3>2. Natureza dos Serviços</h3>
            <p>
              A Bravink atua como plataforma de intermediação e consultoria financeira, operando como correspondente bancário 
              e representante autorizado de administradoras de consórcio fiscalizadas pelo Banco Central do Brasil.
            </p>
            <p><strong>Importante:</strong> A Bravink não é uma instituição financeira e não realiza empréstimos diretamente com recursos próprios.</p>

            <h3>3. Uso dos Simuladores</h3>
            <p>
              Os valores apresentados em nossos simuladores são <strong>estimativas</strong> baseadas nas tabelas comerciais 
              vigentes de nossos parceiros (como a Servopa e Bancos). 
            </p>
            <ul>
              <li>Os resultados não representam proposta firme de crédito;</li>
              <li>Taxas administrativas, fundo de reserva, seguros e valores de parcelas podem sofrer alterações sem aviso prévio;</li>
              <li>A liberação do crédito está condicionada à aprovação cadastral, análise de crédito e capacidade de pagamento junto à instituição financeira responsável.</li>
            </ul>

            <h3>4. Responsabilidades do Usuário</h3>
            <p>
              O usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas durante o preenchimento 
              dos formulários de simulação e contato. A Bravink não se responsabiliza por imprecisões nos resultados das 
              simulações causadas por dados inseridos incorretamente pelo usuário.
            </p>

            <h3>5. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo deste site, incluindo textos, logotipos, imagens, gráficos, design, interfaces e códigos, 
              é de propriedade exclusiva da Bravink ou de seus licenciadores e parceiros, estando protegido pelas leis 
              de direitos autorais e propriedade intelectual do Brasil. É vedada a reprodução, cópia ou distribuição sem autorização prévia.
            </p>

            <h3>6. Links Externos</h3>
            <p>
              Nosso site pode conter links para sites de terceiros (como WhatsApp Web ou portais de parceiros). 
              A Bravink não possui controle sobre o conteúdo ou práticas de privacidade desses sites e não assume 
              responsabilidade por eles.
            </p>

            <h3>7. Alterações nos Termos</h3>
            <p>
              A Bravink reserva-se o direito de modificar estes Termos de Uso a qualquer momento, visando adaptar-se 
              a mudanças legislativas ou melhorias em nossos serviços. A continuidade do uso do site após tais alterações 
              constitui aceitação dos novos termos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
