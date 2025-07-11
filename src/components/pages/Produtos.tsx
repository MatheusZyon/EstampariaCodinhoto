
import { Link } from 'react-router-dom';

// Imagens
import camisetaImg from '../../assets/camiseta.png';
import ecobagImg from '../../assets/ecobag.png';
import mochilaSacoImg from '../../assets/MochilaSaco.jpg';

const Produtos = () => {
  const produtos = [
    {
      id: 'camiseta',
      nome: 'Camisetas Personalizadas',
      descricao: 'Camisetas de alta qualidade em diversos modelos e tamanhos, ideais para uniformes, eventos e brindes corporativos.',
      imagem: camisetaImg,
      material: 'Algodão, poliéster ou misto',
      tamanhos: 'P, M, G, GG, XGG',
      minimo: 20
    },
    {
      id: 'ecobag',
      nome: 'Ecobags Personalizadas',
      descricao: 'Sacolas ecológicas personalizadas, perfeitas para eventos, brindes sustentáveis e ações de marketing.',
      imagem: ecobagImg,
      material: 'Algodão cru, lona ou nylon',
      tamanhos: 'Padrão (30x40cm) ou sob medida',
      minimo: 20
    },
    {
      id: 'mochila-saco',
      nome: 'Mochila Saco',
      descricao: 'Mochilas saco personalizadas, ideais para eventos, brindes e uso diário.',
      imagem: mochilaSacoImg,
      material: 'Nylon210',
      tamanhos: '350x410mm',
      minimo: 20
    }
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sua Marca, Nosso Compromisso</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore nossa linha de produtos personalizados e descubra como transformar cada ideia em uma estampa única, feita sob medida para você e sua marca.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Produtos Exclusivos para o Seu Negócio</h2>
            <p className="text-gray-700 mb-4">
            Além da prestação de serviço, oferecemos produtos personalizados sob demanda para empresas de diversos setores. Trabalhamos com materiais selecionados e processos personalizados para entregar produtos que atendem às necessidades da sua empresa, reforçando sua presença no mercado e encantando seus clientes.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-8">
              <p className="text-red-700 font-medium">
                Pedido mínimo: 20 unidades por modelo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <div key={produto.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{produto.nome}</h3>
                  <p className="text-gray-600 mb-4">{produto.descricao}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500"><span className="font-medium">Material:</span> {produto.material}</p>
                    <p className="text-sm text-gray-500"><span className="font-medium">Tamanhos:</span> {produto.tamanhos}</p>
                    <p className="text-sm text-gray-500"><span className="font-medium">Pedido mínimo:</span> {produto.minimo} unidades</p>
                  </div>
                  
                  <Link 
                    to={`/produtos/${produto.id}`} 
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 inline-block w-full text-center"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Personalização */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como Funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Escolha seu Produto</h3>
                <p className="text-gray-600">
                  Selecione o produto que deseja personalizar e a quantidade necessária (mínimo de 20 unidades).
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Envie sua Arte</h3>
                <p className="text-gray-600">
                  Envie seu logotipo ou arte para personalização. Nossa equipe fará a análise técnica e sugestões se necessário.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Receba seu Pedido</h3>
                <p className="text-gray-600">
                  Após aprovação e produção, receba seus produtos personalizados no prazo combinado, prontos para uso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para personalizar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite um orçamento agora mesmo e transforme sua ideia em realidade.
          </p>
          <Link 
            to="/orcamentos" 
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Produtos;
