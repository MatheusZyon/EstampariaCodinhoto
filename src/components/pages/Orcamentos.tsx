import { useState } from 'react';

// Imagens
import camisetaImg from '../../assets/camiseta.png';
import ecobagImg from '../../assets/ecobag.png';
import necessaireImg from '../../assets/necessaire.png';
import MochilaSacoImg from '../../assets/MochilaSaco.jpg';
import serigrafiaImg from '../../assets/serigrafia.png';
import sublimacaoImg from '../../assets/sublimacao.png';
import dtfImg from '../../assets/dtf.png';

const Orcamentos = () => {
  const [produto, setProduto] = useState('');
  const [aplicacao, setAplicacao] = useState('');
  const [quantidade, setQuantidade] = useState(20);
  // Variável para armazenar o arquivo (não utilizada na simulação)
  const [, setArquivo] = useState<File | null>(null);
  const [mensagem, setMensagem] = useState('');
  const [erroQuantidade, setErroQuantidade] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value);
    setQuantidade(valor);
    setErroQuantidade(valor < 20);
  };

  const handleArquivoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArquivo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (quantidade < 20) {
      setErroQuantidade(true);
      return;
    }

    // Preparar mensagem para WhatsApp
    const produtoNome = produto || 'Não selecionado';
    const aplicacaoNome = aplicacao || 'Não selecionada';
    const mensagemTexto = mensagem || 'Sem observações adicionais';
    
    const mensagemWhatsApp = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para:\n\n` +
      `Produto: ${produtoNome}\n` +
      `Tipo de aplicação: ${aplicacaoNome}\n` +
      `Quantidade: ${quantidade} unidades\n` +
      `Observações: ${mensagemTexto}\n\n` +
      `Enviarei o arquivo com o logo separadamente.`
    );

    // Abrir WhatsApp
    window.open(`https://wa.me/5511949430374?text=${mensagemWhatsApp}`, '_blank');
    
    // Mostrar mensagem de sucesso
    setEnviado(true);
    
    // Limpar formulário
    setProduto('');
    setAplicacao('');
    setQuantidade(20);
    setArquivo(null);
    setMensagem('');
    
    // Reset do status de enviado após 5 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solicite um Orçamento</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba um orçamento personalizado para seu projeto
          </p>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {enviado ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg mb-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Orçamento Enviado!</h2>
                <p className="mb-4">Seu pedido de orçamento foi enviado com sucesso para nosso WhatsApp.</p>
                <p>Nossa equipe entrará em contato em breve para finalizar seu orçamento.</p>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Formulário de Orçamento</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Selecione o Produto</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          produto === 'Camiseta' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setProduto('Camiseta')}
                      >
                        <img 
                          src={camisetaImg} 
                          alt="Camiseta" 
                          className="w-full h-32 object-cover mb-2 rounded"
                        />
                        <p className="text-center font-medium">Camiseta</p>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          produto === 'Ecobag' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setProduto('Ecobag')}
                      >
                        <img 
                          src={ecobagImg} 
                          alt="Ecobag" 
                          className="w-full h-32 object-cover mb-2 rounded"
                        />
                        <p className="text-center font-medium">Ecobag</p>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          produto === 'MochilaSaco' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => setProduto('MochilaSaco')}
                      >
                        <img 
                          src={MochilaSacoImg} 
                          alt="MochilaSaco" 
                          className="w-full h-32 object-cover mb-2 rounded"
                        />
                        <p className="text-center font-medium">MochilaSaco</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Tipo de Aplicação</label>
                {/* AQUI ESTÁ A MUDANÇA: grid-cols-2 em vez de 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      aplicacao === 'Serigrafia' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => setAplicacao('Serigrafia')}
                  >
                    <img 
                      src={serigrafiaImg} 
                      alt="Serigrafia" 
                      className="w-full h-32 object-cover mb-2 rounded"
                    />
                    <p className="text-center font-medium">Serigrafia</p>
                  </div>
                  
                  {/* O CARD DE SUBLIMAÇÃO FOI REMOVIDO */}
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      aplicacao === 'DTF' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => setAplicacao('DTF')}
                  >
                    <img 
                      src={dtfImg} 
                      alt="DTF" 
                      className="w-full h-32 object-cover mb-2 rounded"
                    />
                    <p className="text-center font-medium">DTF</p>
                  </div>
                </div>
              </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Quantidade</label>
                    <input 
                      type="number" 
                      min="20"
                      value={quantidade}
                      onChange={handleQuantidadeChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        erroQuantidade ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {erroQuantidade ? (
                      <p className="text-red-500 text-sm mt-1">Pedido mínimo: 20 unidades</p>
                    ) : (
                      <p className="text-gray-500 text-sm mt-1">Pedido mínimo: 20 unidades</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Arquivo com Logo (opcional)</label>
                    <input 
                      type="file" 
                      accept=".jpg,.jpeg,.png,.pdf,.ai"
                      onChange={handleArquivoChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <p className="text-gray-500 text-sm mt-1">Formatos aceitos: JPG, PNG, PDF, AI</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Mensagem (opcional)</label>
                    <textarea 
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Informe detalhes adicionais sobre seu pedido..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" />
                    </svg>
                    Enviar Orçamento via WhatsApp
                  </button>
                </form>
              </div>
            )}
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Como funciona?</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Preencha o formulário acima com as informações do seu pedido.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Ao enviar, você será redirecionado para o WhatsApp com as informações preenchidas.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Nossa equipe analisará seu pedido e enviará um orçamento detalhado em até 24 horas úteis.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Após aprovação do orçamento, iniciaremos a produção com prazo de entrega a combinar.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orcamentos;
