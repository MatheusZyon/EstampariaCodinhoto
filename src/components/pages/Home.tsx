import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, animate } from 'framer-motion';

// IMPORTAÇÕES PARA O CARROSSEL DA GALERIA
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// IMPORTAÇÕES PARA O LIGHTBOX (IMAGEM AMPLIADA)
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Imagens
import serigrafiaImg from '../../assets/serigrafia.png';
import dtfImg from '../../assets/dtf.png';
import parceiro1Img from '../../assets/parceiro1.png';
import parceiro2Img from '../../assets/parceiro2.png';
import parceiro3Img from '../../assets/parceiro3.png';
import bannerCamisetaImg from '../../assets/banner_camiseta_logo.png';
import bannerEcobagImg from '../../assets/banner_ecobag_logo.png';

// === 1. NOVA IMAGEM IMPORTADA AQUI ===
import bannerNovoImg from '../../assets/banner_novo.png';

// IMAGENS DA GALERIA
import eco1 from '../../assets/ECO_1.jpeg';
import eco2 from '../../assets/ECO_2.jpeg';
import producao1 from '../../assets/PRODUCAO_1.jpeg';
import producao2 from '../../assets/PRODUCAO_2.jpeg';
import producao3 from '../../assets/PRODUCAO_3.jpeg';
import producao4 from '../../assets/PRODUCAO_4.jpeg';
import producao5 from '../../assets/PRODUCAO_5.jpg';
import producao6 from '../../assets/PRODUCAO_6.jpg';
import producao7 from '../../assets/PRODUCAO_7.jpg';
import producao8 from '../../assets/PRODUCAO_8.jpg';

// Componentes reutilizáveis
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  useEffect(() => { if (isInView) { controls.start("visible"); } }, [isInView, controls]);
  return (
    <motion.section ref={ref} className={className} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } } }}>
      {children}
    </motion.section>
  );
};
const AnimatedCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  useEffect(() => { if (isInView) { controls.start("visible"); } }, [isInView, controls]);
  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: "easeOut" } } }} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
      {children}
    </motion.div>
  );
};

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) { setCount(value); },
        onComplete() { setCount(end); }
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration]);
  return (<span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>);
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    { src: eco1, alt: 'Ecobag preta personalizada com logo Skyner' },
    { src: eco2, alt: 'Ecobag laranja com logo da SkillHub' },
    { src: producao1, alt: 'Linha de produção de camisetas verdes com estampa' },
    { src: producao2, alt: 'Detalhe da produção de estampa em camiseta branca' },
    { src: producao3, alt: 'Produção de estampa com várias cores em tecido' },
    { src: producao4, alt: 'Camisetas amarelas em linha de produção' },
    { src: producao5, alt: 'Camisetas rosas em linha de produção com logo' },
    { src: producao6, alt: 'Detalhe de telas de serigrafia alinhadas' },
    { src: producao7, alt: 'Camiseta preta com estampa amarela "Skina do Sabor"' },
    { src: producao8, alt: 'Camiseta vinho com estampa de logo circular' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511949430374";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Estamparia Codinhoto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="pt-16">
        <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-20 md:py-24 overflow-hidden rounded-b-[50px] shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div className="md:w-1/2 text-white mb-12 md:mb-0 z-10" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Personalize com Qualidade e Estilo</h1>
                <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">Com mais de 25 anos de experiência, a Estamparia Codinhoto transforma as suas ideias em produtos únicos! Nossas soluções em personalização, transformam produtos em poderosas ferramentas de comunicação e relacionamento.</p>
                <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
                  <motion.button onClick={handleWhatsAppClick} className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-8 rounded-md transition duration-300 shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Peça seu Orçamento</motion.button>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/produtos" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 transition duration-300 inline-block">Nossos Produtos</Link></motion.div>
                </motion.div>
              </motion.div>
              <motion.div className="md:w-1/2 z-10" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500">
                  <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000} showArrows={true} showIndicators={true} className="rounded-lg">
                    <div><img src={bannerCamisetaImg} alt="Camisetas personalizadas" className="w-full h-full object-cover" /></div>
                    <div><img src={bannerEcobagImg} alt="Ecobags personalizadas" className="w-full h-full object-cover" /></div>
                  </Carousel>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-45 to-transparent z-0"></div>
        </section>

        <AnimatedSection className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos serviços de personalização</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Oferecemos soluções de personalização em alta qualidade para o seu negócio!</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <AnimatedCard className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col" delay={0.1}>
                <img src={serigrafiaImg} alt="Serigrafia" className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105" />
                <div className="p-8 flex flex-col flex-grow"><h3 className="text-2xl font-bold mb-3 text-gray-800">Serigrafia</h3><p className="text-gray-600 mb-5 flex-grow">Técnica tradicional e versátil, ideal para grandes volumes, cores vibrantes e alta durabilidade em diversos tecidos.</p><Link to="/servicos" className="mt-auto inline-block text-red-600 font-semibold hover:text-red-800 transition duration-300 group">Saiba mais <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span></Link></div>
              </AnimatedCard>
              <AnimatedCard className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col" delay={0.2}>
                <img src={dtfImg} alt="DTF (Direct to Film)" className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105" />
                <div className="p-8 flex flex-col flex-grow"><h3 className="text-2xl font-bold mb-3 text-gray-800">DTF (Direct to Film)</h3><p className="text-gray-600 mb-5 flex-grow">Tecnologia inovadora para estampas detalhadas, coloridas e com toque suave em algodão, poliéster e mistos.</p><Link to="/servicos" className="mt-auto inline-block text-red-600 font-semibold hover:text-red-800 transition duration-300 group">Saiba mais <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span></Link></div>
              </AnimatedCard>
            </div>
            <div className="text-center mt-16"><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/servicos" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition duration-300 inline-block shadow-md">Ver Detalhes dos Serviços</Link></motion.div></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div className="md:w-1/2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }}><h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">Brindes para empresas e marcas que valorizam qualidade</h2><p className="text-lg text-gray-600 mb-6">Além da prestação de serviço de personalização, oferecemos aos nossos clientes a possibilidade de adquirir o produto já personalizado!</p><ul className="space-y-3 text-gray-700 mb-8 list-disc list-inside"><li>Camisetas e Uniformes</li><li>Ecobags</li><li>Mochila Saco</li><li>E muito mais!</li></ul><p className="text-gray-600 mb-8">Atendemos sob demanda com o pedido minimo de 20 unidades.</p><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/produtos" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition duration-300 inline-block shadow-md">Conheça Nossos Produtos</Link></motion.div></motion.div>
              <motion.div className="md:w-1/2" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                {/* === 2. IMAGEM SUBSTITUÍDA AQUI === */}
                <img src={bannerNovoImg} alt="Produtos personalizados Codinhoto" className="rounded-xl shadow-xl w-full" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos Números Falam por Si</h2><div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <AnimatedCard className="p-8 bg-white rounded-xl shadow-lg border border-gray-100" delay={0.1}><div className="text-5xl md:text-6xl font-extrabold mb-3 text-red-600"><AnimatedCounter end={624} prefix="+" suffix="k" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Peças Entregues</h3><p className="text-gray-600">Milhares de peças entregues com a máxima qualidade.</p></AnimatedCard>
              <AnimatedCard className="p-8 bg-white rounded-xl shadow-lg border border-gray-100" delay={0.2}><div className="text-5xl md:text-6xl font-extrabold mb-3 text-red-600"><AnimatedCounter end={420} prefix="+" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Empresas Atendidas</h3><p className="text-gray-600">Confiam na nossa qualidade e excelência.</p></AnimatedCard>
              <AnimatedCard className="p-8 bg-white rounded-xl shadow-lg border border-gray-100" delay={0.3}><div className="text-5xl md:text-6xl font-extrabold mb-3 text-red-600"><AnimatedCounter end={4} suffix=" dias" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Produção Ágil</h3><p className="text-gray-600">Tempo médio de produção para atender sua demanda.</p></AnimatedCard>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Perguntas Frequentes</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Tire suas dúvidas sobre nossos serviços, produtos e processos.</p></div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[{ q: "Qual o pedido mínimo para personalização?", a: "Nosso pedido mínimo é de 20 peças para qualquer tipo de personalização. Para grandes quantidades, oferecemos condições especiais. Entre em contato para um orçamento detalhado." }, { q: "Qual o prazo de entrega?", a: "O prazo de produção varia de acordo com a quantidade e complexidade da personalização, geralmente entre 3 a 5 dias úteis após a aprovação da arte. O prazo de entrega final depende da sua localidade." }, { q: "Quais técnicas de estamparia vocês oferecem?", a: "Somos especialistas em Serigrafia e DTF (Direct to Film), oferecendo a melhor solução para cada tipo de tecido, design e quantidade, garantindo qualidade e durabilidade." }, { q: "Posso enviar minha própria arte?", a: "Sim! Aceitamos sua arte final em formatos como PDF, AI, CDR, PNG ou JPG em alta resolução. Nossa equipe pode auxiliar na verificação e adaptação da arte, se necessário." }].map((faq, index) => (
                <motion.div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <button className={`w-full text-left p-5 font-semibold flex justify-between items-center transition-colors duration-300 ${ activeTab === index ? 'bg-red-100 text-red-700' : 'hover:bg-red-50' }`} onClick={() => setActiveTab(activeTab === index ? -1 : index)}><span>{faq.q}</span><motion.svg className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${activeTab === index ? 'rotate-180 text-red-700' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ rotate: activeTab === index ? 180 : 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></motion.svg></button>
                  <motion.div initial={false} animate={{ height: activeTab === index ? 'auto' : 0, opacity: activeTab === index ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden"><div className="p-5 border-t border-gray-200"><p className="text-gray-700 leading-relaxed">{faq.a}</p></div></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Empresas que Confiam na Codinhoto</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
              {[parceiro1Img, parceiro2Img, parceiro3Img].map((logo, index) => (
                <motion.img key={index} src={logo} alt={`Parceiro ${index + 1}`} className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.7, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.15 }} />
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossa Galeria de Trabalhos</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Confira alguns dos nossos trabalhos e a qualidade que oferecemos em cada detalhe.</p></div>
            <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={30} slidesPerView={2} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} loop={true} breakpoints={{ 768: { slidesPerView: 4, spaceBetween: 40, }, }} className="mySwiper">
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox(index)}>
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">O que nossos clientes dizem</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">A satisfação de nossos clientes é nossa maior prioridade</p></div>
                <div className="flex flex-wrap justify-center gap-8">
                  <AnimatedCard className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80 flex flex-col justify-between" delay={0.1}><div className="text-yellow-500 text-xl mb-4 tracking-wider">★★★★★</div><p className="text-gray-700 leading-relaxed mb-6 flex-grow">"Encomendamos camisetas personalizadas para nosso evento corporativo e ficamos confortáveis com a qualidade. As cores vibrantes e as estampas perfeitas. Todos os participantes adoraram!"</p><div className="border-t border-gray-200 pt-4"><p className="font-semibold text-gray-800 mb-1">Ricardo M.</p><p className="text-sm text-gray-600">Diretor de Marketing</p></div></AnimatedCard>
                  <AnimatedCard className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80 flex flex-col justify-between" delay={0.2}><div className="text-yellow-500 text-xl mb-4 tracking-wider">★★★★★</div><p className="text-gray-700 leading-relaxed mb-6 flex-grow">"A qualidade das ecobags personalizadas superou nossas expectativas. Mesmo após várias lavagens, as cores continuam vibrantes e o tecido mantém o formato. Recomendo fortemente!"</p><div className="border-t border-gray-200 pt-4"><p className="font-semibold text-gray-800 mb-1">Fernanda L.</p><p className="text-sm text-gray-600">Gerente de RH</p></div></AnimatedCard>
                  <AnimatedCard className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80 flex flex-col justify-between" delay={0.3}><div className="text-yellow-500 text-xl mb-4 tracking-wider">★★★★★</div><p className="text-gray-700 leading-relaxed mb-6 flex-grow">"Já estamos na terceira remessa de uniformes com a Estamparia Codinhoto. As camisetas são confortáveis, as estampas não desbotam mesmo após muitas lavagens, e nossa equipe adora usá-las. Recomendo sem hesitar!"</p><div className="border-t border-gray-200 pt-4"><p className="font-semibold text-gray-800 mb-1">Paulo S.</p><p className="text-sm text-gray-600">Proprietário da Empresa</p></div></AnimatedCard>
                </div>
            </div>
        </AnimatedSection>
        
        <AnimatedSection className="py-20 bg-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Personalizar?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">Entre em contato conosco hoje mesmo e descubra como podemos transformar suas ideias em realidade com qualidade e profissionalismo.</p>
            <motion.button onClick={handleWhatsAppClick} className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-4 px-12 rounded-lg transition duration-300 shadow-lg text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Solicitar Orçamento Agora</motion.button>
          </div>
        </AnimatedSection>
      </div>
      
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />
    </>
  );
};

export default Home;
