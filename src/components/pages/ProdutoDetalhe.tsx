import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

// --- IMPORTAÇÕES PARA GALERIA E LIGHTBOX ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Imagens
import camisetaImg from '../../assets/camiseta.png';
import ecobagImg from '../../assets/ecobag.png';
import mochilaSacoImg from '../../assets/MochilaSaco.jpg';
import equipeUniformeImg from '../../assets/equipe_uniforme.png';

// IMAGENS DA GALERIA
import producao1 from '../../assets/PRODUCAO_1.jpeg';
import producao2 from '../../assets/PRODUCAO_2.jpeg';
import producao3 from '../../assets/PRODUCAO_3.jpeg';
import producao4 from '../../assets/PRODUCAO_4.jpeg';
import producao5 from '../../assets/PRODUCAO_5.jpg';
import producao6 from '../../assets/PRODUCAO_6.jpg';
import producao7 from '../../assets/PRODUCAO_7.jpg';
import producao8 from '../../assets/PRODUCAO_8.jpg';

// --- Interface para o Produto ---
interface IProduto {
  nome: string;
  descricao: string;
  imagem: string;
  material: string;
  tamanhos: string[];
  minimo: number;
  detalhes: string;
  qualidade: {
    titulo: string;
    subtitulo_qualidade: string;
    descricao_qualidade: string;
    pontos_qualidade: string[];
  };
  aplicacoes: {
    titulo: string;
    descricao: string;
    pontos: string[];
  };
  diferenciais: {
    icon: JSX.Element;
    title: string;
    text: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  depoimentos: {
    text: string;
    name: string;
    title: string;
  }[];
  galeria: {
    src: string;
    alt: string;
  }[];
}


const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [quantidade, setQuantidade] = useState(20);
  const [tamanho, setTamanho] = useState('');
  const [, setArquivo] = useState<File | null>(null);
  const [mensagem, setMensagem] = useState('');
  const [erroQuantidade, setErroQuantidade] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const produtos: { [key: string]: IProduto } = {
    camiseta: {
      nome: 'Camisetas Personalizadas',
      descricao: 'Camisetas de alta qualidade em diversos modelos e tamanhos, ideais para uniformes, eventos e brindes corporativos.',
      imagem: camisetaImg,
      material: 'Algodão, poliéster ou misto',
      tamanhos: ['P', 'M', 'G', 'GG', 'XGG'],
      minimo: 20,
      detalhes: 'Nossas camisetas personalizadas são produzidas com materiais de alta qualidade, garantindo conforto e durabilidade. Disponíveis em diversos modelos e cores, são ideais para uniformes empresariais, eventos corporativos, brindes promocionais e muito mais. A personalização pode ser feita através de serigrafia ou DTF, dependendo do design e da aplicação desejada.',
      qualidade: {
        titulo: 'Qualidade e Aplicações da Camiseta',
        subtitulo_qualidade: 'Personalização de Alta Qualidade',
        descricao_qualidade: 'Nossas camisetas personalizadas são produzidas com materiais premium e técnicas de estamparia avançadas, garantindo cores vibrantes e durabilidade excepcionais mesmo após múltiplas lavagens.',
        pontos_qualidade: [ 'Estampas de alta definição que não racham ou descascam', 'Tecidos confortáveis e pré-encolhidos que mantêm forma e tamanho', 'Ampla variedade de cores, modelos e tamanhos disponíveis',]
      },
      aplicacoes: {
        titulo: 'Aplicações Ideais',
        descricao: 'Nossas camisetas personalizadas são perfeitas para diversas aplicações, atendendo às necessidades específicas de cada cliente com informações específicas.',
        pontos: ['Uniformes empresariais que fortalecem a identidade da marca', 'Camisetas promocionais para eventos, feiras e campanhas', 'Brindes corporativos que geram lembrança e engajamento', 'Uniformes para equipes esportivas, grupos e organizações',]
      },
      diferenciais: [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, title: "Qualidade Premium", text: "Utilizamos apenas tecidos de alta qualidade e técnicas de estamparia avançadas para garantir durabilidade e acabamento impecável." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Entrega Rápida", text: "Nosso processo otimizado garante que seus uniformes personalizados sejam entregues no prazo, mesmo para pedidos urgentes." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Técnicas Avançadas", text: "Oferecemos serigrafia e DTF, garantindo a técnica ideal para cada tipo de design e aplicação." }
      ],
      faq: [
        { q: "As camisetas encolhem após a lavagem?", a: "Não. Utilizamos tecidos pré-encolhidos de alta qualidade e seguimos processos rigorosos para minimizar qualquer encolhimento. Recomendamos seguir as instruções de lavagem para maior durabilidade." },
        { q: "Qual a durabilidade das estampas?", a: "Nossas estampas são feitas com técnicas avançadas (serigrafia e DTF) e tintas de alta qualidade, garantindo excelente durabilidade, resistência a lavagens e cores vibrantes por muito tempo." }
      ],
      depoimentos: [
        { text: "Encomendamos camisetas para nosso evento e ficamos impressionados com a qualidade. As cores vibrantes e as estampas perfeitas. Todos os participantes adoraram!", name: "Ricardo M.", title: "Coordenador de Eventos" },
        { text: "Já estamos na terceira remessa de uniformes. As camisetas são confortáveis, as estampas não desbotam e nossa equipe adora usá-las. Recomendo sem hesitar!", name: "Fernanda L.", title: "Proprietária de Loja" },
        { text: "Atendimento excelente e produto de primeira. As camisetas fortaleceram a imagem da nossa marca. Com certeza faremos novos pedidos.", name: "Carlos S.", title: "Gerente de Marketing" },
      ],
      galeria: [
        { src: producao1, alt: 'Produção de camisetas' }, { src: producao2, alt: 'Estampa em camiseta branca' }, { src: producao3, alt: 'Estampa colorida' }, { src: producao4, alt: 'Produção de camisetas amarelas' }, { src: producao5, alt: 'Produção de camisetas rosas' }, { src: producao6, alt: 'Telas de serigrafia' }, { src: producao7, alt: 'Camiseta preta estampada' }, { src: producao8, alt: 'Camiseta vinho estampada' },
      ],
    },
    ecobag: {
      nome: 'Ecobags Personalizadas',
      descricao: 'Sacolas ecológicas personalizadas, perfeitas para eventos, brindes sustentáveis e ações de marketing.',
      imagem: ecobagImg,
      material: 'Algodão cru, lona ou PET reciclado',
      tamanhos: ['Padrão (30x40cm)', 'Pequena (25x30cm)', 'Grande (40x50cm)'],
      minimo: 20,
      detalhes: 'Nossas ecobags personalizadas são a escolha ideal para quem busca um brinde sustentável e de alto impacto. Fabricadas com materiais ecológicos, são resistentes, reutilizáveis e perfeitas para promover sua marca de forma consciente. A personalização é feita com serigrafia ou DTF, garantindo uma estampa nítida e duradoura.',
      qualidade: {
        titulo: 'Qualidade e Aplicações da Ecobag',
        subtitulo_qualidade: 'Durabilidade e Sustentabilidade',
        descricao_qualidade: 'Produzidas com materiais ecológicos de alta resistência, nossas ecobags são feitas para durar, carregando sua marca por muito tempo.',
        pontos_qualidade: ['Costuras reforçadas que suportam mais peso', 'Tecidos ecológicos como algodão cru e PET reciclado', 'Estampa de alta qualidade que resiste ao uso contínuo',]
      },
      aplicacoes: {
        titulo: 'Aplicações Ideais',
        descricao: 'As ecobags são versáteis e se encaixam em diversas estratégias de marketing e eventos.',
        pontos: ['Brindes em feiras, congressos e eventos corporativos', 'Ações de marketing para reforçar uma imagem sustentável', 'Embalagens personalizadas e reutilizáveis para seus produtos', 'Venda como produto exclusivo da sua marca']
      },
      diferenciais: [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, title: "Impacto Positivo", text: "Associe sua marca à sustentabilidade com um produto útil e ecologicamente correto." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Excelente Custo-Benefício", text: "Um brinde de baixo custo e alto valor percebido, com grande área para divulgação da sua marca." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Versatilidade", text: "Ideal para todos os públicos e segmentos, de lojas a eventos corporativos." }
      ],
      faq: [
        { q: "Qual o peso que a ecobag suporta?", a: "Nossas ecobags padrão são projetadas para suportar confortavelmente entre 5 a 7 kg, graças às suas costuras reforçadas." },
        { q: "As ecobags podem ser lavadas?", a: "Sim, recomendamos a lavagem à mão e secagem à sombra para preservar a estampa e o tecido por mais tempo." }
      ],
      depoimentos: [
        { text: "Excelente atendimento e qualidade impecável! As ecobags chegaram no prazo e com a personalização exatamente como pedimos.", name: "Patrícia M.", title: "Gerente de Sustentabilidade" },
        { text: "As ecobags fizeram o maior sucesso no nosso evento. Um brinde que realmente faz a diferença e agrada a todos.", name: "Juliana P.", title: "Analista de Marketing" },
        { text: "Uso as ecobags como embalagem para meus produtos e os clientes amam! Agregou muito valor à minha marca.", name: "Mariana C.", title: "Dona de E-commerce" },
      ],
      galeria: [],
    },
    'mochila-saco': {
      nome: 'Mochila Saco Personalizada',
      descricao: 'Mochilas saco personalizadas, leves e práticas, ideais para eventos esportivos, academias e brindes.',
      imagem: mochilaSacoImg,
      material: 'Nylon 210 ou similar',
      tamanhos: ['Padrão (35x41cm)'],
      minimo: 20,
      detalhes: 'Nossas mochilas saco (sacochilas) são leves, práticas e ideais para o dia a dia, eventos esportivos, brindes promocionais e muito mais. Fabricadas em materiais resistentes como o Nylon 210, oferecem um excelente custo-benefício. A personalização é feita com serigrafia ou DTF, garantindo cores vibrantes e durabilidade da estampa.',
      qualidade: {
        titulo: 'Qualidade e Aplicações da Mochila Saco',
        subtitulo_qualidade: 'Praticidade e Resistência',
        descricao_qualidade: 'Nossas mochilas saco são feitas para o uso diário, com materiais leves mas resistentes e acabamento de qualidade.',
        pontos_qualidade: ['Material leve e fácil de transportar', 'Alças em cordão reforçado para maior conforto', 'Estampa durável que não desbota com o uso']
      },
      aplicacoes: {
        titulo: 'Aplicações Ideais',
        descricao: 'A versatilidade da mochila saco a torna um brinde perfeito para diversas ocasiões.',
        pontos: ['Kits para eventos esportivos, corridas e academias', 'Brindes para funcionários e clientes em datas comemorativas', 'Ações promocionais e de marketing de guerrilha', 'Produto oficial para torcidas e grupos']
      },
      diferenciais: [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, title: "Grande Visibilidade", text: "Um outdoor ambulante para sua marca, usada em academias, parques e no dia a dia." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Excelente Custo-Benefício", text: "Um brinde de baixo custo, prático e que agrada a um público amplo e ativo." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Design Moderno", text: "Um acessório moderno e casual que se encaixa em diversas situações." }
      ],
      faq: [
        { q: "A mochila saco é à prova d'água?", a: "O material (Nylon 210) possui uma boa resistência à água, protegendo o conteúdo de chuvas leves, mas não é totalmente impermeável." },
        { q: "É possível estampar dos dois lados?", a: "Sim, oferecemos a opção de personalização em ambos os lados da mochila, com custos adicionais. Consulte-nos para mais detalhes." }
      ],
      depoimentos: [
        { text: "As mochilas saco foram o ponto alto do kit do nosso evento esportivo. Qualidade excelente e entrega no prazo.", name: "Lucas F.", title: "Organizador de Eventos" },
        { text: "Distribuímos as mochilas para nossa equipe em uma ação interna e todos adoraram. Um brinde útil e de ótima qualidade.", name: "Beatriz N.", title: "Analista de RH" },
        { text: "A estampa ficou perfeita, com cores muito vivas. A mochila é leve e super prática para levar para a academia.", name: "Gabriel T.", title: "Cliente Final" },
      ],
      galeria: [],
    }
  };

  const produto = id ? produtos[id as keyof typeof produtos] : null;
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };

  if (!produto) {
    return (
      <div className="pt-20 text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-8">O produto que você está procurando não existe.</p>
        <Link to="/produtos" className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300">Voltar para Produtos</Link>
      </div>
    );
  }

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value);
    setQuantidade(valor);
    setErroQuantidade(valor < produto.minimo);
  };
  const handleArquivoChange = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files && e.target.files[0]) { setArquivo(e.target.files[0]); } };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantidade < produto.minimo) { setErroQuantidade(true); return; }
    const tamanhoSelecionado = tamanho || 'Não aplicável';
    const mensagemTexto = mensagem || 'Sem observações adicionais';
    const mensagemWhatsApp = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para:\n\nProduto: ${produto.nome}\nQuantidade: ${quantidade} unidades\nTamanho: ${tamanhoSelecionado}\nObservações: ${mensagemTexto}\n\nEnviarei o arquivo com o logo separadamente.`);
    window.open(`https://wa.me/5511949430374?text=${mensagemWhatsApp}`, '_blank');
  };

  const sectionVariants: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const itemVariants: Variants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

  return (
    <>
      <div className="pt-20 bg-gray-50">
        {/* SEÇÃO DO BREADCRUMB REMOVIDA */}

        {id === 'camiseta' && (
          <motion.section className="py-16 bg-gradient-to-br from-red-600 to-red-800" initial="hidden" animate="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
            <div className="container mx-auto px-4"><div className="flex flex-col md:flex-row items-center gap-12"><motion.div className="md:w-1/2" variants={itemVariants}><img src={equipeUniformeImg} alt="Equipe usando uniformes personalizados" className="rounded-xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" /></motion.div><motion.div className="md:w-1/2" variants={itemVariants}><h2 className="text-4xl font-extrabold mb-6 text-white leading-tight">Uniformize sua Equipe com <span className="text-yellow-400">Estilo e Profissionalismo</span></h2><p className="text-gray-100 mb-8 text-lg">Com a Estamparia Codinhoto, você garante camisetas de alta qualidade, personalizadas com precisão e entregues no prazo, assegurando que sua equipe esteja sempre apresentável e alinhada com os valores da sua empresa.</p><motion.a href="#orcamento" className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 inline-flex items-center text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3"><path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" /></svg>Solicitar Orçamento Rápido</motion.a></motion.div></div></div>
          </motion.section>
        )}

        <motion.div className="container mx-auto px-4 py-12" initial="hidden" animate="visible" variants={sectionVariants}>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <motion.div className="w-full lg:w-2/5" variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 sticky top-24">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-auto max-h-[550px] object-contain transition-transform duration-500 hover:scale-110" />
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-3/5" variants={itemVariants}>
              <h1 className="text-4xl font-extrabold mb-4 text-gray-800 leading-tight">{produto.nome}</h1>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{produto.descricao}</p>
              <div className="flex space-x-4 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Alta Qualidade</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Personalizável</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Entrega Rápida</span>
              </div>
              <motion.a href="#orcamento" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 inline-flex items-center text-lg transform hover:-translate-y-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Ver Opções de Orçamento<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.section id="orcamento" className="py-16 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4"><div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200"><h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Detalhes e Orçamento</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-10"><motion.div variants={itemVariants}><h3 className="text-2xl font-semibold mb-6 text-gray-700">Informações do Produto</h3><p className="text-gray-600 mb-6 text-base leading-relaxed">{produto.detalhes}</p><div className="space-y-5"><div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 transition-shadow hover:shadow-md"><div className="bg-red-100 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-1.207 1.207" /></svg></div><div><h4 className="font-semibold text-gray-800">Material</h4><p className="text-gray-600">{produto.material}</p></div></div><div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 transition-shadow hover:shadow-md"><div className="bg-yellow-100 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg></div><div><h4 className="font-semibold text-gray-800">Pedido mínimo</h4><p className="text-gray-600">{produto.minimo} unidades</p></div></div><div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 transition-shadow hover:shadow-md"><div className="bg-blue-100 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg></div><div><h4 className="font-semibold text-gray-800">Personalização</h4><p className="text-gray-600">Serigrafia ou DTF</p></div></div></div></motion.div><motion.div variants={itemVariants}><h3 className="text-2xl font-semibold mb-6 text-gray-700">Solicitar Orçamento</h3><form onSubmit={handleSubmit} className="space-y-5"><div><label htmlFor="quantidade" className="block text-gray-700 font-medium mb-2">Quantidade</label><input type="number" id="quantidade" value={quantidade} onChange={handleQuantidadeChange} min={produto.minimo} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${ erroQuantidade ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:border-red-500 focus:ring-red-300' }`} />{!erroQuantidade && (<p className="text-gray-500 text-sm mt-1">Pedido mínimo: {produto.minimo} unidades</p>)}{erroQuantidade && (<p className="text-red-600 text-sm mt-1">Pedido mínimo: {produto.minimo} unidades</p>)}</div><div><label htmlFor="tamanho" className="block text-gray-700 font-medium mb-2">Tamanho</label><select id="tamanho" value={tamanho} onChange={(e) => setTamanho(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-red-500 focus:ring-red-300 transition-colors duration-300 appearance-none bg-white bg-no-repeat bg-right pr-8" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}><option value="">Selecione um tamanho</option>{produto.tamanhos.map((t) => (<option key={t} value={t}>{t}</option>))}</select></div><div><label htmlFor="arquivo" className="block text-gray-700 font-medium mb-2">Arquivo com Logo (opcional)</label><input type="file" id="arquivo" onChange={handleArquivoChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 transition-colors duration-300 cursor-pointer border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-red-500 focus:ring-red-300" /><p className="text-gray-500 text-sm mt-1">Formatos aceitos: JPG, PNG, PDF, AI</p></div><div><label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem (opcional)</label><textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-red-500 focus:ring-red-300 transition-colors duration-300" placeholder="Informe detalhes adicionais sobre seu pedido..."></textarea></div><motion.button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition duration-300 flex items-center justify-center text-lg transform hover:-translate-y-0.5" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3"><path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" /></svg>Solicitar Orçamento via WhatsApp</motion.button></form></motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16 bg-gray-100" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{produto.qualidade.titulo}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-shadow hover:shadow-xl" variants={itemVariants}><h3 className="text-2xl font-semibold mb-5 text-gray-700">{produto.qualidade.subtitulo_qualidade}</h3><p className="text-gray-600 mb-6 text-base leading-relaxed">{produto.qualidade.descricao_qualidade}</p><ul className="space-y-3">{produto.qualidade.pontos_qualidade.map((ponto, i) => (<li key={i} className="flex items-start"><svg className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-gray-700">{ponto}</span></li>))}</ul></motion.div>
              <motion.div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-shadow hover:shadow-xl" variants={itemVariants}><h3 className="text-2xl font-semibold mb-5 text-gray-700">{produto.aplicacoes.titulo}</h3><p className="text-gray-600 mb-6 text-base leading-relaxed">{produto.aplicacoes.descricao}</p><ul className="space-y-3">{produto.aplicacoes.pontos.map((ponto, i) => (<li key={i} className="flex items-start"><svg className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-gray-700">{ponto}</span></li>))}</ul></motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Por que escolher a Estamparia Codinhoto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {produto.diferenciais.map((item, index) => (
                <motion.div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-200 transform hover:-translate-y-2" variants={itemVariants}><div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-md">{item.icon}</div><h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3><p className="text-gray-600 text-base leading-relaxed">{item.text}</p></motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {id === 'camiseta' && produto.galeria && produto.galeria.length > 0 && (
          <motion.section className="py-16 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Galeria de Exemplos</h2>
              <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={30} slidesPerView={2} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} loop={true} breakpoints={{ 768: { slidesPerView: 4, spaceBetween: 40, }, }} className="mySwiper">
                {produto.galeria.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox(index)}>
                      <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.section>
        )}

        <motion.section className="py-16 bg-gray-100" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Dúvidas Comuns</h2>
            <div className="max-w-3xl mx-auto space-y-5">
              {produto.faq.map((faq, index) => (
                <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200" variants={itemVariants}>
                  <button className={`w-full text-left p-5 font-semibold flex justify-between items-center transition-colors duration-300 ${ activeTab === index ? 'bg-red-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-50' }`} onClick={() => setActiveTab(activeTab === index ? -1 : index)}><span>{faq.q}</span><motion.svg className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ rotate: activeTab === index ? 180 : 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></motion.svg></button>
                  <motion.div initial={false} animate={{ height: activeTab === index ? 'auto' : 0, opacity: activeTab === index ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden"><div className="p-5 border-t border-gray-200"><p className="text-gray-600 text-base leading-relaxed">{faq.a}</p></div></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">O que nossos clientes dizem sobre nossas {produto.nome}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {produto.depoimentos.map((depoimento, index) => (
                <motion.div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-200 transform hover:-translate-y-2 flex flex-col" variants={itemVariants}>
                  <div className="flex justify-center text-yellow-400 mb-5">{[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed flex-grow">"{depoimento.text}"</p>
                  <div className="mt-auto pt-4 border-t border-gray-200"><div className="font-bold text-gray-800">{depoimento.name}</div><div className="text-gray-500 text-sm">{depoimento.title}</div></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="py-16 bg-gray-100 border-t border-gray-200" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Veja Também</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {Object.entries(produtos)
                .filter(([key]) => key !== id && key !== 'necessaire')
                .map(([key, prod]) => (
                  <motion.div key={key} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex flex-col" variants={itemVariants}>
                    <div className="overflow-hidden"><img src={prod.imagem} alt={prod.nome} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" /></div>
                    <div className="p-6 flex flex-col flex-grow"><h3 className="text-xl font-bold mb-3 text-gray-800">{prod.nome}</h3><p className="text-gray-600 mb-5 text-base leading-relaxed flex-grow">{prod.descricao}</p><Link to={`/produtos/${key}`} className="mt-auto inline-block bg-red-100 text-red-700 font-medium py-2 px-5 rounded-lg hover:bg-red-200 transition duration-300 text-center">Ver detalhes →</Link></div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={produto.galeria}
        index={lightboxIndex}
      />
    </>
  );
};

export default ProdutoDetalhe;