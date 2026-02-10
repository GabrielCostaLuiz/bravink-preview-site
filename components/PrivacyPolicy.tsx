import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-surface-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 animate-fade-in-up transition-colors duration-300">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-8 mb-10">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Jurídico
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400">Última atualização: Março de 2024</p>
          </div>

          <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300">
            <h3>1. Introdução</h3>
            <p>
              A Bravink valoriza a privacidade de seus usuários e se compromete a proteger seus dados pessoais. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
              ao utilizar nosso site e nossos simuladores de crédito.
            </p>

            <h3>2. Coleta de Dados</h3>
            <p>
              Coletamos informações que você nos fornece voluntariamente ao preencher formulários de simulação, 
              cadastro ou contato em nossa plataforma. Os dados coletados podem incluir, mas não se limitam a:
            </p>
            <ul>
              <li>Nome completo;</li>
              <li>Número de telefone e WhatsApp;</li>
              <li>Endereço de e-mail;</li>
              <li>Valores de interesse para crédito ou bens;</li>
              <li>Informações sobre localização (cidade/estado).</li>
            </ul>

            <h3>3. Finalidade do Tratamento (LGPD)</h3>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), utilizamos seus dados exclusivamente para:
            </p>
            <ul>
              <li>Realizar simulações personalizadas de crédito, consórcio e home equity;</li>
              <li>Entrar em contato via WhatsApp, telefone ou e-mail para apresentar as propostas solicitadas;</li>
              <li>Enviar materiais informativos relevantes sobre o mercado financeiro (com opção de descadastro);</li>
              <li>Melhorar a performance e a experiência de navegação em nosso site.</li>
            </ul>

            <h3>4. Compartilhamento de Dados</h3>
            <p>
              A Bravink não comercializa seus dados pessoais. O compartilhamento de informações ocorre estritamente com parceiros 
              necessários para a operacionalização da análise de crédito e formalização de contratos, tais como:
            </p>
            <ul>
              <li>Administradoras de Consórcio (ex: Servopa);</li>
              <li>Instituições Financeiras parceiras para Home Equity e Financiamentos;</li>
              <li>Plataformas de assinatura de energia (Òrigo Energia), quando solicitado.</li>
            </ul>
            <p>Todos os parceiros estão sujeitos a obrigações de confidencialidade e segurança da informação.</p>

            <h3>5. Segurança</h3>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, 
              perda, alteração ou divulgação indevida. Nossos sistemas utilizam criptografia e protocolos de segurança padrão de mercado.
            </p>

            <h3>6. Seus Direitos</h3>
            <p>
              Como titular dos dados, você tem o direito de solicitar a confirmação da existência de tratamento, 
              o acesso aos dados, a correção de dados incompletos ou desatualizados, e a eliminação dos dados pessoais tratados, 
              salvo nos casos previstos em lei.
            </p>

            <h3>7. Contato</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco através 
              do e-mail <strong>contato@bravink.com.br</strong> ou pelo nosso canal oficial de atendimento no WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
