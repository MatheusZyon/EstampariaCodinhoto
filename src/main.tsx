import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Estamparia Codinhoto - 15 anos de experiência em personalização</title>
        <meta name="description" content="Estamparia Codinhoto: 15 anos de experiência em personalização de brindes (serigrafia, sublimação, DTF) e venda de produtos personalizados sob demanda." />
        <meta name="keywords" content="Estamparia Codinhoto, personalização de brindes, camisetas personalizadas, serigrafia, sublimação, DTF, estamparia no Brasil" />
        <meta name="author" content="Estamparia Codinhoto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Estamparia Codinhoto - Personalização de Alta Qualidade" />
        <meta property="og:description" content="Especialistas em personalização de brindes e produtos sob demanda com 15 anos de mercado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estamparia-codinhoto.manus.im" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
