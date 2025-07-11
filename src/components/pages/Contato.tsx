import { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511949430374";
    const message = encodeURIComponent("Olá! Gostaria de entrar em contato com a Estamparia Codinhoto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !email || !mensagem) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }
    
    setErro('');
    setEnviado(true);
    
    setNome('');
    setEmail('');
    setMensagem('');
    
    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contato</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            
            {/* Informações de Contato */}
            <div className="md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Francisco Xavier de Abreu, 691<br />
                    Jardim Monte Azul<br />
                    São Paulo - SP<br />
                    CEP: 05836-180
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Contato</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">WhatsApp:</span> (11) 94943-0374
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">E-mail:</span> adm@estampariacodinhoto.com.br
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 17:30<br />
                    (não abrimos aos sábados)
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 w-full flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" />
                    </svg>
                    Fale pelo WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="md:w-2/3 px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                {enviado ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                    <p className="font-medium">Mensagem enviada com sucesso!</p>
                    <p>Agradecemos seu contato. Retornaremos em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {erro && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                        <p>{erro}</p>
                      </div>
                    )}
                    <div className="mb-4">
                      <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
                      <input 
                        type="text" 
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                      <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                      <textarea 
                        id="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Digite sua mensagem aqui..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mapa ou Imagem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossa Localização</h2>
          
          <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.685350889153!2d-46.7323531!3d-23.6514138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce518b0e8c1ddb%3A0x1d70d58f335e7e1!2sR.%20Francisco%20Xavier%20de%20Abreu%2C%20691%20-%20Jardim%20Monte%20Azul%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005836-180!5e0!3m2!1sen!2sbr!4v1719528770287!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true} // <--- CORREÇÃO DEFINITIVA
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua%20Francisco%20Xavier%20de%20Abreu%2C%20691%2C%20Jardim%20Monte%20Azul%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005836-180"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md"
            >
              Ver no Google Maps e Traçar Rota
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contato;