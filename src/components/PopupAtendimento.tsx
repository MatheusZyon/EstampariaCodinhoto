import { useState } from 'react';

interface PopupAtendimentoProps {
  onClose: () => void;
}

const PopupAtendimento = ({ onClose }: PopupAtendimentoProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511949430374";
    const message = encodeURIComponent("Olá! Gostaria de criar produtos personalizados com a Estamparia Codinhoto!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className={`bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">Personalize seus produtos agora!</h3>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Fechar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Personalize seus produtos agora com a Estamparia Codinhoto! Nossa equipe está pronta para atender suas necessidades.
          </p>
          <p className="text-gray-700 font-semibold">
            25 anos de experiência em personalização de alta qualidade!
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 mr-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" />
            </svg>
            Fale com nossa equipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupAtendimento;
