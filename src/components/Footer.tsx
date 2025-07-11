import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e informações */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Estamparia Codinhoto</h3>
            <p className="text-gray-300 mb-2">25 anos de mercado</p>
            <p className="text-gray-300 mb-4">Especialistas em personalização de alta qualidade</p>
          </div>

          {/* Links rápidos */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition duration-300">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-white transition duration-300">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition duration-300">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Serigrafia</li>
              <li className="text-gray-300">DTF (Direct to Film)</li>
              <li className="text-gray-300">Personalização de Brindes</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Email:</span> adm@estampariacodinhoto.com.br
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">WhatsApp:</span> (11) 94943-0374
            </p>
            <div className="mt-4">
              <Link 
                to="/contato" 
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 inline-block"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Estamparia Codinhoto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
