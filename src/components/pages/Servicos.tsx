import { useState, useEffect, useRef } from 'react';
// ALTERAÇÃO 1: Adicionado o "type Variants" para especificar o tipo da animação
import { motion, type Variants } from 'framer-motion'; 

// IMPORTAÇÕES PARA O CARROSSEL E LIGHTBOX
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


// Imagens
import serigrafiaImg from '../../assets/serigrafia.png';
import dtfImg from '../../assets/dtf.png';

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


const Servicos = () => {
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
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de personalização da Estamparia Codinhoto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // ALTERAÇÃO 2: Adicionado o tipo ": Variants"
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ALTERAÇÃO 3: Adicionado o tipo ": Variants"
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <>
      <div className="pt-20">
        {/* Banner */}
        <motion.section 
          className="bg-gradient-to-r from-red-700 to-red-900 py-20"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Prestamos o serviço de personalização para empresas que buscam excelência e valor agregado em seus produtos.
            </p>
          </div>
        </motion.section>

        {/* Introdução */}
        <motion.section
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Serviço de personalização</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Atuamos a mais de duas décadas oferecendo soluções ágeis e confiáveis para empresas de confecção e brindes promocionais que se entregam com excelencia a cada projeto.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Mais do que uma Estamparia, somos um parceiro estratégico para empresas que buscam comprometimento com prazo e uma comunicacao direta e transparente. Acreditamos na união entre a solidez da serigrafia com a modernização de processos como o DTF.
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg mt-8"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" />
                </svg>
                Fale com um Especialista
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Técnicas de Personalização */}
        <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Técnicas de Personalização</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-shadow hover:shadow-xl" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <img src={serigrafiaImg} alt="Serigrafia" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Serigrafia</h3>
                  <p className="text-gray-600 mb-4">Técnica de impressão versátil e durável, ideal para grandes quantidades e cores sólidas. Perfeita para uniformes, sacolas, mochilas e diversos tipos de tecido.</p>
                  <div className="mt-6"><h4 className="font-bold text-lg mb-2">Vantagens:</h4><ul className="list-disc pl-5 text-gray-600 space-y-2"><li>Excelente durabilidade e resistência</li><li>Ideal para grandes quantidades</li><li>Perfeita para designs com cores sólidas</li><li>Custo-benefício para grandes tiragens</li><li>Aplicável em diversos tipos de materiais</li></ul></div>
                  <div className="mt-6"><h4 className="font-bold text-lg mb-2">Aplicações:</h4><p className="text-gray-600">Camisetas, uniformes, ecobags, mochilas, bonés, sacolas e diversos tipos de tecidos e materiais.</p></div>
                </div>
              </motion.div>
              <motion.div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-shadow hover:shadow-xl" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <img src={dtfImg} alt="DTF (Direct to Film)" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">DTF (Direct to Film)</h3>
                  <p className="text-gray-600 mb-4">Tecnologia moderna que permite estampas de alta definição em diversos tipos de tecido, combinando qualidade e versatilidade.</p>
                  <div className="mt-6"><h4 className="font-bold text-lg mb-2">Vantagens:</h4><ul className="list-disc pl-5 text-gray-600 space-y-2"><li>Compatível com praticamente qualquer tipo de tecido</li><li>Alta definição e cores vibrantes</li><li>Excelente durabilidade e resistência à lavagem</li><li>Ideal para pequenas e médias tiragens</li><li>Toque suave e confortável</li></ul></div>
                  <div className="mt-6"><h4 className="font-bold text-lg mb-2">Aplicações:</h4><p className="text-gray-600">Camisetas (algodão, poliéster ou mistas), jaquetas, bonés, ecobags, uniformes esportivos e corporativos.</p></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Seção de Galeria */}
        <motion.section className="py-20 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Galeria de Trabalhos</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Veja na prática a qualidade e versatilidade dos nossos serviços.</p>
                </div>
                <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={30} slidesPerView={2} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} loop={true} breakpoints={{ 768: { slidesPerView: 4, spaceBetween: 40 } }} className="mySwiper">
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox(index)}>
                                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>

        {/* Processo de Trabalho */}
        <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Nosso Processo de Trabalho</h2>
              <div className="space-y-12">
                {[ { step: 1, title: "Analise técnica", description: "Nossa equipe analisa o material e a arte a ser aplicada, definindo a melhor técnica de personalização para garantir o resultado ideal e entregar a produção no prazo estabelecido." }, { step: 2, title: "Produção", description: "Onde a mágica acontece! Realizamos o processo de personalização utilizando berços térmicos e escala pantone para garantir alto rendimento e fidelização de cores." }, { step: 3, title: "Controle de qualidade", description: "Cada peça passa por um controle de qualidade, garantindo que todas estejam de acordo com os padrões estabelecidos." }, { step: 4, title: "Entrega", description: "Embalamos cuidadosamente as peças personalizadas e entregamos dentro do prazo combinado, prontas para serem repassadas ao cliente final." } ].map((item, index) => (
                  <motion.div key={index} className="flex flex-col md:flex-row items-center" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}>
                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0"><motion.div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg" whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>{item.step}</motion.div></div>
                    <div className="md:w-3/4"><h3 className="text-xl font-bold mb-3">{item.title}</h3><p className="text-gray-600">{item.description}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          className="py-16 bg-red-600 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Terceirize sua produção com quem entende do assunto</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Entre em contato agora mesmo e descubra como podemos ser o parceiro ideal para sua empresa de brindes.</p>
            <motion.button 
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M12 2C6.48 2 2 6.48 2 12C2 13.96 2.54 15.75 3.44 17.29L2.05 21.29C1.99 21.48 2.05 21.69 2.21 21.83C2.36 21.97 2.58 22.01 2.77 21.93L6.93 20.48C8.4 21.3 10.13 21.79 12 21.79C17.52 21.79 22 17.31 22 11.79C22 6.27 17.52 2 12 2ZM17.03 15.37C16.86 15.83 16.03 16.25 15.63 16.32C15.28 16.37 14.85 16.4 14.37 16.27C14.06 16.19 13.66 16.07 13.14 15.87C10.88 14.95 9.44 12.75 9.34 12.63C9.25 12.5 8.38 11.35 8.38 10.14C8.38 8.93 9 8.35 9.21 8.14C9.42 7.93 9.67 7.88 9.83 7.88C9.98 7.88 10.14 7.88 10.27 7.89C10.41 7.9 10.59 7.84 10.77 8.25C10.95 8.67 11.38 9.88 11.43 9.97C11.47 10.07 11.5 10.18 11.45 10.31C11.39 10.44 11.36 10.52 11.26 10.64C11.16 10.76 11.05 10.91 10.96 11C10.86 11.1 10.75 11.21 10.87 11.41C10.99 11.61 11.38 12.26 11.97 12.79C12.71 13.47 13.33 13.69 13.55 13.79C13.76 13.89 13.88 13.88 14 13.75C14.12 13.63 14.5 13.19 14.64 12.97C14.78 12.76 14.92 12.79 15.11 12.86C15.3 12.93 16.51 13.53 16.72 13.63C16.92 13.74 17.06 13.79 17.11 13.88C17.15 13.97 17.15 14.38 17.03 15.37Z" /></svg>
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.section>
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

export default Servicos;