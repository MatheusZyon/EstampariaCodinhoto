import { useState } from 'react';
import { Link } from 'react-router-dom';
// AQUI ESTÁ A CORREÇÃO: O caminho para o logo foi ajustado
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Estamparia Codinhoto" className="h-16" />
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">
            Início
          </Link>
          <Link to="/sobre" className="text-gray-800 hover:text-red-600 font-medium">
            Sobre
          </Link>
          <Link to="/produtos" className="text-gray-800 hover:text-red-600 font-medium">
            Produtos
          </Link>
          <Link to="/servicos" className="text-gray-800 hover:text-red-600 font-medium">
            Serviços
          </Link>
          <Link to="/contato" className="text-gray-800 hover:text-red-600 font-medium">
            Contato
          </Link>
          <Link 
            to="/orcamentos" 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Orçamentos
          </Link>
        </nav>

        {/* Botão de menu para mobile */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-800 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/produtos" 
              className="text-gray-800 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/servicos" 
              className="text-gray-800 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-800 hover:text-red-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              to="/orcamentos" 
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Orçamentos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;