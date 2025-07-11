import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nós</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubra a trajetória da Estamparia Codinhoto e entenda nosso compromisso com a excelência e a qualidade em cada detalhe.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossa História</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-red-600">25 Anos de Excelência</h3>
              <p className="text-gray-700 mb-4">
              A Estamparia Codinhoto nasceu no ano 2000, movido pelo desejo transformar ideias em estampas em produtos unicos e personalizados. O que começou como um pequeno negócio familiar, rapidamente conquistou no mercado devido à agilidade e excelência. 
              </p>
              <p className="text-gray-700 mb-4">
              Nossa jornada foi marcada por constante inovação e aprimoramento técnico, sempre buscando as melhores soluções para nossos clientes. Ao longo desses 25 anos, investimos em maquinário, treinamento e processos que garantem a excelência em cada produto que entregamos.
              </p>
              <p className="text-gray-700">
              Hoje, a Estamparia Codinhoto é reconhecida como referência em qualidade e agilidade. Atendendo empresas de diversos setores e entregando não apenas produtos, mas verdadeiras experiências em personalização.

              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Nossa Missão</h3>
              <p className="text-gray-700 mb-4">
              Nossa missão é oferecer soluções criativas em silk-screen, garantindo agilidade, transparência e excelência em cada projeto. Trabalhamos para ser parceiros estratégicos de nossos clientes, entendendo suas necessidades específicas e entregando resultados que vão além das expectativas. Investimos continuamente em processos e capacitação que asseguram excelência e satisfação total, transformando cada pedido conosco em uma experiência. 
              </p>
              
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Nossa Visão</h3>
              <p className="text-gray-700 mb-4">
              Almejamos alcançar uma posição de destaque no mercado nacional, sendo vistos como sinônimo de confiança, qualidade e tradição em estamparia. Nossa meta é expandir nossos horizontes, fortalecendo nossos relacionamentos e criando soluções que encantem nossos clientes. 
Para a Estamparia Codinhoto, cada projeto é uma oportunidade de mostrar nosso potencial e reafirmar nosso compromisso com a excelência e a transparencia.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Nossos Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Qualidade:</span> Buscamos a excelência em cada detalhe do nosso trabalho, garantindo que cada produto reflita nosso compromisso com a perfeição.</li>
                <li><span className="font-semibold">Agilidade:</span> Valorizamos a rapidez sem abrir mão da qualidade, entendendo que o tempo dos nossos clientes é precioso.</li>
                <li><span className="font-semibold">Comprometimento:</span> Somos parceiros estratégicos dos nossos clientes, dedicando-nos a entregar soluções que superam as expectativas.</li>
                <li><span className="font-semibold">Respeito:</span> Priorizamos relações transparentes e respeitosas, tanto com nossa equipe quanto com nossos clientes, criando um ambiente de confiança e colaboração.
</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Diferenciais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1: Agilidade */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Agilidade sem Perder a Qualidade</h3>
              <p className="text-gray-600">
                Sabemos que prazos apertados fazem parte do dia a dia dos nossos clientes. Por isso, unimos processos eficientes e uma equipe comprometida para entregar produtos com agilidade, sem abrir mão do cuidado e da excelência em cada detalhe.
              </p>
            </div>

            {/* Item 2: Parcerias */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Parcerias de Verdade</h3>
              <p className="text-gray-600">
                Mais do que prestar um serviço, buscamos criar relacionamentos sólidos e transparentes. Escutamos cada cliente, entendendo suas necessidades e transformando ideias em estampas únicas que contam histórias.
              </p>
            </div>

            {/* Item 3: Flexibilidade */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexibilidade para Atender Diferentes Setores</h3>
              <p className="text-gray-600">
                Atuamos em diversos segmentos do mercado, adaptando nossos processos para atender desde pequenas empresas até grandes marcas, sempre com a mesma dedicação e padrão de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa com soluções personalizadas de alta qualidade.
          </p>
          <Link 
            to="/contato" 
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
