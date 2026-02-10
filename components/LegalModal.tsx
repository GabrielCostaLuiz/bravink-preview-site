import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl relative z-10 flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-display font-bold text-primary">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar leading-relaxed text-slate-600 text-sm space-y-4">
          {type === 'privacy' ? (
            <>
              <p><strong>1. Introdução</strong><br/>A Bravink valoriza a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e simuladores.</p>
              
              <p><strong>2. Coleta de Dados</strong><br/>Coletamos informações que você nos fornece voluntariamente ao preencher formulários de simulação ou contato, como nome, telefone, e-mail e valores de interesse. Estes dados são essenciais para a prestação de nossos serviços de assessoria.</p>
              
              <p><strong>3. Uso das Informações (LGPD)</strong><br/>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), utilizamos seus dados exclusivamente para:<br/>
              - Realizar simulações de crédito e consórcio.<br/>
              - Entrar em contato via WhatsApp ou telefone para apresentar propostas.<br/>
              - Melhorar a experiência de navegação no site.</p>
              
              <p><strong>4. Compartilhamento</strong><br/>Não vendemos seus dados. Compartilhamos informações apenas com parceiros estritamente necessários para a operacionalização do crédito (ex: Administradoras de Consórcio e Bancos), sob sigilo.</p>
              
              <p><strong>5. Contato</strong><br/>Para solicitar a exclusão ou alteração de seus dados, entre em contato através do e-mail contato@bravink.com.br.</p>
            </>
          ) : (
            <>
               <p><strong>1. Aceitação</strong><br/>Ao acessar o site da Bravink e utilizar nossos simuladores, você concorda com estes Termos de Uso.</p>
               
               <p><strong>2. Natureza das Simulações</strong><br/>Os valores apresentados nos simuladores são <strong>estimativas</strong> baseadas nas tabelas vigentes de nossos parceiros (como a Servopa). Eles não representam proposta firme de crédito. Taxas administrativas, fundo de reserva e valores de parcelas podem sofrer alterações sem aviso prévio.</p>
               
               <p><strong>3. Aprovação de Crédito</strong><br/>Toda concessão de crédito ou cota de consórcio está sujeita à análise de crédito, capacidade de pagamento e aprovação cadastral por parte das administradoras e instituições financeiras.</p>
               
               <p><strong>4. Responsabilidade</strong><br/>A Bravink atua como correspondente bancário e representante autorizado. Não somos uma instituição financeira e não realizamos empréstimos diretos com recursos próprios.</p>
               
               <p><strong>5. Propriedade Intelectual</strong><br/>Todo o conteúdo deste site (textos, imagens, logotipos) é propriedade da Bravink ou de seus parceiros e está protegido por leis de direitos autorais.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-accent transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
