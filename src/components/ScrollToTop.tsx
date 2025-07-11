import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrai o `pathname` do objeto de localização. O pathname é a parte da URL após o domínio (ex: "/sobre", "/produtos").
  const { pathname } = useLocation();

  // Este efeito será executado toda vez que o `pathname` mudar (ou seja, toda vez que a rota mudar).
  useEffect(() => {
    // O comando window.scrollTo(0, 0) diz ao navegador: "role a janela para o topo absoluto".
    window.scrollTo(0, 0);
  }, [pathname]); // O array de dependências garante que o efeito só rode na mudança de rota.

  // Este componente não renderiza nada visível na tela, ele apenas executa uma lógica.
  return null;
};

export default ScrollToTop;