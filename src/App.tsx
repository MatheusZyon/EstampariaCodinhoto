import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Componentes
import Navbar from './components/ui/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PopupAtendimento from './components/PopupAtendimento'
import ScrollToTop from './components/ScrollToTop' // 1. IMPORTAÇÃO CORRETA

// Páginas
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Produtos from './components/pages/Produtos'
import ProdutoDetalhe from './components/pages/ProdutoDetalhe'
import Servicos from './components/pages/Servicos'
import Contato from './components/pages/Contato'
import Orcamentos from './components/pages/Orcamentos'

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Exibir popup após 30 segundos
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <ScrollToTop /> {/* 2. USO DO COMPONENTE */}
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/orcamentos" element={<Orcamentos />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        {showPopup && <PopupAtendimento onClose={closePopup} />}
      </div>
    </Router>
  )
}

export default App